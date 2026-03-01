import type {MapData, MapOptions, MapRegion, MapType, PathData} from "./types";
import {DEFAULT_MAP_OPTIONS, MAP_DATA_REGISTRY, SVG_VIEWPORT_CONFIGS} from "./config";

export {registerMapData} from "./config";

/**
 * Type guard to check if region has multiple paths
 */
const hasMultiplePaths = (region: MapRegion): region is MapRegion & { paths: PathData[] } => {
    return 'paths' in region && Array.isArray(region.paths);
};

/**
 * Type guard to check if region has a single path
 */
const hasSinglePath = (region: MapRegion): region is MapRegion & { path: string } => {
    return 'path' in region && typeof region.path === 'string';
};

/**
 * Extracts regions from map data based on map type
 * @param mapData - The map data containing regions
 * @returns Array of map regions (either states or countries)
 * @throws {Error} If map data contains no regions
 */
const extractRegions = (mapData: MapData): MapRegion[] => {
    if (mapData.countries && mapData.countries.length > 0) {
        return mapData.countries;
    }
    if (mapData.states && mapData.states.length > 0) {
        return mapData.states;
    }

    console.error('Map data structure:', mapData);
    throw new Error('Invalid map data: missing both states and countries arrays');
};

/**
 * Generates SVG path elements for all regions in the map
 * @param mapData - The map data containing region information
 * @param options - Styling options for the map regions
 * @returns String of concatenated SVG path elements
 */
const generateRegionPaths = (mapData: MapData, options: MapOptions = {}): string => {
    const mergedOptions: Required<MapOptions> = {
        ...DEFAULT_MAP_OPTIONS,
        ...options
    };

    try {
        const regions = extractRegions(mapData);

        const styleBlock = `
        <style>
            .regions:hover {
                fill: ${mergedOptions.hoverColor} !important;
                transition: fill 0.2s ease;
                cursor: pointer;
            }
        </style>
    `;

        if (regions.length === 0) {
            console.warn('No regions found in map data');
            return '';
        }

        const paths = regions
            .map((region: MapRegion) => {
                const commonAttrs = `
                id="${region.code}"
                data-code="${region.code}"
                data-name="${region.name}"
                class="regions"
                fill="${mergedOptions.background}"
                stroke="${mergedOptions.borders}"
            `;
                // Handle regions with multiple paths (like Angola)
                if (hasMultiplePaths(region)) {
                    return region.paths
                        .map((pathData: PathData, index: number) => {

                            if (index === 0) {
                                return `<path 
                                d="${pathData.d}" 
                                ${commonAttrs}
                                name="${region.name}"
                            />`;
                            }
                            return `<path 
                                d="${pathData.d}" ${commonAttrs}
                                />`;
                        })
                        .join('');
                }

                // Handle single path regions
                if (hasSinglePath(region)) {
                    return `<path 
                d="${region.path}" 
                ${commonAttrs}
                name="${region.name}"
            />`;
                }

                console.warn(`Region has no valid path data`, region);
                return '';
            })
            .filter(Boolean)
            .join('');

        return styleBlock + paths;
    } catch (error) {
        console.error('Error generating region paths:', error);
        throw error;
    }
};

/**
 * Creates an SVG map string for the specified map type
 *
 * @param mapType - Type of map to generate
 *   - `'world'`: Always available ✅
 *   - `'afghanistan'`: Optional - requires registration via `npx add-map afghanistan` ⚙️
 *   - `'australia'`: Optional - requires registration via `npx add-map australia` ⚙️
 *   - `'brazil'`: Optional - requires registration via `npx add-map brazil` ⚙️
 *   - `'france'`: Optional - requires registration via `npx add-map france` ⚙️
 *   - `'gb'`: Optional - requires registration via `npx add-map gb` ⚙️
 *   - `'germany'`: Optional - requires registration via `npx add-map germany` ⚙️
 *   - `'india'`: Optional - requires registration via `npx add-map india` ⚙️
 *   - `'iran'`: Optional - requires registration via `npx add-map iran` ⚙️
 *   - `'netherlands'`: Optional - requires registration via `npx add-map netherlands` ⚙️
 *   - `'usa'`: Optional - requires registration via `npx add-map usa` ⚙️
 * @param options - Optional styling configuration for the map
 * @returns Complete SVG string representing the map
 *
 * @example
 * // Create a world map with custom colors and size
 * const worldMap = createMap('world', {
 *   background: '#e6f3ff',
 *   borders: '#2c3e50',
 *   size: 'xl'
 * });
 *
 * @example
 * // Create Afghanistan map at 50% scale
 * const afghanMap = createMap('afghanistan', {
 *   size: 0.5
 * });
 *
 * @throws {Error} If the map type is not found in the registry
 */
export const createMap = (mapType: MapType, options: MapOptions = {}): string => {
    const mapData = MAP_DATA_REGISTRY[mapType];


    if (!mapData) {
        // ✨ Super helpful error for optional maps
        if (mapType.toLowerCase() !== 'world') {
                    const safeVarName = `${mapType.replace(/[^a-zA-Z0-9]/g, '_')}Data`;
            const importPath = `./src/maps/${mapType}`;
            throw new Error(
                `Map "${mapType}" is not registered.\n\n` +
                `💡 This map is optional to keep bundle size small.\n` +
                `✅ To add it, run:\n` +
                `   npx add-map ${mapType}\n\n` +
                `📝 Then register it in your code:\n` +
                `   import { registerMapData } from 'svg-world-maps';\n` +
                `   import ${safeVarName} from '${importPath}';\n` +
                `   registerMapData('${mapType}', ${safeVarName});`
            );
        }

        throw new Error(`Map type "${mapType}" not found in registry`);
    }

    const viewportConfig = SVG_VIEWPORT_CONFIGS[mapType].getConfig(options.size || 'lg');

    return `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="${viewportConfig.height}" 
    width="${viewportConfig.width}"
    viewBox="${mapData.viewBox}"
    preserveAspectRatio="xMidYMid meet">
        ${generateRegionPaths(mapData as MapData, options)}
  </svg>`;
};

export default createMap;