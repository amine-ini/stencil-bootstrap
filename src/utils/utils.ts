export function parseArgs(args = {}) {
    return Object.keys(args)
        .map(key => `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}="${args[key]}"`)
        .join(' ');
}

export function storiesMeta(meta = {tag: '', docDescription: ''}) {
    return {
        render: ({children = '', ...args}) => {
            return `<${meta.tag} ${parseArgs(args)}>${children}</${meta.tag}>`;
        },
        parameters: {
            docs: {
                description: {
                    component: meta.docDescription
                },
            },
        }
    }
}
