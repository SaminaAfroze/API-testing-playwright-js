import {test,expect,request} from '@playwright/test'
import { text } from 'stream/consumers'

let baseforAll;
//if we are using the same baseURL for all the test blocks we use this before all shown below
//start block 1
test.beforeAll("API testing using same baseURL for all the test blocks",async()=>
{
   baseforAll= await request.newContext(
        {
            baseURL:"https://reqres.in"
        }
    )
})

test ("a new test using the baseforAll",async()=>{

    const req3= await baseforAll.get("api/users?page=2")
    console.log(await req3.json());
})
//end of block1
test ('api response', async({request})=>{
    const response=await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json());
    expect(response.status()).toBe(200)

    const containText =await response.text();
    expect(containText).toContain('Funke')
})

//when I want to use the same baseURL in the same test block
//start block 2
test("API testing using the same BaseURL",async()=>
{
    const baseContext= await request.newContext(//passed the new context with request
        {
            baseURL:"https://reqres.in"
        })
    const res1=await baseContext.get("api/users?page=2")//And the newcontext was kept in a variable, added that variable before calling get
       
    console.log(await res1.json());
    expect(res1.status()).toBe(200)

}
)
//end block 2
//for the whole project if using the same baseurl, we will write it in playwright config.ts/js file

