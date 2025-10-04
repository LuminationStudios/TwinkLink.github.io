# Discord Bot Landing Page + Top.gg Integration

This repo contains:
- **Frontend**: Static landing page (ready for GitHub Pages)
- **Backend**: Express server for Top.gg webhook + stats proxy

## Setup

### Frontend
- The `index.html` is at root for GitHub Pages hosting.
- Update the fetch URL in `index.html` to your backend (e.g. https://your-backend-url.com/api/stats).

### Backend
```bash
cd backend
npm install
```
Create `.env` file with:
```
BOT_ID=YOUR_BOT_ID
TOPGG_API_TOKEN=YOUR_TOPGG_API_TOKEN
TOPGG_WEBHOOK_AUTH=YOUR_WEBHOOK_SECRET
```
Run backend:
```bash
npm start
```

### Top.gg
- Add your bot on [Top.gg](https://top.gg/).
- Use your API token + webhook secret in `.env`.
- Set webhook URL in Top.gg to `https://your-backend-url.com/topgg`.

Then your GitHub Pages frontend will display live stats 🎉
