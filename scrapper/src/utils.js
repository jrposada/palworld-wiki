export function toCamelCase(value) {
    const pascal = value.replace(/\s/g, '');
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}
