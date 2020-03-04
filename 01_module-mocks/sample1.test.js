/**
 * mock三方库
 * 因为不想要实际fetch发出请求->要模拟default接口->所以mock一个三方库
 */
jest.mock('node-fetch');

/**
 * 如果从一个mock库中引入Reponse类，那么无法执行它的实现(因为被mock了)
 */
import fetch, { Response } from 'node-fetch'; 
// import fetch from 'node-fetch';
// const {Response} = jest.requireActual('node-fetch'); // 需要模块的真实能力 的写法


import { createUser } from './sample1.js';

test('createUser calls fetch with the right args and returns the user id', async () => {
  // 如果不要真实实现，可以在这里mock Response类
  Response.mockReturnValue({
    text() { 
      return '4';
    }
  });
  fetch.mockReturnValue(Promise.resolve(new Response('4')));
  expect(Response).toHaveBeenCalledTimes(1);

  const userId = await createUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('http://website.com/users', {
    method: 'POST',
  });
  expect(userId).toBe('4');
});