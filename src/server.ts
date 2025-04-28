import express from 'express'
import router from './router'
import morgan from 'morgan'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extented:true}))

app.get('/', (req, res, next) => {
   res.json({message:'hello'})
})

app.use('/api', protect, router)

app.post('/user', createNewUser)
app.post('/signin', signin)

app.use((err, req, res, next) => {
    console.log(err)
    res.json({message: `had an error: ${err.message}`})
  })

export default app