
export function captalizeString(value: string) {
    return value.charAt(0).toUpperCase() + value.substring(1)
}

export function twoCaseNumberFormatter(value: string) {
    if(value.length === 1){
        value = value.replace(/([0-9]{1})/,"0$1");
    }
    return value;
}