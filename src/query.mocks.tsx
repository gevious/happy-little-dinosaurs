import { GET_GAME_DETAILS } from './components/PublicCards';
import { GET_YOUR_HAND } from './components/PrivateCards';

const NO_ABILITY: string = "No Ability";

const GameDetails = {
    disasterType: "Emotional Disaster",
    disasterDescription: "What Happened",
    danielScore: 23,
    hannahScore: 44,
    daddyScore: 12,
}

const DanielsHand = [
  {
    title: "Di",
    score: 1,
    ability: NO_ABILITY,
  },
  {
    title: "Do",
    score: 3,
    ability: "strength",
  }
];
const HannahsHand = [
  {
    title: "H1",
    score: 1,
    ability: NO_ABILITY,
  },
  {
    title: "H2",
    score: 3,
    ability: "strength",
  }
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
}];
