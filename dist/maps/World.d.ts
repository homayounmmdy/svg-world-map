declare const World: {
    name: string;
    code: string;
    viewBox: string;
    countries: ({
        code: string;
        name: string;
        path: string;
        paths?: never;
    } | {
        code: string;
        name: string;
        paths: {
            d: string;
        }[];
        path?: never;
    })[];
};
export default World;
//# sourceMappingURL=World.d.ts.map