export interface dangoInfo {
    id: number;
    name: string;
    skill: string;
    effect: string;
    activationChance: number;
    img: string;
    dailySpecial: boolean;
}

export const powerful: dangoInfo[] = [
    {
        id: 101, 
        name: 'Sweetheart',
        skill: 'Dango Hurler', 
        effect: 'Increases damage dealt by kunai.',
        activationChance: 80,
        img: '',
        dailySpecial: false
    },
    {
        id: 102, 
        name: 'Peach Skill',
        skill: 'Dango Deflector', 
        effect: 'Helps your weapon retain sharpness when attacks are deflected.',
        activationChance: 90,
        img: '',
        dailySpecial: false
    },
    {
        id: 103, 
        name: 'Cool-to-the-Core',
        skill: 'Dango Bulker', 
        effect: 'Grants a temporary attack boost when you use the Show Off 2 gesture for a while.',
        activationChance: 80,
        img: '',
        dailySpecial: false
    },
    {
        id: 104, 
        name: 'Mint-iature',
        skill: 'Dango Booster', 
        effect: 'Temporarily increases attack and defense after consumption, once.',
        activationChance: 70,
        img: '',
        dailySpecial: false
    },
    {
        id: 105, 
        name: 'Dizzybloom',
        skill: 'Dango Slugger', 
        effect: 'Makes it easier to stun monsters.',
        activationChance: 50,
        img: '',
        dailySpecial: false
    },
    {
        id: 106, 
        name: 'Fruitflash',
        skill: 'Dango Bombardier', 
        effect: 'Increases damage of Sticky Ammo and gunlance shells.',
        activationChance: 50,
        img: '',
        dailySpecial: false
    },
    {
        id: 107, 
        name: 'Beansplosion',
        skill: 'Dango Temper', 
        effect: 'Increases ammo damage, but also increases',
        activationChance: 50,
        img: '',
        dailySpecial: false
    },
];

export const determined: dangoInfo[] = [
    {
        id: 201, 
        name: 'Berry Safe',
        skill: 'Dango Insurance', 
        effect: 'Prevents your group from being penalized the first time a member faints.',
        activationChance: 85,
        img: '',
        dailySpecial: true
    },
    {
        id: 202, 
        name: 'Bestnut',
        skill: 'Dango Defender (Lo)', 
        effect: 'Sometimes decreases damage taken.',
        activationChance: 85,
        img: '',
        dailySpecial: false
    },
    {
        id: 203, 
        name: 'Medicinal',
        skill: 'Dango Medic (Lo)', 
        effect: 'Slightly increases health recovery from items.',
        activationChance: 85,
        img: '',
        dailySpecial: false
    },
    {
        id: 204, 
        name: 'Moongaze',
        skill: 'Dango Reviver', 
        effect: 'Restores health to allies in the area upon fainting, once.',
        activationChance: 90,
        img: '',
        dailySpecial: false
    },
    {
        id: 205, 
        name: 'Cacaoutstanding',
        skill: 'Dango Immunizer', 
        effect: 'Haves the effect duration of Defense Down and speeds up blight recovery.',
        activationChance: 85,
        img: '',
        dailySpecial: false
    },
    {
        id: 206, 
        name: 'Piping-hot Egg',
        skill: 'Dango Fire Res (Lo)', 
        effect: 'Slightly increases fire resistance.',
        activationChance: 90,
        img: '',
        dailySpecial: false
    },
    {
        id: 207, 
        name: 'Pure Water',
        skill: 'Dango Water Res (Lo)', 
        effect: 'Slightly increases water resistance.',
        activationChance: 90,
        img: '',
        dailySpecial: false
    },
    {
        id: 208, 
        name: 'Spicetingle',
        skill: 'Dango Thunder Res (Lo)', 
        effect: 'Slightly increases thunder resistance.',
        activationChance: 90,
        img: '',
        dailySpecial: false
    },
    {
        id: 209, 
        name: 'Too-cool',
        skill: 'Dango Ice Res (Lo)', 
        effect: 'Slightly increases ice resistance.',
        activationChance: 90,
        img: '',
        dailySpecial: false
    },
    {
        id: 210, 
        name: 'Dragonward',
        skill: 'Dango Dragon Res (Lo)', 
        effect: 'Slightly increases dragon resistance.',
        activationChance: 80,
        img: '',
        dailySpecial: false
    },
    {
        id: 211, 
        name: 'Magnaroar',
        skill: 'Dango Moxie', 
        effect: 'Prevents fainting one time when damage taken exceeds your remaining health.',
        activationChance: 60,
        img: '',
        dailySpecial: false
    },
];

