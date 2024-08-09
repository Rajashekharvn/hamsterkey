const { Telegraf } = require('telegraf');

const API_ID = 11284784;
const API_HASH = "8b0fc26910c096fc28af1e32bc1fe3f7";
const BOT_TOKEN = "7189237453:AAEAJHeEGHlFAgBvqNQ_k8M7WYnbsKykm-Y";

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Hello! I am your bot. How can I help you?');
});

bot.launch()
  .then(() => {
    console.log('BOT SUCCESSFULLY DEPLOYED !!');
  })
  .catch((err) => {
    console.error('Failed to deploy bot:', err);
  });
