export declare namespace ExportedMonsterSanctuaryDataTypes {
    enum EShift {
        Normal = 0,
        Light = 1,
        Dark = 2
    }
    enum EDamageType {
        Physical = 0,
        Magical = 1
    }
    enum DebuffType {
        Weakness = 0,
        Shock = 1,
        Poison = 2,
        Chill = 3,
        Burn = 4,
        ArmorBreak = 5,
        Random = 6
    }
    enum BuffType {
        Might = 0,
        Sorcery = 1,
        Glory = 2,
        Sidekick = 3,
        Channel = 4,
        Regeneration = 5,
        Agility = 6,
        SpellShield = 7,
        Barrier = 8,
        Random = 9
    }
    enum EquipmentType {
        Weapon = 0,
        Armor = 1,
        Headgear = 2,
        Necklace = 3,
        Ring = 4,
        Misc = 5
    }
    enum EMonsterType {
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
        Ancient = 19
    }
    enum EElement {
        Neutral = 0,
        Fire = 1,
        Water = 2,
        Wind = 3,
        Earth = 4,
        Physical = 5,
        Magical = 6,
        Debuff = 7,
        NoElement = 8,
        QuadElement = 9
    }
    enum ETargetType {
        SingleEnemy = 0,
        AllEnemies = 1,
        Self = 2,
        SingleAlly = 3,
        AllAllies = 4,
        DeadAlly = 5
    }
    enum EStat {
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
        DamageReduction = 10
    }
    enum ESpecialBuff {
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
        Predation = 12
    }
    interface EnumDetail {
        KeyValueObjects: KeyValueObject[];
        KeyValues: {
            [key: string]: number;
        };
        InvertedKeyValues: {
            [key: string]: string;
        };
    }
    interface KeyValueObject {
        Key: string;
        Value: number;
    }
    interface Buff {
        Name: string;
        Value: number;
        Icon: string;
        Description: string;
    }
    interface Debuff {
        Name: string;
        Value: number;
        Icon: string;
        Description: string;
    }
    interface SpecialBuff {
        Name: string;
        Value: number;
        Icon: string;
        Description: string;
        IsNegative: boolean;
    }
    interface Item {
        ID: number;
        Name: string;
        Description: string;
        Icon: string;
        Price: number;
        IsEgg?: boolean;
        EggProperties?: EggProperties;
        IsEquipment?: boolean;
        EquipmentProperties?: EquipmentProperties;
        IsEquipmentAbyssalSword?: boolean;
        EquipmentAbyssalSwordProperties?: EquipmentAbyssalSwordProperties;
        IsUniqueItem?: boolean;
        UniqueItemProperties?: UniqueItemProperties;
        IsConsumable?: boolean;
        ConsumableProperties?: ConsumableProperties;
        IsFood?: boolean;
        FoodProperties?: FoodProperties;
        IsCombatConsumable?: boolean;
        CombatConsumableProperties?: CombatConsumableProperties;
        IsKeyItem?: boolean;
        KeyItemProperties?: KeyItemProperties;
        IsEquipmentCharge?: boolean;
        EquipmentChargeProperties?: EquipmentChargeProperties;
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
        IsSkillResetter?: boolean;
        SkillResetterProperties?: SkillResetterProperties;
        IsEquipmentDebuffOnGettingHit?: boolean;
        EquipmentDebuffOnGettingHitProperties?: EquipmentDebuffOnGettingHitProperties;
        IsSkillPotion?: boolean;
        SkillPotionProperties?: SkillResetterProperties;
        IsEquipmentThornTendril?: boolean;
        EquipmentThornTendrilProperties?: EquipmentThornTendrilProperties;
    }
    interface EquipmentThornTendrilProperties {
        CritDamageMultiplier: number;
        IsOnGettingAttacked: boolean;
    }
    interface EquipmentDebuffOnGettingHitProperties {
        Debuff: DebuffType;
        Chance: number;
        IsOnGettingAttacked: boolean;
    }
    interface SkillResetterProperties {
    }
    interface EquipmentShieldProperties {
        ShieldAmount: number;
        ManaScaling: number;
        ShieldType: number;
        IsOnCombatStart: boolean;
        IsOnTurnStart: boolean;
        IsOnReceiveBuff: boolean;
    }
    interface LootBoxProperties {
        Loot: number[];
        SFXGetReward: SFXGetReward;
    }
    interface EquipmentRemoveDebuffProperties {
        RemoveDebuffCount: number;
        IsOnActionStarted: boolean;
    }
    interface EquipmentPurifyingMaceProperties {
        StacksRemove: number;
        IsOnActionStarted: boolean;
    }
    interface MonsterBellProperties {
        SFXBell: SFXGetReward;
    }
    interface EquipmentHealProperties {
        HealAmount: number;
        HealType: number;
        HealingStat: EStat;
        IsOnCriticalHit: boolean;
        IsOnCounterAttackHit: boolean;
        IsOnActionStarted: boolean;
        IsOnTurnStart: boolean;
    }
    interface EquipmentLuckyCloverProperties {
        BuffChance: number;
        IsOnCriticalHit: boolean;
    }
    interface EquipmentDebuffOnHitProperties {
        Debuff1: DebuffType;
        Debuff2: DebuffType;
        Chance: number;
        IsOnActionDamageHit: boolean;
        IsOnCounterAttackHit: boolean;
    }
    interface LevelBadgeProperties {
        MaxLevel: number;
    }
    interface EquipmentHourglassProperties {
        AgeBonusValue: number;
    }
    interface EquipmentHexingSupportProperties {
        HealActions: boolean;
        BuffActions: boolean;
        ShieldActions: boolean;
        DebuffCount: number;
        IsOnActionStarted: boolean;
    }
    interface EquipmentAddBuffProperties {
        AddType: number;
        BuffCount: number;
        IsOnCombatStart: boolean;
        IsOnActionBuffStarted: boolean;
        IsOnActionHealStarted: boolean;
        IsOnActionShieldStarted: boolean;
    }
    interface CrystalShardProperties {
        SFXTeleport?: any;
        TeleportSceneName: string;
        SpecialHandlingScenes: string[];
        SpecialHandlingBool: string;
        VariableCondition: string;
        EndSpecialHandlingBool: string;
        SpecialHandlingTargetScene: string;
    }
    interface CraftBoxProperties {
        Rewards: Reward[];
        SFXGetReward: SFXGetReward;
    }
    interface SFXGetReward {
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
    interface Reward {
        CommonRewards: Item[];
        RareRewards: Item[];
        Rank: number;
    }
    interface CatalystProperties {
        Icon: string;
        BaseMonster: number;
        AdditionalBaseMonster?: number[];
        EvolveMonster: number;
    }
    interface ShiftStoneProperties {
        StoneType: number;
    }
    interface EquipmentImproveDebuffsProperties {
        DebuffModifier: number;
    }
    interface EquipmentBuffStacksProperties {
        BuffStacks: number[];
        StackIncrease: number;
    }
    interface EquipmentDamageHitProperties {
        Damage: number;
        AnimElement?: any;
        IsOnActionDamageStarted: boolean;
    }
    interface EquipmentBloodVesselProperties {
        ManaRegenerated: number;
        IsOnAllyApplySpecialBuff: boolean;
    }
    interface EquipmentChargeProperties {
        ChargesCount: number;
        ChargeType: number;
        IsOnCombatStart: boolean;
        IsOnTurnStart: boolean;
    }
    interface KeyItemProperties {
        Area?: any;
    }
    interface CombatConsumableProperties {
        EffectAction?: number;
        Icon: string;
        Description: string;
        RetreatItem: boolean;
    }
    interface FoodProperties {
        Stat: EStat;
        Amount: number;
        Level: number;
        PrecedingFood?: number;
        SubsequentFood?: number;
    }
    interface ConsumableProperties {
        Icon: string;
        Description: string;
    }
    interface UniqueItemProperties {
        Icon: string;
        ItemID: number;
        DisplayInInventory: boolean;
        DisplayMultiplesInInventory: boolean;
        Description: string;
    }
    interface EquipmentAbyssalSwordProperties {
        Chance: number;
        IsOnActionDamageStarted: boolean;
        IsOnGettingAttacked: boolean;
    }
    interface EquipmentProperties {
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
    interface UpgradeMaterial {
        Item: Item;
        Quantity: number;
    }
    interface CraftMaterialProperties {
        Description: string;
        Level: number;
    }
    interface EggProperties {
        Monster: number;
    }
    interface Skill {
        ID: number;
        Name: string;
        Description: string;
        IsPassiveSkill?: boolean;
        PassiveSkillProperties?: PassiveSkillProperties;
        IsPassiveHealCharging?: boolean;
        PassiveHealChargingProperties?: PassiveHealChargingProperties;
        IsPassiveManaPotential?: boolean;
        PassiveManaPotentialProperties?: PassiveManaPotentialProperties;
        IsBaseAction?: boolean;
        BaseActionProperties?: BaseActionProperties;
        IsActionModifier?: boolean;
        ActionModifierProperties?: ActionModifierProperties;
        IsActionDamage?: boolean;
        ActionDamageProperties?: ActionDamageProperties;
        IsActionHeal?: boolean;
        ActionHealProperties?: ActionHealProperties;
        IsPassiveElementModifier?: boolean;
        PassiveElementModifierProperties?: PassiveElementModifierProperties;
        IsPassiveImproveStat?: boolean;
        PassiveImproveStatProperties?: PassiveImproveStatProperties;
        IsPassiveAutoRestore?: boolean;
        PassiveAutoRestoreProperties?: PassiveAutoRestoreProperties;
        IsPassiveImproveStatDependant?: boolean;
        PassiveImproveStatDependantProperties?: PassiveImproveStatDependantProperties;
        IsPassiveSpecialBuffChance?: boolean;
        PassiveSpecialBuffChanceProperties?: PassiveSpecialBuffChanceProperties;
        IsPassiveStuckTight?: boolean;
        PassiveStuckTightProperties?: PassiveStuckTightProperties;
        IsPassiveComboHealing?: boolean;
        PassiveComboHealingProperties?: PassiveComboHealingProperties;
        IsActionDebuffOnHit?: boolean;
        ActionDebuffOnHitProperties?: ActionDebuffOnHitProperties;
        IsPassiveDisoriented?: boolean;
        PassiveDisorientedProperties?: PassiveDisorientedProperties;
        IsPassiveIncreaseDebuffStacks?: boolean;
        PassiveIncreaseDebuffStacksProperties?: PassiveIncreaseDebuffStacksProperties;
        IsPassiveRenewal?: boolean;
        PassiveRenewalProperties?: PassiveRenewalProperties;
        IsPassiveComboMaster?: boolean;
        PassiveComboMasterProperties?: PassiveComboMasterProperties;
        IsPassiveEquipmentFocus?: boolean;
        PassiveEquipmentFocusProperties?: PassiveEquipmentFocusProperties;
        IsPassiveBolster?: boolean;
        PassiveBolsterProperties?: ActionModifierProperties;
        IsPassiveManasymbiosis?: boolean;
        PassiveManasymbiosisProperties?: PassiveManasymbiosisProperties;
        IsPassiveAntiCurse?: boolean;
        PassiveAntiCurseProperties?: PassiveAntiCurseProperties;
        IsPassivePurify?: boolean;
        PassivePurifyProperties?: PassivePurifyProperties;
        IsPassiveHealingLink?: boolean;
        PassiveHealingLinkProperties?: PassiveHealingLinkProperties;
        IsPassiveSupply?: boolean;
        PassiveSupplyProperties?: PassiveSupplyProperties;
        IsActionBuff?: boolean;
        ActionBuffProperties?: ActionBuffProperties;
        IsPassiveChannelingSustain?: boolean;
        PassiveChannelingSustainProperties?: PassiveChannelingSustainProperties;
        IsPassiveIncreaseBuffStacks?: boolean;
        PassiveIncreaseBuffStacksProperties?: PassiveIncreaseBuffStacksProperties;
        IsPassiveManaCharging?: boolean;
        PassiveManaChargingProperties?: PassiveManaChargingProperties;
        IsPassiveMentor?: boolean;
        PassiveMentorProperties?: PassiveMentorProperties;
        IsPassiveBuffingRestore?: boolean;
        PassiveBuffingRestoreProperties?: PassiveBuffingRestoreProperties;
        IsPassiveChargingBuffs?: boolean;
        PassiveChargingBuffsProperties?: PassiveChargingBuffsProperties;
        IsActionDebuff?: boolean;
        ActionDebuffProperties?: ActionDebuffProperties;
        IsPassiveLifesteal?: boolean;
        PassiveLifestealProperties?: PassiveLifestealProperties;
        IsPassiveBleedOut?: boolean;
        PassiveBleedOutProperties?: ActionModifierProperties;
        IsPassiveCascade?: boolean;
        PassiveCascadeProperties?: PassiveCascadeProperties;
        IsPassiveHealMastery?: boolean;
        PassiveHealMasteryProperties?: PassiveHealMasteryProperties;
        IsPassiveCriticalHybridization?: boolean;
        PassiveCriticalHybridizationProperties?: PassiveCriticalHybridizationProperties;
        IsPassiveBleed?: boolean;
        PassiveBleedProperties?: PassiveBleedProperties;
        IsPassiveDebuffChance?: boolean;
        PassiveDebuffChanceProperties?: PassiveDebuffChanceProperties;
        IsPassiveSpecialBuffDamageModifier?: boolean;
        PassiveSpecialBuffDamageModifierProperties?: PassiveSpecialBuffDamageModifierProperties;
        IsPassiveHealingShield?: boolean;
        PassiveHealingShieldProperties?: PassiveHealingShieldProperties;
        IsPassiveAssaultMastery?: boolean;
        PassiveAssaultMasteryProperties?: PassiveAssaultMasteryProperties;
        IsPassiveAuraIncreaseStats?: boolean;
        PassiveAuraIncreaseStatsProperties?: PassiveAuraIncreaseStatsProperties;
        IsPassiveAdaptiveEvolution?: boolean;
        PassiveAdaptiveEvolutionProperties?: PassiveAdaptiveEvolutionProperties;
        IsPassiveElementCritChance?: boolean;
        PassiveElementCritChanceProperties?: PassiveElementCritChanceProperties;
        IsPassiveDebuffOnCrit?: boolean;
        PassiveDebuffOnCritProperties?: PassiveDebuffOnCritProperties;
        IsPassiveDamageOnDebuff?: boolean;
        PassiveDamageOnDebuffProperties?: PassiveDamageOnDebuffProperties;
        IsPassiveCongeal?: boolean;
        PassiveCongealProperties?: ActionModifierProperties;
        IsPassiveCriticalDefense?: boolean;
        PassiveCriticalDefenseProperties?: PassiveCriticalDefenseProperties;
        IsPassiveAutoHeal?: boolean;
        PassiveAutoHealProperties?: PassiveAutoHealProperties;
        IsPassiveStartCombatShield?: boolean;
        PassiveStartCombatShieldProperties?: PassiveStartCombatShieldProperties;
        IsActionRevive?: boolean;
        ActionReviveProperties?: ActionReviveProperties;
        IsPassiveRecklessMending?: boolean;
        PassiveRecklessMendingProperties?: PassiveRecklessMendingProperties;
        IsPassiveDuality?: boolean;
        PassiveDualityProperties?: PassiveDualityProperties;
        IsPassiveSituationalSupport?: boolean;
        PassiveSituationalSupportProperties?: PassiveSituationalSupportProperties;
        IsPassiveOverheal?: boolean;
        PassiveOverhealProperties?: PassiveOverhealProperties;
        IsActionSpecialBuff?: boolean;
        ActionSpecialBuffProperties?: ActionSpecialBuffProperties;
        IsPassiveAntitoxin?: boolean;
        PassiveAntitoxinProperties?: PassiveAntitoxinProperties;
        IsPassiveCleanse?: boolean;
        PassiveCleanseProperties?: PassiveCleanseProperties;
        IsPassiveWarlockHealing?: boolean;
        PassiveWarlockHealingProperties?: PassiveWarlockHealingProperties;
        IsPassiveStartCombatDebuff?: boolean;
        PassiveStartCombatDebuffProperties?: PassiveStartCombatDebuffProperties;
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
        IsPassiveAssistance?: boolean;
        PassiveAssistanceProperties?: PassiveWarlockHealingProperties;
        IsActionShield?: boolean;
        ActionShieldProperties?: ActionShieldProperties;
        IsPassivePhoenixAffinity?: boolean;
        PassivePhoenixAffinityProperties?: PassivePhoenixAffinityProperties;
        IsPassiveNecromancy?: boolean;
        PassiveNecromancyProperties?: PassiveNecromancyProperties;
        IsPassiveShieldAura?: boolean;
        PassiveShieldAuraProperties?: PassiveShieldAuraProperties;
        IsPassiveHexingSupport?: boolean;
        PassiveHexingSupportProperties?: PassiveHexingSupportProperties;
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
        IsPassiveTransfusion?: boolean;
        PassiveTransfusionProperties?: PassiveTransfusionProperties;
        IsPassivePrecision?: boolean;
        PassivePrecisionProperties?: PassivePrecisionProperties;
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
        IsActionRemoveDebuff?: boolean;
        ActionRemoveDebuffProperties?: ActionRemoveDebuffProperties;
        IsPassiveLeadership?: boolean;
        PassiveLeadershipProperties?: PassiveLeadershipProperties;
        IsPassiveManaConflux?: boolean;
        PassiveManaConfluxProperties?: PassiveManaConfluxProperties;
        IsPassiveBuffCharging?: boolean;
        PassiveBuffChargingProperties?: PassiveBuffChargingProperties;
        IsPassiveHardShield?: boolean;
        PassiveHardShieldProperties?: PassiveHardShieldProperties;
        IsPassiveMagicAttack?: boolean;
        PassiveMagicAttackProperties?: PassiveMagicAttackProperties;
        IsPassiveSharedBuff?: boolean;
        PassiveSharedBuffProperties?: PassiveSharedBuffProperties;
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
        IsPassiveHeroism?: boolean;
        PassiveHeroismProperties?: PassiveHeroismProperties;
        IsPassiveRevenge?: boolean;
        PassiveRevengeProperties?: PassiveRevengeProperties;
        IsPassiveChargingShield?: boolean;
        PassiveChargingShieldProperties?: PassiveChargingShieldProperties;
        IsPassiveShadowProc?: boolean;
        PassiveShadowProcProperties?: PassiveShadowProcProperties;
        IsActionRemoveStacks?: boolean;
        ActionRemoveStacksProperties?: ActionRemoveDebuffProperties;
        IsPassiveChord?: boolean;
        PassiveChordProperties?: PassiveChordProperties;
        IsPassiveExploit?: boolean;
        PassiveExploitProperties?: PassiveExploitProperties;
        IsPassiveGloriousSpark?: boolean;
        PassiveGloriousSparkProperties?: PassiveGloriousSparkProperties;
        IsMightyBoost?: boolean;
        MightyBoostProperties?: MightyBoostProperties;
        IsPassiveBuffCorruption?: boolean;
        PassiveBuffCorruptionProperties?: PassiveBuffCorruptionProperties;
        IsPassiveCriticalBoon?: boolean;
        PassiveCriticalBoonProperties?: PassiveCriticalBoonProperties;
        IsPassiveCurseChain?: boolean;
        PassiveCurseChainProperties?: PassiveCurseChainProperties;
        IsPassiveSteampunk?: boolean;
        PassiveSteampunkProperties?: PassiveSteampunkProperties;
        IsPassiveComboInitiator?: boolean;
        PassiveComboInitiatorProperties?: PassiveComboInitiatorProperties;
        IsPassivePreparation?: boolean;
        PassivePreparationProperties?: PassivePreparationProperties;
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
        IsActionRemoveBuff?: boolean;
        ActionRemoveBuffProperties?: ActionRemoveDebuffProperties;
        IsPassiveEnlighten?: boolean;
        PassiveEnlightenProperties?: PassiveEnlightenProperties;
        IsPassiveInitialDarkness?: boolean;
        PassiveInitialDarknessProperties?: PassivePreparationProperties;
        IsPassiveTrueDarkness?: boolean;
        PassiveTrueDarknessProperties?: PassiveTrueDarknessProperties;
        IsPassiveDodging?: boolean;
        PassiveDodgingProperties?: PassiveDodgingProperties;
        IsPassiveUncanny?: boolean;
        PassiveUncannyProperties?: PassiveDisorientedProperties;
        IsPassiveMartialProwess?: boolean;
        PassiveMartialProwessProperties?: PassiveMartialProwessProperties;
        IsPassiveStatic?: boolean;
        PassiveStaticProperties?: PassiveStaticProperties;
        IsPassiveBlindingSupport?: boolean;
        PassiveBlindingSupportProperties?: PassiveBlindingSupportProperties;
        IsPassiveWeaponBreak?: boolean;
        PassiveWeaponBreakProperties?: PassiveWeaponBreakProperties;
        IsPassiveBuffSteal?: boolean;
        PassiveBuffStealProperties?: PassiveBuffStealProperties;
        IsPassiveCriticalApex?: boolean;
        PassiveCriticalApexProperties?: PassiveStuckTightProperties;
        IsPassiveCriticalHeal?: boolean;
        PassiveCriticalHealProperties?: ActionModifierProperties;
        IsPassivePathTo?: boolean;
        PassivePathToProperties?: PassivePathToProperties;
        IsPassivePunishment?: boolean;
        PassivePunishmentProperties?: PassivePunishmentProperties;
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
        IsPassiveBrawnOverBrains?: boolean;
        PassiveBrawnOverBrainsProperties?: ActionModifierProperties;
        IsPassiveEnergyConversion?: boolean;
        PassiveEnergyConversionProperties?: PassiveEnergyConversionProperties;
        IsPassiveForcefulBuff?: boolean;
        PassiveForcefulBuffProperties?: PassiveForcefulBuffProperties;
        IsPassiveBuffMastery?: boolean;
        PassiveBuffMasteryProperties?: ActionModifierProperties;
        IsPassiveDebuffMastery?: boolean;
        PassiveDebuffMasteryProperties?: ActionModifierProperties;
        IsPassiveCriticalBase?: boolean;
        PassiveCriticalBaseProperties?: PassiveCriticalBaseProperties;
        IsPassiveDeathBlow?: boolean;
        PassiveDeathBlowProperties?: PassiveStaticProperties;
        IsPassiveDebuffOnGettingHit?: boolean;
        PassiveDebuffOnGettingHitProperties?: PassiveDebuffOnGettingHitProperties;
        IsPassiveVariety?: boolean;
        PassiveVarietyProperties?: PassiveVarietyProperties;
        IsPassiveHex?: boolean;
        PassiveHexProperties?: PassiveHexProperties;
        IsPassiveProliferate?: boolean;
        PassiveProliferateProperties?: PassiveProliferateProperties;
        IsPassiveSidekickSupport?: boolean;
        PassiveSidekickSupportProperties?: PassiveSidekickSupportProperties;
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
        IsActionRedirect?: boolean;
        ActionRedirectProperties?: ActionRedirectProperties;
        IsPassiveImproveBuff?: boolean;
        PassiveImproveBuffProperties?: PassiveImproveBuffProperties;
        IsPassiveReflect?: boolean;
        PassiveReflectProperties?: PassiveReflectProperties;
        IsPassiveDisarmingShielding?: boolean;
        PassiveDisarmingShieldingProperties?: PassiveDisarmingShieldingProperties;
        IsPassiveVolatileShield?: boolean;
        PassiveVolatileShieldProperties?: PassiveVolatileShieldProperties;
        IsPassiveEmpower?: boolean;
        PassiveEmpowerProperties?: PassiveEmpowerProperties;
        IsPassiveProtector?: boolean;
        PassiveProtectorProperties?: PassiveProtectorProperties;
        IsPassiveManeki?: boolean;
        PassiveManekiProperties?: PassiveCriticalBoonProperties;
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
        IsPassiveMagnetize?: boolean;
        PassiveMagnetizeProperties?: PassiveMagnetizeProperties;
        IsPassiveChainReaction?: boolean;
        PassiveChainReactionProperties?: PassiveChainReactionProperties;
        IsPassiveAssaultShield?: boolean;
        PassiveAssaultShieldProperties?: PassiveAssaultShieldProperties;
        IsSorceryBoost?: boolean;
        SorceryBoostProperties?: SorceryBoostProperties;
        IsPassiveDraconicLineage?: boolean;
        PassiveDraconicLineageProperties?: PassiveDraconicLineageProperties;
        IsPassiveDragonBlood?: boolean;
        PassiveDragonBloodProperties?: PassiveDragonBloodProperties;
        IsPassiveCurseTransfusion?: boolean;
        PassiveCurseTransfusionProperties?: PassiveCurseTransfusionProperties;
        IsPassiveTenaciousBarrier?: boolean;
        PassiveTenaciousBarrierProperties?: PassiveTenaciousBarrierProperties;
        IsPassiveProtectedOffense?: boolean;
        PassiveProtectedOffenseProperties?: PassiveHeroicPartyProperties;
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
        IsPassiveSupremacy?: boolean;
        PassiveSupremacyProperties?: PassiveSupremacyProperties;
        IsPoisonedNerves?: boolean;
        PoisonedNervesProperties?: PoisonedNervesProperties;
        IsPassiveDragonMastery?: boolean;
        PassiveDragonMasteryProperties?: PassiveDragonMasteryProperties;
        IsPassiveSubZero?: boolean;
        PassiveSubZeroProperties?: PassiveDominanceProperties;
        IsPassiveShiftNeutralElement?: boolean;
        PassiveShiftNeutralElementProperties?: PassiveShiftNeutralElementProperties;
        IsPassiveDiseaseControl?: boolean;
        PassiveDiseaseControlProperties?: PassiveHardShieldProperties;
        IsPassiveManaBurn?: boolean;
        PassiveManaBurnProperties?: PassiveManaBurnProperties;
        IsPassiveLoadUp?: boolean;
        PassiveLoadUpProperties?: PassiveLoadUpProperties;
        IsPassiveDebuffTriggersDebuff?: boolean;
        PassiveDebuffTriggersDebuffProperties?: PassiveDebuffTriggersDebuffProperties;
        IsPassiveStickFocus?: boolean;
        PassiveStickFocusProperties?: PassiveStickFocusProperties;
        IsPassiveCurseResistance?: boolean;
        PassiveCurseResistanceProperties?: PassiveCurseResistanceProperties;
        IsPassiveGoblinScience?: boolean;
        PassiveGoblinScienceProperties?: PassiveGoblinScienceProperties;
        IsPassiveChargingDebuffs?: boolean;
        PassiveChargingDebuffsProperties?: PassiveChargingDebuffsProperties;
        IsPassiveFuel?: boolean;
        PassiveFuelProperties?: PassiveFuelProperties;
        IsPassiveSupercharged?: boolean;
        PassiveSuperchargedProperties?: PassiveSuperchargedProperties;
        IsPassiveCriticalExploit?: boolean;
        PassiveCriticalExploitProperties?: PassiveCenterOfMassProperties;
        IsPassiveAcidSpit?: boolean;
        PassiveAcidSpitProperties?: PassiveAcidSpitProperties;
        IsPassiveSlowBurn?: boolean;
        PassiveSlowBurnProperties?: ActionModifierProperties;
        IsPassiveBurnDown?: boolean;
        PassiveBurnDownProperties?: PassiveBurnDownProperties;
        IsPassiveRebornFromAshes?: boolean;
        PassiveRebornFromAshesProperties?: PassiveRebornFromAshesProperties;
        IsPassiveFatalUpkeep?: boolean;
        PassiveFatalUpkeepProperties?: PassiveBurnDownProperties;
        IsPassiveSlimeSupport?: boolean;
        PassiveSlimeSupportProperties?: PassiveSlimeSupportProperties;
        IsPassiveTricksterBuffing?: boolean;
        PassiveTricksterBuffingProperties?: PassiveBuffingRestoreProperties;
        IsPassiveRegenerationShield?: boolean;
        PassiveRegenerationShieldProperties?: PassiveRegenerationShieldProperties;
        IsPassiveScreech?: boolean;
        PassiveScreechProperties?: PassiveScreechProperties;
        IsPassiveThickSkin?: boolean;
        PassiveThickSkinProperties?: PassiveThickSkinProperties;
        IsPassiveSevereNature?: boolean;
        PassiveSevereNatureProperties?: PassiveSevereNatureProperties;
        IsPassiveSevereInfection?: boolean;
        PassiveSevereInfectionProperties?: PassiveSevereInfectionProperties;
        IsPassiveBrokenImmunity?: boolean;
        PassiveBrokenImmunityProperties?: PassiveBrokenImmunityProperties;
        IsPassiveManaFunnel?: boolean;
        PassiveManaFunnelProperties?: PassiveManaFunnelProperties;
        IsPassiveBuffCelebration?: boolean;
        PassiveBuffCelebrationProperties?: PassiveBuffCelebrationProperties;
        IsPassiveImpactfulShock?: boolean;
        PassiveImpactfulShockProperties?: PassiveImpactfulShockProperties;
        IsPassiveOccultControl?: boolean;
        PassiveOccultControlProperties?: PassiveOccultControlProperties;
        IsActionDebuffCataclyst?: boolean;
        ActionDebuffCataclystProperties?: ActionDebuffCataclystProperties;
        IsPassiveCleansingBurn?: boolean;
        PassiveCleansingBurnProperties?: PassiveCleansingBurnProperties;
        IsPassiveBurningFaith?: boolean;
        PassiveBurningFaithProperties?: PassiveBurningFaithProperties;
        IsPassiveStampede?: boolean;
        PassiveStampedeProperties?: PassiveStampedeProperties;
        IsPassiveFieryGlands?: boolean;
        PassiveFieryGlandsProperties?: PassiveFieryGlandsProperties;
        IsPassiveMagicBarrier?: boolean;
        PassiveMagicBarrierProperties?: PassiveMagicBarrierProperties;
        IsPassiveCounterHit?: boolean;
        PassiveCounterHitProperties?: PassiveCounterHitProperties;
        IsPassiveRingFocus?: boolean;
        PassiveRingFocusProperties?: PassiveCenterOfMassProperties;
        IsPassiveCombatGuard?: boolean;
        PassiveCombatGuardProperties?: PassiveCombatGuardProperties;
        IsPassiveHibernate?: boolean;
        PassiveHibernateProperties?: PassiveHibernateProperties;
        IsPassiveIntelligentSwarm?: boolean;
        PassiveIntelligentSwarmProperties?: PassiveIntelligentSwarmProperties;
        IsPassiveBlindingSparks?: boolean;
        PassiveBlindingSparksProperties?: PassiveBlindingSparksProperties;
        IsPassiveTrimageHealing?: boolean;
        PassiveTrimageHealingProperties?: PassiveWarlockHealingProperties;
        IsPassivePrimalRage?: boolean;
        PassivePrimalRageProperties?: PassivePrimalRageProperties;
        IsPassiveShockCharging?: boolean;
        PassiveShockChargingProperties?: PassiveShockChargingProperties;
        IsPassiveChargedHealing?: boolean;
        PassiveChargedHealingProperties?: PassiveChargedHealingProperties;
        IsPassiveElementalShift?: boolean;
        PassiveElementalShiftProperties?: PassiveElementalShiftProperties;
        IsPassiveGorgeousPlumage?: boolean;
        PassiveGorgeousPlumageProperties?: PassiveGorgeousPlumageProperties;
        IsPassiveDebuffVariety?: boolean;
        PassiveDebuffVarietyProperties?: PassiveDebuffVarietyProperties;
        IsPassiveSkirmish?: boolean;
        PassiveSkirmishProperties?: PassiveSkirmishProperties;
        IsPassiveInfernalRoar?: boolean;
        PassiveInfernalRoarProperties?: PassiveInfernalRoarProperties;
        IsPassiveAncientPredation?: boolean;
        PassiveAncientPredationProperties?: PassiveAncientPredationProperties;
        IsPassiveJollySpirit?: boolean;
        PassiveJollySpiritProperties?: PassiveRelentlessProperties;
        IsPassiveTricksterSpirit?: boolean;
        PassiveTricksterSpiritProperties?: PassiveTricksterSpiritProperties;
        IsPassiveChannelingSupport?: boolean;
        PassiveChannelingSupportProperties?: PassiveGoldAuraProperties;
        IsPassiveManaSyphon?: boolean;
        PassiveManaSyphonProperties?: PassiveManaSyphonProperties;
        IsPassiveOptimalPerformance?: boolean;
        PassiveOptimalPerformanceProperties?: PassiveOptimalPerformanceProperties;
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
        IsPassiveIcyFists?: boolean;
        PassiveIcyFistsProperties?: PassiveIcyFistsProperties;
        IsPassiveLordOfTheDeep?: boolean;
        PassiveLordOfTheDeepProperties?: PassiveLordOfTheDeepProperties;
    }
    interface PassiveLordOfTheDeepProperties {
        IsOnAllyActionDamagePostHit: boolean;
        IsOnCounterAttackPostHit: boolean;
        BleedDamage: number;
        TypeRestriction1: EMonsterType;
    }
    interface PassiveIcyFistsProperties {
        IsOnActionDamageHit: boolean;
        IsOnHealTarget: boolean;
        ChillChance: number;
        ChillStacks: number;
    }
    interface PassiveLuckyHitProperties {
        IsOnActionDamageHit: boolean;
        HitChance: number;
        DamageBonus: number;
    }
    interface PassiveBalisticsProperties {
        IsOnCalculateStats: boolean;
        DamageBonus: number;
        MissChance: number;
    }
    interface PassiveMasterOfTimeProperties {
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
    }
    interface PassivePollutedWaterProperties {
        Increase: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveBackstabProperties {
        IsOnActionDamageHit: boolean;
        DamageIncrease: number;
        CritChanceIncrease: number;
        HealthTreshhold: number;
    }
    interface PassiveOptimalPerformanceProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageReduction: number;
        DebuffReduction: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveManaSyphonProperties {
        IsOnTriggerPoisonDamage: boolean;
        Mana: number;
    }
    interface PassiveTricksterSpiritProperties {
        IsOnAllyApplyDebuffToEnemy: boolean;
        IsOnAllyApplyBuff: boolean;
        ShieldAmount: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveAncientPredationProperties {
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        TypeRestriction: EMonsterType;
    }
    interface PassiveInfernalRoarProperties {
        IsOnAllyActionDamageHit: boolean;
        Chance: number;
    }
    interface PassiveSkirmishProperties {
        IsOnAllyActionFinished: boolean;
        TypeRestriction: EMonsterType;
        TypeRestriction2: EMonsterType;
        HealthPercent: number;
        ChampionPercent: number;
    }
    interface PassiveDebuffVarietyProperties {
        IsOnAllyActionDamageHit: boolean;
        IsOnAllyCounterAttackHit: boolean;
        IsOnAllyBeingHit: boolean;
        BonusValue: number;
    }
    interface PassiveGorgeousPlumageProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnCalculateEnemyStats: boolean;
        BuffIncrease: number;
        DebuffIncrease: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveElementalShiftProperties {
        IsOnActionFinished: boolean;
        ResistMultiplier: number;
        WeakMultiplier: number;
    }
    interface PassiveChargedHealingProperties {
        IsOnActionHealTarget: boolean;
    }
    interface PassiveShockChargingProperties {
        IsOnTriggerShockDamage: boolean;
        Buff: ESpecialBuff;
        StackCount: number;
    }
    interface PassivePrimalRageProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        DamageBonus: number;
        DamagePerAge: number;
    }
    interface PassiveBlindingSparksProperties {
        IsOnTriggerBurnDamage: boolean;
        IsOnTriggerShockDamage: boolean;
        BurnChance: number;
        ShockChance: number;
    }
    interface PassiveIntelligentSwarmProperties {
        IsOnAllyApplyBuff: boolean;
        IsOnAllyApplyDebuffToEnemy: boolean;
        Chance: number;
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    interface PassiveHibernateProperties {
        IsOnActionFinished: boolean;
        HealthHealPercent: number;
        Buff: BuffType;
    }
    interface PassiveCombatGuardProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageReduction: number;
    }
    interface PassiveCounterHitProperties {
        AttackScaling: number;
        CritChanceIncrease: number;
        HitCounter: number;
        AnimElement?: any;
    }
    interface PassiveMagicBarrierProperties {
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        Stat: EStat;
        ShieldPercent: number;
        ReductionPercent: number;
        PerMaxMana: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveFieryGlandsProperties {
        IsOnApplyShield: boolean;
        Chance: number;
        BurnStacks: number;
    }
    interface PassiveStampedeProperties {
        IsOnAllyActionDamageHit: boolean;
        DamageBonus: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveBurningFaithProperties {
        IsOnTriggerBurnDamage: boolean;
        Shield: number;
    }
    interface PassiveCleansingBurnProperties {
        IsOnTriggerBurnDamage: boolean;
        IsOnAllyApplyDebuffToEnemy: boolean;
        Chance: number;
    }
    interface ActionDebuffCataclystProperties {
        Data: Datum[];
    }
    interface Datum {
        Debuff: DebuffType;
        Time: number;
    }
    interface PassiveOccultControlProperties {
        IsOnAllyBeingHit: boolean;
        DamageReduction: number;
    }
    interface PassiveImpactfulShockProperties {
        CritChanceBonus: number;
        DamageBonus: number;
    }
    interface PassiveBuffCelebrationProperties {
        IsOnMonsterUpkeep: boolean;
        BuffTreshold: number;
        ChargeStacks: number;
    }
    interface PassiveManaFunnelProperties {
        IsOnActionStarted: boolean;
        Chance: number;
        PerMana: number;
        AdditionalStacks: number;
    }
    interface PassiveBrokenImmunityProperties {
        IsOnCalculateEnemyStats: boolean;
        IncreaseAmount: number;
        DebuffType: DebuffType;
    }
    interface PassiveSevereInfectionProperties {
        IsOnCalculateEnemyStats: boolean;
        DebuffModifier: number;
    }
    interface PassiveSevereNatureProperties {
        IsOnTriggerCongealDamage: boolean;
        TriggerChance: number;
    }
    interface PassiveThickSkinProperties {
        IsOnBeingHit: boolean;
        DamageBonus: number;
        DamageReduction: number;
    }
    interface PassiveScreechProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnActionDamageHit: boolean;
        DamageBonus: number;
        ShieldDamageBonus: number;
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    interface PassiveRegenerationShieldProperties {
        IsOnAllyRegenerationTrigger: boolean;
        ShieldAmount: number;
    }
    interface PassiveSlimeSupportProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        IncreaseAmount: number;
        TypeRestriction: EMonsterType;
        GrantsAgeStack: boolean;
    }
    interface PassiveRebornFromAshesProperties {
        IsOnAllyRevive: boolean;
        HealValue: number;
        ChargeCount: number;
    }
    interface PassiveBurnDownProperties {
        IsOnCalculateEnemyStats: boolean;
        damageIncrease: number;
    }
    interface PassiveAcidSpitProperties {
        IsOnAllyActionDamageHit: boolean;
        Chance: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveSuperchargedProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        StacksRequired: number;
        MagicBonus: number;
    }
    interface PassiveFuelProperties {
        IsOnTriggerBurnDamage: boolean;
    }
    interface PassiveChargingDebuffsProperties {
        IsOnAllyConsumeCharges: boolean;
        Debuffs: DebuffType[];
        ChargeStacksNeeded: number;
    }
    interface PassiveGoblinScienceProperties {
        IsOnAllyActionFinished: boolean;
        ChargeStacks: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveCurseResistanceProperties {
        IsOnCalculateStats: boolean;
        Modifier: number;
    }
    interface PassiveStickFocusProperties {
        IsOnCalculateStats: boolean;
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        AttackBonus: number;
        DefenseBonus: number;
        Shielding: number;
    }
    interface PassiveDebuffTriggersDebuffProperties {
        IsOnTriggerBurnDamage: boolean;
        IsOnTriggerShockDamage: boolean;
        IsOnTriggerPoisonDamage: boolean;
        DebuffTrigger: DebuffType;
        Chance: number;
        AppliedDebuff: DebuffType;
    }
    interface PassiveLoadUpProperties {
        IsOnActionShieldTarget: boolean;
        IsOnApplyShield: boolean;
        PassiveChance: number;
        ChargeStacks: number;
    }
    interface PassiveManaBurnProperties {
        IsOnTriggerBurnDamage: boolean;
        Mana: number;
    }
    interface PassiveShiftNeutralElementProperties {
        ToElement: EElement;
    }
    interface PassiveDragonMasteryProperties {
        IsOnAllyActionStarted: boolean;
        TypeRestriction: EMonsterType;
    }
    interface PoisonedNervesProperties {
        IsOnCalculateEnemyStats: boolean;
        ManaRegenReduction: number;
    }
    interface PassiveSupremacyProperties {
        IsOnAllyApplyDebuffToEnemy: boolean;
        ChargeStacks: number;
    }
    interface PassiveRestorationProperties {
        IsOnAllyRegenerationTrigger: boolean;
        Chance: number;
    }
    interface PassiveDemotivateProperties {
        IsOnCalculateEnemyStats: boolean;
        Debuff: DebuffType;
        HealShieldReductionValue: number;
    }
    interface PassiveGainBuffProperties {
        IsOnApplyDebuffToEnemy: boolean;
        Buff: BuffType;
        TriggerType: number;
        Chance: number;
    }
    interface PassiveEternalHeartProperties {
        IsOnCalculateStats: boolean;
        Value: number;
    }
    interface PassiveStunnedProperties {
        IsOnCalculateEnemyStats: boolean;
        ReduceDodgeValue: number;
        ReduceCritValue: number;
    }
    interface PassiveDeepWoundsProperties {
        BleedIncrease: number;
    }
    interface PassiveBloodMagicProperties {
        IsOnAllyActionDamagePostHit: boolean;
        TriggerChance: number;
        DamageValue: number;
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    interface PassiveManaBufferProperties {
        IsOnManaConsumed: boolean;
        Multiplier: number;
    }
    interface PassiveManaDonorProperties {
        IsOnAllyManaSpent: boolean;
        ManaReduction: number;
    }
    interface PassiveTenaciousBarrierProperties {
        ResistChance: number;
    }
    interface PassiveCurseTransfusionProperties {
        IsOnCalculateStats: boolean;
        DamageIncrease: number;
        DamageReduction: number;
    }
    interface PassiveDragonBloodProperties {
        IsOnMonsterUpkeep: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        HealValue: number;
        ManaRegenValue: number;
        MonsterType: EMonsterType;
    }
    interface PassiveDraconicLineageProperties {
        TypeRestriction: EMonsterType;
    }
    interface SorceryBoostProperties {
        IsOnAllyReceiveBuff: boolean;
        ShieldMagicScaling: number;
        DebuffRemove: number;
    }
    interface PassiveAssaultShieldProperties {
        IsOnActionDamagePostHit: boolean;
        IsOnCounterAttackPostHit: boolean;
        IsOnCalculateStats: boolean;
        ShieldPercent: number;
        CritChanceIncrease: number;
    }
    interface PassiveChainReactionProperties {
        IsOnActionDamageStarted: boolean;
    }
    interface PassiveMagnetizeProperties {
        Chance: number;
    }
    interface PassiveReflectBleedProperties {
        IsOnAllyBeingHit: boolean;
        IsOnBeingHit: boolean;
        ReflectChance: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveSprawlProperties {
        IsOnAllyActionFinished: boolean;
        TypeRestriction: EMonsterType;
    }
    interface PassiveManaBolsterProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        ManaRegeneration: number;
    }
    interface PassiveTauntProperties {
        IsOnBeingHit: boolean;
        Chance: number;
        DamageIncrease: number;
    }
    interface PassiveHeroicAssaultProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        CritChanceBonus: number;
    }
    interface PassiveAeonsProperties {
        IsOnMonsterUpkeep: boolean;
        HealValue: number;
        Cap: number;
    }
    interface PassiveGiantsbaneProperties {
        IsOnActionDamageHit: boolean;
        DamageBonus: number;
        DamageBonusGiant: number;
        HealthRating: number;
    }
    interface PassiveHardShellProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageReduction: number;
        CritChanceReduction: number;
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    interface PassiveCenterOfMassProperties {
        Bonus: number;
    }
    interface PassiveElementalBreakProperties {
        IsOnCalculateEnemyStats: boolean;
        ModifyValue: number;
    }
    interface PassiveShieldCrushProperties {
        IsOnAllyActionDamageHit: boolean;
        IsOnAllyCounterAttackHit: boolean;
        BuffType: BuffType;
        DamageBonus: number;
    }
    interface PassiveProtectorProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnAllyMonsterUpkeep: boolean;
        damageReduction: number;
        MonsterType: EMonsterType;
        MonsterType2: EMonsterType;
        OnlyMassAttacks: boolean;
        AppliesRandomBuff: boolean;
    }
    interface PassiveEmpowerProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        IsOnAllyMonsterUpkeep: boolean;
        EmpowerValue: number;
        MonsterType: EMonsterType;
        AppliesRandomBuff: boolean;
    }
    interface PassiveVolatileShieldProperties {
        IsOnActionDamageStarted: boolean;
        ShieldConsume: number;
        Multiplier: number;
        AnimElementProjectile?: any;
        AnimElementImpact?: any;
    }
    interface PassiveDisarmingShieldingProperties {
        IsOnApplyShield: boolean;
        Chance: number;
    }
    interface PassiveReflectProperties {
        IsOnBeingHit: boolean;
        ReflectAmount: number;
        ReflectKeeperBattles: number;
    }
    interface PassiveImproveBuffProperties {
        BuffType: BuffType;
        Value: number;
    }
    interface ActionRedirectProperties {
        AnimElement?: any;
        Offset?: any;
    }
    interface PassiveSplatterProperties {
        IsOnEnemyDeath: boolean;
    }
    interface PassiveCriticalEdgeProperties {
        IsOnActionDamagePostHit: boolean;
        IsOnHealTarget: boolean;
    }
    interface PassiveStartCombatChargesProperties {
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        Count: number;
        TypeRestriction: EMonsterType;
        TriggerForBackupMonsters: boolean;
    }
    interface PassiveDevourProperties {
        IsOnAllyActionFinished: boolean;
        HealAmount: number;
    }
    interface PassiveChargedUpProperties {
        IsOnActionDamageHit: boolean;
        IsOnCalculateStats: boolean;
        IncreaseValue: number;
        StackCap: number;
    }
    interface PassiveSidekickSupportProperties {
        IsOnAllyActionStarted: boolean;
        ScalingMagic: number;
        ScalingDefense: number;
    }
    interface PassiveProliferateProperties {
        IsOnApplyDebuffToEnemy: boolean;
        Damage: number;
        AnimElement?: any;
    }
    interface PassiveHexProperties {
        IsOnActionDamageHit: boolean;
        IsOnAllyActionDamageHit: boolean;
        IsOnAllyHeal: boolean;
        IsOnAllyApplyShield: boolean;
        Chance: number;
        AffectsHealsShields: boolean;
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    interface PassiveVarietyProperties {
        IsOnActionDamageHit: boolean;
        DamageIncrease: number;
    }
    interface PassiveDebuffOnGettingHitProperties {
        Debuff: DebuffType;
        Chance: number;
    }
    interface PassiveCriticalBaseProperties {
        IsOnCalculateStats: boolean;
        Bonus: number;
    }
    interface PassiveForcefulBuffProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        ReductionBypass: number;
        Buff: BuffType;
    }
    interface PassiveEnergyConversionProperties {
        IsOnAllyConsumeCharges: boolean;
        ConversionRate: number;
    }
    interface PassiveObserveProperties {
        IsOnActionFinished: boolean;
        DefenseScaling: number;
    }
    interface PassiveKingOfBeastsProperties {
        IsOnCalculateStats: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        DamageBonus: number;
        DebuffResistance: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveManaGeneratorProperties {
        IsOnBeingHit: boolean;
        Mana: number;
    }
    interface PassiveRelentlessProperties {
        ManaReduction: number;
    }
    interface PassiveUtopiaProperties {
        IsOnMonsterUpkeep: boolean;
        ChargeStacks: number;
    }
    interface PassiveAgeOfPurificationProperties {
        IsOnAllyReceiveSpecialBuff: boolean;
    }
    interface PassiveCriticalBuffProperties {
        IsOnApplyBuff: boolean;
        StackCount: number;
    }
    interface PassiveOutlastProperties {
        IsOnAllyReceiveSpecialBuff: boolean;
        ShieldAmount: number;
        Cap: number;
    }
    interface PassiveAntiCascadeProperties {
        IsOnBeingHit: boolean;
        DamageBonus: number;
    }
    interface PassiveCleansingSidekickProperties {
        IsOnAllyActionDamageHit: boolean;
    }
    interface PassiveEvasionProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        DodgeChance: number;
    }
    interface PassiveCriticalMassProperties {
        IsOnActionDamageHit: boolean;
        IsOnHealTarget: boolean;
        Chance: number;
        OnCriticalHit: boolean;
    }
    interface PassivePunishmentProperties {
        IsOnAllyRemoveBuff: boolean;
        TriggerChance: number;
        Damage: number;
        AnimElement?: any;
    }
    interface PassivePathToProperties {
        IsOnAllyBeingAttacked: boolean;
        TypeRestriction: EMonsterType;
        Buff1: BuffType;
        Buff2: BuffType;
        BuffChance: number;
    }
    interface PassiveBuffStealProperties {
        IsOnAllyRemoveBuff: boolean;
    }
    interface PassiveWeaponBreakProperties {
        IsOnCalculateEnemyStats: boolean;
        ReduceCritValue: number;
    }
    interface PassiveBlindingSupportProperties {
        IsOnActionStarted: boolean;
    }
    interface PassiveStaticProperties {
        IsOnActionDamageHit: boolean;
        DamageBonus: number;
    }
    interface PassiveMartialProwessProperties {
        IsOnDodgeHit: boolean;
        chance: number;
    }
    interface PassiveDodgingProperties {
        IsOnCalculateStats: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        DodgeChance: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveTrueDarknessProperties {
        IsOnAllyApplySpecialBuff: boolean;
        Chance: number;
    }
    interface PassiveEnlightenProperties {
        IsOnReceiveBuffPreCheck: boolean;
        Chance: number;
    }
    interface PassiveSevereHitProperties {
        IsOnActionDamagePostHit: boolean;
        IsOnCounterAttackPostHit: boolean;
        Debuff: DebuffType;
        SpecialBuff: BuffType;
        DamageTreshold: number;
        ChampionTreshold: number;
    }
    interface PassiveMystifyProperties {
        IsOnApplyDebuffToEnemy: boolean;
        IsOnAllyApplyDebuffToEnemy: boolean;
        Chance: number;
    }
    interface PassiveSpawnOfChampionsProperties {
        IsOnCombatStart: boolean;
        Buffs: BuffType[];
        TypeRestriction1: EMonsterType;
        TypeRestriction2: EMonsterType;
    }
    interface PassiveCriticalConsistencyProperties {
        IsOnActionDamageHit: boolean;
        IsOnCounterAttackHit: boolean;
        IsOnCalculateStats: boolean;
        CritDamageBonus: number;
        IncreaseValue: number;
    }
    interface PassiveSingleStrikeProperties {
        IsOnCalculateStats: boolean;
        DamageIncrease: number;
    }
    interface PassiveEmergencyChannelProperties {
        IsOnActionFinished: boolean;
        Threshold: number;
    }
    interface PassiveBerserkProperties {
        IsOnActionDamagePostHit: boolean;
        DamageTreshold: number;
        ChampionTreshold: number;
        ChargeStacks: number;
    }
    interface PassiveShatterProperties {
        CritChanceBonus: number;
    }
    interface PassiveFirstImpactProperties {
        IsOnActionDamageStarted: boolean;
        IsOnCounterAttackStarted: boolean;
        DamageBonus: number;
        MassDamageBonus: number;
    }
    interface PassiveDivineShieldProperties {
        IsOnReceiveBuff: boolean;
        ShieldAmount: number;
        ChargeStacks: number;
    }
    interface PassiveCorrosionProperties {
        IsOnCalculateEnemyStats: boolean;
        DamageIncrease: number;
    }
    interface PassivePlagueProperties {
        IsOnTriggerPoisonDamage: boolean;
        Chance: number;
    }
    interface PassiveToxicSupportProperties {
        IsOnHealTarget: boolean;
        Chance: number;
        DebuffStacks: number;
        Debuff: DebuffType;
    }
    interface PassiveDominanceProperties {
        IsOnAllyActionDamageHit: boolean;
        IsOnAllyCounterAttackHit: boolean;
        DamageBonus: number;
    }
    interface PassivePreparationProperties {
        IsOnCombatStart: boolean;
    }
    interface PassiveComboInitiatorProperties {
        IsOnCalculateStats: boolean;
        IsOnActionDamageStarted: boolean;
        DamageBonus: number;
        AdditionalHitDamage: number;
        AnimElement?: any;
    }
    interface PassiveSteampunkProperties {
        IsOnAllyActionStarted: boolean;
        TypeRestrition: number;
        TypeRestrition2: number;
        Debuff: DebuffType;
    }
    interface PassiveCurseChainProperties {
        IsOnApplyDebuffToEnemy: boolean;
        Chance: number;
    }
    interface PassiveCriticalBoonProperties {
        IsOnActionDamageHit: boolean;
        IsOnHealTarget: boolean;
        Chance: number;
    }
    interface PassiveBuffCorruptionProperties {
        IsOnCalculateEnemyStats: boolean;
        BuffReduce: number;
    }
    interface MightyBoostProperties {
        IsOnAllyReceiveBuff: boolean;
        ShieldAttackScaling: number;
        NegativeStackRemove: number;
    }
    interface PassiveGloriousSparkProperties {
        IsOnAllyActionDamageStarted: boolean;
        Damage: number;
        DamageAdditionalGlory: number;
        AnimElement?: any;
    }
    interface PassiveExploitProperties {
        IsOnAllyCounterAttackHit: boolean;
        RandomBuff: boolean;
        Buff: BuffType;
        Shield: number;
    }
    interface PassiveChordProperties {
        IsOnCalculateStats: boolean;
        IsOnApplyBuff: boolean;
        Type: number;
        Value: number;
    }
    interface PassiveShadowProcProperties {
        IsOnActionDamageStarted: boolean;
        IsOnActionHealStarted: boolean;
        IsOnActionShieldStarted: boolean;
        IsOnActionBuffStarted: boolean;
        DamageValue: number;
        AnimElement?: any;
        ShieldValue: number;
        HealValue: number;
    }
    interface PassiveChargingShieldProperties {
        IsOnReceiveSpecialBuff: boolean;
        ShieldAmount: number;
    }
    interface PassiveRevengeProperties {
        IsOnBeingHit: boolean;
    }
    interface PassiveHeroismProperties {
        IsOnCalculateStats: boolean;
        DamageBonus: number;
    }
    interface PassiveElectrolytesProperties {
        IsOnTriggerShockDamage: boolean;
        Chance: number;
    }
    interface PassiveSpreadDebuffProperties {
        IsOnAllyApplyDebuffToEnemy: boolean;
        Debuff: DebuffType;
        SpreadDebuff: number;
        Chance: number;
        OnSameEnemy: boolean;
    }
    interface PassiveChargeAmplifierProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageIncrease: number;
    }
    interface PassiveEnergizeProperties {
        IsOnTriggerShockDamage: boolean;
        HealAmount: number;
    }
    interface PassiveSpecialBuffOnGettingHitProperties {
        Buff: ESpecialBuff;
    }
    interface PassiveCriticalSorceryProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        BuffType: BuffType;
        CritChanceBonus: number;
    }
    interface PassiveElementAffinityProperties {
        IsOnActionDamageHit: boolean;
        DamageBonus: number;
        Element: EElement;
    }
    interface PassiveSharedBuffProperties {
        IsOnReceiveBuffPreCheck: boolean;
        BuffType: BuffType;
    }
    interface PassiveMagicAttackProperties {
        MagicAttackPrefab: number;
    }
    interface PassiveHardShieldProperties {
        IsOnBeingHit: boolean;
        DamageReduction: number;
    }
    interface PassiveBuffChargingProperties {
        IsOnApplyBuff: boolean;
    }
    interface PassiveManaConfluxProperties {
        IsOnAllyManaSpent: boolean;
        StackPerManaSpent: number;
    }
    interface PassiveLeadershipProperties {
        IsOnReceiveSpecialBuff: boolean;
    }
    interface ActionRemoveDebuffProperties {
        Count: number;
        Delay: number;
    }
    interface PassiveComboShieldingProperties {
        IsOnActionShieldStarted: boolean;
        DefenseScale: number;
    }
    interface PassiveCopyShieldProperties {
        IsOnReceiveShield: boolean;
        CopyAmount: number;
    }
    interface PassiveWonderPotionProperties {
        IsOnAllyActionStarted: boolean;
    }
    interface PassivePotionMasteryProperties {
        IncreaseValue: number;
    }
    interface PassiveBarricadeProperties {
        IsOnApplyShield: boolean;
        Chance: number;
        Buff: BuffType;
    }
    interface PassiveShieldProcsProperties {
        IsOnActionDamageHit: boolean;
        ProcType: number;
        Shield: number;
    }
    interface PassiveGoldAuraProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        Bonus: number;
    }
    interface PassiveGoldSenseProperties {
        GoldIncrease: number;
    }
    interface PassiveDoubleImpactProperties {
        IsOnActionDamageStarted: boolean;
        DamageValue: number;
        AnimElementFire?: any;
        AnimElementWater?: any;
        AnimElementWind?: any;
        AnimElementEarth?: any;
        AnimElementNeutral?: any;
    }
    interface PassiveOvercastProperties {
        IsOnCalculateStats: boolean;
        DamageIncrease: number;
        ManaIncrease: number;
    }
    interface PassiveBlacksmithingProperties {
        Stats: number[];
        Bonus: number;
        TypeRestriction: EMonsterType;
        EquipmentTypes: number[];
    }
    interface PassiveMeditateProperties {
        IsOnActionFinished: boolean;
        ChargeStacks: number;
    }
    interface PassiveDoubleStrikeProperties {
        Chance: number;
        SecondHitDelay: number;
    }
    interface PassiveDemonicTheftProperties {
        IsOnAllyActionDamageStarted: boolean;
        TypeRestriction: EMonsterType;
    }
    interface PassiveRecuperateProperties {
        IsOnActionDamageHit: boolean;
        IsOnCounterAttackHit: boolean;
        IsOnHealTarget: boolean;
        ManaAmount: number;
    }
    interface PassiveBuffMultiplierProperties {
        IsOnCalculateStats: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        Improve: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveHeroicPartyProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageBonus: number;
    }
    interface PassiveHeroicDefenseProperties {
        IsOnCalculateStats: boolean;
        ReduceValue: number;
    }
    interface PassiveEquipmentSlotProperties {
        IsWeapon: boolean;
        StatReduction: number;
    }
    interface PassivePrecisionProperties {
        critChance: number;
        cannotMiss: boolean;
    }
    interface PassiveTransfusionProperties {
        IsOnManaRegenerated: boolean;
        HealValue: number;
    }
    interface ActionShieldBurstProperties {
        Multiplicator: number;
        ShieldConsume: number;
    }
    interface PassiveSaboteursShieldProperties {
        IsOnApplyDebuffToEnemy: boolean;
        Percent: number;
    }
    interface PassiveFeastProperties {
        IsOnEnemyBleed: boolean;
        HealAmount: number;
    }
    interface ActionTypeRestrictionProperties {
        Types: EMonsterType[];
    }
    interface PassiveBloodDriveProperties {
        IsOnTriggerBurnDamage: boolean;
        IsOnTriggerPoisonDamage: boolean;
        IsOnTriggerCongealDamage: boolean;
        Chance: number;
        DamageConversion: number;
        AnimElement?: any;
    }
    interface PassiveArmorBypassProperties {
        IsOnCalculateStats: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        BypassAmount: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveHexingSupportProperties {
        IsOnActionFinished: boolean;
    }
    interface PassiveShieldAuraProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        ShieldBonus: number;
    }
    interface PassiveNecromancyProperties {
        IsOnAllyRevive: boolean;
        HealValue: number;
        AgeStackCount: number;
        DebuffCount: number;
    }
    interface PassivePhoenixAffinityProperties {
        HealAmount: number;
        AnimElement?: any;
        ChargedRebirth: boolean;
    }
    interface ActionShieldProperties {
        ShieldAmount: number;
        ScaleDefense: number;
        ScaleMagic: number;
        ScaleAttack: number;
        ScaleMana: number;
        ScaleTargetHealth: number;
        ShieldTimings: number[];
        ShieldCaster: boolean;
    }
    interface PassiveBuffingShieldProperties {
        IsOnApplyBuff: boolean;
        ShieldAmount: number;
    }
    interface PassiveBuffingHealProperties {
        IsOnApplyBuff: boolean;
        ScaleMagic: number;
    }
    interface PassiveComboBuffingProperties {
        IsOnAllyActionStarted: boolean;
        AffectsHealsShields: boolean;
    }
    interface PassiveChannelingBalanceProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        DamageBonus: number;
        ReductionBonus: number;
    }
    interface PassiveExtraBuffProperties {
        IsOnAllyReceiveBuff: boolean;
        Buff: BuffType;
        Chance: number;
    }
    interface PassiveVenomousBiteProperties {
        IsOnActionDamageHit: boolean;
        Chance: number;
        Debuffs: DebuffType[];
    }
    interface PassiveHybridMasteryProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        increaseValue: number;
    }
    interface PassiveBountyProperties {
        IsOnEnemyDeath: boolean;
        buffCount: number;
    }
    interface PassiveStartTurnBuffProperties {
        IsOnMonsterUpkeep: boolean;
        BuffType: BuffType;
    }
    interface PassiveToxicHealthProperties {
        IsOnMonsterUpkeep: boolean;
        HealValue: number;
    }
    interface PassiveSevereUpkeepProperties {
        IsOnTriggerBurnDamage: boolean;
        IsOnTriggerPoisonDamage: boolean;
        TriggerChance: number;
    }
    interface ActionConditionalDamageProperties {
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
    interface PassiveStartCombatDebuffProperties {
        IsOnCombatStart: boolean;
        Debuff: DebuffType;
    }
    interface PassiveWarlockHealingProperties {
        IsOnHealTarget: boolean;
        Chance: number;
    }
    interface PassiveCleanseProperties {
        IsOnActionDamageHit: boolean;
        Chance: number;
    }
    interface PassiveAntitoxinProperties {
        IsOnMonsterUpkeep: boolean;
        IsOnAllyMonsterUpkeep: boolean;
        IsOnCombatStart: boolean;
        IsOnAllyCombatStart: boolean;
        TypeRestriction: EMonsterType;
        GrantsAgeStack: boolean;
    }
    interface ActionSpecialBuffProperties {
        Buff: ESpecialBuff;
        DoubleBuff: boolean;
        Buff2: BuffType;
        StackCount: number;
        ApplyDelay: number;
        ApplyChance: number;
        Variable: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveOverhealProperties {
        IsOnAllyHeal: boolean;
        ConversionAmount: number;
    }
    interface PassiveSituationalSupportProperties {
        IsOnActionStarted: boolean;
        BuffCount: number;
        ShieldAmount: number;
    }
    interface PassiveDualityProperties {
        IsOnAllyReceiveBuff: boolean;
        Chance: number;
    }
    interface PassiveRecklessMendingProperties {
        IsOnAllyApplyDebuffToEnemy: boolean;
        HealAmount: number;
    }
    interface ActionReviveProperties {
        Delay: number;
        PermadeathShield: number;
    }
    interface PassiveStartCombatShieldProperties {
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
    interface PassiveAutoHealProperties {
        IsOnActionDamageStarted: boolean;
        MagicScaling: number;
        HealEffect?: any;
    }
    interface PassiveCriticalDefenseProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        ReduceValue: number;
    }
    interface PassiveDamageOnDebuffProperties {
        IsOnApplyDebuffToEnemy: boolean;
        Debuff: DebuffType;
        DamageValue: number;
        requiresOtherDebuff: boolean;
        SecondDebuff: number;
    }
    interface PassiveDebuffOnCritProperties {
        IsOnActionDamageHit: boolean;
        IsOnCounterAttackHit: boolean;
        IsOnHealTarget: boolean;
        Debuff: DebuffType;
    }
    interface PassiveElementCritChanceProperties {
        CritBonus: number;
        Element: EElement;
    }
    interface PassiveAdaptiveEvolutionProperties {
        BuffGained: number;
        DebuffApplied: number;
    }
    interface PassiveAuraIncreaseStatsProperties {
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
    interface PassiveAssaultMasteryProperties {
        Buffs: BuffType[];
    }
    interface PassiveHealingShieldProperties {
        IsOnHealTarget: boolean;
        ConversionAmount: number;
    }
    interface PassiveSpecialBuffDamageModifierProperties {
        IsOnCalculateEnemyStats: boolean;
        Buff: ESpecialBuff;
        DamageBonus: number;
    }
    interface PassiveDebuffChanceProperties {
        IsOnActionDamageHit: boolean;
        IsOnCounterAttackHit: boolean;
        Debuff: DebuffType;
        Chance: number;
        RestrictToElement: boolean;
        ElementRestriction: number;
    }
    interface PassiveBleedProperties {
        IsOnActionDamagePostHit: boolean;
        IsOnCounterAttackPostHit: boolean;
        BleedDamage: number;
    }
    interface PassiveCriticalHybridizationProperties {
        IsOnActionDamageHit: boolean;
        DamageValue: number;
        AnimElement?: any;
    }
    interface PassiveHealMasteryProperties {
        IsOnCalculateStats: boolean;
        IncreaseAmount: number;
    }
    interface PassiveCascadeProperties {
        IsOnActionDamageHit: boolean;
        IsOnActionHealTarget: boolean;
        IsOnActionShieldTarget: boolean;
        DamageBonus: number;
    }
    interface PassiveLifestealProperties {
        IsOnActionDamagePostHit: boolean;
        IsOnCalculateStats: boolean;
        LifestealPercent: number;
        OnlyOnCriticalHits: boolean;
        AffectsWholeParty: boolean;
        CritChanceIncrease: number;
    }
    interface ActionDebuffProperties {
        Debuffs: DebuffType[];
        ApplyDelay: number;
        ApplyChance: number;
        TargetCount: number;
    }
    interface PassiveChargingBuffsProperties {
        IsOnAllyReceiveSpecialBuff: boolean;
        Buffs: BuffType[];
        Chance: number;
    }
    interface PassiveBuffingRestoreProperties {
        IsOnApplyBuff: boolean;
        Chance: number;
    }
    interface PassiveMentorProperties {
        IsOnActionBuffStarted: boolean;
        IsOnActionHealStarted: boolean;
        IsOnActionShieldStarted: boolean;
        BuffCount: number;
    }
    interface PassiveManaChargingProperties {
        IsOnManaRegenerated: boolean;
        ManaThreshhold: number;
        AffectsAllies: boolean;
    }
    interface PassiveIncreaseBuffStacksProperties {
        stackCountIncrease: number;
        Buff: BuffType;
        DuoBuff: boolean;
        Buff2: BuffType;
    }
    interface PassiveChannelingSustainProperties {
        IsOnAllyMonsterUpkeep: boolean;
        ManaScaling: number;
    }
    interface ActionBuffProperties {
        Buffs: BuffType[];
        ApplyDelay: number;
        SecondaryBuffCount: number;
        RandomBuffCount: number;
    }
    interface PassiveSupplyProperties {
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
    interface PassiveHealingLinkProperties {
        IsOnAllyHeal: boolean;
        HealChance: number;
    }
    interface PassivePurifyProperties {
        IsOnActionHealStarted: boolean;
        StacksRemove: number;
        MassStacksRemove: number;
    }
    interface PassiveAntiCurseProperties {
        IsOnCalculateTeamMonsterStats: boolean;
        Modifier: number;
    }
    interface PassiveManasymbiosisProperties {
        IsOnHeal: boolean;
        ManaAmount: number;
    }
    interface PassiveEquipmentFocusProperties {
        Stat: EStat;
        Bonus: number;
    }
    interface PassiveComboMasterProperties {
        IsOnAllyActionDamageStarted: boolean;
        DamageValue: number;
        StatScaling: number;
        ScaleStat: EStat;
        AnimElement?: any;
        ElementRestriction: number;
        TypeRestriction: EMonsterType;
    }
    interface PassiveRenewalProperties {
        IsOnAllyDebuffOrStackRemoved: boolean;
        HealShieldAmount: number;
    }
    interface PassiveIncreaseDebuffStacksProperties {
        stackCountIncrease: number;
        Debuff: DebuffType;
    }
    interface PassiveDisorientedProperties {
        DodgeChance: number;
    }
    interface ActionDebuffOnHitProperties {
        Debuff: DebuffType;
        dualDebuff: boolean;
        Debuff2: DebuffType;
        ApplyChance: number;
    }
    interface PassiveComboHealingProperties {
        IsOnActionHealStarted: boolean;
        HealMagicScale: number;
        HealAttackScale: number;
        HealDefenseScale: number;
        HealManaeScale: number;
    }
    interface PassiveStuckTightProperties {
        CritChanceIncrease: number;
    }
    interface PassiveSpecialBuffChanceProperties {
        IsOnActionDamageHit: boolean;
        Buff: ESpecialBuff;
        Chance: number;
        ElementRestriction: number[];
    }
    interface PassiveImproveStatDependantProperties {
        IsOnCalculateStatsPostMultiplication: boolean;
        IsOnCalculateTeamMonsterStats: boolean;
        DependantStat: EStat;
        IncreasedStat: number;
        Value: number;
        Pass: number;
    }
    interface PassiveAutoRestoreProperties {
        IsOnActionDamageStarted: boolean;
        Count: number;
    }
    interface PassiveImproveStatProperties {
        IsOnCalculateBaseStats: boolean;
        IsOnCalculateStats: boolean;
        Stat: EStat;
        Value: number;
        IsPercent: boolean;
        IsNegative: boolean;
    }
    interface PassiveElementModifierProperties {
        Element: EElement;
        Modifier: number;
    }
    interface ActionHealProperties {
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
    interface ActionDamageProperties {
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
    interface ActionModifierProperties {
    }
    interface BaseActionProperties {
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
    interface PassiveManaPotentialProperties {
        IsOnCalculateStats: boolean;
        IsOnActionDamageHit: boolean;
        Multiplier: number;
        ManaRequired: number;
    }
    interface PassiveHealChargingProperties {
        IsOnHealTarget: boolean;
    }
    interface PassiveSkillProperties {
        OverlaySpecialBuff?: OverlaySpecialBuff;
        Description: string;
        IsAura: boolean;
        IsUnique: boolean;
        OverlayDebuffs?: DebuffType[];
        OverlayBuffs?: BuffType[];
    }
    interface OverlaySpecialBuff {
        BuffType: ESpecialBuff;
        Name: string;
        Icon: string;
        Description: string;
        IsNegative: boolean;
    }
    interface Monster {
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
        RewardsCommon: Item[];
        RewardsRare: Item[];
        NoRareRewards: boolean;
        Appearances: Appearance[];
    }
    interface Appearance {
        SceneName: string;
        MapAreaName: string;
    }
    interface SkillTree {
        Tier1Skills: Skill[];
        Tier2Skills: Skill[];
        Tier3Skills: Skill[];
        Tier4Skills: Skill[];
        Tier5Skills: Skill[];
    }
    interface BaseStats {
        attack: number;
        magic: number;
        defense: number;
        health: number;
        mana: number;
    }
}
