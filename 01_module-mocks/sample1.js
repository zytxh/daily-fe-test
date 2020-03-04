// createUser.js
import fetch from 'node-fetch';

export let createUser = async () => {
  const response = await fetch('http://website.com/users', { method: 'POST' });
  console.log('==>', fetch)
  const userId = await response.text();
  return userId;
};
