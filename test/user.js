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
            .then(() => console.log(`Database cleared`))
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

    describe(`/GET getfavourites`, () => {
        it(`should return all of the favourites of a user`, async () => {
            const res = await chai.request(server).get(`/getfavourites`).send({ username: "test1", password: "password1"});
            console.log(res.body);
            expect(res).to.have.status(200);
            expect(res.body.favourites).to.include(`london`, `paris`, `berlin`);
        });
    });
    describe(`/PUT addfavourite`, () => {
        it(`should add a favourite to the user's favourites`, async () => {
            const res = await chai.request(server).put(`/addfavourite`).send({ username: "test1", password: "password1", newfavourite: "madrid"});
            console.log(res.body);
            expect(res).to.have.status(200);
            expect(res.body.favourites).to.include(`london`, `paris`, `berlin`, `madrid`);
        });
    });

});