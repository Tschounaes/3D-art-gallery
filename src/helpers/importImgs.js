const importImgs = (path) => {
    const cache = {}
    const importAll = (r) => r.keys().forEach(key => cache[key] = r(key));
    importAll(require.context(path, false, /\.(png|jpe?g|svg)$/));
    return Object.entries(cache).map(module => module[1].default);
}

export default importImgs;



