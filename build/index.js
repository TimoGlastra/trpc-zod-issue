"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.output = exports.input = void 0;
const server_1 = require("@trpc/server");
const client_1 = require("@trpc/client");
const zod_1 = require("zod");
const t = server_1.initTRPC.create({});
// Simple object with name as string and allows any other properties as unknown
const zObject = zod_1.z
    .object({
    name: zod_1.z.string(),
})
    .catchall(zod_1.z.unknown());
const router = t.router({
    // Test takes the zObject as both input and output
    test: t.procedure
        .input(zObject)
        .output(zObject)
        .mutation(({ input }) => {
        return input;
    }),
});
// correctly specifies the input type
exports.input = {};
// correctly specifies the output type
exports.output = {};
// correctly specifies the input type, incorrectly specifies the output type
exports.client = (0, client_1.createTRPCProxyClient)({
    links: [],
});
