import type { MapOptions, MapType } from "./types";
export { registerMapData } from "./config";
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
export declare const createMap: (mapType: MapType, options?: MapOptions) => string;
export default createMap;
//# sourceMappingURL=index.d.ts.map