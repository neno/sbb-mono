import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import quizFileData from './quiz.json';
import { fetchData } from './useFetch';

const testAPIUrl = 'http://example.com/';
const apiResult = { quiz: { message: 'Hello' } };
const server = setupServer(
    rest.get(testAPIUrl, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(apiResult));
    })
);

describe('Data fetching', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    beforeEach(() => server.resetHandlers());

    it('fetches data from the API if API Url is provided', async () => {
        const result = await fetchData(testAPIUrl);
        expect(JSON.stringify(result)).toEqual(JSON.stringify(apiResult));
    });

    it('fetches data from the local file if no API Url is provided', async () => {
        const result = await fetchData();
        expect(JSON.stringify(result.quiz)).toEqual(
            JSON.stringify(quizFileData.quiz)
        );
    });
});
