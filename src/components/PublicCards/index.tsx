import { gql, useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material';

type GameDetails = {
  disasterType: string,
  disasterDescription: string,
  danielScore: number,
  hannahScore: number,
  daddyScore: number,
};

interface GameDetailsData {
  gameDetails: GameDetails
}

export const GET_GAME_DETAILS = gql`
  query GetGameDetails {
    gameDetails {
      disasterType,
      disasterDescription,
      danielScore,
      hannahScore,
      daddyScore
    }
  }
`;

const PublicCards = () => {
  const { loading, error, data } = useQuery<GameDetailsData>(GET_GAME_DETAILS);

  if (loading) return (<p>Loading ...</p>);
  if (error) return (<p>Error! </p>);

  const details = data?.gameDetails!;

  return (
    <Box>
      <Typography variant="h5">
        Scores
      </Typography>
      <ul>
        <li>Daniel: {details.danielScore}</li>
        <li>Hannah: {details.hannahScore}</li>
        <li>Daddy: {details.daddyScore}</li>
      </ul>
      <Typography variant="h5">
        Disaster
      </Typography>

      {details.disasterType}: {details.disasterDescription}

    </Box>
  );
}

export default PublicCards;
