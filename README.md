# svg-world-maps

Simple, lightweight SVG maps for JavaScript projects.

🎉 **Now with USA Map, Hover Effects & Click Support!**

> 📚 **Documentation**: [Wiki Home](https://github.com/homayounmmdy/svg-world-maps/wiki) • [Getting Started](https://github.com/homayounmmdy/svg-world-maps/wiki/Getting-Started) • [Optional Maps](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)  
> 💬 **Community**: [Discussions](https://github.com/homayounmmdy/svg-world-maps/discussions) • [Report Issue](https://github.com/homayounmmdy/svg-world-maps/issues)

## Features

- 🌍 **Multiple Maps**: World map + optional detailed maps (USA, Afghanistan, and more)
- 📏 **Flexible Sizing**: 8 preset sizes + custom scale factors
- 🎨 **Customizable**: Background, borders, and hover colors
- 👆 **Interactive**: Click support via `data-code` and `data-name` attributes
- ⚡ **Zero dependencies**: Pure SVG output
- 🛠 **Framework agnostic**: Works with React, Vue, Svelte, Vanilla JS, etc.
- 📦 **TypeScript support**: Full type definitions included
- 🔧 **Simple API**: One function to rule them all

## Installation

```bash
npm install svg-world-maps
```

> 💡 **Optional Maps**: Keep your bundle small by only adding the maps you need.  
> ```bash
> npx add-map usa          # Add USA map
> npx add-map afghanistan  # Add Afghanistan map
> ```  
> [Learn more →](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)

## Usage

### React + Vite

```jsx
import { createMap } from "svg-world-maps";

const App = () => {
  // Create a world map with custom options
  const worldMap = createMap("world", {
    background: "#e6f3ff",   // Background color
    borders: "#2c3e50",      // Border color
    hoverColor: "rgba(59, 130, 246, 0.3)", // Hover highlight
    size: "lg"               // Size preset
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: worldMap }} />
  );
};

export default App;
```

### Vanilla JavaScript with Click Handling

```javascript
import { createMap } from "svg-world-maps";

const mapSVG = createMap("world", {
  background: "#e6f3ff",
  borders: "#2c3e50",
  hoverColor: "lightblue"
});

const container = document.getElementById("map-container");
container.innerHTML = mapSVG;

// Handle region clicks using data attributes
container.addEventListener("click", (e) => {
  const target = e.target;
  const code = target.dataset.code;
  const name = target.dataset.name;
  
  if (code && name) {
    console.log(`Clicked: ${name} (${code})`);
    // Show tooltip, navigate, filter data, etc.
  }
});
```

## API Reference

### `createMap(mapType, options)`

Creates an SVG map string.

#### Parameters

| Parameter | Type | Description | Options |
|-----------|------|-------------|---------|
| `mapType` | `string` | Type of map to generate | `"world"`, `"usa"`, `"afghanistan"` |
| `options` | `object` | Configuration options | See below |

*\* Optional maps (`usa`, `afghanistan`) require setup via `npx add-map` — [see guide](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)*

#### Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `background` | `string` | Map background color (any valid CSS color) | `"currentColor"` |
| `borders` | `string` | Country/state border color | `"#000000"` |
| `hoverColor` | `string` | Color applied to regions on hover | `undefined` |
| `size` | `string \| number` | Map size (preset or custom scale) | `"lg"` |

> **Note on `hoverColor`**: The library outputs the color value in the SVG. Actual hover behavior requires CSS `:hover` rules or JavaScript event listeners in your implementation.

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

## Interactive Features

### Click Handling with Data Attributes

Every region in the generated SVG includes two data attributes:

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-code` | Short region identifier | `"US-CA"`, `"AF-KAB"`, `"FR"` |
| `data-name` | Full region name | `"California"`, `"Kabul"`, `"France"` |

**React Example with Toast Notification:**

```jsx
import { useEffect, useRef, useState } from "react";
import { createMap, registerMapData } from "svg-world-maps";
import usaData from "./maps/usa";

registerMapData("usa", usaData);

const App = () => {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  const Map = createMap("usa", {
    background: "#e6f3ff",
    borders: "#2c3e50",
    size: "md",
    hoverColor: "purple"
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      const target = e.target;
      const code = target.dataset.code;
      const name = target.dataset.name;

      if (code && name) {
        setSelected({ name, code });
        setTimeout(() => setSelected(null), 3000);
      }
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, []);

  return (
    <div>
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: Map }} />
      {selected && (
        <div className="toast">
          {selected.name} ({selected.code})
        </div>
      )}
    </div>
  );
};
```

**Use Cases:**
- Show region details in a tooltip or modal
- Navigate to a detail page: `/regions/${code}`
- Filter dashboard data by selected region
- Track analytics per region click

## Examples

### Basic Examples

```javascript
// World map with default settings
createMap("world");

// USA map with hover effect (requires optional setup)
createMap("usa", {
  background: "#f0f4f8",
  borders: "#334155",
  hoverColor: "rgba(59, 130, 246, 0.3)"
});

// Afghanistan map - extra small
createMap("afghanistan", { size: "xs" });

// World map - custom scale with borders
createMap("world", {
  borders: "#3498db",
  size: 1.25
});
```

### React: Multiple Maps

```jsx
import { createMap } from "svg-world-maps";

const Maps = () => {
  const world = createMap("world", { size: "sm", hoverColor: "lightgray" });
  const usa = createMap("usa", { size: "md", hoverColor: "lightblue" });

  return (
    <div>
      <h3>World Map</h3>
      <div dangerouslySetInnerHTML={{ __html: world }} />
      
      <h3>USA Map</h3>
      <div dangerouslySetInnerHTML={{ __html: usa }} />
    </div>
  );
};
```

## Available Maps

| Map | Type | Description | Since | Status |
|-----|------|-------------|-------|--------|
| `"world"` | 🌍 | Complete world map with all 195 countries | v0.2.0 | ✅ Included by default |
| `"usa"` | 🇺🇸 | USA map with all 50 states + DC | v0.4.0 | 🔁 Optional |
| `"afghanistan"` | 🗺️ | Afghanistan map with 34 provinces | v0.1.0 | 🔁 Optional |

> 🔁 **Optional maps** keep your bundle small. Add them only when needed:  
> ```bash
> npx add-map usa
> npx add-map afghanistan
> ```  
> [Full setup guide →](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)

## Roadmap

- [x] Afghanistan map (v0.1.0)
- [x] World map (v0.2.0)
- [x] Optional maps system (v0.3.0)
- [x] USA map + hoverColor + click support via data attributes (v0.4.0)
- [ ] More country maps (Canada, Germany, UK, etc.)
- [ ] Keyboard navigation & accessibility improvements
- [ ] Export to PNG/SVG file

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

### From v0.3.x to v0.4.0

No breaking changes. New features are optional.

**To use the USA map:**
```bash
# 1. Add the optional map
npx add-map usa

# 2. Register it in your code
import { registerMapData } from "svg-world-maps";
import usaData from "./src/maps/usa";
registerMapData("usa", usaData);
```

**To use hoverColor or click handling:**
```javascript
// Add hover effect
createMap("world", { hoverColor: "rgba(0, 123, 255, 0.4)" });

// Add click handling (vanilla JS)
container.addEventListener("click", (e) => {
  if (e.target.dataset.code) {
    console.log(e.target.dataset.name);
  }
});
```

## 📚 Documentation & Support

| Resource | Link |
|----------|------|
| 🏠 **Wiki Home** | [github.com/homayounmmdy/svg-world-maps/wiki](https://github.com/homayounmmdy/svg-world-maps/wiki) |
| 🚀 **Getting Started** | [Quick start guide](https://github.com/homayounmmdy/svg-world-maps/wiki/Getting-Started) |
| 🗺️ **Optional Maps** | [Add USA, Afghanistan & more](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps) |
| 💬 **Discussions** | [Ask questions & share ideas](https://github.com/homayounmmdy/svg-world-maps/discussions) |
| 🐛 **Report Issue** | [Open a bug report](https://github.com/homayounmmdy/svg-world-maps/issues) |

## Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🌍 Add new country maps
- 📝 Improve documentation

## License

MIT © homayounmmdy

## Support

If you find this package helpful, please consider:
- ⭐ Starring on [GitHub](https://github.com/homayounmmdy/svg-world-maps)
- 🐦 Sharing on Twitter
- 📢 Telling your friends

**Made with ❤️ for the open-source community**
