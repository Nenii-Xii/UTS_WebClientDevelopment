function dateDifference(date1: string, date2: string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays;
}

console.log(`Date difference: ${dateDifference("2024-03-19", "2024-03-21")}`); // Output: 2
