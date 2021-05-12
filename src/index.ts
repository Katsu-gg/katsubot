import Discord from 'discord.js';
import Bot from './structures/client';
import config from '../config.json';

const client = new Bot({
    ws: { intents: ['GUILDS'] }
})

client.login(config.client.token)