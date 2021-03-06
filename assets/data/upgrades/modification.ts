import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Ablative Plating',
    limited: 0,
    xws: 'ablativeplating',
    sides: [
      {
        title: 'Ablative Plating',
        type: 'Modification',
        ability:
          'Before you would suffer damage from an obstacle or from a friendly bomb detonating, you may spend 1 [Charge]. If you do, prevent 1 damage.',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_68.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_68.jpg',
        ffg: 292,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Advanced SLAM',
    limited: 0,
    xws: 'advancedslam',
    sides: [
      {
        title: 'Advanced SLAM',
        type: 'Modification',
        ability:
          'After you perform a [Slam] action, if you fully executed the maneuver, you may perform a white action on your action bar, treating that action as red.',
        slots: ['Modification'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_69.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_69.jpg',
        ffg: 293,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'SLAM' } }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Afterburners',
    limited: 0,
    xws: 'afterburners',
    sides: [
      {
        title: 'Afterburners',
        type: 'Modification',
        ability:
          'After you fully execute a speed 3-5 maneuver, you may spend 1 [Charge] to perform a [Boost] action, even while stressed.',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_70.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_70.jpg',
        ffg: 294,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Electronic Baffle',
    limited: 0,
    xws: 'electronicbaffle',
    sides: [
      {
        title: 'Electronic Baffle',
        type: 'Modification',
        ability:
          'During the End Phase, you may suffer 1 [Hit] damage to remove 1 red token.',
        slots: ['Modification'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_71.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_71.jpg',
        ffg: 295,
      },
    ],
    cost: { value: 2 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Engine Upgrade',
    limited: 0,
    xws: 'engineupgrade',
    sides: [
      {
        title: 'Engine Upgrade',
        type: 'Modification',
        text:
          'Large military forces such as the Galactic Empire have standardized engines, but individual pilots and small organizations often replace the power couplings, add thrusters, or use high-performance fuel to get extra push out of their engines.',
        slots: ['Modification'],
        grants: [{ action: { type: 'Boost', difficulty: 'White' }, value: 1 }],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_72.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_72.jpg',
        ffg: 296,
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 2, Medium: 4, Large: 7, Huge: 200 },
    },
    restrictions: [{ action: { type: 'Boost', difficulty: 'Red' } }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Hull Upgrade',
    limited: 0,
    xws: 'hullupgrade',
    sides: [
      {
        title: 'Hull Upgrade',
        type: 'Modification',
        text:
          'For those who cannot afford an enhanced shield generator, bolting additional plates onto the hull of a ship can serve as an adequate substitute.',
        slots: ['Modification'],
        grants: [{ stat: 'hull', value: 1 }],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_73.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_73.jpg',
        ffg: 297,
      },
    ],
    cost: { variable: 'agility', values: { '0': 2, '1': 3, '2': 5, '3': 7 } },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Munitions Failsafe',
    limited: 0,
    xws: 'munitionsfailsafe',
    sides: [
      {
        title: 'Munitions Failsafe',
        type: 'Modification',
        ability:
          'While you perform a [Torpedo] or [Missile] attack, after rolling attack dice, you may cancel all dice results to recover 1 [Charge] you spent as a cost for the attack.',
        slots: ['Modification'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_74.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_74.jpg',
        ffg: 298,
      },
    ],
    cost: { value: 1 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Shield Upgrade',
    limited: 0,
    xws: 'shieldupgrade',
    sides: [
      {
        title: 'Shield Upgrade',
        type: 'Modification',
        text:
          "Deflector shields are a substantial line of defense on most starships beyond the lightest fighters. While enhancing a ship's shield capacity can be costly, all but the most confident or reckless pilots see the value in this sort of investment.",
        slots: ['Modification'],
        grants: [{ stat: 'shields', value: 1 }],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_75.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_75.jpg',
        ffg: 299,
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 4, '2': 6, '3': 8 } },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Static Discharge Vanes',
    limited: 0,
    xws: 'staticdischargevanes',
    sides: [
      {
        title: 'Static Discharge Vanes',
        type: 'Modification',
        ability:
          'Before you would gain 1 ion or jam token, if you are not stressed, you may choose another ship at range 0-1 and gain 1 stress token. If you do, the chosen ship gains that ion or jam token instead, then you suffer 1 [Hit] damage.',
        slots: ['Modification'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_76.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_76.jpg',
        ffg: 300,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Stealth Device',
    limited: 0,
    xws: 'stealthdevice',
    sides: [
      {
        title: 'Stealth Device',
        type: 'Modification',
        ability:
          'While you defend, if your [Charge] is active, roll 1 additional defense die. After you suffer damage, lose 1 [Charge].',
        slots: ['Modification'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_77.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_77.jpg',
        ffg: 301,
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 4, '2': 6, '3': 8 } },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Tactical Scrambler',
    limited: 0,
    xws: 'tacticalscrambler',
    sides: [
      {
        title: 'Tactical Scrambler',
        type: 'Modification',
        ability:
          "While you obstruct an enemy ship's attack, the defender rolls 1 additional defense die.",
        slots: ['Modification'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_78.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_78.jpg',
        ffg: 302,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Impervium Plating',
    limited: 0,
    xws: 'imperviumplating',
    sides: [
      {
        title: 'Impervium Plating',
        type: 'Modification',
        ability:
          'Before you would be dealt a faceup Ship damage card, you may spend 1 [Charge] to discard it instead.',
        charges: { value: 2, recovers: 0 },
        slots: ['Modification'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/93e0fe1b2931944d128126b854c4ad33.png',
        ffg: 534,
      },
    ],
    restrictions: [{ chassis: ['belbullab22starfighter'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 4 },
  },
  {
    name: 'Synchronized Console',
    xws: 'synchronizedconsole',
    limited: 0,
    sides: [
      {
        title: 'Synchronized Console',
        type: 'Modification',
        ability:
          'After you perform an attack, you may choose a friendly ship at range 1 or a friendly ship with the Synchronized Console upgrade at range 1-3 and spend a lock you have on the defender. If you do, the friendly ship you chose may acquire a lock on the defender.',
        slots: ['Modification'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e3e5bd38f39f904fbaaa75293e56fb38.png',
        ffg: 554,
      },
    ],
    restrictions: [
      { factions: ['Galactic Republic'] },
      { action: { type: 'Lock' } },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 1 },
  },
  {
    name: 'Spare Parts Canisters',
    limited: 0,
    xws: 'sparepartscanisters',
    sides: [
      {
        title: 'Spare Parts Canisters',
        type: 'Modification',
        ability:
          'Action: Spend 1 [Charge] to recover 1 charge on one of your equipped [Astromech] upgrades. Action: Spend 1 [Charge] to drop 1 spare parts, then break all locks assigned to you.',
        charges: { value: 1, recovers: 0 },
        slots: ['Modification'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/79d9f2b2bc32bd78ab67dc82eece696a.png',
        ffg: 550,
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 4 },
    restrictions: [{ equipped: ['Astromech'] }],
  },
  {
    name: 'Delayed Fuses',
    limited: 0,
    xws: 'delayedfuses',
    sides: [
      {
        title: 'Delayed Fuses',
        type: 'Modification',
        ability:
          'After you drop, launch, or place a bomb or mine, you may place 1 fuse marker on that device.',
        slots: ['Modification'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4572ece39224eeaf2dfce2770b96f919.png',
        ffg: 592,
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 1 },
  },
  {
    name: 'Angled Deflectors',
    limited: 0,
    xws: 'angleddeflectors',
    sides: [
      {
        title: 'Angled Deflectors',
        type: 'Modification',
        text:
          "Starfighter shields often have manual overrides that allow them to be angled for increased front or rear protection. However, doing so leaves the ship exposed if the pilot's situational awareness falters.",
        slots: ['Modification'],
        grants: [
          { action: { type: 'Reinforce', difficulty: 'White' }, value: 1 },
          { stat: 'shields', value: -1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41cf9c90abcd8ff5c668bb447967b75c.png',
        ffg: 593,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [
      { baseSizes: ['Small', 'Medium'] },
      { stat: { type: 'shields', value: 1 } },
    ],
    cost: { variable: 'agility', values: { '0': 9, '1': 6, '2': 3, '3': 3 } },
  },
  {
    name: 'Targeting Computer',
    limited: 0,
    xws: 'targetingcomputer',
    sides: [
      {
        title: 'Targeting Computer',
        type: 'Modification',
        slots: ['Modification'],
        grants: [{ action: { type: 'Lock', difficulty: 'White' }, value: 1 }],
        ffg: 619,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/619d3d56eadaada29c6602cc7cd00148.png',
        text:
          'Targeting computers are standard features on many vessels, especially those designed to deliver ordnance. Some light starfighters and transport craft lack such weapons guidance, though it can be installed as an after-market modification.',
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 3 },
  },
];

export default t;
