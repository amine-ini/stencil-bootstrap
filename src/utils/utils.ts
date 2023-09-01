export function parseArgs(args = {}) {
    return Object.keys(args)
        .map(key => `${key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}="${args[key]}"`)
        .join(' ');
}

export function getRenderComponent(tag) {
    return {
        render: ({children = '', ...args}) => {
            return `<${tag} ${parseArgs(args)}>${children}</${tag}>`;
        }
    }
}
