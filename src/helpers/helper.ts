export function incrementId(id: string) {
    let number = Number(id.slice(1));
    let newNumber = number++;
    return id.charAt(0) + newNumber.toString().padStart(6, '0');
}