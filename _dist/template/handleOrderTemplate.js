"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleOrderTemplate = void 0;
class HandleOrderTemplate {
    constructor(beverage, reader) {
        this.beverage = beverage;
        this.reader = reader;
    }
    async handle() {
        console.log(`Рецерт для приготовления напитка: ${this.beverage.getDescription()}`);
        if (this.shouldWaterHeating()) {
            console.log("Вода поставлена для нагревания");
        }
        else {
            console.log("Для этого напитка не требуется нагрев воды");
        }
        console.log("Добавлены следующие ингридиенты:");
        const ingridients = this.beverage.getIngridients();
        for (let i = 0; i < ingridients.length; i++) {
            const ingridient = ingridients[i];
            console.log(`${i}) ${ingridient.getName()}`);
        }
        console.log(`Была использована ${this.getDishName()} для напитка`);
        console.log("Напиток выдан");
        const paymentMethods = this.getPaymentMethods();
        console.log("Доступны методы для оплаты:");
        for (let i = 0; i < paymentMethods.length; i++) {
            console.log(`${i}) ${paymentMethods[i]}`);
        }
        const paymentCode = await this.reader.question("Номер кода оплаты: ");
        const paymentMethod = paymentMethods[Number(paymentCode)];
        switch (paymentMethod) {
            case "card": {
                return console.log("Оплата по карте проведена успешно!");
            }
            case "cash": {
                return console.log("Оплата наличными проведена успешно!");
            }
            case "qr": {
                return console.log("Оплата по QR коду проведена успешно!");
            }
        }
    }
}
exports.HandleOrderTemplate = HandleOrderTemplate;
