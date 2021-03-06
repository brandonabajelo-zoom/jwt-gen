# jwt-gen
Utility script to create a Zoom JSON web token (valid 1 hour) and copy it to your clipboard for quick access. 

## Installation

`git clone https://github.com/brandonabajelo-zoom/jwt-gen.git`

## Setup

1. Enter project directory

`cd jwt-gen`

2. Install project dependencies

`npm install`

3.  Upon first run, you will be prompted to enter your Zoom API Key and API Secret and a .env file will be generated for you. All subsequent runs will read from this file.

## Usage

`node token.js`

Your Zoom JWT should now be copied to your clipboard and displayed to the terminal. If you enter incorrect Zoom credentials, delete your .env file and run the script again.

`rm .env`

`node token.js`
