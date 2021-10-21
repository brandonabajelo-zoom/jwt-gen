import env from 'dotenv';
import jwt from 'jsonwebtoken';
import { spawn } from 'child_process';

env.config();

const { API_KEY, API_SECRET } = process.env;

const cmd = spawn('pbcopy');
const jwtToken = jwt.sign({ iss: API_KEY, exp: new Date().getTime() + 7200000 }, API_SECRET);
cmd.stdin.write(jwtToken);
cmd.stdin.end();

console.log(`JWT copied to clipboard: ${jwtToken}`);
