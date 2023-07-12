export function templateSourceChange(source: string) {
    switch (source) {
        case "PHB":
            return "Player's Handbook"
        case "XGE":
            return "Xanathar's Guide to Everything"
        case "FTD":
            return "Fizban's Treasury of Dragons"
        case "AAG":
            return "Astral Adventurer's Guide"
        case "AI":
            return "Acquisitions Incorporated"
        case "SCC":
            return "Strixhaven: Curriculum of Chaos"
        case "TCE":
            return "Tashas Cauldron of Everything"
        default:
            return "Unknown Source"
    }
}