import { gql, useQuery } from '@apollo/client';
import { Box, Card, CardContent, Typography } from '@mui/material';

export const GET_YOUR_HAND = gql`
  query YourHand {
    cards {
      score
      title
      ability
    }
  }
`;

type PlayingCard = {
  score: number,
  title: string,
  ability: string,
};

interface CardData {
  cards: PlayingCard[]
}
const PrivateCards = () => {
  const { loading, error, data } = useQuery<CardData>(GET_YOUR_HAND);

  if (loading) return (<p>Loading ...</p>);
  if (error) return (<p>Error! </p>);

  const cards = data?.cards!;

  return (
    <Box aria-label="All cards in your hand">
      <Typography variant="h5">
        Your Hand
      </Typography>
      {cards.map((c) => (
	<Card aria-label="Playing Card">
	  <CardContent>
	    <Typography variant="h6">
	      {c.title} - {c.score}
	    </Typography>
	    <Typography variant="body2">
	      {c.ability}
	    </Typography>
	  </CardContent>
	</Card>
      ))}
    </Box>
  );
}

export default PrivateCards;
