import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const response = await axios.get(baseUrl);
  return response.data.map((r) => ({
    mission_id: r.mission_id,
    mission_name: r.mission_name,
    description: r.description,
  }));
};

export default fetchMissions;
