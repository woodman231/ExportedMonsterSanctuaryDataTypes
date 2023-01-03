export namespace ExportedMonsterSanctuaryDataTypes {
    export enum BuffType {
        Might = 0,
        Sorcery = 1,
        Glory = 2,
        Sidekick = 3,
        Channel = 4,
        Regeneration = 5,
        Agility = 6,
        SpellShield = 7,
        Barrier = 8,
        Random = 9,
    }
    export enum EElement {
        Neutral = 0,
        Fire = 1,
        Water = 2,
        Wind = 3,
        Earth = 4,
        Physical = 5,
        Magical = 6,
        Debuff = 7,
        NoElement = 8,
        QuadElement = 9,
    }
    export enum DebuffType {
        Weakness = 0,
        Shock = 1,
        Poison = 2,
        Chill = 3,
        Burn = 4,
        ArmorBreak = 5,
        Random = 6,
    }
    export enum EDamageType {
        Physical = 0,
        Magical = 1,
    }
    export enum EMonsterType {
        None = 0,
        Aquatic = 1,
        Aerial = 2,
        Mechanical = 3,
        Nature = 4,
        Spirit = 5,
        Reptile = 6,
        Beast = 7,
        Dragon = 8,
        Occult = 9,
        Slime = 10,
        Insect = 11,
        Bird = 12,
        Fish = 13,
        Goblin = 14,
        Warrior = 15,
        Mage = 16,
        Worm = 17,
        Changeling = 18,
        Ancient = 19,
    }
    export enum EquipmentType {
        Weapon = 0,
        Armor = 1,
        Headgear = 2,
        Necklace = 3,
        Ring = 4,
        Misc = 5,
    }
    export enum EStat {
        Attack = 0,
        Magic = 1,
        Defense = 2,
        Health = 3,
        Mana = 4,
        CritChance = 5,
        CritDamage = 6,
        ManaRegen = 7,
        AttackMagic = 8,
        Damage = 9,
        DamageReduction = 10,
    }
    export enum EShift {
        Normal = 0,
        Light = 1,
        Dark = 2,
    }
    export enum ESpecialBuff {
        Infinity = 0,
        Champion = 1,
        Charge = 2,
        Bleed = 3,
        Weakness = 4,
        Resistance = 5,
        Wound = 6,
        Age = 7,
        Blind = 8,
        Tether = 9,
        Redirect = 10,
        PowerFocus = 11,
        Predation = 12,
    }
    export enum ETargetType {
        SingleEnemy = 0,
        AllEnemies = 1,
        Self = 2,
        SingleAlly = 3,
        AllAllies = 4,
        DeadAlly = 5,
    }
    export interface EnumDetail {
        KeyValueObjects: KeyValueObject[];
        KeyValues: { [key: string]: number }
        InvertedKeyValues: { [key: string]: string }
    }
    export interface KeyValueObject {
        Key: string;
        Value: number;
    }
    export interface Buff {
        Name: string;
        Value: number;
        Icon: string;
        Description: string;
    }
    export interface Debuff {
        Name: string;
        Value: number;
        Icon: string;
        Description: string;
    }
    export interface SpecialBuff {
        Name: string;
        Value: number;
        Icon: string;
        Description: string;
        IsNegative: boolean;
    }
    export interface Item {
        ID: number;
        Name: string;
        Description: string;
        Icon: string;
        Price: number;
        IsEquipment?: boolean;
        EquipmentProperties?: EquipmentProperties;
        IsEquipmentAbyssalSword?: boolean;
        EquipmentAbyssalSwordProperties?: EquipmentAbyssalSwordProperties;
        IsEgg?: boolean;
        EggProperties?: EggProperties;
        IsUniqueItem?: boolean;
        UniqueItemProperties?: UniqueItemProperties;
        IsConsumable?: boolean;
        ConsumableProperties?: ConsumableProperties;
        IsFood?: boolean;
        FoodProperties?: FoodProperties;
        IsEquipmentCharge?: boolean;
        EquipmentChargeProperties?: EquipmentChargeProperties;
        IsKeyItem?: boolean;
        KeyItemProperties?: KeyItemProperties;
        IsCombatConsumable?: boolean;
        CombatConsumableProperties?: CombatConsumableProperties;
        IsCraftMaterial?: boolean;
        CraftMaterialProperties?: CraftMaterialProperties;
        IsEquipmentBloodVessel?: boolean;
        EquipmentBloodVesselProperties?: EquipmentBloodVesselProperties;
        IsEquipmentDamageHit?: boolean;
        EquipmentDamageHitProperties?: EquipmentDamageHitProperties;
        IsEquipmentBuffStacks?: boolean;
        EquipmentBuffStacksProperties?: EquipmentBuffStacksProperties;
        IsEquipmentImproveDebuffs?: boolean;
        EquipmentImproveDebuffsProperties?: EquipmentImproveDebuffsProperties;
        IsShiftStone?: boolean;
        ShiftStoneProperties?: ShiftStoneProperties;
        IsCatalyst?: boolean;
        CatalystProperties?: CatalystProperties;
        IsCraftBox?: boolean;
        CraftBoxProperties?: CraftBoxProperties;
        IsCrystalShard?: boolean;
        CrystalShardProperties?: CrystalShardProperties;
        IsEquipmentAddBuff?: boolean;
        EquipmentAddBuffProperties?: EquipmentAddBuffProperties;
        IsEquipmentHexingSupport?: boolean;
        EquipmentHexingSupportProperties?: EquipmentHexingSupportProperties;
        IsEquipmentHourglass?: boolean;
        EquipmentHourglassProperties?: EquipmentHourglassProperties;
        IsLevelBadge?: boolean;
        LevelBadgeProperties?: LevelBadgeProperties;
        IsEquipmentDebuffOnHit?: boolean;
        EquipmentDebuffOnHitProperties?: EquipmentDebuffOnHitProperties;
        IsEquipmentLuckyClover?: boolean;
        EquipmentLuckyCloverProperties?: EquipmentLuckyCloverProperties;
        IsEquipmentHeal?: boolean;
        EquipmentHealProperties?: EquipmentHealProperties;
        IsMonsterBell?: boolean;
        MonsterBellProperties?: MonsterBellProperties;
        IsEquipmentPurifyingMace?: boolean;
        EquipmentPurifyingMaceProperties?: EquipmentPurifyingMaceProperties;
        IsEquipmentRemoveDebuff?: boolean;
        EquipmentRemoveDebuffProperties?: EquipmentRemoveDebuffProperties;
        IsLootBox?: boolean;
        LootBoxProperties?: LootBoxProperties;
        IsEquipmentShield?: boolean;
        EquipmentShieldProperties?: EquipmentShieldProperties;
        IsSkillPotion?: boolean;
        SkillPotionProperties?: SkillPotionProperties;
        IsSkillResetter?: boolean;
        SkillResetterProperties?: SkillPotionProperties;
        IsEquipmentDebuffOnGettingHit?: boolean;
        EquipmentDebuffOnGettingHitProperties?: EquipmentDebuffOnGettingHitProperties;
        IsEquipmentThornTendril?: boolean;
        EquipmentThornTendrilProperties?: EquipmentThornTendrilProperties;
    }
    export interface EquipmentThornTendrilProperties {
        CritDamageMultiplier: number;
        IsOnGettingAttacked: boolean;
    }
    export interface EquipmentDebuffOnGettingHitProperties {
        Debuff: DebuffType;
        Chance: number;
        IsOnGettingAttacked: boolean;
    }
    export interface SkillPotionProperties {
    }
    export interface EquipmentShieldProperties {
        ShieldAmount: number;
        ManaScaling: number;
        ShieldType: number;
        IsOnCombatStart: boolean;
        IsOnTurnStart: boolean;
        IsOnReceiveBuff: boolean;
    }
    export interface LootBoxProperties {
        Loot: number[];
        SFXGetReward: SFXGetReward;
    }
    export interface EquipmentRemoveDebuffProperties {
        RemoveDebuffCount: number;
        IsOnActionStarted: boolean;
    }
    export interface EquipmentPurifyingMaceProperties {
        StacksRemove: number;
        IsOnActionStarted: boolean;
    }
    export interface MonsterBellProperties {
        SFXBell: SFXGetReward;
    }
    export interface EquipmentHealProperties {
        HealAmount: number;
        HealType: number;
        HealingStat: EStat;
        IsOnCriticalHit: boolean;
        IsOnCounterAttackHit: boolean;
        IsOnActionStarted: boolean;
        IsOnTurnStart: boolean;
    }
    export interface EquipmentLuckyCloverProperties {
        BuffChance: number;
        IsOnCriticalHit: boolean;
    }
    export interface EquipmentDebuffOnHitProperties {
        Debuff1: DebuffType;
        Debuff2: DebuffType;
        Chance: number;
        IsOnActionDamageHit: boolean;
        IsOnCounterAttackHit: boolean;
    }
    export interface LevelBadgeProperties {
        MaxLevel: number;
    }
    export interface EquipmentHourglassProperties {
        AgeBonusValue: number;
    }
    export interface EquipmentHexingSupportProperties {
        HealActions: boolean;
        BuffActions: boolean;
        ShieldActions: boolean;
        DebuffCount: number;
        IsOnActionStarted: boolean;
    }
    export interface EquipmentAddBuffProperties {
        AddType: number;
        BuffCount: number;
        IsOnCombatStart: boolean;
        IsOnActionBuffStarted: boolean;
        IsOnActionHealStarted: boolean;
        IsOnActionShieldStarted: boolean;
    }
    export interface CrystalShardProperties {
        SFXTeleport?: any;
        TeleportSceneName: string;
        SpecialHandlingScenes: string[];
        SpecialHandlingBool: string;
        VariableCondition: string;
        EndSpecialHandlingBool: string;
        SpecialHandlingTargetScene: string;
    }
    export interface CraftBoxProperties {
        Rewards: Reward[];
        SFXGetReward: SFXGetReward;
    }
    export interface SFXGetReward {
        length: number;
        samples: number;
        channels: number;
        frequency: number;
        isReadyToPlay: boolean;
        loadType: number;
        preloadAudioData: boolean;
        ambisonic: boolean;
        loadState: number;
        loadInBackground: boolean;
        name: string;
        hideFlags: number;
    }
    export interface Reward {
        CommonRewards: Item[];
        RareRewards: Item[];
        Rank: number;
    }
    export interface CatalystProperties {
        Icon: string;
        BaseMonster: number;
        AdditionalBaseMonster?: number[];
        EvolveMonster: number;
    }
    export interface ShiftStoneProperties {
        StoneType: number;
    }
    export interface EquipmentImproveDebuffsProperties {
        DebuffModifier: number;
    }
    export interface EquipmentBuffStacksProperties {
        BuffStacks: number[];
        StackIncrease: number;
    }
    export interface EquipmentDamageHitProperties {
        Damage: number;
        AnimElement?: any;
        IsOnActionDamageStarted: boolean;
    }
    export interface EquipmentBloodVesselProperties {
        ManaRegenerated: number;
        IsOnAllyApplySpecialBuff: boolean;
    }
    export interface CombatConsumableProperties {
        EffectAction?: number;
        Icon: string;
        Description: string;
        RetreatItem: boolean;
    }
    export interface KeyItemProperties {
        Area?: any;
    }
    export interface EquipmentChargeProperties {
        ChargesCount: number;
        ChargeType: number;
        IsOnCombatStart: boolean;
        IsOnTurnStart: boolean;
    }
    export interface FoodProperties {
        Stat: EStat;
        Amount: number;
        Level: number;
        PrecedingFood?: number;
        SubsequentFood?: number;
    }
    export interface ConsumableProperties {
        Icon: string;
        Description: string;
    }
    export interface UniqueItemProperties {
        Icon: string;
        ItemID: number;
        DisplayInInventory: boolean;
        DisplayMultiplesInInventory: boolean;
        Description: string;
    }
    export interface EggProperties {
        Monster: number;
    }
    export interface EquipmentAbyssalSwordProperties {
        Chance: number;
        IsOnActionDamageStarted: boolean;
        IsOnGettingAttacked: boolean;
    }
    export interface EquipmentProperties {
        Type: EquipmentType;
        Icon: string;
        Attack: number;
        Magic: number;
        Defense: number;
        CritChance: number;
        CritDamage: number;
        Health: number;
        Mana: number;
        ManaRegeneration: number;
        DamageBonus: number;
        NonCritDamage: number;
        HealBonus: number;
        ShieldBonus: number;
        DodgeChance: number;
        Unique: boolean;
        OnlyUnshifted: boolean;
        OnlyFamiliars: boolean;
        UpgradesTo?: number;
        UpgradeMaterials: UpgradeMaterial[];
        FullDefenseOffHand: boolean;
        IsInstrument: boolean;
    }
    export interface UpgradeMaterial {
        Item: Item;
        Quantity: number;
    }
    export interface CraftMaterialProperties {
        Description: string;
        Level: number;
    }
    export interface Skill {
        ID: number;
        Name: string;
        Description: string;
        IsPassiveSkill?: boolean;
        PassiveSkillProperties?: PassiveSkillProperties;
        IsPassiveEnlighten?: boolean;
        PassiveEnlightenProperties?: PassiveEnlightenProperties;
        IsPassiveCurseChain?: boolean;
        PassiveCurseChainProperties?: PassiveCurseChainProperties;
        IsBaseAction?: boolean;
        BaseActionProperties?: BaseActionProperties;
        IsActionModifier?: boolean;
        ActionModifierProperties?: ActionModifierProperties;
        IsActionDamage?: boolean;
        ActionDamageProperties?: ActionDamageProperties;
        IsActionSpecialBuff?: boolean;
        ActionSpecialBuffProperties?: ActionSpecialBuffProperties;
        IsPassiveElementModifier?: boolean;
        PassiveElementModifierProperties?: PassiveElementModifierProperties;
        IsPassiveImproveStat?: boolean;
        PassiveImproveStatProperties?: PassiveImproveStatProperties;
        IsPassiveSpecialBuffChance?: boolean;
        PassiveSpecialBuffChanceProperties?: PassiveSpecialBuffChanceProperties;
        IsPassiveInitialDarkness?: boolean;
        PassiveInitialDarknessProperties?: PassiveInitialDarknessProperties;
        IsPassiveTrueDarkness?: boolean;
        PassiveTrueDarknessProperties?: PassiveTrueDarknessProperties;
        IsPassiveDodging?: boolean;
        PassiveDodgingProperties?: PassiveDodgingProperties;
        IsPassiveUncanny?: boolean;
        PassiveUncannyProperties?: PassiveUncannyProperties;
        IsPassiveMartialProwess?: boolean;
        PassiveMartialProwessProperties?: PassiveMartialProwessProperties;
        IsPassiveComboMaster?: boolean;
        PassiveComboMasterProperties?: PassiveComboMasterProperties;
        IsPassiveCascade?: boolean;
        PassiveCascadeProperties?: PassiveCascadeProperties;
        IsPassiveStatic?: boolean;
        PassiveStaticProperties?: PassiveStaticProperties;
        IsPassiveTransfusion?: boolean;
        PassiveTransfusionProperties?: PassiveTransfusionProperties;
        IsActionHeal?: boolean;
        ActionHealProperties?: ActionHealProperties;
        IsActionRemoveDebuff?: boolean;
        ActionRemoveDebuffProperties?: ActionRemoveDebuffProperties;
        IsPassiveWarlockHealing?: boolean;
        PassiveWarlockHealingProperties?: PassiveWarlockHealingProperties;
        IsPassiveBlindingSupport?: boolean;
        PassiveBlindingSupportProperties?: PassiveBlindingSupportProperties;
        IsActionBuff?: boolean;
        ActionBuffProperties?: ActionBuffProperties;
        IsPassiveAssistance?: boolean;
        PassiveAssistanceProperties?: PassiveWarlockHealingProperties;
        IsPassiveIncreaseBuffStacks?: boolean;
        PassiveIncreaseBuffStacksProperties?: PassiveIncreaseBuffStacksProperties;
        IsPassiveComboHealing?: boolean;
        PassiveComboHealingProperties?: PassiveComboHealingProperties;
        IsActionDebuff?: boolean;
        ActionDebuffProperties?: ActionDebuffProperties;
        IsPassiveDebuffChance?: boolean;
        PassiveDebuffChanceProperties?: PassiveDebuffChanceProperties;
        IsPassiveCleanse?: boolean;
        PassiveCleanseProperties?: PassiveCleanseProperties;
        IsPassiveWeaponBreak?: boolean;
        PassiveWeaponBreakProperties?: PassiveWeaponBreakProperties;
        IsActionRemoveBuff?: boolean;
        ActionRemoveBuffProperties?: ActionRemoveDebuffProperties;
        IsPassiveAutoHeal?: boolean;
        PassiveAutoHealProperties?: PassiveAutoHealProperties;
        IsPassiveIncreaseDebuffStacks?: boolean;
        PassiveIncreaseDebuffStacksProperties?: PassiveIncreaseDebuffStacksProperties;
        IsPassiveBuffSteal?: boolean;
        PassiveBuffStealProperties?: PassiveBuffStealProperties;
        IsPassiveHealCharging?: boolean;
        PassiveHealChargingProperties?: PassiveHealChargingProperties;
        IsActionShield?: boolean;
        ActionShieldProperties?: ActionShieldProperties;
        IsPassivePhoenixAffinity?: boolean;
        PassivePhoenixAffinityProperties?: PassivePhoenixAffinityProperties;
        IsActionRevive?: boolean;
        ActionReviveProperties?: ActionReviveProperties;
        IsPassiveNecromancy?: boolean;
        PassiveNecromancyProperties?: PassiveNecromancyProperties;
        IsPassiveHealingShield?: boolean;
        PassiveHealingShieldProperties?: PassiveHealingShieldProperties;
        IsPassiveShieldAura?: boolean;
        PassiveShieldAuraProperties?: PassiveShieldAuraProperties;
        IsPassiveHexingSupport?: boolean;
        PassiveHexingSupportProperties?: PassiveHexingSupportProperties;
        IsPassiveStartCombatDebuff?: boolean;
        PassiveStartCombatDebuffProperties?: PassiveStartCombatDebuffProperties;
        IsPassiveImproveStatDependant?: boolean;
        PassiveImproveStatDependantProperties?: PassiveImproveStatDependantProperties;
        IsPassiveArmorBypass?: boolean;
        PassiveArmorBypassProperties?: PassiveArmorBypassProperties;
        IsPassiveBloodDrive?: boolean;
        PassiveBloodDriveProperties?: PassiveBloodDriveProperties;
        IsActionTypeRestriction?: boolean;
        ActionTypeRestrictionProperties?: ActionTypeRestrictionProperties;
        IsPassiveFeast?: boolean;
        PassiveFeastProperties?: PassiveFeastProperties;
        IsPassiveSaboteursShield?: boolean;
        PassiveSaboteursShieldProperties?: PassiveSaboteursShieldProperties;
        IsActionShieldBurst?: boolean;
        ActionShieldBurstProperties?: ActionShieldBurstProperties;
        IsPassiveCongeal?: boolean;
        PassiveCongealProperties?: ActionModifierProperties;
        IsPassivePrecision?: boolean;
        PassivePrecisionProperties?: PassivePrecisionProperties;
        IsPassiveBleed?: boolean;
        PassiveBleedProperties?: PassiveBleedProperties;
        IsPassiveDebuffOnCrit?: boolean;
        PassiveDebuffOnCritProperties?: PassiveDebuffOnCritProperties;
        IsActionDebuffOnHit?: boolean;
        ActionDebuffOnHitProperties?: ActionDebuffOnHitProperties;
        IsPassiveLifesteal?: boolean;
        PassiveLifestealProperties?: PassiveLifestealProperties;
        IsPassiveBleedOut?: boolean;
        PassiveBleedOutProperties?: ActionModifierProperties;
        IsPassiveHealMastery?: boolean;
        PassiveHealMasteryProperties?: PassiveHealMasteryProperties;
        IsPassiveCriticalHybridization?: boolean;
        PassiveCriticalHybridizationProperties?: PassiveCriticalHybridizationProperties;
        IsPassiveSpecialBuffDamageModifier?: boolean;
        PassiveSpecialBuffDamageModifierProperties?: PassiveSpecialBuffDamageModifierProperties;
        IsPassiveAssaultMastery?: boolean;
        PassiveAssaultMasteryProperties?: PassiveAssaultMasteryProperties;
        IsPassiveAuraIncreaseStats?: boolean;
        PassiveAuraIncreaseStatsProperties?: PassiveAuraIncreaseStatsProperties;
        IsPassiveAdaptiveEvolution?: boolean;
        PassiveAdaptiveEvolutionProperties?: PassiveAdaptiveEvolutionProperties;
        IsPassiveElementCritChance?: boolean;
        PassiveElementCritChanceProperties?: PassiveElementCritChanceProperties;
        IsPassiveDamageOnDebuff?: boolean;
        PassiveDamageOnDebuffProperties?: PassiveDamageOnDebuffProperties;
        IsPassiveCriticalDefense?: boolean;
        PassiveCriticalDefenseProperties?: PassiveCriticalDefenseProperties;
        IsPassiveStartCombatShield?: boolean;
        PassiveStartCombatShieldProperties?: PassiveStartCombatShieldProperties;
        IsPassiveRecklessMending?: boolean;
        PassiveRecklessMendingProperties?: PassiveRecklessMendingProperties;
        IsPassiveDuality?: boolean;
        PassiveDualityProperties?: PassiveDualityProperties;
        IsPassiveSituationalSupport?: boolean;
        PassiveSituationalSupportProperties?: PassiveSituationalSupportProperties;
        IsPassiveOverheal?: boolean;
        PassiveOverhealProperties?: PassiveOverhealProperties;
        IsPassiveAntitoxin?: boolean;
        PassiveAntitoxinProperties?: PassiveAntitoxinProperties;
        IsPassiveEquipmentFocus?: boolean;
        PassiveEquipmentFocusProperties?: PassiveEquipmentFocusProperties;
        IsActionConditionalDamage?: boolean;
        ActionConditionalDamageProperties?: ActionConditionalDamageProperties;
        IsPassiveSevereUpkeep?: boolean;
        PassiveSevereUpkeepProperties?: PassiveSevereUpkeepProperties;
        IsPassiveToxicHealth?: boolean;
        PassiveToxicHealthProperties?: PassiveToxicHealthProperties;
        IsPassiveStartTurnBuff?: boolean;
        PassiveStartTurnBuffProperties?: PassiveStartTurnBuffProperties;
        IsPassiveBounty?: boolean;
        PassiveBountyProperties?: PassiveBountyProperties;
        IsPassiveHybridMastery?: boolean;
        PassiveHybridMasteryProperties?: PassiveHybridMasteryProperties;
        IsPassiveVenomousBite?: boolean;
        PassiveVenomousBiteProperties?: PassiveVenomousBiteProperties;
        IsPassiveManasymbiosis?: boolean;
        PassiveManasymbiosisProperties?: PassiveManasymbiosisProperties;
        IsPassiveExtraBuff?: boolean;
        PassiveExtraBuffProperties?: PassiveExtraBuffProperties;
        IsPassiveChannelingBalance?: boolean;
        PassiveChannelingBalanceProperties?: PassiveChannelingBalanceProperties;
        IsPassiveComboBuffing?: boolean;
        PassiveComboBuffingProperties?: PassiveComboBuffingProperties;
        IsPassiveBuffingHeal?: boolean;
        PassiveBuffingHealProperties?: PassiveBuffingHealProperties;
        IsPassiveBuffingShield?: boolean;
        PassiveBuffingShieldProperties?: PassiveBuffingShieldProperties;
        IsPassiveManaPotential?: boolean;
        PassiveManaPotentialProperties?: PassiveManaPotentialProperties;
        IsPassiveAutoRestore?: boolean;
        PassiveAutoRestoreProperties?: PassiveAutoRestoreProperties;
        IsPassiveStuckTight?: boolean;
        PassiveStuckTightProperties?: PassiveStuckTightProperties;
        IsPassiveDisoriented?: boolean;
        PassiveDisorientedProperties?: PassiveUncannyProperties;
        IsPassiveRenewal?: boolean;
        PassiveRenewalProperties?: PassiveRenewalProperties;
        IsPassiveBolster?: boolean;
        PassiveBolsterProperties?: ActionModifierProperties;
        IsPassiveAntiCurse?: boolean;
        PassiveAntiCurseProperties?: PassiveAntiCurseProperties;
        IsPassivePurify?: boolean;
        PassivePurifyProperties?: PassivePurifyProperties;
        IsPassiveHealingLink?: boolean;
        PassiveHealingLinkProperties?: PassiveHealingLinkProperties;
        IsPassiveSupply?: boolean;
        PassiveSupplyProperties?: PassiveSupplyProperties;
        IsPassiveChannelingSustain?: boolean;
        PassiveChannelingSustainProperties?: PassiveChannelingSustainProperties;
        IsPassiveManaCharging?: boolean;
        PassiveManaChargingProperties?: PassiveManaChargingProperties;
        IsPassiveMentor?: boolean;
        PassiveMentorProperties?: PassiveMentorProperties;
        IsPassiveBuffingRestore?: boolean;
        PassiveBuffingRestoreProperties?: PassiveBuffingRestoreProperties;
        IsPassiveChargingBuffs?: boolean;
        PassiveChargingBuffsProperties?: PassiveChargingBuffsProperties;
        IsPassiveEquipmentSlot?: boolean;
        PassiveEquipmentSlotProperties?: PassiveEquipmentSlotProperties;
        IsPassiveHeroicDefense?: boolean;
        PassiveHeroicDefenseProperties?: PassiveHeroicDefenseProperties;
        IsPassiveHeroicParty?: boolean;
        PassiveHeroicPartyProperties?: PassiveHeroicPartyProperties;
        IsPassiveBuffMultiplier?: boolean;
        PassiveBuffMultiplierProperties?: PassiveBuffMultiplierProperties;
        IsPassiveRecuperate?: boolean;
        PassiveRecuperateProperties?: PassiveRecuperateProperties;
        IsPassiveDemonicTheft?: boolean;
        PassiveDemonicTheftProperties?: PassiveDemonicTheftProperties;
        IsPassiveDoubleStrike?: boolean;
        PassiveDoubleStrikeProperties?: PassiveDoubleStrikeProperties;
        IsPassiveMeditate?: boolean;
        PassiveMeditateProperties?: PassiveMeditateProperties;
        IsPassiveKillingDance?: boolean;
        PassiveKillingDanceProperties?: PassiveMeditateProperties;
        IsPassiveCriticalApex?: boolean;
        PassiveCriticalApexProperties?: PassiveStuckTightProperties;
        IsPassiveCriticalHeal?: boolean;
        PassiveCriticalHealProperties?: ActionModifierProperties;
        IsPassivePathTo?: boolean;
        PassivePathToProperties?: PassivePathToProperties;
        IsPassivePunishment?: boolean;
        PassivePunishmentProperties?: PassivePunishmentProperties;
        IsPassiveHeroism?: boolean;
        PassiveHeroismProperties?: PassiveHeroismProperties;
        IsPassiveCriticalMass?: boolean;
        PassiveCriticalMassProperties?: PassiveCriticalMassProperties;
        IsPassiveEvasion?: boolean;
        PassiveEvasionProperties?: PassiveEvasionProperties;
        IsPassiveCleansingSidekick?: boolean;
        PassiveCleansingSidekickProperties?: PassiveCleansingSidekickProperties;
        IsPassiveAntiCascade?: boolean;
        PassiveAntiCascadeProperties?: PassiveAntiCascadeProperties;
        IsPassiveAging?: boolean;
        PassiveAgingProperties?: PassiveHexingSupportProperties;
        IsPassiveOutlast?: boolean;
        PassiveOutlastProperties?: PassiveOutlastProperties;
        IsPassiveCriticalBuff?: boolean;
        PassiveCriticalBuffProperties?: PassiveCriticalBuffProperties;
        IsPassiveAgeOfPurification?: boolean;
        PassiveAgeOfPurificationProperties?: PassiveAgeOfPurificationProperties;
        IsPassiveBlacksmithing?: boolean;
        PassiveBlacksmithingProperties?: PassiveBlacksmithingProperties;
        IsPassiveOvercast?: boolean;
        PassiveOvercastProperties?: PassiveOvercastProperties;
        IsPassiveDoubleImpact?: boolean;
        PassiveDoubleImpactProperties?: PassiveDoubleImpactProperties;
        IsPassiveGoldSense?: boolean;
        PassiveGoldSenseProperties?: PassiveGoldSenseProperties;
        IsPassiveGoldAura?: boolean;
        PassiveGoldAuraProperties?: PassiveGoldAuraProperties;
        IsPassiveShieldProcs?: boolean;
        PassiveShieldProcsProperties?: PassiveShieldProcsProperties;
        IsPassiveBarricade?: boolean;
        PassiveBarricadeProperties?: PassiveBarricadeProperties;
        IsPassivePotionMastery?: boolean;
        PassivePotionMasteryProperties?: PassivePotionMasteryProperties;
        IsPassiveWonderPotion?: boolean;
        PassiveWonderPotionProperties?: PassiveWonderPotionProperties;
        IsPassiveCopyShield?: boolean;
        PassiveCopyShieldProperties?: PassiveCopyShieldProperties;
        IsPassiveComboShielding?: boolean;
        PassiveComboShieldingProperties?: PassiveComboShieldingProperties;
        IsPassiveShadowProc?: boolean;
        PassiveShadowProcProperties?: PassiveShadowProcProperties;
        IsActionRemoveStacks?: boolean;
        ActionRemoveStacksProperties?: ActionRemoveDebuffProperties;
        IsPassiveChord?: boolean;
        PassiveChordProperties?: PassiveChordProperties;
        IsPassiveExploit?: boolean;
        PassiveExploitProperties?: PassiveExploitProperties;
        IsPassiveSharedBuff?: boolean;
        PassiveSharedBuffProperties?: PassiveSharedBuffProperties;
        IsPassiveGloriousSpark?: boolean;
        PassiveGloriousSparkProperties?: PassiveGloriousSparkProperties;
        IsMightyBoost?: boolean;
        MightyBoostProperties?: MightyBoostProperties;
        IsPassiveBuffCorruption?: boolean;
        PassiveBuffCorruptionProperties?: PassiveBuffCorruptionProperties;
        IsPassiveCriticalBoon?: boolean;
        PassiveCriticalBoonProperties?: PassiveCriticalBoonProperties;
        IsPassiveChargedUp?: boolean;
        PassiveChargedUpProperties?: PassiveChargedUpProperties;
        IsPassiveDevour?: boolean;
        PassiveDevourProperties?: PassiveDevourProperties;
        IsPassiveStartCombatCharges?: boolean;
        PassiveStartCombatChargesProperties?: PassiveStartCombatChargesProperties;
        IsPassiveCriticalEdge?: boolean;
        PassiveCriticalEdgeProperties?: PassiveCriticalEdgeProperties;
        IsPassiveSplatter?: boolean;
        PassiveSplatterProperties?: PassiveSplatterProperties;
        IsPassiveBrawnOverBrains?: boolean;
        PassiveBrawnOverBrainsProperties?: ActionModifierProperties;
        IsPassiveBuffCharging?: boolean;
        PassiveBuffChargingProperties?: PassiveBuffChargingProperties;
        IsPassiveLeadership?: boolean;
        PassiveLeadershipProperties?: PassiveLeadershipProperties;
        IsPassiveManaConflux?: boolean;
        PassiveManaConfluxProperties?: PassiveManaConfluxProperties;
        IsPassiveHardShield?: boolean;
        PassiveHardShieldProperties?: PassiveHardShieldProperties;
        IsPassiveMagicAttack?: boolean;
        PassiveMagicAttackProperties?: PassiveMagicAttackProperties;
        IsPassiveElementAffinity?: boolean;
        PassiveElementAffinityProperties?: PassiveElementAffinityProperties;
        IsPassiveCriticalSorcery?: boolean;
        PassiveCriticalSorceryProperties?: PassiveCriticalSorceryProperties;
        IsPassiveSpecialBuffOnGettingHit?: boolean;
        PassiveSpecialBuffOnGettingHitProperties?: PassiveSpecialBuffOnGettingHitProperties;
        IsPassiveEnergize?: boolean;
        PassiveEnergizeProperties?: PassiveEnergizeProperties;
        IsPassiveChargeAmplifier?: boolean;
        PassiveChargeAmplifierProperties?: PassiveChargeAmplifierProperties;
        IsPassiveSpreadDebuff?: boolean;
        PassiveSpreadDebuffProperties?: PassiveSpreadDebuffProperties;
        IsPassiveElectrolytes?: boolean;
        PassiveElectrolytesProperties?: PassiveElectrolytesProperties;
        IsPassiveRevenge?: boolean;
        PassiveRevengeProperties?: PassiveRevengeProperties;
        IsPassiveChargingShield?: boolean;
        PassiveChargingShieldProperties?: PassiveChargingShieldProperties;
        IsPassiveSteampunk?: boolean;
        PassiveSteampunkProperties?: PassiveSteampunkProperties;
        IsPassiveComboInitiator?: boolean;
        PassiveComboInitiatorProperties?: PassiveComboInitiatorProperties;
        IsPassivePreparation?: boolean;
        PassivePreparationProperties?: PassiveInitialDarknessProperties;
        IsPassiveDominance?: boolean;
        PassiveDominanceProperties?: PassiveDominanceProperties;
        IsPassiveToxicSupport?: boolean;
        PassiveToxicSupportProperties?: PassiveToxicSupportProperties;
        IsPassivePlague?: boolean;
        PassivePlagueProperties?: PassivePlagueProperties;
        IsPassiveCorrosion?: boolean;
        PassiveCorrosionProperties?: PassiveCorrosionProperties;
        IsPassiveDivineShield?: boolean;
        PassiveDivineShieldProperties?: PassiveDivineShieldProperties;
        IsPassiveFirstImpact?: boolean;
        PassiveFirstImpactProperties?: PassiveFirstImpactProperties;
        IsPassiveShatter?: boolean;
        PassiveShatterProperties?: PassiveShatterProperties;
        IsPassiveBerserk?: boolean;
        PassiveBerserkProperties?: PassiveBerserkProperties;
        IsPassiveEmergencyChannel?: boolean;
        PassiveEmergencyChannelProperties?: PassiveEmergencyChannelProperties;
        IsPassiveSingleStrike?: boolean;
        PassiveSingleStrikeProperties?: PassiveSingleStrikeProperties;
        IsPassiveCriticalConsistency?: boolean;
        PassiveCriticalConsistencyProperties?: PassiveCriticalConsistencyProperties;
        IsPassiveImprovedAssault?: boolean;
        PassiveImprovedAssaultProperties?: PassiveHeroicPartyProperties;
        IsPassiveSpawnOfChampions?: boolean;
        PassiveSpawnOfChampionsProperties?: PassiveSpawnOfChampionsProperties;
        IsPassiveMystify?: boolean;
        PassiveMystifyProperties?: PassiveMystifyProperties;
        IsPassiveSevereHit?: boolean;
        PassiveSevereHitProperties?: PassiveSevereHitProperties;
        IsPassiveUtopia?: boolean;
        PassiveUtopiaProperties?: PassiveUtopiaProperties;
        IsPassiveRelentless?: boolean;
        PassiveRelentlessProperties?: PassiveRelentlessProperties;
        IsPassiveManaGenerator?: boolean;
        PassiveManaGeneratorProperties?: PassiveManaGeneratorProperties;
        IsPassiveKingOfBeasts?: boolean;
        PassiveKingOfBeastsProperties?: PassiveKingOfBeastsProperties;
        IsPassiveObserve?: boolean;
        PassiveObserveProperties?: PassiveObserveProperties;
        IsPassiveEnergyConversion?: boolean;
        PassiveEnergyConversionProperties?: PassiveEnergyConversionProperties;
        IsPassiveForcefulBuff?: boolean;
        PassiveForcefulBuffProperties?: PassiveForcefulBuffProperties;
        IsPassiveAssaultShield?: boolean;
        PassiveAssaultShieldProperties?: PassiveAssaultShieldProperties;
        IsPassiveMagnetize?: boolean;
        PassiveMagnetizeProperties?: PassiveMagnetizeProperties;
        IsPassiveCriticalBase?: boolean;
        PassiveCriticalBaseProperties?: PassiveCriticalBaseProperties;
        IsActionRedirect?: boolean;
        ActionRedirectProperties?: ActionRedirectProperties;
        IsPassiveDebuffOnGettingHit?: boolean;
        PassiveDebuffOnGettingHitProperties?: PassiveDebuffOnGettingHitProperties;
        IsPassiveProtector?: boolean;
        PassiveProtectorProperties?: PassiveProtectorProperties;
        IsPassiveChainReaction?: boolean;
        PassiveChainReactionProperties?: PassiveChainReactionProperties;
        IsPassiveVariety?: boolean;
        PassiveVarietyProperties?: PassiveVarietyProperties;
        IsPassiveImproveBuff?: boolean;
        PassiveImproveBuffProperties?: PassiveImproveBuffProperties;
        IsPassiveEmpower?: boolean;
        PassiveEmpowerProperties?: PassiveEmpowerProperties;
        IsPassiveManeki?: boolean;
        PassiveManekiProperties?: PassiveCriticalBoonProperties;
        IsPassiveReflect?: boolean;
        PassiveReflectProperties?: PassiveReflectProperties;
        IsPassiveDisarmingShielding?: boolean;
        PassiveDisarmingShieldingProperties?: PassiveDisarmingShieldingProperties;
        IsPassiveVolatileShield?: boolean;
        PassiveVolatileShieldProperties?: PassiveVolatileShieldProperties;
        IsPassiveShieldCrush?: boolean;
        PassiveShieldCrushProperties?: PassiveShieldCrushProperties;
        IsPassiveElementalBreak?: boolean;
        PassiveElementalBreakProperties?: PassiveElementalBreakProperties;
        IsPassiveCenterOfMass?: boolean;
        PassiveCenterOfMassProperties?: PassiveCenterOfMassProperties;
        IsPassiveHardShell?: boolean;
        PassiveHardShellProperties?: PassiveHardShellProperties;
        IsPassiveGiantsbane?: boolean;
        PassiveGiantsbaneProperties?: PassiveGiantsbaneProperties;
        IsPassiveAeons?: boolean;
        PassiveAeonsProperties?: PassiveAeonsProperties;
        IsPassiveHeroicAssault?: boolean;
        PassiveHeroicAssaultProperties?: PassiveHeroicAssaultProperties;
        IsPassiveTaunt?: boolean;
        PassiveTauntProperties?: PassiveTauntProperties;
        IsPassiveSensitivity?: boolean;
        PassiveSensitivityProperties?: PassiveDominanceProperties;
        IsPassiveSidekickSupport?: boolean;
        PassiveSidekickSupportProperties?: PassiveSidekickSupportProperties;
        IsPassiveBuffMastery?: boolean;
        PassiveBuffMasteryProperties?: ActionModifierProperties;
        IsPassiveDebuffMastery?: boolean;
        PassiveDebuffMasteryProperties?: ActionModifierProperties;
        IsPassiveDeathBlow?: boolean;
        PassiveDeathBlowProperties?: PassiveStaticProperties;
        IsPassiveHex?: boolean;
        PassiveHexProperties?: PassiveHexProperties;
        IsPassiveProliferate?: boolean;
        PassiveProliferateProperties?: PassiveProliferateProperties;
        IsPassivePredation?: boolean;
        PassivePredationProperties?: PassiveHexingSupportProperties;
        IsPassiveManaBolster?: boolean;
        PassiveManaBolsterProperties?: PassiveManaBolsterProperties;
        IsPassiveStaticGlory?: boolean;
        PassiveStaticGloryProperties?: PassiveDominanceProperties;
        IsPassiveSprawl?: boolean;
        PassiveSprawlProperties?: PassiveSprawlProperties;
        IsPassiveReflectBleed?: boolean;
        PassiveReflectBleedProperties?: PassiveReflectBleedProperties;
        IsSorceryBoost?: boolean;
        SorceryBoostProperties?: SorceryBoostProperties;
        IsPassiveDraconicLineage?: boolean;
        PassiveDraconicLineageProperties?: PassiveDraconicLineageProperties;
        IsPassiveDragonBlood?: boolean;
        PassiveDragonBloodProperties?: PassiveDragonBloodProperties;
        IsPassiveDragonMastery?: boolean;
        PassiveDragonMasteryProperties?: PassiveDragonMasteryProperties;
        IsPassiveSubZero?: boolean;
        PassiveSubZeroProperties?: PassiveDominanceProperties;
        IsPassiveCurseTransfusion?: boolean;
        PassiveCurseTransfusionProperties?: PassiveCurseTransfusionProperties;
        IsPassiveManaDonor?: boolean;
        PassiveManaDonorProperties?: PassiveManaDonorProperties;
        IsPassiveManaBuffer?: boolean;
        PassiveManaBufferProperties?: PassiveManaBufferProperties;
        IsPassiveGoldenAge?: boolean;
        PassiveGoldenAgeProperties?: PassiveAgeOfPurificationProperties;
        IsPassiveBloodMagic?: boolean;
        PassiveBloodMagicProperties?: PassiveBloodMagicProperties;
        IsPassiveDeepWounds?: boolean;
        PassiveDeepWoundsProperties?: PassiveDeepWoundsProperties;
        IsPassiveBrainsOverBrawn?: boolean;
        PassiveBrainsOverBrawnProperties?: ActionModifierProperties;
        IsPassiveStunned?: boolean;
        PassiveStunnedProperties?: PassiveStunnedProperties;
        IsPassiveEternalHeart?: boolean;
        PassiveEternalHeartProperties?: PassiveEternalHeartProperties;
        IsPassiveGainBuff?: boolean;
        PassiveGainBuffProperties?: PassiveGainBuffProperties;
        IsPassiveDemotivate?: boolean;
        PassiveDemotivateProperties?: PassiveDemotivateProperties;
        IsPassiveRestoration?: boolean;
        PassiveRestorationProperties?: PassiveRestorationProperties;
        IsPassiveTenaciousBarrier?: boolean;
        PassiveTenaciousBarrierProperties?: PassiveTenaciousBarrierProperties;
        IsPassiveProtectedOffense?: boolean;
        PassiveProtectedOffenseProperties?: PassiveHeroicPartyProperties;
        IsPassiveSupremacy?: boolean;
        PassiveSupremacyProperties?: PassiveSupremacyProperties;
        IsPoisonedNerves?: boolean;
        PoisonedNervesProperties?: PoisonedNervesProperties;
        IsPassiveChargingDebuffs?: boolean;
        PassiveChargingDebuffsProperties?: PassiveChargingDebuffsProperties;
        IsPassiveShiftNeutralElement?: boolean;
        PassiveShiftNeutralElementProperties?: PassiveShiftNeutralElementProperties;
        IsPassiveStickFocus?: boolean;
        PassiveStickFocusProperties?: PassiveStickFocusProperties;
        IsPassiveCurseResistance?: boolean;
        PassiveCurseResistanceProperties?: PassiveCurseResistanceProperties;
        IsPassiveDiseaseControl?: boolean;
        PassiveDiseaseControlProperties?: PassiveHardShieldProperties;
        IsPassiveManaBurn?: boolean;
        PassiveManaBurnProperties?: PassiveManaBurnProperties;
        IsPassiveLoadUp?: boolean;
        PassiveLoadUpProperties?: PassiveLoadUpProperties;
        IsPassiveDebuffTriggersDebuff?: boolean;
        PassiveDebuffTriggersDebuffProperties?: PassiveDebuffTriggersDebuffProperties;
        IsPassiveRegenerationShield?: boolean;
        PassiveRegenerationShieldProperties?: PassiveRegenerationShieldProperties;
        IsPassiveBrokenImmunity?: boolean;
        PassiveBrokenImmunityProperties?: PassiveBrokenImmunityProperties;
        IsPassiveGoblinScience?: boolean;
        PassiveGoblinScienceProperties?: PassiveGoblinScienceProperties;
        IsPassiveFuel?: boolean;
        PassiveFuelProperties?: PassiveFuelProperties;
        IsPassiveSupercharged?: boolean;
        PassiveSuperchargedProperties?: PassiveSuperchargedProperties;
        IsPassiveSevereNature?: boolean;
        PassiveSevereNatureProperties?: PassiveSevereNatureProperties;
        IsPassiveSevereInfection?: boolean;
        PassiveSevereInfectionProperties?: PassiveSevereInfectionProperties;
        IsPassiveCriticalExploit?: boolean;
        PassiveCriticalExploitProperties?: PassiveCenterOfMassProperties;
        IsPassiveAcidSpit?: boolean;
        PassiveAcidSpitProperties?: PassiveAcidSpitProperties;
        IsPassiveSlimeSupport?: boolean;
        PassiveSlimeSupportProperties?: PassiveSlimeSupportProperties;
        IsPassiveBuffCelebration?: boolean;
        PassiveBuffCelebrationProperties?: PassiveBuffCelebrationProperties;
        IsPassiveFatalUpkeep?: boolean;
        PassiveFatalUpkeepProperties?: PassiveFatalUpkeepProperties;
        IsPassiveTricksterBuffing?: boolean;
        PassiveTricksterBuffingProperties?: PassiveBuffingRestoreProperties;
        IsPassiveBurningFaith?: boolean;
        PassiveBurningFaithProperties?: PassiveBurningFaithProperties;
        IsPassiveImpactfulShock?: boolean;
        PassiveImpactfulShockProperties?: PassiveImpactfulShockProperties;
        IsPassiveOccultControl?: boolean;
        PassiveOccultControlProperties?: PassiveOccultControlProperties;
        IsActionDebuffCataclyst?: boolean;
        ActionDebuffCataclystProperties?: ActionDebuffCataclystProperties;
        IsPassiveScreech?: boolean;
        PassiveScreechProperties?: PassiveScreechProperties;
        IsPassiveThickSkin?: boolean;
        PassiveThickSkinProperties?: PassiveThickSkinProperties;
        IsPassiveManaFunnel?: boolean;
        PassiveManaFunnelProperties?: PassiveManaFunnelProperties;
        IsPassiveCleansingBurn?: boolean;
        PassiveCleansingBurnProperties?: PassiveCleansingBurnProperties;
        IsPassiveBurnDown?: boolean;
        PassiveBurnDownProperties?: PassiveFatalUpkeepProperties;
        IsPassiveFieryGlands?: boolean;
        PassiveFieryGlandsProperties?: PassiveFieryGlandsProperties;
        IsPassiveMagicBarrier?: boolean;
        PassiveMagicBarrierProperties?: PassiveMagicBarrierProperties;
        IsPassiveRingFocus?: boolean;
        PassiveRingFocusProperties?: PassiveCenterOfMassProperties;
        IsPassiveCounterHit?: boolean;
        PassiveCounterHitProperties?: PassiveCounterHitProperties;
        IsPassiveStampede?: boolean;
        PassiveStampedeProperties?: PassiveStampedeProperties;
        IsPassiveHibernate?: boolean;
        PassiveHibernateProperties?: PassiveHibernateProperties;
        IsPassivePrimalRage?: boolean;
        PassivePrimalRageProperties?: PassivePrimalRageProperties;
        IsPassiveCombatGuard?: boolean;
        PassiveCombatGuardProperties?: PassiveCombatGuardProperties;
        IsPassiveIntelligentSwarm?: boolean;
        PassiveIntelligentSwarmProperties?: PassiveIntelligentSwarmProperties;
        IsPassiveBlindingSparks?: boolean;
        PassiveBlindingSparksProperties?: PassiveBlindingSparksProperties;
        IsPassiveTrimageHealing?: boolean;
        PassiveTrimageHealingProperties?: PassiveWarlockHealingProperties;
        IsPassiveSlowBurn?: boolean;
        PassiveSlowBurnProperties?: ActionModifierProperties;
        IsPassiveShockCharging?: boolean;
        PassiveShockChargingProperties?: PassiveShockChargingProperties;
        IsPassiveChargedHealing?: boolean;
        PassiveChargedHealingProperties?: PassiveChargedHealingProperties;
        IsPassiveDebuffVariety?: boolean;
        PassiveDebuffVarietyProperties?: PassiveDebuffVarietyProperties;
        IsPassiveSkirmish?: boolean;
        PassiveSkirmishProperties?: PassiveSkirmishProperties;
        IsPassiveElementalShift?: boolean;
        PassiveElementalShiftProperties?: PassiveElementalShiftProperties;
        IsPassiveGorgeousPlumage?: boolean;
        PassiveGorgeousPlumageProperties?: PassiveGorgeousPlumageProperties;
        IsPassiveInfernalRoar?: boolean;
        PassiveInfernalRoarProperties?: PassiveInfernalRoarProperties;
        IsPassiveAncientPredation?: boolean;
        PassiveAncientPredationProperties?: PassiveAncientPredationProperties;
        IsPassiveJollySpirit?: boolean;
        PassiveJollySpiritProperties?: PassiveRelentlessProperties;
        IsPassiveTricksterSpirit?: boolean;
        PassiveTricksterSpiritProperties?: PassiveTricksterSpiritProperties;
        IsPassiveRebornFromAshes?: boolean;
        PassiveRebornFromAshesProperties?: PassiveRebornFromAshesProperties;
        IsPassiveOptimalPerformance?: boolean;
        PassiveOptimalPerformanceProperties?: PassiveOptimalPerformanceProperties;
        IsPassiveChannelingSupport?: boolean;
        PassiveChannelingSupportProperties?: PassiveGoldAuraProperties;
        IsPassiveManaSyphon?: boolean;
        PassiveManaSyphonProperties?: PassiveManaSyphonProperties;
        IsPassiveBackstab?: boolean;
        PassiveBackstabProperties?: PassiveBackstabProperties;
        IsPassivePollutedWater?: boolean;
        PassivePollutedWaterProperties?: PassivePollutedWaterProperties;
        IsPassiveMasterOfTime?: boolean;
        PassiveMasterOfTimeProperties?: PassiveMasterOfTimeProperties;
        IsPassiveBalistics?: boolean;
        PassiveBalisticsProperties?: PassiveBalisticsProperties;
        IsPassiveLuckyHit?: boolean;
        PassiveLuckyHitProperties?: PassiveLuckyHitProperties;
        IsPassiveLordOfTheDeep?: boolean;
        PassiveLordOfTheDeepProperties?: PassiveLordOfTheDeepProperties;
        IsPassiveIcyFists?: boolean;
        PassiveIcyFistsProperties?: PassiveIcyFistsProperties;
    }
    export interface PassiveIcyFistsProperties {
        IsOnActionDamageHit: boolean;
        IsOnHealTarget: boolean;
        ChillChance: number;
        ChillStacks: number;
    }
    export interface PassiveLordOfTheDeepProperties {
        IsOnAllyActionDamagePostHit: boolean;
        IsOnCounterAttackPostHit: boolean;
        BleedDamage: number;
        TypeRestriction1: EMonsterType;
    }
    export interface PassiveLuckyHitProperties {
        IsOnActionDamageHit: boolean;
        HitChance: number;
        DamageBonus: number;
    }
    export interface PassiveBalisticsProperties {
        IsOnCalculateStats: boolean;
        DamageBonus: number;
        MissChance: number;
    }
    export interface PassiveMasterOfTimeProperties {
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
    }
    export interface PassivePollutedWaterProperties {
        Increase: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveBackstabProperties {
        IsOnActionDamageHit: boolean;
        DamageIncrease: number;
        CritChanceIncrease: number;
        HealthTreshhold: number;
    }
    export interface PassiveManaSyphonProperties {
        IsOnTriggerPoisonDamage: boolean;
        Mana: number;
    }
    export interface PassiveOptimalPerformanceProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageReduction: number;
        DebuffReduction: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveRebornFromAshesProperties {
        IsOnAllyRevive: boolean;
        HealValue: number;
        ChargeCount: number;
    }
    export interface PassiveTricksterSpiritProperties {
        IsOnAllyApplyDebuffToEnemy: boolean;
        IsOnAllyApplyBuff: boolean;
        ShieldAmount: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveAncientPredationProperties {
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveInfernalRoarProperties {
        IsOnAllyActionDamageHit: boolean;
        Chance: number;
    }
    export interface PassiveGorgeousPlumageProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnCalculateEnemyStats: boolean;
        BuffIncrease: number;
        DebuffIncrease: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveElementalShiftProperties {
        IsOnActionFinished: boolean;
        ResistMultiplier: number;
        WeakMultiplier: number;
    }
    export interface PassiveSkirmishProperties {
        IsOnAllyActionFinished: boolean;
        TypeRestriction: EMonsterType;
        TypeRestriction2: EMonsterType;
        HealthPercent: number;
        ChampionPercent: number;
    }
    export interface PassiveDebuffVarietyProperties {
        IsOnAllyActionDamageHit: boolean;
        IsOnAllyCounterAttackHit: boolean;
        IsOnAllyBeingHit: boolean;
        BonusValue: number;
    }
    export interface PassiveChargedHealingProperties {
        IsOnActionHealTarget: boolean;
    }
    export interface PassiveShockChargingProperties {
        IsOnTriggerShockDamage: boolean;
        Buff: ESpecialBuff;
        StackCount: number;
    }
    export interface PassiveBlindingSparksProperties {
        IsOnTriggerBurnDamage: boolean;
        IsOnTriggerShockDamage: boolean;
        BurnChance: number;
        ShockChance: number;
    }
    export interface PassiveIntelligentSwarmProperties {
        IsOnAllyApplyBuff: boolean;
        IsOnAllyApplyDebuffToEnemy: boolean;
        Chance: number;
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    export interface PassiveCombatGuardProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageReduction: number;
    }
    export interface PassivePrimalRageProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        DamageBonus: number;
        DamagePerAge: number;
    }
    export interface PassiveHibernateProperties {
        IsOnActionFinished: boolean;
        HealthHealPercent: number;
        Buff: BuffType;
    }
    export interface PassiveStampedeProperties {
        IsOnAllyActionDamageHit: boolean;
        DamageBonus: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveCounterHitProperties {
        AttackScaling: number;
        CritChanceIncrease: number;
        HitCounter: number;
        AnimElement?: any;
    }
    export interface PassiveMagicBarrierProperties {
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        Stat: EStat;
        ShieldPercent: number;
        ReductionPercent: number;
        PerMaxMana: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveFieryGlandsProperties {
        IsOnApplyShield: boolean;
        Chance: number;
        BurnStacks: number;
    }
    export interface PassiveCleansingBurnProperties {
        IsOnTriggerBurnDamage: boolean;
        IsOnAllyApplyDebuffToEnemy: boolean;
        Chance: number;
    }
    export interface PassiveManaFunnelProperties {
        IsOnActionStarted: boolean;
        Chance: number;
        PerMana: number;
        AdditionalStacks: number;
    }
    export interface PassiveThickSkinProperties {
        IsOnBeingHit: boolean;
        DamageBonus: number;
        DamageReduction: number;
    }
    export interface PassiveScreechProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnActionDamageHit: boolean;
        DamageBonus: number;
        ShieldDamageBonus: number;
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    export interface ActionDebuffCataclystProperties {
        Data: Datum[];
    }
    export interface Datum {
        Debuff: DebuffType;
        Time: number;
    }
    export interface PassiveOccultControlProperties {
        IsOnAllyBeingHit: boolean;
        DamageReduction: number;
    }
    export interface PassiveImpactfulShockProperties {
        CritChanceBonus: number;
        DamageBonus: number;
    }
    export interface PassiveBurningFaithProperties {
        IsOnTriggerBurnDamage: boolean;
        Shield: number;
    }
    export interface PassiveFatalUpkeepProperties {
        IsOnCalculateEnemyStats: boolean;
        damageIncrease: number;
    }
    export interface PassiveBuffCelebrationProperties {
        IsOnMonsterUpkeep: boolean;
        BuffTreshold: number;
        ChargeStacks: number;
    }
    export interface PassiveSlimeSupportProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        IncreaseAmount: number;
        TypeRestriction: EMonsterType;
        GrantsAgeStack: boolean;
    }
    export interface PassiveAcidSpitProperties {
        IsOnAllyActionDamageHit: boolean;
        Chance: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveSevereInfectionProperties {
        IsOnCalculateEnemyStats: boolean;
        DebuffModifier: number;
    }
    export interface PassiveSevereNatureProperties {
        IsOnTriggerCongealDamage: boolean;
        TriggerChance: number;
    }
    export interface PassiveSuperchargedProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        StacksRequired: number;
        MagicBonus: number;
    }
    export interface PassiveFuelProperties {
        IsOnTriggerBurnDamage: boolean;
    }
    export interface PassiveGoblinScienceProperties {
        IsOnAllyActionFinished: boolean;
        ChargeStacks: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveBrokenImmunityProperties {
        IsOnCalculateEnemyStats: boolean;
        IncreaseAmount: number;
        DebuffType: DebuffType;
    }
    export interface PassiveRegenerationShieldProperties {
        IsOnAllyRegenerationTrigger: boolean;
        ShieldAmount: number;
    }
    export interface PassiveDebuffTriggersDebuffProperties {
        IsOnTriggerBurnDamage: boolean;
        IsOnTriggerShockDamage: boolean;
        IsOnTriggerPoisonDamage: boolean;
        DebuffTrigger: DebuffType;
        Chance: number;
        AppliedDebuff: DebuffType;
    }
    export interface PassiveLoadUpProperties {
        IsOnActionShieldTarget: boolean;
        IsOnApplyShield: boolean;
        PassiveChance: number;
        ChargeStacks: number;
    }
    export interface PassiveManaBurnProperties {
        IsOnTriggerBurnDamage: boolean;
        Mana: number;
    }
    export interface PassiveCurseResistanceProperties {
        IsOnCalculateStats: boolean;
        Modifier: number;
    }
    export interface PassiveStickFocusProperties {
        IsOnCalculateStats: boolean;
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        AttackBonus: number;
        DefenseBonus: number;
        Shielding: number;
    }
    export interface PassiveShiftNeutralElementProperties {
        ToElement: EElement;
    }
    export interface PassiveChargingDebuffsProperties {
        IsOnAllyConsumeCharges: boolean;
        Debuffs: DebuffType[];
        ChargeStacksNeeded: number;
    }
    export interface PoisonedNervesProperties {
        IsOnCalculateEnemyStats: boolean;
        ManaRegenReduction: number;
    }
    export interface PassiveSupremacyProperties {
        IsOnAllyApplyDebuffToEnemy: boolean;
        ChargeStacks: number;
    }
    export interface PassiveTenaciousBarrierProperties {
        ResistChance: number;
    }
    export interface PassiveRestorationProperties {
        IsOnAllyRegenerationTrigger: boolean;
        Chance: number;
    }
    export interface PassiveDemotivateProperties {
        IsOnCalculateEnemyStats: boolean;
        Debuff: DebuffType;
        HealShieldReductionValue: number;
    }
    export interface PassiveGainBuffProperties {
        IsOnApplyDebuffToEnemy: boolean;
        Buff: BuffType;
        TriggerType: number;
        Chance: number;
    }
    export interface PassiveEternalHeartProperties {
        IsOnCalculateStats: boolean;
        Value: number;
    }
    export interface PassiveStunnedProperties {
        IsOnCalculateEnemyStats: boolean;
        ReduceDodgeValue: number;
        ReduceCritValue: number;
    }
    export interface PassiveDeepWoundsProperties {
        BleedIncrease: number;
    }
    export interface PassiveBloodMagicProperties {
        IsOnAllyActionDamagePostHit: boolean;
        TriggerChance: number;
        DamageValue: number;
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    export interface PassiveManaBufferProperties {
        IsOnManaConsumed: boolean;
        Multiplier: number;
    }
    export interface PassiveManaDonorProperties {
        IsOnAllyManaSpent: boolean;
        ManaReduction: number;
    }
    export interface PassiveCurseTransfusionProperties {
        IsOnCalculateStats: boolean;
        DamageIncrease: number;
        DamageReduction: number;
    }
    export interface PassiveDragonMasteryProperties {
        IsOnAllyActionStarted: boolean;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveDragonBloodProperties {
        IsOnMonsterUpkeep: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        HealValue: number;
        ManaRegenValue: number;
        MonsterType: EMonsterType;
    }
    export interface PassiveDraconicLineageProperties {
        TypeRestriction: EMonsterType;
    }
    export interface SorceryBoostProperties {
        IsOnAllyReceiveBuff: boolean;
        ShieldMagicScaling: number;
        DebuffRemove: number;
    }
    export interface PassiveReflectBleedProperties {
        IsOnAllyBeingHit: boolean;
        IsOnBeingHit: boolean;
        ReflectChance: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveSprawlProperties {
        IsOnAllyActionFinished: boolean;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveManaBolsterProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        ManaRegeneration: number;
    }
    export interface PassiveProliferateProperties {
        IsOnApplyDebuffToEnemy: boolean;
        Damage: number;
        AnimElement?: any;
    }
    export interface PassiveHexProperties {
        IsOnActionDamageHit: boolean;
        IsOnAllyActionDamageHit: boolean;
        IsOnAllyHeal: boolean;
        IsOnAllyApplyShield: boolean;
        Chance: number;
        AffectsHealsShields: boolean;
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    export interface PassiveSidekickSupportProperties {
        IsOnAllyActionStarted: boolean;
        ScalingMagic: number;
        ScalingDefense: number;
    }
    export interface PassiveTauntProperties {
        IsOnBeingHit: boolean;
        Chance: number;
        DamageIncrease: number;
    }
    export interface PassiveHeroicAssaultProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        CritChanceBonus: number;
    }
    export interface PassiveAeonsProperties {
        IsOnMonsterUpkeep: boolean;
        HealValue: number;
        Cap: number;
    }
    export interface PassiveGiantsbaneProperties {
        IsOnActionDamageHit: boolean;
        DamageBonus: number;
        DamageBonusGiant: number;
        HealthRating: number;
    }
    export interface PassiveHardShellProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageReduction: number;
        CritChanceReduction: number;
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    export interface PassiveCenterOfMassProperties {
        Bonus: number;
    }
    export interface PassiveElementalBreakProperties {
        IsOnCalculateEnemyStats: boolean;
        ModifyValue: number;
    }
    export interface PassiveShieldCrushProperties {
        IsOnAllyActionDamageHit: boolean;
        IsOnAllyCounterAttackHit: boolean;
        BuffType: BuffType;
        DamageBonus: number;
    }
    export interface PassiveVolatileShieldProperties {
        IsOnActionDamageStarted: boolean;
        ShieldConsume: number;
        Multiplier: number;
        AnimElementProjectile?: any;
        AnimElementImpact?: any;
    }
    export interface PassiveDisarmingShieldingProperties {
        IsOnApplyShield: boolean;
        Chance: number;
    }
    export interface PassiveReflectProperties {
        IsOnBeingHit: boolean;
        ReflectAmount: number;
        ReflectKeeperBattles: number;
    }
    export interface PassiveEmpowerProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnAllyMonsterUpkeep: boolean;
        EmpowerValue: number;
        MonsterType: EMonsterType;
        AppliesRandomBuff: boolean;
    }
    export interface PassiveImproveBuffProperties {
        BuffType: BuffType;
        Value: number;
    }
    export interface PassiveVarietyProperties {
        IsOnActionDamageHit: boolean;
        DamageIncrease: number;
    }
    export interface PassiveChainReactionProperties {
        IsOnActionDamageStarted: boolean;
    }
    export interface PassiveProtectorProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnAllyMonsterUpkeep: boolean;
        damageReduction: number;
        MonsterType: EMonsterType;
        MonsterType2: EMonsterType;
        OnlyMassAttacks: boolean;
        AppliesRandomBuff: boolean;
    }
    export interface PassiveDebuffOnGettingHitProperties {
        Debuff: DebuffType;
        Chance: number;
    }
    export interface ActionRedirectProperties {
        AnimElement?: any;
        Offset?: any;
    }
    export interface PassiveCriticalBaseProperties {
        IsOnCalculateStats: boolean;
        Bonus: number;
    }
    export interface PassiveMagnetizeProperties {
        Chance: number;
    }
    export interface PassiveAssaultShieldProperties {
        IsOnActionDamagePostHit: boolean;
        IsOnCounterAttackPostHit: boolean;
        IsOnCalculateStats: boolean;
        ShieldPercent: number;
        CritChanceIncrease: number;
    }
    export interface PassiveForcefulBuffProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        ReductionBypass: number;
        Buff: BuffType;
    }
    export interface PassiveEnergyConversionProperties {
        IsOnAllyConsumeCharges: boolean;
        ConversionRate: number;
    }
    export interface PassiveObserveProperties {
        IsOnActionFinished: boolean;
        DefenseScaling: number;
    }
    export interface PassiveKingOfBeastsProperties {
        IsOnCalculateStats: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        DamageBonus: number;
        DebuffResistance: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveManaGeneratorProperties {
        IsOnBeingHit: boolean;
        Mana: number;
    }
    export interface PassiveRelentlessProperties {
        ManaReduction: number;
    }
    export interface PassiveUtopiaProperties {
        IsOnMonsterUpkeep: boolean;
        ChargeStacks: number;
    }
    export interface PassiveSevereHitProperties {
        IsOnActionDamagePostHit: boolean;
        IsOnCounterAttackPostHit: boolean;
        Debuff: DebuffType;
        SpecialBuff: BuffType;
        DamageTreshold: number;
        ChampionTreshold: number;
    }
    export interface PassiveMystifyProperties {
        IsOnApplyDebuffToEnemy: boolean;
        IsOnAllyApplyDebuffToEnemy: boolean;
        Chance: number;
    }
    export interface PassiveSpawnOfChampionsProperties {
        IsOnCombatStart: boolean;
        Buffs: BuffType[];
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    export interface PassiveCriticalConsistencyProperties {
        IsOnActionDamageHit: boolean;
        IsOnCounterAttackHit: boolean;
        IsOnCalculateStats: boolean;
        CritDamageBonus: number;
        IncreaseValue: number;
    }
    export interface PassiveSingleStrikeProperties {
        IsOnCalculateStats: boolean;
        DamageIncrease: number;
    }
    export interface PassiveEmergencyChannelProperties {
        IsOnActionFinished: boolean;
        Threshold: number;
    }
    export interface PassiveBerserkProperties {
        IsOnActionDamagePostHit: boolean;
        DamageTreshold: number;
        ChampionTreshold: number;
        ChargeStacks: number;
    }
    export interface PassiveShatterProperties {
        CritChanceBonus: number;
    }
    export interface PassiveFirstImpactProperties {
        IsOnActionDamageStarted: boolean;
        IsOnCounterAttackStarted: boolean;
        DamageBonus: number;
        MassDamageBonus: number;
    }
    export interface PassiveDivineShieldProperties {
        IsOnReceiveBuff: boolean;
        ShieldAmount: number;
        ChargeStacks: number;
    }
    export interface PassiveCorrosionProperties {
        IsOnCalculateEnemyStats: boolean;
        DamageIncrease: number;
    }
    export interface PassivePlagueProperties {
        IsOnTriggerPoisonDamage: boolean;
        Chance: number;
    }
    export interface PassiveToxicSupportProperties {
        IsOnHealTarget: boolean;
        Chance: number;
        DebuffStacks: number;
        Debuff: DebuffType;
    }
    export interface PassiveDominanceProperties {
        IsOnAllyActionDamageHit: boolean;
        IsOnAllyCounterAttackHit: boolean;
        DamageBonus: number;
    }
    export interface PassiveComboInitiatorProperties {
        IsOnCalculateStats: boolean;
        IsOnActionDamageStarted: boolean;
        DamageBonus: number;
        AdditionalHitDamage: number;
        AnimElement?: any;
    }
    export interface PassiveSteampunkProperties {
        IsOnAllyActionStarted: boolean;
        TypeRestrition: number;
        TypeRestrition2: number;
        Debuff: DebuffType;
    }
    export interface PassiveChargingShieldProperties {
        IsOnReceiveSpecialBuff: boolean;
        ShieldAmount: number;
    }
    export interface PassiveRevengeProperties {
        IsOnBeingHit: boolean;
    }
    export interface PassiveElectrolytesProperties {
        IsOnTriggerShockDamage: boolean;
        Chance: number;
    }
    export interface PassiveSpreadDebuffProperties {
        IsOnAllyApplyDebuffToEnemy: boolean;
        Debuff: DebuffType;
        SpreadDebuff: number;
        Chance: number;
        OnSameEnemy: boolean;
    }
    export interface PassiveChargeAmplifierProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageIncrease: number;
    }
    export interface PassiveEnergizeProperties {
        IsOnTriggerShockDamage: boolean;
        HealAmount: number;
    }
    export interface PassiveSpecialBuffOnGettingHitProperties {
        Buff: BuffType;
    }
    export interface PassiveCriticalSorceryProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        BuffType: BuffType;
        CritChanceBonus: number;
    }
    export interface PassiveElementAffinityProperties {
        IsOnActionDamageHit: boolean;
        DamageBonus: number;
        Element: EElement;
    }
    export interface PassiveMagicAttackProperties {
        MagicAttackPrefab: number;
    }
    export interface PassiveHardShieldProperties {
        IsOnBeingHit: boolean;
        DamageReduction: number;
    }
    export interface PassiveManaConfluxProperties {
        IsOnAllyManaSpent: boolean;
        StackPerManaSpent: number;
    }
    export interface PassiveLeadershipProperties {
        IsOnReceiveSpecialBuff: boolean;
    }
    export interface PassiveBuffChargingProperties {
        IsOnApplyBuff: boolean;
    }
    export interface PassiveSplatterProperties {
        IsOnEnemyDeath: boolean;
    }
    export interface PassiveCriticalEdgeProperties {
        IsOnActionDamagePostHit: boolean;
        IsOnHealTarget: boolean;
    }
    export interface PassiveStartCombatChargesProperties {
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        Count: number;
        TypeRestriction: EMonsterType;
        TriggerForBackupMonsters: boolean;
    }
    export interface PassiveDevourProperties {
        IsOnAllyActionFinished: boolean;
        HealAmount: number;
    }
    export interface PassiveChargedUpProperties {
        IsOnActionDamageHit: boolean;
        IsOnCalculateStats: boolean;
        IncreaseValue: number;
        StackCap: number;
    }
    export interface PassiveCriticalBoonProperties {
        IsOnActionDamageHit: boolean;
        IsOnHealTarget: boolean;
        Chance: number;
    }
    export interface PassiveBuffCorruptionProperties {
        IsOnCalculateEnemyStats: boolean;
        BuffReduce: number;
    }
    export interface MightyBoostProperties {
        IsOnAllyReceiveBuff: boolean;
        ShieldAttackScaling: number;
        NegativeStackRemove: number;
    }
    export interface PassiveGloriousSparkProperties {
        IsOnAllyActionDamageStarted: boolean;
        Damage: number;
        DamageAdditionalGlory: number;
        AnimElement?: any;
    }
    export interface PassiveSharedBuffProperties {
        IsOnReceiveBuffPreCheck: boolean;
        BuffType: BuffType;
    }
    export interface PassiveExploitProperties {
        IsOnAllyCounterAttackHit: boolean;
        RandomBuff: boolean;
        Buff: BuffType;
        Shield: number;
    }
    export interface PassiveChordProperties {
        IsOnCalculateStats: boolean;
        IsOnApplyBuff: boolean;
        Type: number;
        Value: number;
    }
    export interface PassiveShadowProcProperties {
        IsOnActionDamageStarted: boolean;
        IsOnActionHealStarted: boolean;
        IsOnActionShieldStarted: boolean;
        IsOnActionBuffStarted: boolean;
        DamageValue: number;
        AnimElement?: any;
        ShieldValue: number;
        HealValue: number;
    }
    export interface PassiveComboShieldingProperties {
        IsOnActionShieldStarted: boolean;
        DefenseScale: number;
    }
    export interface PassiveCopyShieldProperties {
        IsOnReceiveShield: boolean;
        CopyAmount: number;
    }
    export interface PassiveWonderPotionProperties {
        IsOnAllyActionStarted: boolean;
    }
    export interface PassivePotionMasteryProperties {
        IncreaseValue: number;
    }
    export interface PassiveBarricadeProperties {
        IsOnApplyShield: boolean;
        Chance: number;
        Buff: BuffType;
    }
    export interface PassiveShieldProcsProperties {
        IsOnActionDamageHit: boolean;
        ProcType: number;
        Shield: number;
    }
    export interface PassiveGoldAuraProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        Bonus: number;
    }
    export interface PassiveGoldSenseProperties {
        GoldIncrease: number;
    }
    export interface PassiveDoubleImpactProperties {
        IsOnActionDamageStarted: boolean;
        DamageValue: number;
        AnimElementFire?: any;
        AnimElementWater?: any;
        AnimElementWind?: any;
        AnimElementEarth?: any;
        AnimElementNeutral?: any;
    }
    export interface PassiveOvercastProperties {
        IsOnCalculateStats: boolean;
        DamageIncrease: number;
        ManaIncrease: number;
    }
    export interface PassiveBlacksmithingProperties {
        Stats: number[];
        Bonus: number;
        TypeRestriction: EMonsterType;
        EquipmentTypes: number[];
    }
    export interface PassiveAgeOfPurificationProperties {
        IsOnAllyReceiveSpecialBuff: boolean;
    }
    export interface PassiveCriticalBuffProperties {
        IsOnApplyBuff: boolean;
        StackCount: number;
    }
    export interface PassiveOutlastProperties {
        IsOnAllyReceiveSpecialBuff: boolean;
        ShieldAmount: number;
        Cap: number;
    }
    export interface PassiveAntiCascadeProperties {
        IsOnBeingHit: boolean;
        DamageBonus: number;
    }
    export interface PassiveCleansingSidekickProperties {
        IsOnAllyActionDamageHit: boolean;
    }
    export interface PassiveEvasionProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        DodgeChance: number;
    }
    export interface PassiveCriticalMassProperties {
        IsOnActionDamageHit: boolean;
        IsOnHealTarget: boolean;
        Chance: number;
        OnCriticalHit: boolean;
    }
    export interface PassiveHeroismProperties {
        IsOnCalculateStats: boolean;
        DamageBonus: number;
    }
    export interface PassivePunishmentProperties {
        IsOnAllyRemoveBuff: boolean;
        TriggerChance: number;
        Damage: number;
        AnimElement?: any;
    }
    export interface PassivePathToProperties {
        IsOnAllyBeingAttacked: boolean;
        TypeRestriction: EMonsterType;
        Buff1: BuffType;
        Buff2: BuffType;
        BuffChance: number;
    }
    export interface PassiveMeditateProperties {
        IsOnActionFinished: boolean;
        ChargeStacks: number;
    }
    export interface PassiveDoubleStrikeProperties {
        Chance: number;
        SecondHitDelay: number;
    }
    export interface PassiveDemonicTheftProperties {
        IsOnAllyActionDamageStarted: boolean;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveRecuperateProperties {
        IsOnActionDamageHit: boolean;
        IsOnCounterAttackHit: boolean;
        IsOnHealTarget: boolean;
        ManaAmount: number;
    }
    export interface PassiveBuffMultiplierProperties {
        IsOnCalculateStats: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        Improve: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveHeroicPartyProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageBonus: number;
    }
    export interface PassiveHeroicDefenseProperties {
        IsOnCalculateStats: boolean;
        ReduceValue: number;
    }
    export interface PassiveEquipmentSlotProperties {
        IsWeapon: boolean;
        StatReduction: number;
    }
    export interface PassiveChargingBuffsProperties {
        IsOnAllyReceiveSpecialBuff: boolean;
        Buffs: BuffType[];
        Chance: number;
    }
    export interface PassiveBuffingRestoreProperties {
        IsOnApplyBuff: boolean;
        Chance: number;
    }
    export interface PassiveMentorProperties {
        IsOnActionBuffStarted: boolean;
        IsOnActionHealStarted: boolean;
        IsOnActionShieldStarted: boolean;
        BuffCount: number;
    }
    export interface PassiveManaChargingProperties {
        IsOnManaRegenerated: boolean;
        ManaThreshhold: number;
        AffectsAllies: boolean;
    }
    export interface PassiveChannelingSustainProperties {
        IsOnAllyMonsterUpkeep: boolean;
        ManaScaling: number;
    }
    export interface PassiveSupplyProperties {
        IsOnMonsterUpkeep: boolean;
        IsOnAllyMonsterUpkeep: boolean;
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        HealValue: number;
        TargetType: ETargetType;
        BaseOnOwnHealth: boolean;
        MonsterType: EMonsterType;
        MonsterType2: EMonsterType;
        AppliesRandomBuff: boolean;
        AppliesAgeStack: boolean;
    }
    export interface PassiveHealingLinkProperties {
        IsOnAllyHeal: boolean;
        HealChance: number;
    }
    export interface PassivePurifyProperties {
        IsOnActionHealStarted: boolean;
        StacksRemove: number;
        MassStacksRemove: number;
    }
    export interface PassiveAntiCurseProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        Modifier: number;
    }
    export interface PassiveRenewalProperties {
        IsOnAllyDebuffOrStackRemoved: boolean;
        HealShieldAmount: number;
    }
    export interface PassiveStuckTightProperties {
        CritChanceIncrease: number;
    }
    export interface PassiveAutoRestoreProperties {
        IsOnActionDamageStarted: boolean;
        Count: number;
    }
    export interface PassiveManaPotentialProperties {
        IsOnCalculateStats: boolean;
        IsOnActionDamageHit: boolean;
        Multiplier: number;
        ManaRequired: number;
    }
    export interface PassiveBuffingShieldProperties {
        IsOnApplyBuff: boolean;
        ShieldAmount: number;
    }
    export interface PassiveBuffingHealProperties {
        IsOnApplyBuff: boolean;
        ScaleMagic: number;
    }
    export interface PassiveComboBuffingProperties {
        IsOnAllyActionStarted: boolean;
        AffectsHealsShields: boolean;
    }
    export interface PassiveChannelingBalanceProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageBonus: number;
        ReductionBonus: number;
    }
    export interface PassiveExtraBuffProperties {
        IsOnAllyReceiveBuff: boolean;
        Buff: BuffType;
        Chance: number;
    }
    export interface PassiveManasymbiosisProperties {
        IsOnHeal: boolean;
        ManaAmount: number;
    }
    export interface PassiveVenomousBiteProperties {
        IsOnActionDamageHit: boolean;
        Chance: number;
        Debuffs: DebuffType[];
    }
    export interface PassiveHybridMasteryProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        increaseValue: number;
    }
    export interface PassiveBountyProperties {
        IsOnEnemyDeath: boolean;
        buffCount: number;
    }
    export interface PassiveStartTurnBuffProperties {
        IsOnMonsterUpkeep: boolean;
        BuffType: BuffType;
    }
    export interface PassiveToxicHealthProperties {
        IsOnMonsterUpkeep: boolean;
        HealValue: number;
    }
    export interface PassiveSevereUpkeepProperties {
        IsOnTriggerBurnDamage: boolean;
        IsOnTriggerPoisonDamage: boolean;
        TriggerChance: number;
    }
    export interface ActionConditionalDamageProperties {
        requiredDebuff: DebuffType;
        HitForEveryDebuffStack: boolean;
        PerHitDelay: number;
        DamageMultiplicator: number;
        HitTimings: number[];
        DurationIncrease: number;
        AnimElement?: any;
        FlippedAnimElement?: any;
        AnimElementDelay: number;
    }
    export interface PassiveEquipmentFocusProperties {
        Stat: EStat;
        Bonus: number;
    }
    export interface PassiveAntitoxinProperties {
        IsOnMonsterUpkeep: boolean;
        IsOnAllyMonsterUpkeep: boolean;
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        TypeRestriction: EMonsterType;
        GrantsAgeStack: boolean;
    }
    export interface PassiveOverhealProperties {
        IsOnAllyHeal: boolean;
        ConversionAmount: number;
    }
    export interface PassiveSituationalSupportProperties {
        IsOnActionStarted: boolean;
        BuffCount: number;
        ShieldAmount: number;
    }
    export interface PassiveDualityProperties {
        IsOnAllyReceiveBuff: boolean;
        Chance: number;
    }
    export interface PassiveRecklessMendingProperties {
        IsOnAllyApplyDebuffToEnemy: boolean;
        HealAmount: number;
    }
    export interface PassiveStartCombatShieldProperties {
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        Stat: EStat;
        DualStat: boolean;
        SecondaryStat: number;
        Percent: number;
        TypeRestriction: EMonsterType;
        TriggerForBackupMonsters: boolean;
        BasedOnCastersStat: boolean;
        DamageReduction: number;
        PerHealth: number;
    }
    export interface PassiveCriticalDefenseProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        ReduceValue: number;
    }
    export interface PassiveDamageOnDebuffProperties {
        IsOnApplyDebuffToEnemy: boolean;
        Debuff: DebuffType;
        DamageValue: number;
        requiresOtherDebuff: boolean;
        SecondDebuff: number;
    }
    export interface PassiveElementCritChanceProperties {
        CritBonus: number;
        Element: EElement;
    }
    export interface PassiveAdaptiveEvolutionProperties {
        BuffGained: number;
        DebuffApplied: number;
    }
    export interface PassiveAuraIncreaseStatsProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnAllyMonsterUpkeep: boolean;
        IncreaseValue: number;
        Stat: EStat;
        IncreaseValue2: number;
        Stat2: number;
        IsMultiplicator: boolean;
        MonsterType: EMonsterType;
        AppliesRandomBuff: boolean;
    }
    export interface PassiveAssaultMasteryProperties {
        Buffs: BuffType[];
    }
    export interface PassiveSpecialBuffDamageModifierProperties {
        IsOnCalculateEnemyStats: boolean;
        Buff: BuffType;
        DamageBonus: number;
    }
    export interface PassiveCriticalHybridizationProperties {
        IsOnActionDamageHit: boolean;
        DamageValue: number;
        AnimElement?: any;
    }
    export interface PassiveHealMasteryProperties {
        IsOnCalculateStats: boolean;
        IncreaseAmount: number;
    }
    export interface PassiveLifestealProperties {
        IsOnActionDamagePostHit: boolean;
        IsOnCalculateStats: boolean;
        LifestealPercent: number;
        OnlyOnCriticalHits: boolean;
        AffectsWholeParty: boolean;
        CritChanceIncrease: number;
    }
    export interface ActionDebuffOnHitProperties {
        Debuff: DebuffType;
        dualDebuff: boolean;
        Debuff2: DebuffType;
        ApplyChance: number;
    }
    export interface PassiveDebuffOnCritProperties {
        IsOnActionDamageHit: boolean;
        IsOnCounterAttackHit: boolean;
        IsOnHealTarget: boolean;
        Debuff: DebuffType;
    }
    export interface PassiveBleedProperties {
        IsOnActionDamagePostHit: boolean;
        IsOnCounterAttackPostHit: boolean;
        BleedDamage: number;
    }
    export interface PassivePrecisionProperties {
        critChance: number;
        cannotMiss: boolean;
    }
    export interface ActionShieldBurstProperties {
        Multiplicator: number;
        ShieldConsume: number;
    }
    export interface PassiveSaboteursShieldProperties {
        IsOnApplyDebuffToEnemy: boolean;
        Percent: number;
    }
    export interface PassiveFeastProperties {
        IsOnEnemyBleed: boolean;
        HealAmount: number;
    }
    export interface ActionTypeRestrictionProperties {
        Types: EMonsterType[];
    }
    export interface PassiveBloodDriveProperties {
        IsOnTriggerBurnDamage: boolean;
        IsOnTriggerPoisonDamage: boolean;
        IsOnTriggerCongealDamage: boolean;
        Chance: number;
        DamageConversion: number;
        AnimElement?: any;
    }
    export interface PassiveArmorBypassProperties {
        IsOnCalculateStats: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        BypassAmount: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveImproveStatDependantProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        DependantStat: EStat;
        IncreasedStat: number;
        Value: number;
        Pass: number;
    }
    export interface PassiveStartCombatDebuffProperties {
        IsOnCombatStart: boolean;
        Debuff: DebuffType;
    }
    export interface PassiveHexingSupportProperties {
        IsOnActionFinished: boolean;
    }
    export interface PassiveShieldAuraProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        ShieldBonus: number;
    }
    export interface PassiveHealingShieldProperties {
        IsOnHealTarget: boolean;
        ConversionAmount: number;
    }
    export interface PassiveNecromancyProperties {
        IsOnAllyRevive: boolean;
        HealValue: number;
        AgeStackCount: number;
        DebuffCount: number;
    }
    export interface ActionReviveProperties {
        Delay: number;
        PermadeathShield: number;
    }
    export interface PassivePhoenixAffinityProperties {
        HealAmount: number;
        AnimElement?: any;
        ChargedRebirth: boolean;
    }
    export interface ActionShieldProperties {
        ShieldAmount: number;
        ScaleDefense: number;
        ScaleMagic: number;
        ScaleAttack: number;
        ScaleMana: number;
        ScaleTargetHealth: number;
        ShieldTimings: number[];
        ShieldCaster: boolean;
    }
    export interface PassiveHealChargingProperties {
        IsOnHealTarget: boolean;
    }
    export interface PassiveBuffStealProperties {
        IsOnAllyRemoveBuff: boolean;
    }
    export interface PassiveIncreaseDebuffStacksProperties {
        stackCountIncrease: number;
        Debuff: DebuffType;
    }
    export interface PassiveAutoHealProperties {
        IsOnActionDamageStarted: boolean;
        MagicScaling: number;
        HealEffect?: any;
    }
    export interface PassiveWeaponBreakProperties {
        IsOnCalculateEnemyStats: boolean;
        ReduceCritValue: number;
    }
    export interface PassiveCleanseProperties {
        IsOnActionDamageHit: boolean;
        Chance: number;
    }
    export interface PassiveDebuffChanceProperties {
        IsOnActionDamageHit: boolean;
        IsOnCounterAttackHit: boolean;
        Debuff: DebuffType;
        Chance: number;
        RestrictToElement: boolean;
        ElementRestriction: number;
    }
    export interface ActionDebuffProperties {
        Debuffs: DebuffType[];
        ApplyDelay: number;
        ApplyChance: number;
        TargetCount: number;
    }
    export interface PassiveComboHealingProperties {
        IsOnActionHealStarted: boolean;
        HealMagicScale: number;
        HealAttackScale: number;
        HealDefenseScale: number;
        HealManaeScale: number;
    }
    export interface PassiveIncreaseBuffStacksProperties {
        stackCountIncrease: number;
        Buff: BuffType;
        DuoBuff: boolean;
        Buff2: BuffType;
    }
    export interface ActionBuffProperties {
        Buffs: BuffType[];
        ApplyDelay: number;
        SecondaryBuffCount: number;
        RandomBuffCount: number;
    }
    export interface PassiveBlindingSupportProperties {
        IsOnActionStarted: boolean;
    }
    export interface PassiveWarlockHealingProperties {
        IsOnHealTarget: boolean;
        Chance: number;
    }
    export interface ActionRemoveDebuffProperties {
        Count: number;
        Delay: number;
    }
    export interface ActionHealProperties {
        HealAmount: number;
        ScaleMagic: number;
        ScaleHealth: number;
        ScaleAttack: number;
        ScaleMana: number;
        ScaleDamage: number;
        HealCaster: boolean;
        HealTimings: number[];
        ConditionType: number;
        EnemyHasDebuff: DebuffType;
        HealAnimElement?: any;
        AnimElementDelay: number;
        ActionDurationIncrease: number;
    }
    export interface PassiveTransfusionProperties {
        IsOnManaRegenerated: boolean;
        HealValue: number;
    }
    export interface PassiveStaticProperties {
        IsOnActionDamageHit: boolean;
        DamageBonus: number;
    }
    export interface PassiveCascadeProperties {
        IsOnActionDamageHit: boolean;
        IsOnActionHealTarget: boolean;
        IsOnActionShieldTarget: boolean;
        DamageBonus: number;
    }
    export interface PassiveComboMasterProperties {
        IsOnAllyActionDamageStarted: boolean;
        DamageValue: number;
        StatScaling: number;
        ScaleStat: EStat;
        AnimElement?: any;
        ElementRestriction: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveMartialProwessProperties {
        IsOnDodgeHit: boolean;
        chance: number;
    }
    export interface PassiveUncannyProperties {
        DodgeChance: number;
    }
    export interface PassiveDodgingProperties {
        IsOnCalculateStats: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        DodgeChance: number;
        TypeRestriction: EMonsterType;
    }
    export interface PassiveTrueDarknessProperties {
        IsOnAllyApplySpecialBuff: boolean;
        Chance: number;
    }
    export interface PassiveInitialDarknessProperties {
        IsOnCombatStart: boolean;
    }
    export interface PassiveSpecialBuffChanceProperties {
        IsOnActionDamageHit: boolean;
        Buff: BuffType;
        Chance: number;
        ElementRestriction: number[];
    }
    export interface PassiveImproveStatProperties {
        IsOnCalculateBaseStats: boolean;
        IsOnCalculateStats: boolean;
        Stat: EStat;
        Value: number;
        IsPercent: boolean;
        IsNegative: boolean;
    }
    export interface PassiveElementModifierProperties {
        Element: EElement;
        Modifier: number;
    }
    export interface ActionSpecialBuffProperties {
        Buff: BuffType;
        DoubleBuff: boolean;
        Buff2: BuffType;
        StackCount: number;
        ApplyDelay: number;
        ApplyChance: number;
        Variable: number;
        TypeRestriction: EMonsterType;
    }
    export interface ActionDamageProperties {
        DamageMultiplicator: number;
        TotalDamage: number;
        CalculatedDamage: number;
        CalculatedTotalDamage: number;
        HitTimings: number[];
        Element: EElement;
        Type: EDamageType;
        FlashDuration: number;
        MultipleEnemiesDelay: number;
        CritDamageBonus: number;
        DefenseBypass: number;
        DefenseBypassBurnCondition: boolean;
        PlayHitAnimation: boolean;
        TriggersBleed: boolean;
        CannotBeDodged: boolean;
        TriggersAllShocks: boolean;
        LifestealAmount: number;
        GravityMultiplier: number;
        BuffMultiplier: number;
    }
    export interface ActionModifierProperties {
    }
    export interface BaseActionProperties {
        Tier: number;
        Ultimate: boolean;
        Mana: number;
        TargetType: ETargetType;
        Duration: number;
        IsDefaultAction: boolean;
        Tooltip: string;
        ParentAction?: number;
        SpecialAttackAnimation: boolean;
        IsPotion: boolean;
    }
    export interface PassiveCurseChainProperties {
        IsOnApplyDebuffToEnemy: boolean;
        Chance: number;
    }
    export interface PassiveEnlightenProperties {
        IsOnReceiveBuffPreCheck: boolean;
        Chance: number;
    }
    export interface PassiveSkillProperties {
        Description: string;
        IsAura: boolean;
        IsUnique: boolean;
        OverlaySpecialBuff?: OverlaySpecialBuff;
        OverlayDebuffs?: DebuffType[];
        OverlayBuffs?: BuffType[];
    }
    export interface OverlaySpecialBuff {
        BuffType: ESpecialBuff;
        Name: string;
        Icon: string;
        Description: string;
        IsNegative: boolean;
    }
    export interface Monster {
        InstanceID: number;
        ID: number;
        JournalNumber: number;
        Name: string;
        TypesName: string;
        TypesArray: EMonsterType[];
        IsSpectralFamiliar: boolean;
        ExploreAbilityName: string;
        ExploreAbilityDescription: string;
        HasSonarAbility: boolean;
        BaseStats: BaseStats;
        LightShiftStats: BaseStats;
        DarkShiftStats: BaseStats;
        LightShiftPassive: Skill;
        DarkShiftPassive: Skill;
        BaseSkills: Skill[];
        SkillTrees: SkillTree[];
        Ultimates: Skill[];
        GoldReward: number;
        RewardsCommon: Item[]
        RewardsRare: Item[]
        NoRareRewards: boolean;
        Appearances: Appearance[];
    }
    export interface Appearance {
        SceneName: string;
        MapAreaName: string;
    }
    export interface SkillTree {
        Tier1Skills: Skill[]
        Tier2Skills: Skill[]
        Tier3Skills: Skill[]
        Tier4Skills: Skill[]
        Tier5Skills: Skill[]
    }
    export interface BaseStats {
        attack: number;
        magic: number;
        defense: number;
        health: number;
        mana: number;
    }
}