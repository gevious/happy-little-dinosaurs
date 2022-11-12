import { GET_GAME_DETAILS } from './components/PublicCards';

export const mocks: any[] = [{
  request: {
    query: GET_GAME_DETAILS,
  },
  result: {
    data: {
      gameDetails: {
	  disasterType: "Emotional Disaster",
	  disasterDescription: "What Happened",
	  danielScore: 23,
	  hannahScore: 44,
	  daddyScore: 12,
      }
    }
  }
}];
