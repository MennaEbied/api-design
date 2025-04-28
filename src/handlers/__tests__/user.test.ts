import * as user from "../user"
describe('user handler', () => {
    it('should create a new user', async ()=>{
        const req ={bode:{username:"hello",password:"hi"}} 
        const res = {json({token}){
            expect(token).toBeTruthy()
        }}
         await user.createNewUser(res,req,() => {

        })
    })
})