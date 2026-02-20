import AF from './maps/AF';
const generatePaths = (options = {}) => {
    const defaultOptions = {
        fill: '#f0f0f0',
        stroke: '#333333',
        ...options
    };
    return AF.states
        .map((state) => {
        return `
        <path 
          d="${state.path}" 
          id="${state.code}"
          name="${state.name}"
          fill="${defaultOptions.fill}"
          stroke="${defaultOptions.stroke}"
        />
      `;
    })
        .join('');
};
export const createAfghanistanMap = (options = {}) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="457.2" version="1.1" width="600"
     style="overflow: hidden; position: relative; left: -0.399994px;" viewBox="${AF.viewBox}"
     preserveAspectRatio="xMinYMin">
        ${generatePaths(options)}
</svg>`;
};
export const afghanistanMap = createAfghanistanMap();
export default afghanistanMap;
//# sourceMappingURL=index.js.map