import { stdin, stdout } from "node:process";
import { Beverage } from "./beverageAbstract/Beverage";
import { BeverageDecorator, Milk, Mocha, Soy, Whip } from "./drinks";
import { createInterface } from "node:readline/promises";
import {
  BeverageType,
  LargeVolumeFactory,
  MediumVolumeFactory,
  SmallVolumeFactory,
  VolumeFactory,
} from "./fabrics/volumeBeverageFactory";
import { getOrderTemplate } from "./getOrderTemplate";
import { BeverageWithIngridients } from "./fabrics/begeragesByFabric";

const volumeFactoryMap: Record<string, new () => VolumeFactory> = {
  "1": SmallVolumeFactory,
  "2": MediumVolumeFactory,
  "3": LargeVolumeFactory,
};

const condimentMap: Record<
  string,
  new (beverage: BeverageWithIngridients) => BeverageDecorator
> = {
  "1": Milk,
  "2": Mocha,
  "3": Soy,
  "4": Whip,
};

const main = async () => {
  const reader = createInterface({
    input: stdin,
    output: stdout,
  });

  const beverageType = (await reader.question(
    "Выберите напиток(tea, cocktail, fresh): "
  )) as BeverageType;

  console.log(`
    1) small
    2) medium
    3) large
  `);

  const volumeCode = await reader.question("Номер: ");

  const volumeFactory = new volumeFactoryMap[volumeCode]();

  let beverage = volumeFactory.createBeverage(beverageType);

  const condiments = [
    ...Object.keys(condimentMap).map(
      (val) => ` ${val}): ${condimentMap[val].prototype.constructor.name}`
    ),
  ];

  console.log("Добавки: \n", condiments.join("\n"));

  const condimentsInput = await reader.question(
    "Введите номера добавок через запятую или оставьте пустую строку: "
  );

  const condimentNumbers = condimentsInput
    .replaceAll(" ", "")
    .split(",")
    .filter(Boolean);

  const isValidCondimentNumbers =
    condimentNumbers.every(
      (condimentNumber) => condimentMap[condimentNumber] !== undefined
    ) || condimentsInput === "";

  if (!isValidCondimentNumbers) {
    throw new Error("Invalid condiment numbers");
  }

  const condimentDecorators = condimentNumbers.map(
    (code) => condimentMap[code]
  );

  for (const decorator of condimentDecorators) {
    beverage = new decorator(beverage);
  }

  console.log(`${beverage.getDescription()}: ${beverage.getCost()}$`);

  const template = getOrderTemplate(beverage, reader);

  await template.handle();

  reader.close();
};

main();
