const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

console.log(`${colors.blue}Starting Transluga project setup...${colors.reset}`);

// Check if node_modules exists
if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  console.log(`${colors.yellow}Installing dependencies...${colors.reset}`);
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log(`${colors.green}Dependencies installed successfully!${colors.reset}`);
  } catch (error) {
    console.error(`${colors.red}Failed to install dependencies:${colors.reset}`, error);
    process.exit(1);
  }
} else {
  console.log(`${colors.green}Dependencies already installed.${colors.reset}`);
}

// Create necessary directories if they don't exist
const directories = [
  'public/images',
  'src/components',
  'src/pages',
  'src/styles',
  'src/utils',
  'src/types'
];

directories.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    console.log(`${colors.yellow}Creating directory: ${dir}${colors.reset}`);
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

console.log(`${colors.green}Project setup complete!${colors.reset}`);
console.log(`${colors.blue}You can now run the development server with:${colors.reset}`);
console.log(`${colors.yellow}npm run dev${colors.reset}`);
