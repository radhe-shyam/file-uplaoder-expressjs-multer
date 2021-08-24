const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('User API', function () {
    it('Successful user create', async function () {
        const user = {
            "name": "testUser",
            "age": 20,
            "gender": "M"
        };
        const res = await request(app).post('/api/user/').send(user);

        const body = res.body;
        expect(res.statusCode).to.equal(200);
        expect(body.status).to.equal(1);
        expect(body.data.name).to.equal(user.name);
        expect(body.data.age).to.equal(user.age);
        expect(body.data.gender).to.equal(user.gender);
    });
    it('400 for gender is missing', async function () {
        const user = {
            "name": "testUser",
            "age": 20,
            "gender": ""
        };
        const res = await request(app).post('/api/user/').send(user);

        const body = res.body;
        expect(res.statusCode).to.equal(400);
        expect(body.status).to.equal(0);
    });
    it('400 for age is negative', async function () {
        const user = {
            "name": "testUser",
            "age": -10,
            "gender": "M"
        };
        const res = await request(app).post('/api/user/').send(user);

        const body = res.body;
        expect(res.statusCode).to.equal(400);
        expect(body.status).to.equal(0);
    });
    it('400 for name is missing', async function () {
        const user = {
            "name": "",
            "age": 20,
            "gender": "M"
        };
        const res = await request(app).post('/api/user/').send(user);

        const body = res.body;
        expect(res.statusCode).to.equal(400);
        expect(body.status).to.equal(0);
    });
});