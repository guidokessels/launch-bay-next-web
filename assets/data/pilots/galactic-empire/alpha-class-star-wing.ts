import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Alpha-class Star Wing',
  xws: 'alphaclassstarwing',
  ffg: 14,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'SLAM' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_AlphaStarwing.png',
  pilots: [
    {
      name: 'Lieutenant Karsabi',
      caption: 'Brash Noble',
      initiative: 3,
      limited: 1,
      cost: 37,
      xws: 'lieutenantkarsabi',
      ability:
        'After you gain a disarm token, if you are not stressed, you may gain 1 stress token to remove 1 disarm token.',
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Missile',
        'Modification',
        'Configuration',
      ],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_136.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_136.jpg',
      ffg: 136,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Major Vynder',
      caption: 'Pragmatic Survivor',
      initiative: 4,
      limited: 1,
      cost: 41,
      xws: 'majorvynder',
      ability:
        'While you defend, if you are disarmed, roll 1 additional defense die.',
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Missile',
        'Modification',
        'Configuration',
      ],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_135.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_135.jpg',
      ffg: 135,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Nu Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 32,
      xws: 'nusquadronpilot',
      text:
        'With a design inspired by other Cygnus Spaceworks vessels, the Alpha-class star wing is a versatile craft assigned to Imperial Navy specialist units that need a starfighter they can outfit for multiple roles.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_138.png',
      slots: ['Sensor', 'Torpedo', 'Missile', 'Modification', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_138.jpg',
      ffg: 138,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Rho Squadron Pilot',
      initiative: 3,
      limited: 0,
      cost: 35,
      xws: 'rhosquadronpilot',
      text:
        'The elite pilots of Rho Squadron instill terror in the Rebellion, using both the Xg-1 assault configuration and Os-1 arsenal loadout of the Alpha-class star wing to devastating effect.',
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Missile',
        'Modification',
        'Configuration',
      ],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_137.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_137.jpg',
      ffg: 137,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
