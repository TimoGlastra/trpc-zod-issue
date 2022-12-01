import { inferRouterInputs, inferRouterOutputs, initTRPC } from "@trpc/server";
import { createTRPCProxyClient } from "@trpc/client";
import { z } from "zod";

const t = initTRPC.create({});

// Simple object with name as string and allows any other properties as unknown
const zObject = z
  .object({
    name: z.string(),
  })
  .catchall(z.unknown());

const router = t.router({
  // Test takes the zObject as both input and output
  test: t.procedure
    .input(zObject)
    .output(zObject)
    .mutation(({ input }) => {
      return input;
    }),
});

// Client is based on the type of the router
type AppRouter = typeof router;

// correctly specifies the input type
export const input = {} as inferRouterInputs<AppRouter>["test"];
// correctly specifies the output type
export const output = {} as inferRouterOutputs<AppRouter>["test"];

// correctly specifies the input type, incorrectly specifies the output type
export const client = createTRPCProxyClient<AppRouter>({
  links: [],
});
