export function addCommasToNumber(number:number) {
    let strNumber = String(number);
    let parts = [];
    
    for (let i = strNumber.length - 1, j = 1; i >= 0; i--, j++) {
        parts.unshift(strNumber[i]);
        
        if (j % 3 === 0 && i > 0) {
            parts.unshift(',');
        }
    }
    
    return parts.join('');
}