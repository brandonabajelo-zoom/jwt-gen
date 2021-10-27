import env from 'dotenv';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import prompt from 'prompt';
import { spawn } from 'child_process';

const hasEnvironmentFile = fs.existsSync('./.env');

// Token exp: 2 hours
const generateToken = (key = '', secret = '') => jwt.sign({ iss: key, exp: new Date().getTime() + 7200000 }, secret);

const copyToken = token => {
  const cmd = spawn('pbcopy');
  cmd.stdin.write(token);
  cmd.stdin.end();

  console.log(`JWT copied to clipboard: ${token}`);
}

if (hasEnvironmentFile) {
  env.config();

  const { API_KEY, API_SECRET } = process.env;
  const jwtToken = generateToken(API_KEY, API_SECRET);

  copyToken(jwtToken);

} else {
  const inputSchema = {
    properties: {
      'Zoom API Key': { required: true },
      'Zoom API Secret': { required: true },
    }
  };

  prompt.start();
  prompt.get(inputSchema, (err, input) => {
    const key = input['Zoom API Key'];
    const secret = input['Zoom API Secret'];

    fs.writeFile('.env', `API_KEY=${key}\nAPI_SECRET=${secret}`, writeError => {
      if (writeError) throw writeError
      console.log('Environment file created with Zoom Credentials');

      const jwtToken = generateToken(key, secret);
      copyToken(jwtToken);
    });

  })
}
