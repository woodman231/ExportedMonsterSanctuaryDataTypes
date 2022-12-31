"use strict";
exports.__esModule = true;
exports.ExportedMonsterSanctuaryDataTypes = void 0;
var ExportedMonsterSanctuaryDataTypes;
(function (ExportedMonsterSanctuaryDataTypes) {
    var BuffType;
    (function (BuffType) {
        BuffType[BuffType["Might"] = 0] = "Might";
        BuffType[BuffType["Sorcery"] = 1] = "Sorcery";
        BuffType[BuffType["Glory"] = 2] = "Glory";
        BuffType[BuffType["Sidekick"] = 3] = "Sidekick";
        BuffType[BuffType["Channel"] = 4] = "Channel";
        BuffType[BuffType["Regeneration"] = 5] = "Regeneration";
        BuffType[BuffType["Agility"] = 6] = "Agility";
        BuffType[BuffType["SpellShield"] = 7] = "SpellShield";
        BuffType[BuffType["Barrier"] = 8] = "Barrier";
        BuffType[BuffType["Random"] = 9] = "Random";
    })(BuffType = ExportedMonsterSanctuaryDataTypes.BuffType || (ExportedMonsterSanctuaryDataTypes.BuffType = {}));
    var DebuffType;
    (function (DebuffType) {
        DebuffType[DebuffType["Weakness"] = 0] = "Weakness";
        DebuffType[DebuffType["Shock"] = 1] = "Shock";
        DebuffType[DebuffType["Poison"] = 2] = "Poison";
        DebuffType[DebuffType["Chill"] = 3] = "Chill";
        DebuffType[DebuffType["Burn"] = 4] = "Burn";
        DebuffType[DebuffType["ArmorBreak"] = 5] = "ArmorBreak";
        DebuffType[DebuffType["Random"] = 6] = "Random";
    })(DebuffType = ExportedMonsterSanctuaryDataTypes.DebuffType || (ExportedMonsterSanctuaryDataTypes.DebuffType = {}));
    var EElement;
    (function (EElement) {
        EElement[EElement["Neutral"] = 0] = "Neutral";
        EElement[EElement["Fire"] = 1] = "Fire";
        EElement[EElement["Water"] = 2] = "Water";
        EElement[EElement["Wind"] = 3] = "Wind";
        EElement[EElement["Earth"] = 4] = "Earth";
        EElement[EElement["Physical"] = 5] = "Physical";
        EElement[EElement["Magical"] = 6] = "Magical";
        EElement[EElement["Debuff"] = 7] = "Debuff";
        EElement[EElement["NoElement"] = 8] = "NoElement";
        EElement[EElement["QuadElement"] = 9] = "QuadElement";
    })(EElement = ExportedMonsterSanctuaryDataTypes.EElement || (ExportedMonsterSanctuaryDataTypes.EElement = {}));
    var EMonsterType;
    (function (EMonsterType) {
        EMonsterType[EMonsterType["None"] = 0] = "None";
        EMonsterType[EMonsterType["Aquatic"] = 1] = "Aquatic";
        EMonsterType[EMonsterType["Aerial"] = 2] = "Aerial";
        EMonsterType[EMonsterType["Mechanical"] = 3] = "Mechanical";
        EMonsterType[EMonsterType["Nature"] = 4] = "Nature";
        EMonsterType[EMonsterType["Spirit"] = 5] = "Spirit";
        EMonsterType[EMonsterType["Reptile"] = 6] = "Reptile";
        EMonsterType[EMonsterType["Beast"] = 7] = "Beast";
        EMonsterType[EMonsterType["Dragon"] = 8] = "Dragon";
        EMonsterType[EMonsterType["Occult"] = 9] = "Occult";
        EMonsterType[EMonsterType["Slime"] = 10] = "Slime";
        EMonsterType[EMonsterType["Insect"] = 11] = "Insect";
        EMonsterType[EMonsterType["Bird"] = 12] = "Bird";
        EMonsterType[EMonsterType["Fish"] = 13] = "Fish";
        EMonsterType[EMonsterType["Goblin"] = 14] = "Goblin";
        EMonsterType[EMonsterType["Warrior"] = 15] = "Warrior";
        EMonsterType[EMonsterType["Mage"] = 16] = "Mage";
        EMonsterType[EMonsterType["Worm"] = 17] = "Worm";
        EMonsterType[EMonsterType["Changeling"] = 18] = "Changeling";
        EMonsterType[EMonsterType["Ancient"] = 19] = "Ancient";
    })(EMonsterType = ExportedMonsterSanctuaryDataTypes.EMonsterType || (ExportedMonsterSanctuaryDataTypes.EMonsterType = {}));
    var EquipmentType;
    (function (EquipmentType) {
        EquipmentType[EquipmentType["Weapon"] = 0] = "Weapon";
        EquipmentType[EquipmentType["Armor"] = 1] = "Armor";
        EquipmentType[EquipmentType["Headgear"] = 2] = "Headgear";
        EquipmentType[EquipmentType["Necklace"] = 3] = "Necklace";
        EquipmentType[EquipmentType["Ring"] = 4] = "Ring";
        EquipmentType[EquipmentType["Misc"] = 5] = "Misc";
    })(EquipmentType = ExportedMonsterSanctuaryDataTypes.EquipmentType || (ExportedMonsterSanctuaryDataTypes.EquipmentType = {}));
    var ESpecialBuff;
    (function (ESpecialBuff) {
        ESpecialBuff[ESpecialBuff["Infinity"] = 0] = "Infinity";
        ESpecialBuff[ESpecialBuff["Champion"] = 1] = "Champion";
        ESpecialBuff[ESpecialBuff["Charge"] = 2] = "Charge";
        ESpecialBuff[ESpecialBuff["Bleed"] = 3] = "Bleed";
        ESpecialBuff[ESpecialBuff["Weakness"] = 4] = "Weakness";
        ESpecialBuff[ESpecialBuff["Resistance"] = 5] = "Resistance";
        ESpecialBuff[ESpecialBuff["Wound"] = 6] = "Wound";
        ESpecialBuff[ESpecialBuff["Age"] = 7] = "Age";
        ESpecialBuff[ESpecialBuff["Blind"] = 8] = "Blind";
        ESpecialBuff[ESpecialBuff["Tether"] = 9] = "Tether";
        ESpecialBuff[ESpecialBuff["Redirect"] = 10] = "Redirect";
        ESpecialBuff[ESpecialBuff["PowerFocus"] = 11] = "PowerFocus";
        ESpecialBuff[ESpecialBuff["Predation"] = 12] = "Predation";
    })(ESpecialBuff = ExportedMonsterSanctuaryDataTypes.ESpecialBuff || (ExportedMonsterSanctuaryDataTypes.ESpecialBuff = {}));
    var EDamageType;
    (function (EDamageType) {
        EDamageType[EDamageType["Physical"] = 0] = "Physical";
        EDamageType[EDamageType["Magical"] = 1] = "Magical";
    })(EDamageType = ExportedMonsterSanctuaryDataTypes.EDamageType || (ExportedMonsterSanctuaryDataTypes.EDamageType = {}));
    var EShift;
    (function (EShift) {
        EShift[EShift["Normal"] = 0] = "Normal";
        EShift[EShift["Light"] = 1] = "Light";
        EShift[EShift["Dark"] = 2] = "Dark";
    })(EShift = ExportedMonsterSanctuaryDataTypes.EShift || (ExportedMonsterSanctuaryDataTypes.EShift = {}));
    var EStat;
    (function (EStat) {
        EStat[EStat["Attack"] = 0] = "Attack";
        EStat[EStat["Magic"] = 1] = "Magic";
        EStat[EStat["Defense"] = 2] = "Defense";
        EStat[EStat["Health"] = 3] = "Health";
        EStat[EStat["Mana"] = 4] = "Mana";
        EStat[EStat["CritChance"] = 5] = "CritChance";
        EStat[EStat["CritDamage"] = 6] = "CritDamage";
        EStat[EStat["ManaRegen"] = 7] = "ManaRegen";
        EStat[EStat["AttackMagic"] = 8] = "AttackMagic";
        EStat[EStat["Damage"] = 9] = "Damage";
        EStat[EStat["DamageReduction"] = 10] = "DamageReduction";
    })(EStat = ExportedMonsterSanctuaryDataTypes.EStat || (ExportedMonsterSanctuaryDataTypes.EStat = {}));
    var ETargetType;
    (function (ETargetType) {
        ETargetType[ETargetType["SingleEnemy"] = 0] = "SingleEnemy";
        ETargetType[ETargetType["AllEnemies"] = 1] = "AllEnemies";
        ETargetType[ETargetType["Self"] = 2] = "Self";
        ETargetType[ETargetType["SingleAlly"] = 3] = "SingleAlly";
        ETargetType[ETargetType["AllAllies"] = 4] = "AllAllies";
        ETargetType[ETargetType["DeadAlly"] = 5] = "DeadAlly";
    })(ETargetType = ExportedMonsterSanctuaryDataTypes.ETargetType || (ExportedMonsterSanctuaryDataTypes.ETargetType = {}));
})(ExportedMonsterSanctuaryDataTypes = exports.ExportedMonsterSanctuaryDataTypes || (exports.ExportedMonsterSanctuaryDataTypes = {}));
