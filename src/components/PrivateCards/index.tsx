import { gql, useQuery } from '@apollo/client';
import { Box, Card, CardContent, Typography } from '@mui/material';
import useAuthenticated from '../../hooks/useAuthenticated';

export const GET_YOUR_HAND = gql`
  query YourHand($user: String) {
    cards(user: $user) {
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
  const {
    user
  } = useAuthenticated();

  const { loading, error, data } = useQuery<CardData>(GET_YOUR_HAND, {
    variables: { user }
  });

  if (loading) return (<p>Loading ...</p>);
  if (error) return (<p>Error! </p>);

  const cards = data?.cards!;

  return (
    <Box aria-label="All cards in your hand">
      <Typography>
        Your Hand
      </Typography>
      {cards.map((c) => (
	<Card aria-label="Playing Card">
	  <CardContent>
	    <Typography>
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
