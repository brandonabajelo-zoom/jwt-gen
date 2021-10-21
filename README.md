# jwt-gen
Utility script to create a Zoom JSON web token and copy it to your clipboard for quick access. 

## Installation

`git clone https://github.com/brandonabajelo-zoom/jwt-gen.git`

## Setup

1. Enter project directory

`cd jwt-gen`

2. Install project dependencies

`npm install`

3.  In the root directory of the project, create a `.env` file where you will store your Zoom API_KEY and API_SECRET

`touch .env`

4. Provide the following keys:

`API_KEY=xxxxxxx`

`API_SECRET=xxxxxxxx`

## Usage

`node index.js`

Your Zoom JWT should now be copied to your clipboard and displayed to the terminal
