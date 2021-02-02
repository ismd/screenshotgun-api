import { nanoid } from 'nanoid'

export function generateFilename() {
    const date = new Date().toISOString().split('T')[0].replace(/-/g, '/');

    return `${date}/${nanoid(10)}.png`;
}
