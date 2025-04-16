export const config = {
    emailJs: {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },
    contact: {
      email: import.meta.env.VITE_EMAIL,
    },
    social: {
      github: import.meta.env.VITE_GITHUB_URL,
      linkedin: import.meta.env.VITE_LINKEDIN_URL,
    }
  };
  
  // Validate environment variables
  const requiredEnvVars = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY',
  ];
  
  requiredEnvVars.forEach(envVar => {
    if (!import.meta.env[envVar]) {
      console.error(`Missing required environment variable: ${envVar}`);
    }
  });