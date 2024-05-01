import {CityType} from "./02_02";
import {StudentType} from './02'
let city: CityType;
let student: StudentType;

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
    }
 student = {
     id: 1,
     age: 32,
     isActive: false,
     address: {
         streetTitle: "Surganova 2",
         city: {
             title: "Minsk",
             countryTitle: "Belarus"
         }
     },
     technologies: [
         {
             id: 1,
             title: "HTML"
         },
         {
             id: 2,
             title: "CSS"
         },
         {
             id: 3,
             title: "React"
         }
     ]
 }
})
//01. создайте тип CityType
//02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');

    expect(city.houses[1].buildedAt).toBe(2000);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Happy street');
    expect(city.houses.length).toBe(3);

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(100);
    expect(city.houses[2].address.street.title).toBe('Winter street');
})
test('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(city.governmentBuildings[0].budget).toBe(500000);
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe("Central street")

    expect(city.governmentBuildings[1].type).toBe("FIRE-STATION");
    expect(city.governmentBuildings[1].budget).toBe(200000);
    expect(city.governmentBuildings[1].staffCount).toBe(100)
    expect(city.governmentBuildings[1].address.street.title).toBe("South street")

})

test("student", () => {
    expect(student.age).toBe(32);
    expect(student.isActive).toBe(false);
    expect(student.address.streetTitle).toBe("Surganova 2");
    expect(student.address.city.title).toBe("Minsk");
    expect(student.address.city.countryTitle).toBe("Belarus");
    expect(student.technologies[0].title).toBe("HTML");
    expect(student.technologies[1].title).toBe("CSS");
    expect(student.technologies[2].title).toBe("React");

})