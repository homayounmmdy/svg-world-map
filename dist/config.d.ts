import type { MapOptions, MapSize } from "./types";
/**
 * Map data registry containing all available map configurations
 */
export declare const MAP_DATA_REGISTRY: {
    readonly world: {
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
        } | {
            code: string;
            name: string;
            path: {
                d: string;
            }[];
            paths?: never;
        })[];
    };
    readonly afghanistan: undefined;
    readonly australia: undefined;
    readonly brazil: undefined;
    readonly france: undefined;
    readonly gb: undefined;
    readonly germany: undefined;
    readonly india: undefined;
    readonly iran: undefined;
    readonly netherlands: undefined;
    readonly usa: undefined;
};
export declare const registerMapData: (type: string, data: any) => void;
/**
 * Base viewport configuration for each map type
 * These are the original/optimal dimensions for each map
 */
export declare const BASE_VIEWPORT_CONFIGS: {
    readonly afghanistan: {
        readonly height: 457.2;
        readonly width: 600;
        readonly viewBox: "0 0 600 457.2";
        readonly aspectRatio: number;
    };
    readonly australia: {
        readonly height: 966;
        readonly width: 1000;
        readonly viewBox: "0 0 1000 966";
        readonly aspectRatio: number;
    };
    readonly brazil: {
        readonly height: 912;
        readonly width: 1000;
        readonly viewBox: "0 0 1000 912";
        readonly aspectRatio: number;
    };
    readonly france: {
        readonly height: 960;
        readonly width: 1000;
        readonly viewBox: "0 0 1000 960";
        readonly aspectRatio: number;
    };
    readonly gb: {
        readonly height: 1000;
        readonly width: 1000;
        readonly viewBox: "0 0 1000 1000";
        readonly aspectRatio: number;
    };
    readonly germany: {
        readonly height: 1000;
        readonly width: 1000;
        readonly viewBox: "0 0 1000 1000";
        readonly aspectRatio: number;
    };
    readonly india: {
        readonly height: 1000;
        readonly width: 1000;
        readonly viewBox: "0 0 1000 1000";
        readonly aspectRatio: number;
    };
    readonly iran: {
        readonly height: 593.71021;
        readonly width: 654.51147;
        readonly viewBox: "0 0 654.51147 593.71021";
        readonly aspectRatio: number;
    };
    readonly netherlands: {
        readonly height: 1000;
        readonly width: 1000;
        readonly viewBox: "0 0 1000 1000";
        readonly aspectRatio: number;
    };
    readonly usa: {
        readonly height: 589;
        readonly width: 1000;
        readonly viewBox: "0 0 1000 589";
        readonly aspectRatio: number;
    };
    readonly world: {
        readonly height: 857;
        readonly width: 2000;
        readonly viewBox: "0 0 2000 857";
        readonly aspectRatio: number;
    };
};
/**
 * Size preset configurations
 * Defines the dimensions for each size variant
 */
export declare const SIZE_PRESETS: {
    readonly xs: {
        readonly scale: 0.25;
        readonly description: "Extra small - 25% of original size";
    };
    readonly sm: {
        readonly scale: 0.5;
        readonly description: "Small - 50% of original size";
    };
    readonly md: {
        readonly scale: 0.75;
        readonly description: "Medium - 75% of original size";
    };
    readonly lg: {
        readonly scale: 1;
        readonly description: "Large - 100% of original size (default)";
    };
    readonly xl: {
        readonly scale: 1.5;
        readonly description: "Extra large - 150% of original size";
    };
    readonly "2xl": {
        readonly scale: 2;
        readonly description: "2X Large - 200% of original size";
    };
    readonly "3xl": {
        readonly scale: 2.5;
        readonly description: "3X Large - 250% of original size";
    };
    readonly "4xl": {
        readonly scale: 3;
        readonly description: "4X Large - 300% of original size";
    };
};
/**
 * Calculate viewport dimensions based on size variant
 * @param baseConfig - Base viewport configuration
 * @param size - Size variant or custom size
 * @returns Calculated width and height
 */
export declare const calculateViewportDimensions: (baseConfig: typeof BASE_VIEWPORT_CONFIGS.afghanistan | typeof BASE_VIEWPORT_CONFIGS.australia | typeof BASE_VIEWPORT_CONFIGS.brazil | typeof BASE_VIEWPORT_CONFIGS.france | typeof BASE_VIEWPORT_CONFIGS.gb | typeof BASE_VIEWPORT_CONFIGS.germany | typeof BASE_VIEWPORT_CONFIGS.india | typeof BASE_VIEWPORT_CONFIGS.iran | typeof BASE_VIEWPORT_CONFIGS.netherlands | typeof BASE_VIEWPORT_CONFIGS.usa | typeof BASE_VIEWPORT_CONFIGS.world, size?: MapSize) => {
    width: number;
    height: number;
};
/**
 * Registry of viewport configurations for all supported maps.
 *
 * Each entry provides:
 * - `base`: The raw viewport configuration (viewBox, aspect ratio, etc.)
 * - `getConfig(size?)`: A method to compute responsive SVG dimensions
 *
 * @example
 * // Get dimensions for a large USA map
 * const usaDims = SVG_VIEWPORT_CONFIGS.usa.getConfig('lg');
 * // { height: "600", width: "900" }
 *
 * @example
 * // Use in SVG generation
 * const config = SVG_VIEWPORT_CONFIGS[mapType];
 * const { width, height } = config.getConfig(options.size);
 *
 * @remarks
 * - The `world` map is always included by default
 * - Optional maps (e.g., 'usa', 'afghanistan') must be registered
 *   via `registerMapData()` before use
 * - All dimensions are returned as strings for direct use in SVG attributes
 */
export declare const SVG_VIEWPORT_CONFIGS: {
    readonly afghanistan: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
    readonly australia: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
    readonly brazil: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
    readonly france: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
    readonly gb: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
    readonly germany: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
    readonly india: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
    readonly iran: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
    readonly netherlands: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
    readonly usa: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
    readonly world: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        } | {
            readonly height: 966;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 966";
            readonly aspectRatio: number;
        } | {
            readonly height: 912;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 912";
            readonly aspectRatio: number;
        } | {
            readonly height: 960;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 960";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 593.71021;
            readonly width: 654.51147;
            readonly viewBox: "0 0 654.51147 593.71021";
            readonly aspectRatio: number;
        } | {
            readonly height: 1000;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 1000";
            readonly aspectRatio: number;
        } | {
            readonly height: 589;
            readonly width: 1000;
            readonly viewBox: "0 0 1000 589";
            readonly aspectRatio: number;
        } | {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
        };
    };
};
/**
 * Default styling options for map regions
 */
export declare const DEFAULT_MAP_OPTIONS: Required<MapOptions>;
//# sourceMappingURL=config.d.ts.map