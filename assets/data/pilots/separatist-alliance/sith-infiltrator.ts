import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Sith Infiltrator',
  xws: 'sithinfiltrator',
  size: 'Large',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  pilots: [
    {
      name: 'Darth Maul',
      caption: 'Sith Assassin',
      initiative: 5,
      limited: 1,
      xws: 'darthmaul',
      force: { value: 3, recovers: 1, side: ['dark'] },
      ability:
        'After you perform an attack, you may spend 2 [Force] to perform a bonus primary attack against a different target. If your attack missed, you may perform that bonus primary attack against the same target instead.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/95428161db7de4adcea6fa8bcbf9de2f.png',
      hyperspace: true,
      epic: true,
      cost: 65,
      slots: [
        'Force Power',
        'Torpedo',
        'Cannon',
        'Crew',
        'Crew',
        'Tactical Relay',
        'Device',
        'Title',
        'Modification',
      ],
      ffg: 503,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/04b1c1fea3735eb844455dd3278346d0.jpg',
    },
    {
      name: 'Count Dooku',
      caption: 'Darth Tyranus',
      initiative: 3,
      limited: 1,
      xws: 'countdooku',
      force: { value: 3, recovers: 1, side: ['dark'] },
      ability:
        'After you defend, if the attacker is in your firing arc, you may spend 1 [Force] to remove 1 of your blue or red tokens. After you perform an attack that hits, you may spend 1 [Force] to perform an action.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/88959087710ec5a80a16dd93573f149d.png',
      hyperspace: true,
      epic: true,
      cost: 63,
      slots: [
        'Force Power',
        'Torpedo',
        'Cannon',
        'Crew',
        'Crew',
        'Tactical Relay',
        'Device',
        'Title',
        'Modification',
      ],
      ffg: 504,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/65eabe68c7d1ae072442d8c8808414db.jpg',
    },
    {
      name: 'Dark Courier',
      initiative: 2,
      limited: 0,
      xws: 'darkcourier',
      text:
        'The vessel called the Scimitar was heavily modified, equipped with stealth technologies and advanced surveillance devices for infiltration and assassination missions.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/132f1957b904c890b94bf3aaf2a944ce.png',
      hyperspace: false,
      epic: true,
      cost: 51,
      slots: [
        'Torpedo',
        'Cannon',
        'Crew',
        'Crew',
        'Tactical Relay',
        'Device',
        'Title',
        'Modification',
      ],
      ffg: 506,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/8b9c158df033daab2ea6acecd29c5c0d.jpg',
    },
    {
      name: '0-66',
      xws: '066',
      cost: 51,
      slots: [
        'Talent',
        'Torpedo',
        'Cannon',
        'Crew',
        'Crew',
        'Tactical Relay',
        'Device',
        'Title',
        'Modification',
      ],
      ffg: 505,
      caption: 'Sinister Automaton',
      initiative: 3,
      limited: 1,
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/c0a65aa29f085d517d907bc7799e4146.jpg',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/9edd9bb6846e77723d8f0381bb7909aa.png',
      ability:
        'After you defend, you may spend 1 calculate token to perform an action.',
      hyperspace: true,
      epic: true,
    },
  ],
  ffg: 60,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_SithInfiltrator.png',
};

export default t;