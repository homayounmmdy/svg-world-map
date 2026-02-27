import World from "./maps/World";
/**
 * Map data registry containing all available map configurations
 */
export const MAP_DATA_REGISTRY = {
    world: World,
    afghanistan: undefined,
};
export const registerMapData = (type, data) => {
    MAP_DATA_REGISTRY[type] = data;
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
    world: {
        height: 857,
        width: 2000,
        viewBox: "0 0 2000 857",
        aspectRatio: 2000 / 857
    }
};
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
};
/**
 * Calculate viewport dimensions based on size variant
 * @param baseConfig - Base viewport configuration
 * @param size - Size variant or custom size
 * @returns Calculated width and height
 */
export const calculateViewportDimensions = (baseConfig, size = 'lg') => {
    // If size is a number, use it as a scale factor
    if (typeof size === 'number') {
        return {
            width: baseConfig.width * size,
            height: baseConfig.height * size
        };
    }
    // If size is a string preset, get the scale factor
    const preset = SIZE_PRESETS[size];
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
 * Generate viewport style string
 */
export const generateViewportStyle = (dimensions, baseStyle = "") => {
    return `width: ${dimensions.width}px; height: ${dimensions.height}px; ${baseStyle}`.trim();
};
/**
 * SVG viewport configurations for each map type with size variants
 */
export const SVG_VIEWPORT_CONFIGS = {
    afghanistan: {
        base: BASE_VIEWPORT_CONFIGS.afghanistan,
        getConfig: (size = 'lg') => {
            const dimensions = calculateViewportDimensions(BASE_VIEWPORT_CONFIGS.afghanistan, size);
            return {
                height: dimensions.height.toString(),
                width: dimensions.width.toString(),
                style: `overflow: hidden; position: relative; width: ${dimensions.width}px; height: ${dimensions.height}px;`
            };
        }
    },
    world: {
        base: BASE_VIEWPORT_CONFIGS.world,
        getConfig: (size = 'lg') => {
            const dimensions = calculateViewportDimensions(BASE_VIEWPORT_CONFIGS.world, size);
            return {
                height: dimensions.height.toString(),
                width: dimensions.width.toString(),
                style: `width: ${dimensions.width}px; height: ${dimensions.height}px;`
            };
        }
    }
};
/**
 * Default styling options for map regions
 */
export const DEFAULT_MAP_OPTIONS = {
    background: '#f0f0f0',
    borders: '#333333',
    hoverColor: '#d0e0ff',
    size: 'lg',
};
//# sourceMappingURL=config.js.map