import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}
export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}
export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}
export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}
export const repairHouse = (house: HouseType) => {
    return house.repaired = true;
}
export const toFireStaffCount = (building: GovernmentBuildingType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}
export const toHireStaffCount = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export const createMessage = (props: CityType) => {
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`;
}