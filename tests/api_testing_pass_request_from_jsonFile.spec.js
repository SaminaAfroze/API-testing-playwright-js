// import {test,request, expect}from '@playwright/test';
// import Apijson from "../node_modules/test-data/postdata.json"
// import ApijsonPut from "../node_modules/test-data/putdata.json"

// test("sending request body from the json file-post method", async({request})=>{

//     const resPost=await request.post("https://restful-booker.herokuapp.com/booking",{data:Apijson
    

//     })

//     const jsonRes= await resPost.json()

//     expect(jsonRes.booking).toMatchObject(Apijson)
// })

// test("sending request body from the json file-put method", async({request})=>{
    
//     const resPut= await request.put("https://restful-booker.herokuapp.com/booking/1",{data:ApijsonPut})

//     const jsonResPut= await resPut.json()
//     expect (jsonResPut.additionalneeds).toEqual("Breakfast")
// })