// Import dependancies
import {Client, Message} from 'discord.js';
import * as dotenv from 'dotenv';
import {PrismaClient} from '@prisma/client';

import {eventsHandler} from './src/events/eventsHandler';

// Config for environment variables
dotenv.config();


// Initiates a new PrismaClient instance
// eslint-disable-next-line no-unused-vars
const prisma = new PrismaClient();


// Initiates a new 'Client' instance
export const bot = new Client();


// When the bot logs in, run the ready event
bot.on('ready', () => eventsHandler.find((e) => e.name == 'ready')!.run());

bot.on('message', (msg: Message) => eventsHandler.find((e) => e.name == 'message')!.run(msg));


// Logs the bot in
bot.login(process.env.TOKEN);
