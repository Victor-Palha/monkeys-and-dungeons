export function changeColorBySource(source: string){
    switch(source){
        case "PHB":
            return "#700f0b"
        case "XGE":
            return "#d29a38"
        case "FTD":
            return "#b82a15"
        case "AAG":
            return "#056b97"
        case "AI":
            return "#5baf04"
        case "SCC":
            return "#be9c56"
        case "TCE":
            return "#a24d08"
        default:
            return "#000000"
    }
}