const devBaseURL = 'http://localhost:3000/';
const proBaseURL =  'http://localhost:3000/';
export const BASE_URL = process.env.NODE_EVN === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;