import { templateSpellLevelChange } from "../../../utils/templateSpellLevelChange";
import { ClasseTableInfo } from "./styles";
import { useEffect, useState } from "react";

interface ClasseSpecificFeaturesI{
    // Barbarian Class Specific Features
    rage_count?: number
    rage_damage_bonus?: number
    brutal_critical_dice?: number
    // Bard Class Specific Features
    bardic_inspiration_dice?: number
    song_of_rest_die?: number
    magical_secrets_max_5?: number
    magical_secrets_max_7?: number
    magical_secrets_max_9?: number
    // Cleric Class Specific Features
    channel_divinity_charges?: number
    destroy_undead_cr?: number
    // Druid Class Specific Features
    wild_shape_max_cr?: number
    wild_shape_swim?: boolean
    wild_shape_fly?: boolean
    // Fighter Class Specific Features
    action_surges?: number
    indomitable_uses?: number
    extra_attacks?: number
    // Monk Class Specific Features
    ki_points?: number
    unarmored_movement?: number
    martial_arts?: {
        dice_count?: number
        dice_value?: number
    }
    // Paladin Class Specific Features
    aura_range?: number
    // Ranger Class Specific Features
    favored_enemies?: number
    favored_terrain?: number
    // Rogue Class Specific Features
    sneak_attack?: {
    dice_count?: number
    dice_value?: number
    }
    // Sorcerer Class Specific Features
    sorcery_points?: number
    metamagic_known?: number
    creating_spell_slots?: [{
        spell_slot_level?: number
        sorcery_point_cost?: number
    }]
    // Warlock Class Specific Features
    invocations_known?: number
    mystic_arcanum_level_6?: number
    mystic_arcanum_level_7?: number
    mystic_arcanum_level_8?: number
    mystic_arcanum_level_9?: number
        // Wizard Class Specific Features
    arcane_recover_levels?: number
}

interface ClasseTableI{
    
        index: string
        
        // Resource index for shorthand searching.
        url: string
        
        // URL of the referenced resource.
        level: number
        
        // The number value for the current level object.
        ability_score_bonuses: number
        
        // Total number of ability score bonuses gained, added from previous levels.
        prof_bonus: number
        
        // Proficiency bonus for this class at the specified level.
        features: [{
        
        // Features automatically gained at this level.
        // ⮕ [ APIReference ]
        index: string
        
        // Resource index for shorthand searching.
        name: string
        
        // Name of the referenced resource.
        url: string
        
        // URL of the referenced resource.
        }]
        
        // Summary of spells known at this level.
        spellcasting?: spellCasting
        spell_slot: number[]
        warlock_spell_slots: {
            spell_slot: number
            slot_level: number
        }
        class_specific: ClasseSpecificFeaturesI
}
interface spellCasting{
    cantrips_known: number
    spells_known: number
    spell_slots_level_1: number
    spell_slots_level_2: number
    spell_slots_level_3: number
    spell_slots_level_4: number
    spell_slots_level_5: number
    spell_slots_level_6: number
    spell_slots_level_7: number
    spell_slots_level_8: number
    spell_slots_level_9: number
}


