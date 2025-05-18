import {test, expect}from '@playwright/test';
import Apijson1 from "../node_modules/testdata/apidata.json";

test("sending request body from the json file-post method", async({request})=>{

    const resPost1=await request.post("https://restful-booker.herokuapp.com/booking",{data:Apijson1.postdata

    })

    const jsonRes= await resPost1.json()

    expect(jsonRes.booking).toMatchObject(Apijson1.postdata)

})

test("sending request body from the json file-put method", async({request})=>{
    
    const resPut1= await request.put("https://restful-booker.herokuapp.com/booking/1",{data:Apijson1.putdata})
     const jsonResPut = await resPut1.json();

    expect(jsonResPut.booking.additionalneeds).toEqual(Apijson1.putdata.additionalneeds);

})