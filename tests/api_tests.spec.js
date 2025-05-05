import {test,expect} from '@playwright/test'
import { request } from 'https'
import { text } from 'stream/consumers'

test ('api response', async({request})=>{
    const response=await request.get('https://reqres.in/api/users?page=2')
    expect(response.status()).toBe(200)

    const containText =await response.text();
    expect(containText).toContain('Funke')
})