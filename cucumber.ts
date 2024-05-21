import { setDefaultTimeout } from '@cucumber/cucumber';
import { argv } from 'process';
import path from 'path';

setDefaultTimeout(60 * 1000); // Set default timeout to 60 seconds

// Determine the environment variable for the browser
const browser = process.env.BROWSER || 'chromium';

// Add the necessary require options
const requireOpts = [
  path.resolve(__dirname, 'src/steps/**/*.steps.ts'),
  path.resolve(__dirname, 'src/support/**/*.ts')
];

const config = {
  default: {
    require: requireOpts,
    format: ['progress'],
  },
};

// Export the configuration
export default config;
