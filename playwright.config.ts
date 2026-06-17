import { defineConfig } from '@playwright/test';
import config from './config/environment';

console.log('Base URL:', config.baseURL);
export default defineConfig({
  testDir: './tests',
  reporter: [['html'], ['list']],
  use: {
    baseURL: config.baseURL,
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }
});
