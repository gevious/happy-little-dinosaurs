import { GET_GAME_DETAILS } from './components/PublicCards';
import { GET_YOUR_HAND } from './components/PrivateCards';
import { DisasterCards } from './cards';

const GameDetails = {
    disasterType: "Natural Disaster",
    disasterDescription: `UNCOMMON COLD. It is just a cough... or are you secretly dying? Time to start panicking.`,
    danielScore: 21,
    hannahScore: 14,
    daddyScore: 34,
}


const DanielsHand = [
  DisasterCards.get(`Disaster Insurance`),
  DisasterCards.get(`Bonehead`),
  DisasterCards.get(`Pet Rock`),
  DisasterCards.get(`Cool Stick`),
];
const HannahsHand = [
  DisasterCards.get(`Score Booster`),
  DisasterCards.get(`Grave Maker`),
  DisasterCards.get(`Bonehead`),
  DisasterCards.get(`Handy Pan`),
];

export const mocks: any[] = [{
    request: {
      query: GET_GAME_DETAILS,
    },
    result: {
      data: {
	gameDetails: GameDetails
      }
    }
}, {
    request: {
      query: GET_YOUR_HAND,
      variables: { user: 'hannah' }
    },
    result: {
      data: {
	cards: HannahsHand
      }
    },
}, {
    request: {
      query: GET_YOUR_HAND,
      variables: { user: 'daniel' }
    },
    result: {
      data: {
	cards: DanielsHand
      }
    }
}, {
    request: {
      query: GET_YOUR_HAND,
      variables: { user: 'admin' }
    },
    result: {
      data: {
	cards: [...DanielsHand, ...HannahsHand]
      }
    }
}];
