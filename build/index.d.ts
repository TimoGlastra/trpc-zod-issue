export declare const input: {
    [x: string]: unknown;
    name: string;
};
export declare const output: {
    [x: string]: never;
    [x: number]: never;
};
export declare const client: {
    test: {
        mutate: (input: {
            [x: string]: unknown;
            name: string;
        }, opts?: import("@trpc/server").ProcedureOptions | undefined) => Promise<{
            [x: string]: never;
            [x: number]: never;
        }>;
    };
};
