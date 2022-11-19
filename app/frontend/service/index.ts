const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const headers = {
  Accept: 'application/json, text/plain, */*',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

const service = {
  post: {
    async login(username: string, password: string) {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ username, password }),
      });

      return response;
    },
    async users(username: string, password: string) {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ username, password }),
      });

      return response;
    },
  },
};

export default service;
