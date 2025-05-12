import {expect, test} from '@playwright/test'

test("Http post method", async({request})=>{

const resP1 = await request.post("/booking",{
    data:
    {
    "firstname" : "Jim5",
    "lastname" : "Brown5",
    "totalprice" : 113,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}


})
const jsonRes =await resP1.json()
console.log( jsonRes)
expect(jsonRes.booking).toMatchObject({
    firstname: 'Jim5',
    lastname: 'Brown5',
    totalprice: 113,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
})
})