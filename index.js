const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.config = require("./config.json");

client.on("messageCreate", (message) => {
  if (message.content.toLowerCase() === `ping`) {
    message.reply(`pong`);
  }
});

client
  .login(client.config.token)
  .then(() => {
    console.log(`client logged as ${client.user.username}`);
    client.user.setActivity(`${client.guilds.cache.size} guilds`);
  })
  .catch((err) => console.log(err));
