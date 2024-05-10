type UserType = {
    [key: string]: { id: string, name: string }
};
let users: UserType;
beforeEach( () => {
    users = {
        '1': {id: '10', name: 'Cristian'},
        '2': {id: '20', name: 'david'},
        '3': {id: '30', name: 'joe'},
        '4': {id: '40', name: 'tom'},
        '5': {id: '50', name: 'qwe'},
        '6': {id: '60', name: 'op'},
        '7': {id: '70', name: 'name'},
        '8': {id: '80', name: 'guy'},
    }
})

test('should update corresponding users', () => {
    users['1'].name = 'Ekaterina'
    expect(users['1']).toEqual({id: '10', name: 'Ekaterina'})
})
test('should delete corresponding users', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})