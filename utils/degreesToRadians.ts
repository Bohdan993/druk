export function degreesToRadians(degrees: number) : number {
    const angleInRadians = (degrees - 90) * Math.PI / 180.0;
    return angleInRadians;
}