"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeVolumeFactory = exports.MediumVolumeFactory = exports.SmallVolumeFactory = exports.VolumeFactory = exports.Volume = void 0;
const begeragesByFabric_1 = require("./begeragesByFabric");
class Volume {
    constructor(volume) {
        this.volume = volume;
    }
}
exports.Volume = Volume;
class VolumeFactory {
}
exports.VolumeFactory = VolumeFactory;
class SmallVolumeFactory extends VolumeFactory {
    createBeverage(type) {
        if (type === "tea") {
            return new begeragesByFabric_1.Tea(0.4);
        }
        else if (type === "cocktail") {
            return new begeragesByFabric_1.NonAlcoholicCocktail(0.4);
        }
        return new begeragesByFabric_1.FruitFresh(0.4);
    }
}
exports.SmallVolumeFactory = SmallVolumeFactory;
class MediumVolumeFactory extends VolumeFactory {
    createBeverage(type) {
        if (type === "tea") {
            return new begeragesByFabric_1.Tea(0.6);
        }
        else if (type === "cocktail") {
            return new begeragesByFabric_1.NonAlcoholicCocktail(0.6);
        }
        return new begeragesByFabric_1.FruitFresh(0.6);
    }
}
exports.MediumVolumeFactory = MediumVolumeFactory;
class LargeVolumeFactory extends VolumeFactory {
    createBeverage(type) {
        if (type === "tea") {
            return new begeragesByFabric_1.Tea(0.8);
        }
        else if (type === "cocktail") {
            return new begeragesByFabric_1.NonAlcoholicCocktail(0.8);
        }
        return new begeragesByFabric_1.FruitFresh(0.8);
    }
}
exports.LargeVolumeFactory = LargeVolumeFactory;
