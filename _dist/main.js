"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_process_1 = require("node:process");
const drinks_1 = require("./drinks");
const promises_1 = require("node:readline/promises");
const volumeBeverageFactory_1 = require("./fabrics/volumeBeverageFactory");
const getOrderTemplate_1 = require("./getOrderTemplate");
const volumeFactoryMap = {
    "1": volumeBeverageFactory_1.SmallVolumeFactory,
    "2": volumeBeverageFactory_1.MediumVolumeFactory,
    "3": volumeBeverageFactory_1.LargeVolumeFactory,
};
const condimentMap = {
    "1": drinks_1.Milk,
    "2": drinks_1.Mocha,
    "3": drinks_1.Soy,
    "4": drinks_1.Whip,
};
const main = async () => {
    const reader = (0, promises_1.createInterface)({
        input: node_process_1.stdin,
        output: node_process_1.stdout,
    });
    const beverageType = (await reader.question("Выберите напиток(tea, cocktail, fresh): "));
    console.log(`
    1) small
    2) medium
    3) large
  `);
    const volumeCode = await reader.question("Номер: ");
    const volumeFactory = new volumeFactoryMap[volumeCode]();
    let beverage = volumeFactory.createBeverage(beverageType);
    const condiments = [
        ...Object.keys(condimentMap).map((val) => ` ${val}): ${condimentMap[val].prototype.constructor.name}`),
    ];
    console.log("Добавки: \n", condiments.join("\n"));
    const condimentsInput = await reader.question("Введите номера добавок через запятую или оставьте пустую строку: ");
    const condimentNumbers = condimentsInput
        .replaceAll(" ", "")
        .split(",")
        .filter(Boolean);
    const isValidCondimentNumbers = condimentNumbers.every((condimentNumber) => condimentMap[condimentNumber] !== undefined) || condimentsInput === "";
    if (!isValidCondimentNumbers) {
        throw new Error("Invalid condiment numbers");
    }
    const condimentDecorators = condimentNumbers.map((code) => condimentMap[code]);
    for (const decorator of condimentDecorators) {
        beverage = new decorator(beverage);
    }
    console.log(`${beverage.getDescription()}: ${beverage.getCost()}$`);
    const template = (0, getOrderTemplate_1.getOrderTemplate)(beverage, reader);
    await template.handle();
    reader.close();
};
main();
