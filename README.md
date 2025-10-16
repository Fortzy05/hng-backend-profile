# Backend Wizard - Stage 0

## Setup
1. Clone repo
2. `npm install`
3. Create `.env` with EMAIL, NAME, STACK, PORT

## Run locally
`npm run dev`

## Endpoint
GET /me
- returns JSON with keys: status, user, timestamp, fact
- Content-Type: application/json

## Example
curl http://localhost:3000/me
