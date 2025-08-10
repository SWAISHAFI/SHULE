import api from '../api';

// Get all meetings
export const getMeetings = async () => {
  const response = await api.get('/meetings');
  return response.data;
};

// Schedule a new meeting
export const scheduleMeeting = async (meetingData) => {
  const response = await api.post('/meetings', meetingData);
  return response.data;
};
