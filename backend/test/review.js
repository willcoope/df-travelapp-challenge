import Review from "../models/review.model.js";

// Require the testing dependencies
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

import server from '../index.js';
import testReviews from './testReviews.js';
const testDataArray = testReviews.reviews;

describe(`Testing requests on the database`, () => {
    beforeEach(async () => {
        await Review.deleteMany()
            .catch(error => {
                console.log(`Error clearing`);
                throw new Error();
            });

        await Review.insertMany(testDataArray)
            .then(() => console.log(`Database populated with test reviews`))
            .catch(error => {
                console.log(`Error inserting`);
                throw new Error();
            });
    });

    describe('/POST getreviews', () => {
        it(`valid data should return all reviews of a location`, async () => {
            const res = await chai.request(server).post(`/getreviews`).send({ location: "paris" });
            expect(res).to.have.status(200);
            console.log(res.body);
            console.log(res.body.reviews);
            expect(res.body.reviews).lengthOf(1);
            expect(res.body.reviews[0].location).to.equal(`paris`);
        });
    });

});