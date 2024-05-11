interface NativeNames {
    [key: string]: {
        official: string;
        common: string;
    };
}

export function checkForNativeName(nativeNames: NativeNames): string[] | undefined {
    const allNativeName: string[] = [];
    for (const key in nativeNames) {
        if (nativeNames[key].hasOwnProperty("common")) {
            allNativeName.push(nativeNames[key].common)
        }
    }
    if(allNativeName.length) {
        return allNativeName;
    } else {
        return undefined
    }
}