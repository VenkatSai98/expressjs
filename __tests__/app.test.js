// test.js
const request = require('supertest');
const app = require('../app.js');

describe('GET /api/user', () => {
  it('responds with user data', async () => {
    // Spy on the response.json method
    const jsonSpy = jest.spyOn(JSON, 'stringify');
    
    // Make a GET request to the /api/user endpoint
    const response = await request(app).get('/api/user');
    
    // Expect the response status code to be 200
    expect(response.statusCode).toBe(200);
    
    // Expect the response body to contain the user data
    expect(response.body).toEqual({
      id: 1,
      username: 'john_doe',
      email: 'john@example.com'
    });
    
    // Expect that the JSON.stringify method was called once
    expect(jsonSpy).toHaveBeenCalledTimes(1);
    
    // Restore the original JSON.stringify method
    jsonSpy.mockRestore();
  });
});
