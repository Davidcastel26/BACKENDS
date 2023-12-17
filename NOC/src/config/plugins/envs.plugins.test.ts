import { envs } from "./envs.plugins"


describe('envs.plugins.ts', () => {


    test('should return env options', () => {

        expect( envs ).toEqual({
            PORT:3002,
            MAILER_EMAIL:'david.castellanos@popoyan.com.gt',
            MAILER_SECRET_KEY:'yvvnzarfpastlsml',
            MAILER_SERVICE:'gmail',
            PROD:false,
            DATABASE_URL:"postgresql://davidcastellanos:124125126@localhost:5432/nocdb?schema=public"
        })

    })

    test('should return error if not found env', async() => {

        jest.resetModules();
        process.env.PORT = 'ABC';

        try {
            
            await import('./envs.plugins');

            expect(true).toBe(false);

        } catch (error) {
            // console.log(error)
            expect(`${error}`).toContain('"PORT" should be a valid integer')
        }

    })

})
