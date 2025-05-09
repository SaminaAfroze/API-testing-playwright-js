import {test,expect,request} from '@playwright/test'
import { text } from 'stream/consumers'

let baseforAll;
//if we are using the same baseURL for all the test blocks we use this before all shown below
//start block 1
test.beforeAll("API testing using same baseURL for all the test blocks",async()=>
{
   baseforAll= await request.newContext(
        {
            baseURL:"https://restful-booker.herokuapp.com",
            extraHTTPHeaders: {
                Accept: "application/json"
            }

        }
    )
})

test ("a new test using the baseforAll",async()=>{

    const req3= await baseforAll.get("booking")
    console.log(await req3.json())
})
//end of block1
test ('api response', async({request})=>{
    const response=await request.get('https://restful-booker.herokuapp.com/booking', {
        headers: 
        {Accept: "application/json" //filed name is the key and value is the object,multiple headers can be provided.if each one of them have separate headers

        }
    })
    console.log(await response.json());
    expect(response.status()).toBe(200)

    const containText =await response.text();
    //expect(containText).toContain('Funke')
})

//when I want to use the same baseURL in the same test block
//start block 2
test("API testing using the same BaseURL",async()=>
{
    const baseContext= await request.newContext(//passed the new context with request
        {
            baseURL:"https://restful-booker.herokuapp.com",
            extraHTTPHeaders:{
                Accept: "application/json"
            }
        })
    const res1=await baseContext.get("booking")//And the newcontext was kept in a variable, added that variable before calling get
       
    console.log(await res1.json());
    expect(res1.status()).toBe(200)

}
)
//end block 2

//for the whole project if using the same baseurl, we will write it in playwright config.ts/js file. check config.js for that and define config

//start block 3
test("api testing using baseUrl from the config.js file", async({request})=>{

    const res5= await request.get("booking");
    console.log(await res5.json());

})

//Get method with path parameter

test("testing get method with the path parameter",async({request})=>{
    const pathRes= await request.get("booking/609")

    console.log(await pathRes.json());

})

//Get method using query parameter in 2 ways:
//1:

test("api testing using query parameter",async({request})=>{
    const queryRes =await request.get("/booking",{
        params:{
            firstname:"John",
            lastname:"Smith"
        }
    })

console.log (await queryRes.json())
})

//2:
test("api testing using query parameter2",async({request})=>{

    const queryRes =await request.get("/booking?firstname=John&lastname=Smith")

console.log (await queryRes.json())
})