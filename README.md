# DigitalOcean Function Telegram Bot

Just as small example on how to create a telegram bot using DigitalOcean's new serverless functions.

- Fork repo
- Create new app on DO from your repo
- Set TELEGRAM_TOKEN env variable during configuration
- Set Bot's webhook url to your function endpoint by calling https://api.telegram.org/TELEGRAM_TOKEN/setWebhook?YOUR_APP_ENDPOINT/telegram/bot