// auth-helper.js
const { request } = require('@playwright/test');

let authedContext = null; // cache so we don't log in multiple times

async function getAuthedContext() {
  if (authedContext) return authedContext;

  const loginResponse = await request.newContext().then(ctx =>
    ctx.post('https://api.example.com/auth/login', {
      data: {
        username: 'your_username',
        password: 'your_password'
      }
    })
  );

  if (!loginResponse.ok()) {
    throw new Error(`Login failed: ${loginResponse.status()}`);
  }

  const body = await loginResponse.json();
  const token = body.token; // change if it's named differently

  authedContext = await request.newContext({
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return authedContext;
}

module.exports = { getAuthedContext };
//this is for real apis. for now this has zero to no use