/**
 * Configuration options for map styling
 */
export type MapOptions = {
    /** Background color for map regions (supports any valid CSS color) */
    background?: string;

    /** Border color for region boundaries (supports any valid CSS color) */
    borders?: string;
}

/**
 * Supported map types
 * - 'afghanistan': Detailed map of Afghanistan with provinces/states
 * - 'world': World map with all countries
 */
export type MapType = 'afghanistan' | 'world';

/**
 * Represents a geographic region (state or country) within a map
 */
export type MapRegion = {
    path: string;
    code: string;
    name: string;
}

/**
 * Structure of map data containing either states or countries
 */
export type MapData = {
    viewBox: string;
    states?: MapRegion[];
    countries?: MapRegion[];
}