import type { MapOptions, MapType } from "./types";
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
export declare const createMap: (mapType: MapType, options?: MapOptions) => string;
export default createMap;
//# sourceMappingURL=index.d.ts.map