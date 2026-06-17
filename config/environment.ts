const environments = {
  dev: {
    baseURL: 'https://www.saucedemo.com/'
  },

  qa: {
    baseURL: 'https://www.saucedemo.com.vn/'
  },

  uat: {
    baseURL: 'https://www.saucedemo.com.vn/'
  }
};

const env = process.env.ENV || 'dev';

export default environments[env as keyof typeof environments];