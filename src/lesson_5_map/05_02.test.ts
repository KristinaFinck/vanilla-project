

import {getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";
import {CityType} from "../02/02_02";
import {createMessage} from "../lesson_5_map/05_02";
let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
            {buildedAt: 2000, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
            {buildedAt: 2020, repaired: false, address: {number: 100, street: {title: "Winter street"}}}
        ],
        governmentBuildings: [
            {type: "HOSPITAL", budget: 500000, staffCount: 200, address: {street: {title: 'Central street'}}},
            {type: "FIRE-STATION", budget: 200000, staffCount: 100, address: {street: {title: 'South street'}}}
        ],
        citizensNumber: 100000};
});
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central street");
    expect(streetsNames[1]).toBe("South street"); })
//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test.skip('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);
    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Winter street"); })

test('create greeting message for streets', () => {
    let messages = createMessage(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street")
    expect(messages[1]).toBe("Hello guys from Happy street")
    expect(messages[2]).toBe("Hello guys from Winter street")
})