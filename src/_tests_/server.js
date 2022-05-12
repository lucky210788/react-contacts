import {rest} from "msw";
import {users} from "../_fixtures_/users";
import {setupServer} from "msw/node";

const handlers = [
    rest.get('https://randomuser.me/api/?results=2', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({"results": users}),
        )
    }),
];

export const server = setupServer(...handlers);