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
export declare const calculateViewportDimensions: (baseConfig: typeof BASE_VIEWPORT_CONFIGS.afghanistan | typeof BASE_VIEWPORT_CONFIGS.world, size?: MapSize) => {
    width: number;
    height: number;
};
/**
 * Generate viewport style string
 */
export declare const generateViewportStyle: (dimensions: {
    width: number;
    height: number;
}, baseStyle?: string) => string;
/**
 * SVG viewport configurations for each map type with size variants
 */
export declare const SVG_VIEWPORT_CONFIGS: {
    readonly afghanistan: {
        readonly base: {
            readonly height: 457.2;
            readonly width: 600;
            readonly viewBox: "0 0 600 457.2";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
            style: string;
        };
    };
    readonly world: {
        readonly base: {
            readonly height: 857;
            readonly width: 2000;
            readonly viewBox: "0 0 2000 857";
            readonly aspectRatio: number;
        };
        readonly getConfig: (size?: MapSize) => {
            height: string;
            width: string;
            style: string;
        };
    };
};
/**
 * Default styling options for map regions
 */
export declare const DEFAULT_MAP_OPTIONS: Required<MapOptions>;
//# sourceMappingURL=config.d.ts.map