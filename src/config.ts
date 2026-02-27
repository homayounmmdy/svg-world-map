import type {MapOptions, MapSize} from "./types";
import World from "./maps/World";

/**
 * Map data registry containing all available map configurations
 */
export const MAP_DATA_REGISTRY = {
    world: World,
    afghanistan: undefined,
    usa : undefined
} as const;

export const registerMapData = (type: string, data: any) => {
    (MAP_DATA_REGISTRY as any)[type] = data;
};

/**
 * Base viewport configuration for each map type
 * These are the original/optimal dimensions for each map
 */
export const BASE_VIEWPORT_CONFIGS = {
    afghanistan: {
        height: 457.2,
        width: 600,
        viewBox: "0 0 600 457.2",
        aspectRatio: 600 / 457.2
    },
    usa: {
        height: 589,
        width : 1000,
        viewBox: "0 0 1000 589",
        aspectRatio: 1000 / 589
    },
    world: {
        height: 857,
        width: 2000,
        viewBox: "0 0 2000 857",
        aspectRatio: 2000 / 857
    }
} as const;

/**
 * Size preset configurations
 * Defines the dimensions for each size variant
 */
export const SIZE_PRESETS = {
    xs: {
        scale: 0.25,
        description: "Extra small - 25% of original size"
    },
    sm: {
        scale: 0.5,
        description: "Small - 50% of original size"
    },
    md: {
        scale: 0.75,
        description: "Medium - 75% of original size"
    },
    lg: {
        scale: 1,
        description: "Large - 100% of original size (default)"
    },
    xl: {
        scale: 1.5,
        description: "Extra large - 150% of original size"
    },
    "2xl": {
        scale: 2,
        description: "2X Large - 200% of original size"
    },
    "3xl": {
        scale: 2.5,
        description: "3X Large - 250% of original size"
    },
    "4xl": {
        scale: 3,
        description: "4X Large - 300% of original size"
    }
} as const;

/**
 * Calculate viewport dimensions based on size variant
 * @param baseConfig - Base viewport configuration
 * @param size - Size variant or custom size
 * @returns Calculated width and height
 */
export const calculateViewportDimensions = (
    baseConfig: typeof BASE_VIEWPORT_CONFIGS.afghanistan | typeof BASE_VIEWPORT_CONFIGS.usa | typeof BASE_VIEWPORT_CONFIGS.world,
    size: MapSize = 'lg'
): { width: number; height: number } => {
    // If size is a number, use it as a scale factor
    if (typeof size === 'number') {
        return {
            width: baseConfig.width * size,
            height: baseConfig.height * size
        };
    }

    // If size is a string preset, get the scale factor
    const preset = SIZE_PRESETS[size as keyof typeof SIZE_PRESETS];
    if (preset) {
        return {
            width: baseConfig.width * preset.scale,
            height: baseConfig.height * preset.scale
        };
    }

    // Default to large (scale 1)
    return {
        width: baseConfig.width,
        height: baseConfig.height
    };
};

/**
 * Creates a viewport configuration object for a specific map.
 *
 * This factory function generates a consistent config structure that includes:
 * - The base viewport settings from BASE_VIEWPORT_CONFIGS
 * - A getConfig method that calculates responsive dimensions based on size
 *
 * @param mapKey - The key identifying which map's base config to use
 *                 (must be a key of BASE_VIEWPORT_CONFIGS)
 * @returns An object containing:
 *   - `base`: The original viewport configuration for the map
 *   - `getConfig`: A function that accepts a MapSize and returns
 *                  height/width as strings for SVG attributes
 *
 * @example
 * const usaConfig = createMapViewportConfig('usa');
 * const dimensions = usaConfig.getConfig('xl');
 * // Returns: { height: "600", width: "900" }
 *
 * @internal This function is used to generate SVG_VIEWPORT_CONFIGS
 */
const createMapViewportConfig = (mapKey: keyof typeof BASE_VIEWPORT_CONFIGS) => {
    const base = BASE_VIEWPORT_CONFIGS[mapKey];
    return {
        base,
        getConfig: (size: MapSize = 'lg') => {
            const dimensions = calculateViewportDimensions(base, size);
            return {
                height: dimensions.height.toString(),
                width: dimensions.width.toString(),
            };
        }
    } as const;
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
export const SVG_VIEWPORT_CONFIGS = {
    afghanistan: createMapViewportConfig('afghanistan'),
    usa: createMapViewportConfig('usa'),
    world: createMapViewportConfig('world'),
} as const;

/**
 * Default styling options for map regions
 */
export const DEFAULT_MAP_OPTIONS: Required<MapOptions> = {
    background: '#f0f0f0',
    borders: '#333333',
    hoverColor: '#d0e0ff',
    size : 'lg',
};
