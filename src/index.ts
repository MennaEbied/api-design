import * as dotenv from 'dotenv'
import app from './server'
import config from './config'
dotenv.config()
app.listen(config.port, () => {
    console.log(`hello on localhost:${config.port}`)
})