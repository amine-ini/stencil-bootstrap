export function getRenderComponent(tag) {
    return {
        render: ({children = '', ...args}) => {
            const attributes = Object.keys(args) // convert camelcase to dash case
                .map(key => `${key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}="${args[key]}"`)
                .join(' ');
            return `<${tag} ${attributes}>${children}</${tag}>`;
        }
    }
}
