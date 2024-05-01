export type StudentType = {
    id: number
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologyType[]
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type TechnologyType = {
    id: number
    title: string
}
const student = {
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