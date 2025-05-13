import{test,request} from '@playwright/test'

test("data update or put request", async ({request})=>{
 const resPut= await request.put("booking/1",{headers:{
    Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
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
 const jsonres= await resPut.json()

 console.log(jsonres)
}
)