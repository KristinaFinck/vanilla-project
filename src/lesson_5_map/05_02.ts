import {GovernmentBuildingType, HouseType} from "../02/02_02";
export const getStreetsTitlesOfGovernmentBuildings =
    (buidings: Array<GovernmentBuildingType>) => {
    return buidings.map(buidings => buidings.address.street.title)
    }

    export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(house => house.address.street.title)
    }

    export const createMessage = (h: Array<HouseType>) => {
    return h.map(h => `Hello guys from ${h.address.street.title}`)
    }