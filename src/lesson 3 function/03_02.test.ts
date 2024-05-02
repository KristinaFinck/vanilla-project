import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaffCount, toHireStaffCount} from "./03";

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
        citizensNumber: 100000
    }})

    test('Budget should be changed for HOSPITAL', () => {
        addMoneyToBudget(city.governmentBuildings[0], 100000)
        expect(city.governmentBuildings[0].budget).toBe(600000)
    })

    test('Budget should be changed for FIRE-STATION', () => {
        addMoneyToBudget(city.governmentBuildings[1], 100000)
        expect(city.governmentBuildings[1].budget).toBe(300000)
    })

    test('House should be repaired', () => {
        repairHouse(city.houses[1])
        expect(city.houses[1].repaired).toBeTruthy()
    })

    test('staff should be increased', () => {
        toFireStaffCount(city.governmentBuildings[0], 20)
        toFireStaffCount(city.governmentBuildings[1], 10)
        expect(city.governmentBuildings[0].staffCount).toBe(180)
        expect(city.governmentBuildings[1].staffCount).toBe(90)
    })

    test('staff should be hire', () => {
        toHireStaffCount(city.governmentBuildings[1], 20)
        expect(city.governmentBuildings[1].staffCount).toBe(120)
    })

test('Greetent message should be correct', () => {
    const message = createMessage(city);
    expect(message).toBe('Hello New York citizens. I want you be happy. All 100000 men')
})