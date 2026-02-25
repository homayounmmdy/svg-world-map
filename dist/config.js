import AF from "./maps/AF";
import World from "./maps/World";
/**
 * Map data registry containing all available map configurations
 */
export const MAP_DATA_REGISTRY = {
    afghanistan: AF,
    world: World
};
/**
 * SVG viewport configurations for each map type
 * These values determine the SVG container dimensions and positioning
 */
export const SVG_VIEWPORT_CONFIGS = {
    afghanistan: {
        height: "457.2",
        width: "600",
        style: "overflow: hidden; position: relative; left: -0.399994px;"
    },
    world: {
        height: "857",
        width: "2000",
        style: ""
    }
};
/**
 * Default styling options for map regions
 */
export const DEFAULT_MAP_OPTIONS = {
    background: '#f0f0f0',
    borders: '#333333'
};
//# sourceMappingURL=config.js.map