import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-fastapi-server-url.com/api', // Replace with your FastAPI server URL
});

const authenticateRequest = async (requestConfig) => {
    // Implement your authentication logic
    // ...
  
    return requestConfig;
  };
  
  const makeAuthenticatedRequest = async (requestConfig) => {
    const authenticatedRequestConfig = await authenticateRequest(requestConfig);
    try {
      console.log('Making API request:', authenticatedRequestConfig);
      const response = await api(authenticatedRequestConfig);
      console.log('API response:', response);
      return response.data;
    } catch (error) {
      console.error('Error making authenticated request:', error);
      throw error;
    }
  };
  
  export const fetchUserData = async (userId) => {
    const requestConfig = {
      method: 'GET',
      url: `/users/${userId}`,
    };
  
    try {
      console.log('Fetching user data...');
      const userData = await makeAuthenticatedRequest(requestConfig);
      console.log('User data:', userData);
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };

// Add more API functions as needed...
