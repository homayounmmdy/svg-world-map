/**
 * Configuration options for map styling and sizing
 */
export type MapOptions = {
    /** Background color for map regions (supports any valid CSS color) */
    background?: string;
    /** Border color for region boundaries (supports any valid CSS color) */
    borders?: string;
    /**
     * Controls the rendered size of the map
     *
     * You can specify size in two ways:
     *
     * 1. **Preset sizes** - Use predefined string values for common scaling:
     *    - `'xs'`   - 25% of original size (0.25x scale)
     *    - `'sm'`   - 50% of original size (0.5x scale)
     *    - `'md'`   - 75% of original size (0.75x scale)
     *    - `'lg'`   - 100% of original size (1x scale - default)
     *    - `'xl'`   - 150% of original size (1.5x scale)
     *    - `'2xl'`  - 200% of original size (2x scale)
     *    - `'3xl'`  - 250% of original size (2.5x scale)
     *    - `'4xl'`  - 300% of original size (3x scale)
     *
     * 2. **Custom scale factor** - Provide a number for precise control:
     *    - `0.25` - Quarter size (same as 'xs')
     *    - `0.5`  - Half size (same as 'sm')
     *    - `0.75` - Three-quarters size (same as 'md')
     *    - `1`    - Original size (same as 'lg')
     *    - `1.25` - 25% larger than original
     *    - `2`    - Double size (same as '2xl')
     *    - `2.5`  - Two and a half times larger (same as '3xl')
     *    - `3`    - Triple size (same as '4xl')
     *    - `0.33` - One-third size
     *    - `1.8`  - 80% larger than original
     *
     * @example
     * // Using preset sizes
     * { size: 'sm' }     // 50% of original dimensions
     * { size: 'xl' }     // 150% of original dimensions
     *
     * @example
     * // Using custom scale factors
     * { size: 0.33 }     // Exactly one-third the original size
     * { size: 1.25 }     // 25% larger than original
     * { size: 1.75 }     // 75% larger than original
     * { size: 2.5 }      // Two and a half times larger
     *
     * @default 'lg' (original size)
     */
    size?: MapSize;
};
/**
 * Represents the possible size values for map rendering
 *
 * The map size can be specified either as a:
 * - **String preset**: Predefined common sizes (xs through 4xl)
 * - **Number**: Custom scale factor relative to the original map dimensions
 *
 * **How scaling works:**
 * - The number represents a multiplier applied to the map's original dimensions
 * - A value of `1` = original size (100%)
 * - Values less than `1` = smaller than original (e.g., `0.5` = half size)
 * - Values greater than `1` = larger than original (e.g., `2` = double size)
 *
 * **String presets and their numeric equivalents:**
 * | Preset | Scale | Visual Reference                      |
 * |--------|-------|---------------------------------------|
 * | 'xs'   | 0.25  | Quarter of original size              |
 * | 'sm'   | 0.5   | Half of original size                 |
 * | 'md'   | 0.75  | Three-quarters of original size       |
 * | 'lg'   | 1     | Original size (default)               |
 * | 'xl'   | 1.5   | One and a half times original         |
 * | '2xl'  | 2     | Twice original size                   |
 * | '3xl'  | 2.5   | Two and a half times original         |
 * | '4xl'  | 3     | Three times original size             |
 *
 * @example
 * // Valid size values:
 * const size1: MapSize = 'md';     // 75% of original
 * const size2: MapSize = 'xl';     // 150% of original
 * const size3: MapSize = 0.33;     // Exactly one-third
 * const size4: MapSize = 1.25;     // 25% larger
 * const size5: MapSize = 2.75;     // 175% larger
 *
 * @example
 * // Practical usage with createMap:
 * // Mobile-friendly map (half size)
 * createMap('world', { size: 'sm' })
 *
 * // Print-quality map (double size)
 * createMap('world', { size: '2xl' })
 *
 * // Custom size for specific layout
 * createMap('afghanistan', { size: 0.65 }) // 65% of original
 */
export type MapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | number;
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
 * Can have either a single path OR multiple paths, but not both
 */
export type MapRegion = {
    /** Unique identifier code for the region (e.g., 'AF' for Afghanistan) */
    code: string;
    /** Display name of the region (e.g., 'Angola') */
    name: string;
} & ({
    /** Single SVG path for simple regions */
    path: string;
    paths?: never;
} | {
    /** Multiple SVG paths for complex regions (islands, territories, etc.) */
    paths: PathData[];
    path?: never;
});
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