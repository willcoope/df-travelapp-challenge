import User from '../models/user.model.js';

// Require the testing dependencies
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

// Require other code for testing
import server from '../index.js';
import testUsers from './testUsers.js';
const testDataArray = testUsers.users;

describe(`Testing requests on the database`, () => {

    beforeEach(async () => {
        await User.deleteMany()
            .catch(error => {
                console.log(`Error clearing`);
                throw new Error();
            });

        await User.insertMany(testDataArray)
            .then(() => console.log(`Database populated with test users`))
            .catch(error => {
                console.log(`Error inserting`);
                throw new Error();
            });
    });

    describe('/POST signup', () => {
        it(`valid data should register a new user`, async () => {
            const res = await chai.request(server).post(`/signup`).send({ username: "test3", password: "password3"});
            expect(res).to.have.status(200);
        });
    });

    describe(`/POST login`, () => {
        it(`valid data should login a user`, async () => {
            const res = await chai.request(server).post(`/login`).send({ username: "test1", password: "password1"});
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal(`Login Success`);
        });
    });

    describe(`/GET getfavourites`, () => {
        it(`valid data should return all of the favourites of a user`, async () => {
            const res = await chai.request(server).get(`/getfavourites`).send({ username: "test1", password: "password1"});
            expect(res).to.have.status(200);
            expect(res.body.favourites).to.include(`london`, `paris`, `berlin`);
        });
    });
    describe(`/PUT addfavourite`, () => {
        it(`valid data should add a favourite to the user's favourites`, async () => {
            const res = await chai.request(server).put(`/addfavourite`).send({ username: "test1", password: "password1", newfavourite: "madrid"});
            expect(res).to.have.status(200);
            expect(res.body.favourites).to.include(`london`, `paris`, `berlin`, `madrid`);
        });
        it(`invalid data should return an error`, async () => {
            const res = await chai.request(server).put(`/addfavourite`).send({ username: "test1", password: "password1", newfavourite: ""});
            expect(res).to.have.status(400);
        });
    });
    describe(`/PUT removefavourite`, () => {
        it(`valid data should remove a favourite from the user's favourites`, async () => {
            const res = await chai.request(server).put(`/removefavourite`).send({ username: "test1", password: "password1", removefavourite: "london"});
            expect(res).to.have.status(200);
            expect(res.body.favourites).to.not.include(`london`);
        });
        it(`invalid data should return an error`, async () => {
            const res = await chai.request(server).put(`/removefavourite`).send({ username: "test1", password: "password1", removefavourite: "invalid"});
            expect(res).to.have.status(400);
        });
    });

});