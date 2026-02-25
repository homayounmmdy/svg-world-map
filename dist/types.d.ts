/**
 * Configuration options for map styling
 */
export type MapOptions = {
    /** Background color for map regions (supports any valid CSS color) */
    background?: string;
    /** Border color for region boundaries (supports any valid CSS color) */
    borders?: string;
};
/**
 * Supported map types
 * - 'afghanistan': Detailed map of Afghanistan with provinces/states
 * - 'world': World map with all countries
 */
export type MapType = 'afghanistan' | 'world';
/**
 * Represents a single path within a region
 */
export type PathData = {
    /** SVG path data string */
    d: string;
};
/**
 * Represents a geographic region (state or country) within a map
 * Can have either a single path or multiple paths
 */
export type MapRegion = {
    /** Unique identifier code for the region (e.g., 'AF' for Afghanistan) */
    code: string;
    /** Display name of the region (e.g., 'Angola') */
    name: string;
    /** Single SVG path for simple regions */
    path?: string;
    /** Multiple SVG paths for complex regions (islands, territories, etc.) */
    paths?: PathData[];
};
/**
 * Structure of map data containing either states or countries
 */
export type MapData = {
    /** SVG viewBox attribute value */
    viewBox: string;
    /** States/provinces for country maps (like Afghanistan) */
    states?: MapRegion[];
    /** Countries for world maps */
    countries?: MapRegion[];
};
//# sourceMappingURL=types.d.ts.map