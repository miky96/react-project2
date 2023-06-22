import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-fastapi-server-url.com/api', // Replace with your FastAPI server URL
});

export const fetchUserData = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Add more API functions as needed...
