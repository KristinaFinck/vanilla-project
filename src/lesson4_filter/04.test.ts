import {demolishHousesOnTheStreet} from "./04";
import {CityType} from "../02/02_02";

let city: CityType;
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {id: 1, buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
            {id: 2, buildedAt: 2000, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
            {id: 3, buildedAt: 2020, repaired: false, address: {number: 100, street: {title: "Winter street"}}}
        ],
        governmentBuildings: [
            {type: "HOSPITAL", budget: 500000, staffCount: 200, address: {street: {title: 'Central street'}}},
            {type: "FIRE-STATION", budget: 200000, staffCount: 100, address: {street: {title: 'South street'}}}
        ],
        citizensNumber: 100000
    }
})
//01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
//02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})