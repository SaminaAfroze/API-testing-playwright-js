import{test,request, expect} from '@playwright/test'

test("Api testing delete",async({request})=>
{
    const resdelete=await request.delete("https://restful-booker.herokuapp.com/booking/4")
    expect (resdelete.status()).toBe(201);

    const theTextOutofTheResponse= await resdelete.text()

    expect (theTextOutofTheResponse).toEqual("Created")

    const resGet=await request.get("https://restful-booker.herokuapp.com/booking/4")
    expect(resGet.status()).toBe(404)
})