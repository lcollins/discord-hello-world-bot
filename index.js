const { Client, GatewayIntentBits } = require('discord.js');

const token = 'YOUR-TOKEN'; // Replace with your bot's token
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent,
      ],
  });
  
  client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
  });
  
  client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Ignore messages from other bots
    if (message.content.toLowerCase() === '!hello') {
      message.reply(`Hello, ${message.author}`);
    }
  });
  
  client.login(token);
