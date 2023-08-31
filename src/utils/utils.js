export function parseArgs(args = {}) {
    return Object.keys(args)
        .map(key => `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}="${args[key]}"`)
        .join(' ');
}
