import {expect, test} from '@playwright/test'
import { request } from 'https'


//Generate the token
let tokenValue


test.beforeAll("Basic auth",async({request})=>
{
    const ResToken = await request.post("https://restful-booker.herokuapp.com/auth",{data:
        {
    "username" : "admin",
    "password" : "password123"
        }
    })

    tokenValue= (await ResToken.json()).token
}
)
 test("authentication of put call using basic auth", async({request})=>
{
    const resPut = await request.put("https://restful-booker.herokuapp.com/booking/1",{headers:
        {
            Cookie:"token="+tokenValue
        },
        data:{
    "firstname" : "James",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    })
    expect(resPut.status()).toBe(200)
})

test("Authentication in api", async({request})=>{
    const authRes = await request.put("https://restful-booker.herokuapp.com/booking/1",{headers:{
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },data:{
        
    "firstname" : "James",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"

    }})
    expect(authRes.status()).toBe(200)
}) //using API key



