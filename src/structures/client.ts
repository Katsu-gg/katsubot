import { Client, Collection } from 'discord.js';

export default class Bot extends Client {

    public commands = new Collection();
}