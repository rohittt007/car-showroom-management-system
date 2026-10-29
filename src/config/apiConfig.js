// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// API Endpoints
export const API_ENDPOINTS = {
  // Car endpoints
  GET_ALL_CARS: `${API_BASE_URL}/cars`,
  GET_CAR_STATS: `${API_BASE_URL}/cars/stats/summary`,
  GET_CAR_BY_ID: (id) => `${API_BASE_URL}/cars/${id}`,
  CREATE_CAR: `${API_BASE_URL}/cars`,
  UPDATE_CAR: (id) => `${API_BASE_URL}/cars/${id}`,
  DELETE_CAR: (id) => `${API_BASE_URL}/cars/${id}`,
  SEARCH_CARS: (term) => `${API_BASE_URL}/search/cars/${term}`,
  GET_CARS_BY_AVAILABILITY: (status) => `${API_BASE_URL}/availability/${status}`,

  // User endpoints
  GET_ALL_USERS: `${API_BASE_URL}/users`,
  GET_USER_BY_ID: (id) => `${API_BASE_URL}/users/${id}`,
  REGISTER_USER: `${API_BASE_URL}/users`,
  UPDATE_USER: (id) => `${API_BASE_URL}/users/${id}`,
  DELETE_USER: (id) => `${API_BASE_URL}/users/${id}`,
  SEARCH_USERS: (term) => `${API_BASE_URL}/users/search/${term}`,

  // Login endpoints
  GET_LOGIN_RECORDS: `${API_BASE_URL}/login-records`,
  CREATE_LOGIN_RECORD: `${API_BASE_URL}/login-records`,
  SEARCH_LOGIN_RECORDS: (term) => `${API_BASE_URL}/login-records/search/${term}`,
};

// Utility function to handle API calls
export const apiCall = async (url, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const finalOptions = { ...defaultOptions, ...options };

  try {
    const response = await fetch(url, finalOptions);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Call Error:', error);
    throw error;
  }
};
