import { CronService } from "./cronTask"

describe('CronService', () => {

    const mockTick = jest.fn()

    test('should create a job', (done) => {

        const job = CronService.createJob('* * * * * *', mockTick)

        setTimeout(( ) => {

            expect(mockTick).toHaveBeenCalledWith(2)
            job.stop();
            done()

        }, 2000)

    })


})