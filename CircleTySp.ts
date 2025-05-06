function circleProperties(radius: number): { diameter: number, circumference: number, area: number } {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    return { diameter, circumference, area };
}

const circle = circleProperties(5);
console.log(`Diameter: ${circle.diameter}`);
console.log(`Circumference: ${circle.circumference.toFixed(3)}`);
console.log(`Area: ${circle.area.toFixed(3)}`);
