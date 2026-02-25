import type { MapOptions } from "./types";
/**
 * Map data registry containing all available map configurations
 */
export declare const MAP_DATA_REGISTRY: {
    readonly afghanistan: {
        name: string;
        code: string;
        viewBox: string;
        states: {
            code: string;
            path: string;
            name: string;
        }[];
    };
    readonly world: {
        name: string;
        code: string;
        viewBox: string;
        countries: {
            code: string;
            name: string;
            path: string;
        }[];
    };
};
/**
 * SVG viewport configurations for each map type
 * These values determine the SVG container dimensions and positioning
 */
export declare const SVG_VIEWPORT_CONFIGS: {
    readonly afghanistan: {
        readonly height: "457.2";
        readonly width: "600";
        readonly style: "overflow: hidden; position: relative; left: -0.399994px;";
    };
    readonly world: {
        readonly height: "857";
        readonly width: "2000";
        readonly style: "";
    };
};
/**
 * Default styling options for map regions
 */
export declare const DEFAULT_MAP_OPTIONS: Required<MapOptions>;
//# sourceMappingURL=config.d.ts.map