import type {MapData, MapOptions, MapRegion, MapType} from "./types";
import {DEFAULT_MAP_OPTIONS, MAP_DATA_REGISTRY, SVG_VIEWPORT_CONFIGS} from "./config";

/**
 * Checks if the given map data represents a country-level map (with states)
 * @param mapData - The map data to check
 * @returns True if the map has states, false if it has countries
 */
const isCountryMap = (mapData: MapData): boolean => {
    return 'states' in mapData;
};

/**
 * Extracts regions from map data based on map type
 * @param mapData - The map data containing regions
 * @returns Array of map regions (either states or countries)
 * @throws {Error} If map data contains neither states nor countries
 */
const extractRegions = (mapData: MapData): MapRegion[] => {
    if (isCountryMap(mapData) && mapData.states) {
        return mapData.states;
    }

    if (mapData.countries) {
        return mapData.countries;
    }

    throw new Error('Invalid map data: missing both states and countries');
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

    const regions = extractRegions(mapData);

    return regions
        .map((region: MapRegion) => {
            return `
        <path 
          d="${region.path}" 
          id="${region.code}"
          name="${region.name}"
          fill="${mergedOptions.background}"
          stroke="${mergedOptions.borders}"
        />
      `;
        })
        .join('');
};

/**
 * Creates an SVG map string for the specified map type
 *
 * @param mapType - Type of map to generate ('afghanistan' | 'world')
 * @param options - Optional styling configuration for the map
 * @returns Complete SVG string representing the map
 *
 * @example
 * // Create a world map with custom colors
 * const worldMap = createMap('world', {
 *   background: '#e6f3ff',
 *   borders: '#2c3e50'
 * });
 *
 * @example
 * // Create Afghanistan map with default styling
 * const afghanMap = createMap('afghanistan');
 *
 * @throws {Error} If the map type is not found in the registry
 */
export const createMap = (mapType: MapType, options: MapOptions = {}): string => {
    const mapData = MAP_DATA_REGISTRY[mapType];

    if (!mapData) {
        throw new Error(`Map type "${mapType}" not found in registry`);
    }

    const viewportConfig = SVG_VIEWPORT_CONFIGS[mapType];

    return `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="${viewportConfig.height}" 
    width="${viewportConfig.width}"
    style="${viewportConfig.style}"
    viewBox="${mapData.viewBox}"
    preserveAspectRatio="xMidYMid meet">
        ${generateRegionPaths(mapData, options)}
  </svg>`;
};

export default createMap;