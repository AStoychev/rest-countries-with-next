interface Languages {
    [languageCode: string]: string;
}

export function getLanguage(languages: Languages): string[] {
    return Object.values(languages);
}