# svg-world-maps

Simple, lightweight SVG maps for JavaScript projects.

🎉 **Now with World Map and Flexible Sizing!**

> 📚 **Documentation**: [Wiki Home](https://github.com/homayounmmdy/svg-world-maps/wiki) • [Getting Started](https://github.com/homayounmmdy/svg-world-maps/wiki/Getting-Started) • [Optional Maps (v0.3.0)](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)  
> 💬 **Community**: [Discussions](https://github.com/homayounmmdy/svg-world-maps/discussions) • [Report Issue](https://github.com/homayounmmdy/svg-world-maps/issues)

---

## Features

- 🌍 **Multiple Maps**: World map with all 195 countries + optional detailed maps (like Afghanistan)
- 📏 **Flexible Sizing**: 8 preset sizes + custom scale factors
- 🎨 **Customizable**: Background colors, border colors, and more
- ⚡ **Zero dependencies**: Pure SVG output
- 🛠 **Framework agnostic**: Works with React, Vue, Svelte, Vanilla JS, etc.
- 📦 **TypeScript support**: Full type definitions included
- 🔧 **Simple API**: One function to rule them all

## Installation

```bash
npm install svg-world-maps
```

> 💡 **v0.3.0 Note**: The Afghanistan map is now **optional** to keep your bundle small.  
> Want to use it? Run: `npx add-map afghanistan`  
> [Learn more →](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)

## Usage

### React + Vite

```jsx
import { createMap } from "svg-world-maps";

const App = () => {
  // Create a world map with custom options
  const worldMap = createMap("world", {
    background: "#e6f3ff",  // Background color
    borders: "#2c3e50",      // Border color
    size: "lg"               // Size preset: xs, sm, md, lg, xl, 2xl, 3xl, 4xl
  });


  return (
    <div dangerouslySetInnerHTML={{ __html: worldMap }} />
  );
};

export default App;
```

### Vanilla JavaScript

```javascript
import { createMap } from "svg-world-maps";

// Create the map
const mapSVG = createMap("world", {
  background: "#e6f3ff",
  borders: "#2c3e50",
  size: "md"
});

// Insert into DOM
document.getElementById("map-container").innerHTML = mapSVG;
```

## API Reference

### `createMap(mapType, options)`

Creates an SVG map string.

#### Parameters

| Parameter | Type | Description | Options |
|-----------|------|-------------|---------|
| `mapType` | `string` | Type of map to generate | `"world"`, `"afghanistan"` |
| `options` | `object` | Configuration options | See below |

*\* `afghanistan` requires optional map setup — [see guide](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)*

#### Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `background` | `string` | Map background color (any valid CSS color) | `"#currentColor"` |
| `borders` | `string` | Country/state border color | `"#000000"` |
| `size` | `string \| number` | Map size (preset or custom scale) | `"lg"` |

### Size Options

#### Preset Sizes
| Preset | Scale | Description |
|--------|-------|-------------|
| `"xs"` | 0.25x | Extra small - 25% of original |
| `"sm"` | 0.5x | Small - 50% of original |
| `"md"` | 0.75x | Medium - 75% of original |
| `"lg"` | 1x | Large - 100% of original **(default)** |
| `"xl"` | 1.5x | Extra large - 150% of original |
| `"2xl"` | 2x | 2X Large - 200% of original |
| `"3xl"` | 2.5x | 3X Large - 250% of original |
| `"4xl"` | 3x | 4X Large - 300% of original |

#### Custom Scale Factors
Use any number for precise control:
```javascript
{ size: 0.33 }  // Exactly one-third size
{ size: 1.25 }  // 25% larger
{ size: 1.75 }  // 75% larger
{ size: 2.5 }   // Two and a half times larger
{ size: 0.8 }   // 20% smaller
```

## Examples

### Basic Examples

```javascript
// World map with default settings
createMap("world");

// Afghanistan map with custom colors (requires optional setup)
createMap("afghanistan", {
  background: "#27ae60",
  borders: "#ecf0f1"
});

// World map - extra small
createMap("world", { size: "xs" });

// World map - extra large with custom colors
createMap("world", {
  background: "#2c3e50",
  borders: "#3498db",
  size: "xl"
});

// World map - custom scale
createMap("world", { size: 1.25 });
```

### React Examples

```jsx
import { createMap } from "svg-world-maps";

// Multiple maps with different sizes
const Maps = () => {
  const smallMap = createMap("world", { size: "sm" });
  const mediumMap = createMap("world", { size: "md" });
  const largeMap = createMap("world", { size: "lg" });

  return (
    <div>
      <h3>Small (50%)</h3>
      <div dangerouslySetInnerHTML={{ __html: smallMap }} />
      
      <h3>Medium (75%)</h3>
      <div dangerouslySetInnerHTML={{ __html: mediumMap }} />
      
      <h3>Large (100%)</h3>
      <div dangerouslySetInnerHTML={{ __html: largeMap }} />
    </div>
  );
};
```

## Available Maps

| Map | Type | Description | Since | Status |
|-----|------|-------------|-------|--------|
| `"world"` | 🌍 | Complete world map with all 195 countries | v0.2.0 | ✅ Included by default |
| `"afghanistan"` | 🗺️ | Afghanistan map with 34 provinces | v0.1.0 | 🔁 Optional (v0.3.0+) |

> 🔁 **Optional maps** keep your bundle small. Add them only when needed:  
> ```bash
> npx add-map afghanistan
> ```  
> [Full setup guide →](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)

---

## Roadmap

- [x] Afghanistan map (v0.1.0)
- [x] World map (v0.2.0)
- [x] Optional maps system (v0.3.0)
- [ ] Individual country maps
- [ ] Hover effects and tooltips
- [ ] Click handlers and callbacks
- [ ] More customization options
- [ ] Interactive features

## Migration Guide

### From v0.1.0 to v0.2.0

```javascript
// v0.1.0 (old)
import { createAfghanistanMap } from "svg-world-maps";
const map = createAfghanistanMap({ 
  fill: "#ff0000", 
  stroke: "#ffffff" 
});

// v0.2.0 (new)
import { createMap } from "svg-world-maps";
const map = createMap("afghanistan", { 
  background: "#ff0000", 
  borders: "#ffffff",
  size: "lg" 
});
```

### From v0.2.x to v0.3.0 (Optional Maps)

If you use the Afghanistan map:

```bash
# 1. Add the optional map to your project
npx add-map afghanistan

# 2. Register it in your code
import { registerMapData } from "svg-world-maps";
import afData from "./src/maps/AF";
registerMapData("afghanistan", afData);
```

[Full migration guide →](https://github.com/homayounmmdy/svg-world-maps/wiki/Migration)

---

## 📚 Documentation & Support

| Resource | Link |
|----------|------|
| 🏠 **Wiki Home** | [github.com/homayounmmdy/svg-world-maps/wiki](https://github.com/homayounmmdy/svg-world-maps/wiki) |
| 🚀 **Getting Started** | [Quick start guide](https://github.com/homayounmmdy/svg-world-maps/wiki/Getting-Started) |
| 🗺️ **Optional Maps** | [Add Afghanistan & more](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps) |
| 💬 **Discussions** | [Ask questions & share ideas](https://github.com/homayounmmdy/svg-world-maps/discussions) |
| 🐛 **Report Issue** | [Open a bug report](https://github.com/homayounmmdy/svg-world-maps/issues) |

---

## Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🌍 Add new maps
- 📝 Improve documentation

## License

MIT © homayounmmdy

## Support

If you find this package helpful, please consider:
- ⭐ Starring on [GitHub](https://github.com/homayounmmdy/svg-world-maps)
- 🐦 Sharing on Twitter
- 📢 Telling your friends

---

**Made with ❤️ for the open-source community**
