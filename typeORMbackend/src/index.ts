import { app } from './models/server'
import { AppDataSource } from './configs/datasource'

app.listen()

AppDataSource.initialize()
    .then( () => console.log('-- Connection succefull --'))
    .catch( (error) => console.error(error))