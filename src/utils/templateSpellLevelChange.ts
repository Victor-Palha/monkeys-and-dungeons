export function templateSpellLevelChange(level: number) {
    switch (level) {
        case 0:
            return "Cantrip";
        case 1:
            return "1st";
        case 2:
            return "2nd";
        case 3:
            return "3rd";
        default:
            return `${level}th`;
    }
}