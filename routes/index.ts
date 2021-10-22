import {Telegraf, Composer } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN)

var qrBot = new Composer();
qrBot.command("/start", (ctx) => {});
qrBot.command("/add", (ctx) => {});

// for admins only
bot.use(Composer.acl([Number(process.env.USER_ID)], qrBot));
