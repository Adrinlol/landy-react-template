interface RegistrationPayload {
  event_id: number;
  event_type: string;
  country_code: string;
  mobile: string;
  name: string;
  age: string;
  sex: string;
  whatsapp_country_code: string;
  whatsapp: string;
  email: string;
  pin_code: string;
  place: string;
  job: string;
}

const API_BASE_URL = 'https://guideportal.wisdomislam.org/api';
const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2d1aWRlcG9ydGFsLndpc2RvbWlzbGFtLm9yZy9hcGkvdXNlckxvZ2luIiwiaWF0IjoxNzI2ODI5MjQ1LCJleHAiOjE3Mjk0MjEyNDUsIm5iZiI6MTcyNjgyOTI0NSwianRpIjoiREZURzhCTWJKUVNhQmMxcSIsInN1YiI6IjM5MzkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.4DWWguWflfup5WBzteaM3GaC7IsJ0axobrhzUvlJSUY';

export const submitRegistration = async (data: RegistrationPayload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/p/event-registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('API submission failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}; 