const commando = require("discord.js-commando");
const bot = new commando.Client();

bot.on("message", (message) => {
  if(message.content == "ping"){
    message.channel.send("pong");
  }
  if(message.content == "stephanie"){
    if (message.guild.id == "467177756917104661"){
      message.react(message.guild.emojis.get("467667790531395587"));
      console.log("\n:)");
    } else {
      return;
    }
  }
});

bot.registry.registerGroup("random", "Random");
bot.registry.registerGroup("log", "Log");
bot.registry.registerGroup("logbig", "Logbig");
bot.registry.registerGroup("embed", "Embed");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login("");