export const unusual: dangoInfo[] = [
    {
        id: 301, 
        name: 'Sharp',
        skill: 'Dango Polisher', 
        effect: 'Speeds up weapon sharpening.',
        activationChance: 70,
        img: '',
        dailySpecial: false
    },
    {
        id: 302, 
        name: 'Balancing',
        skill: 'Dango Feet', 
        effect: 'Prevents you from getting knocked on your butt.',
        activationChance: 55,
        img: '',
        dailySpecial: false
    },
    {
        id: 303, 
        name: 'Leg Day',
        skill: 'Dango Wall Runner', 
        effect: 'Decreases stamina depletion while wall running.',
        activationChance: 80,
        img: '',
        dailySpecial: false
    },
    {
        id: 304, 
        name: 'Invigorating',
        skill: 'Dango Fighter', 
        effect: 'Reduces stamina depletion when evading, blocking, or doing certain other actions.',
        activationChance: 50,
        img: '',
        dailySpecial: false
    },
    {
        id: 305, 
        name: 'Pinea-full',
        skill: 'Dango Fighter', 
        effect: 'Reduces stamina depletion when evading, blocking, or doing certain other actions.',
        activationChance: 80,
        img: '',
        dailySpecial: false
    },
    {
        id: 306, 
        name: 'Spud-luck',
        skill: 'Dango Weakener', 
        effect: 'Large monsters encountered on quests have an increased chance of being weaker than normal.',
        activationChance: 90,
        img: '',
        dailySpecial: false
    },
    {
        id: 307, 
        name: 'Dressage',
        skill: 'Dango Rider', 
        effect: 'Extends riding time.',
        activationChance: 80,
        img: '',
        dailySpecial: false
    }
];

export const grandiose: dangoInfo[] = [
    {
        id: 401, 
        name: 'The Kamura',
        skill: 'Dango Calculator', 
        effect: 'Increases the number of Kamura Points you receive at the end of a quest.',
        activationChance: 90,
        img: '',
        dailySpecial: true
    },
    {
        id: 402, 
        name: 'Raisin d\'être',
        skill: 'Dango Harvester', 
        effect: 'Reduces the time between gathering point respawns.',
        activationChance: 90,
        img: '',
        dailySpecial: true
    },
    {
        id: 403, 
        name: 'Hap-peanut',
        skill: 'Dango Fortune Caller', 
        effect: 'Sometimes increases the number of reward items received at the end of a quest.',
        activationChance: 70,
        img: '',
        dailySpecial: true
    },
    {
        id: 404, 
        name: 'Rosy',
        skill: 'Dango Carver (Lo)', 
        effect: 'Sometimes increases the number of times you can carve.',
        activationChance: 80,
        img: '',
        dailySpecial: true
    },
    {
        id: 405, 
        name: 'Wealthy Man',
        skill: 'Dango Money Maker', 
        effect: 'Increases the amount of zenny you receive at the end of a quest.',
        activationChance: 90,
        img: '',
        dailySpecial: true
    },
    {
        id: 406, 
        name: 'Bee-utiful',
        skill: 'Dango Gatherer', 
        effect: 'Increases the quantity of honey obtained when gathering.',
        activationChance: 75,
        img: '',
        dailySpecial: false
    },
    {
        id: 407, 
        name: 'Chirp Chirp',
        skill: 'Dango Bird Caller', 
        effect: 'Makes Spiribirds more likely to approach you.',
        activationChance: 80,
        img: '',
        dailySpecial: false
    },
    {
        id: 408, 
        name: 'Call-of-the-Wild',
        skill: 'Dango Summoner', 
        effect: 'Makes rare Crafty Creatures more likely to appear.',
        activationChance: 90,
        img: '',
        dailySpecial: false
    },
    {
        id: 409, 
        name: 'Buddy\'s Treat',
        skill: 'Dango Trainer', 
        effect: 'Speeds up Buddy Growth.',
        activationChance: 80,
        img: '',
        dailySpecial: false
    },
]



export const dangoData = [
    ...powerful, 
    ...determined, 
    ...unusual, 
    ...grandiose
]