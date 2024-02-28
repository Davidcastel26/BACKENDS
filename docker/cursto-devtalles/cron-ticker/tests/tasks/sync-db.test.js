const { syncDB } = require("../../tasks/sync-db")

describe('Pruebas en Sync-DB',() => {

    test('debe de ejecutar el proceso dos veces', () => {
        syncDB()
        const times = syncDB()
        // console.log('se llamo ', times )
        expect( times ).toBe( 2 )
    })

})