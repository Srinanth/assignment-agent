/**
 * Application-wide constants.
 * It's better to manage environment variables and other constants in a single place.
 */

// Make sure your Vite project has a .env file with VITE_BACKEND_URL='your_api_endpoint'
export const API_URL = import.meta.env.VITE_BACKEND_URL;

export const MAX_FILE_SIZE_MB = 5;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