interface ClasseTableProps{
    classe: string
}
export function ClasseTable({classe}: ClasseTableProps){
    const [classeTable, setClasseTable] = useState<ClasseTableI[]>({} as ClasseTableI[])
    const [classSpecific, setClassSpecific] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    async function loadClasseTable(classename: string){
        setLoading(true)
        const response = await fetch('https://www.dnd5eapi.co/api/classes/'+classename+'/levels')
        let data = await response.json() as ClasseTableI[]

        // Adiciona novos campos expessificos de cada classe conjuradora passando por cada level
        data.forEach(level => {
            // iniciando campos
            level.spell_slot = []
            level.warlock_spell_slots = {
                spell_slot: 0,
                slot_level: 0
            };

            if(level.spellcasting != undefined && classename != "warlock"){
                let spellSlotArray = Object.values(level.spellcasting)
                level.spell_slot = spellSlotArray
            }
            
            // novo campo para warlock
            if(classename === "warlock" && level.spellcasting != undefined){
                 // Inicializar como objeto vazio
                for (const [key, value] of Object.entries(level.spellcasting)) {
                    
                    // Verifique se o valor é diferente de zero e se a chave começa com "spell_slots_level_"
                    if (value !== 0 && key.startsWith("spell_slots_level_")) {
                      const spellLevel = parseInt(key.slice(-1));
                      level.warlock_spell_slots.slot_level = spellLevel;
                      level.warlock_spell_slots.spell_slot = value;
                    }
                  }
            }
        });
        
        setClasseTable(data)
        setLoading(false)
    }
    function alterTableByClass(classe: string){
        switch(classe){
            case "barbarian":
                setClassSpecific(["Rages", "Rage Damage Bonus", "Brutal Critical Dice"])
                break
                break
            // @ts-ignore
            case "bard":
                setClassSpecific([ 	
                    "Cantrips Known","Spells Known","1st","2nd","3rd","4th","5th","6th","7th","8th","9th"])
                    break
            // @ts-ignore
            case "cleric":
                setClassSpecific([ 	
                    "Cantrips Known","1st","2nd","3rd","4th","5th","6th","7th","8th","9th"])
                    break
            // @ts-ignore
            case "druid":
                setClassSpecific([ 	
                    "Cantrips Known","1st","2nd","3rd","4th","5th","6th","7th","8th","9th"])
                    break
            // @ts-ignore
            case "monk":
                setClassSpecific([ 	
                    "Martial Arts","Ki Points","Unarmore Movement"])
                    break
            // @ts-ignore
            case "paladin":
                setClassSpecific([ 	
                    "1st","2nd","3rd","4th","5th"])
                    break
            // @ts-ignore
            case "ranger":
                setClassSpecific([ 	
                    "Spells Known","1st","2nd","3rd","4th","5th"])
                    break
            // @ts-ignore
            case "rogue":
                setClassSpecific([ 	
                    "Sneak Attack"])
                    break
            
            // @ts-ignore
            case "sorcerer":
                setClassSpecific([ 	
                    "Sorcery Points","Cantrips Known","Spells Known","1st","2nd","3rd","4th","5th","6th","7th","8th","9th"])
                    break
            // @ts-ignore
            case "fighter":
                setClassSpecific([])
                break
            // @ts-ignore
            case "warlock":
                setClassSpecific([ 	
                    "Cantrips Known","Spells Known","Spell Slots","Slot Level","Invocations Known"])
                    break
            // @ts-ignore
            case "wizard":
                setClassSpecific(["Cantrips Known","1st","2nd","3rd","4th","5th","6th","7th","8th","9th"])
                break
            default:
                setClassSpecific([])
                break
        }
    }
    function verifyClassFullCasterToTable(classe: string){
        switch(classe){
            case "bard":
                return true
            case "cleric":
                return true
            case "druid":
                return true
            case "wizard":
                return true
            case "ranger":
                return true
            case "paladin":
                return true
            default:
                return false
        }
    }

    useEffect(()=>{
        if(classe != ""){
            loadClasseTable(classe)
            
            alterTableByClass(classe)
        }
    }, [classe])
    return(
        <ClasseTableInfo>
            {!loading && (
                <>
                <thead>
                <tr>
                    <th>Level</th>
                    <th>Proficiency Bonus</th>
                    <th>Features</th>
                    {classSpecific.map((specific, index)=>(
                        <th key={index}>{specific}</th>
                    ))}
                </tr>
                </thead>
                {classeTable.length > 0 && (
                    <tbody>
                    {classeTable.map((level, index)=>(
                        <tr key={index}>
                            <td>{templateSpellLevelChange(level.level)} </td>
                            <td>+{level.prof_bonus}</td>
                            <td>{level.features.map((feature, index)=>(
                                <li key={index}>{feature.name}</li>
                            ))}
                            </td>

                            {verifyClassFullCasterToTable(classe) &&
                                level.spell_slot.map((spell, index)=>(
                                    <td key={index}>{spell}</td>
                                ))
                            }
                            {classe === "sorcerer" && 
                                (
                                    <>
                                        <td>
                                            {level.class_specific?.sorcery_points}
                                        </td>
                                        {
                                            level.spell_slot.map((spell)=>(
                                                <td key={spell}>{spell}</td>
                                            ))
                                        }
                                    </>
                                )
                            }
                            {classe === "warlock" && 
                                (
                                    <>
                                        <td>
                                            {level.spellcasting?.cantrips_known}
                                        </td>
                                        <td>
                                            {level.spellcasting?.spells_known}
                                        </td>
                                        <td>
                                            {level.warlock_spell_slots.spell_slot}
                                        </td>
                                        <td>
                                            {templateSpellLevelChange(level.warlock_spell_slots.slot_level)}
                                        </td>
                                        <td>
                                            {level.class_specific?.invocations_known}
                                        </td>
                                    </>
                                )
                            }
                            {classe === "barbarian" && 
                                (
                                    <>
                                        <td>
                                            {level.class_specific?.rage_count}
                                        </td>
                                        <td>
                                            +{level.class_specific?.rage_damage_bonus}
                                        </td>
                                        <td>
                                            {level.class_specific?.brutal_critical_dice}
                                        </td>
                                    </>
                                )
                            }
                            {classe === "rogue" && 
                                (
                                    <>
                                        <td>
                                        {level.class_specific?.sneak_attack?.dice_count}d{level.class_specific?.sneak_attack?.dice_value}
                                        </td>
                                    </>
                                )
                            }
                            {classe === "monk" && 
                                (
                                    <>
                                        <td>
                                        {level.class_specific?.martial_arts?.dice_count}d{level.class_specific?.martial_arts?.dice_value}
                                        </td>
                                        <td>
                                            {level.class_specific?.ki_points}
                                        </td>
                                        <td>
                                            {level.class_specific?.unarmored_movement} feets
                                        </td>
                                    </>
                                )
                            }
                        </tr>   
                    ))}
                    </tbody>
                )}
            </>
            )}
            
        </ClasseTableInfo>
    )
}