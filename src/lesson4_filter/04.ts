import {CityType, HouseType} from "../02/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(houses => houses.address.street.title !== 'Happy street')
}