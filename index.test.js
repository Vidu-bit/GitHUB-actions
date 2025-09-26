const request = require('supertest');
const { app, close } = require('./index');

describe('Test degli endpoint API', ()=> {
    it('GET / should return Hello World!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('Hello World!');
    });

    it('GET /client should return Hello Client!', async () => {
        const res = await request(app).get('/client');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('Hello Client!');
    });

    afterAll((done) => {
        close();
        done();
    }); 
})