type DisasterCard = {
  title: string,
  score: number|null,
  ability: string
}

const NO_ABILITY: string = `No Ability`;

const DisasterCards = new Map<string, DisasterCard>();
DisasterCards.set(`Pet Rock`, {
  title: `Pet Rock`,
  score: 0,
  ability: `You may discard a point card from your hand, then add its point value to your score this round`,
});

DisasterCards.set(`Special Star Fruit`, {
  title: `Special Star Fruit`,
  score: 6,
  ability: `During scoring this round, double the effects of Score Booster and Score Sapper cards.`
});

DisasterCards.set(`Sting Stabber`, {
  title: `Sting Stabber`,
  score: 7,
  ability: NO_ABILITY,
});

DisasterCards.set(`Handy Pan`, {
  title: `Handy Pan`,
  score: 2,
  ability: NO_ABILITY,
});

DisasterCards.set(`Bow And Dino`, {
  title: `Bow and Dino`,
  score: 6,
  ability: NO_ABILITY,
});

DisasterCards.set(`Bonehead`, {
  title: `Bonehead`,
  score: 4,
  ability: NO_ABILITY,
});

DisasterCards.set(`Iced Ptea`, {
  title: `Iced Ptea`,
  score: 8,
  ability: NO_ABILITY,
});

DisasterCards.set(`Cool Stick`, {
  title: `Cool Stick`,
  score: 1,
  ability: NO_ABILITY,
});

DisasterCards.set(`Score Sapper`, {
  title: `Score Sapper`,
  score: null,
  ability: `Play this card during scoring. Subtract 2 points from any player's score this round`,
});

DisasterCards.set(`Score Booster`, {
  title: `Score Booster`,
  score: null,
  ability: `Play this card during scoring. Add 2 points to any player's score this round`,
});

DisasterCards.set(`Meteor Cannona`, {
  title: `Meteor Cannon`,
  score: 9,
  ability: NO_ABILITY,
});

DisasterCards.set(`Grave Maker`, {
  title: `Grave Maker`,
  score: 3,
  ability: NO_ABILITY,
});

DisasterCards.set(`Run Home Bat`, {
  title: `Run Home Bat`,
  score: 5,
  ability: NO_ABILITY,
});
DisasterCards.set(`Mouth Trap`, {
  title: `Mouth Trap`,
  score: 5,
  ability: `During scoring this round, switch the score of the highest-scoring player with the score of the lowest-scoring layer after scores have been calculated.`,
});
DisasterCards.set(`"Delicious" Smoothie`, {
  title: `"Delicious" Smoothie`,
  score: 3,
  ability: `You may discard a Point card with an effect from your hand, then add its point value to your score this round.`,
});
DisasterCards.set(`Disaster Insurance`, {
  title: `Disaster Insurance`,
  score: null,
  ability: `Play this card if you would add a Disaster card to your Disaster Area this round. Move that Disaster card to the bottom of the Disaster deck instead.`,
});

DisasterCards.set(`Treenoculars`, {
  title: `Treenoculars`,
  score: 7,
  ability: `You may look at the top 2 cards in the deck. Choose a card and add it to your hand. Discard the other card.`
});

DisasterCards.set(`Fire Spray`, {
  title: `Fire Spray`,
  score: 4,
  ability: `You may discard up to 3 cards from your hand.`
});

DisasterCards.set(`Grappling Snake`, {
  title: `Grappling Snake`,
  score: 2,
  ability: `You may swap this card with the Point card of the player to your right or left. You cannot swap for a card that has an effect.`
});



const PlayingCards = new Map();

export {
  DisasterCards,
  PlayingCards,
};
