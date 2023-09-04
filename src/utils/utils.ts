export function parseArgs(args = {}) {
    return Object.keys(args)
        .map(key => `${key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}="${args[key]}"`)
        .join(' ');
}

export function getRenderComponent(tag, minHeight = 0, margin = 0, preRender = '') {
    return {
        render: ({children = '', ...args}) => {
            return `${preRender}<${tag} ${parseArgs(args)}>${children}</${tag}>`;
        },
        decorators: [
            (Story) => `<div style="min-height: ${minHeight}px;margin: ${margin}px">${Story()}</div>`
        ]
    }
}
