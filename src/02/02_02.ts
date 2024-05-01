export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: GovernmentBuildingType[]
    citizensNumber: number
}
export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
export type HouseType = {
    buildedAt: number
    repaired: number
    address: AddressType
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type StreetType = {
    title: string
}