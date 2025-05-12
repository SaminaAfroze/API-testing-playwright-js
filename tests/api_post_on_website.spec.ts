import{test,request, expect} from '@playwright/test'

test("Post request test on demoblaze",async({request})=>{
    const demRes = await request.post("https://api.demoblaze.com/addtocart", {data:
        {"id":"c64c1505-3e1e-50f2-17b8-46049e327625","cookie":"user=67713170-1d86-6880-fbff-7d7101915330","prod_id":1,"flag":false}

    })
    expect(demRes.status()).toBe(200)
})

