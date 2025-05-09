function getInitials(name: string): string {
    return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
}

console.log(`Initials: ${getInitials("Neni Galuh Putri Anyelir")}`); // Output: NGPA
