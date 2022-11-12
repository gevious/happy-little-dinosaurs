import { GET_GAME_DETAILS } from './components/PublicCards';
import { GET_YOUR_HAND } from './components/PrivateCards';

const NO_ABILITY: string = "No Ability";


const GameDetails = {
    disasterType: "Natural Disaster",
  disasterDescription: `UNCOMMON COLD. It is just a cough... or are you secretly dying? Time to start panicking.`,
    danielScore: 21,
    hannahScore: 14,
    daddyScore: 34,
}

const CARD_PET_ROCK = {
  title: "Pet Rock",
  score: 0,
  ability: `You may discard a point card from your hand, then add its point value to your score this round`,
};

const CARD_SPECIAL_STAR_FRUIT = {
  title: `Special Star Fruit`,
  score: 6,
  ability: `During scoring this round, double the effects of Score Booster and Score Sapper cards.`
};
const CARD_STING_STABBER = {
  title: "Sting Stabber",
  score: 7,
  ability: NO_ABILITY,
};
const CARD_HANDY_PAN = {
  title: `Handy Pan`,
  score: 2,
  ability: NO_ABILITY,
};

const CARD_BOW_AND_DINO = {
  title: "Bow and Dino",
  score: 6,
  ability: NO_ABILITY,
};

const CARD_BONEHEAD = {
  title: `Bonehead`,
  score: 4,
  ability: NO_ABILITY,
};

const CARD_ICED_PTEA= {
  title: `Iced Ptea`,
  score: 8,
  ability: NO_ABILITY,
};

const CARD_COOL_STICK = {
  title: "Cool Stick",
  score: 1,
  ability: NO_ABILITY,
};

const CARD_SCORE_SAPPER = {
  title: "Score Sapper",
  score: 0,
  ability: `Play this card during scoring. Subtract 2 points from any player's score this round`,
};

const CARD_SCORE_BOOSTER = {
  title: "Score Booster",
  score: 0,
  ability: `Play this card during scoring. Add 2 points to any player's score this round`,
};

const CARD_METEOR_CANNON = {
  title: "Meteor Cannon",
  score: 9,
  ability: NO_ABILITY,
};

const CARD_GRAVE_MAKER = {
  title: "Grave Maker",
  score: 3,
  ability: NO_ABILITY,
};

const CARD_RUN_HOME_BAT = {
  title: "Run Home Bat",
  score: 5,
  ability: NO_ABILITY,
};
const CARD_MOUTH_TRAP = {
  title: `Mouth Trap`,
  score: 5,
  ability: `During scoring this round, switch the score of the highest-scoring player with the score of the lowest-scoring layer after scores have been calculated.`,
};
const CARD_DELICIOUS_SMOOTHIE = {
  title: `"Delicious" Smoothie`,
  score: 3,
  ability: `You may discard a Point card with an effect from your hand, then add its point value to your score this round.`,
};
const CARD_DISASTER_INSURANCE = {
  title: `Disaster Insurance`,
  score: 0,
  ability: `Play this card if you would add a Disaster card to your Disaster Area this round. Move that Disaster card to the bottom of the Disaster deck instead.`,
};

const CARD_TREENOCULARS = {
  title: `Treenoculars`,
  score: 7,
  ability: `You may look at the top 2 cards in the deck. Choose a card and add it to your hand. Discard the other card.`
};
const CARD_FIRE_SPRAY = {
  title: `Fire Spray`,
  score: 4,
  ability: `You may discard up to 3 cards from your hand.`
};
const CARD_GRAPPLING_SNAKE = {
  title: `Grappling Snake`,
  score: 2,
  ability: `You may swap this card with the Point card of the player to your right or left. You cannot swap for a card that has an effect.`
};

const DanielsHand = [
  CARD_DISASTER_INSURANCE,
  CARD_BONEHEAD,
  CARD_PET_ROCK,
  CARD_COOL_STICK,
];
const HannahsHand = [
  CARD_SCORE_BOOSTER,
  CARD_GRAVE_MAKER,
  CARD_BONEHEAD,
  CARD_HANDY_PAN
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
