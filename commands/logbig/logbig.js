const commando = require("discord.js-commando");

class logEvent extends commando.Command {
  constructor(client){
    super(client, {
      name: "logbig",
      aliases: ["logm"],
      group: "logbig",
      memberName: "logbig",
      description: "Logs an event",
      args: [
        {
          key: "text",
          prompt: "Hmm?",
          type: "string"
        }
      ]
    });
  }

  async run(message, {text}){
    var date = new Date();
    var dateValue = date.getDate();
    var dayValue = date.getDay();
    var monthValue = date.getMonth() + 1;
    var yearValue = date.getFullYear();
    var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var output =
    "```md\n" +
    "# IMPORTANT #\n" +
    "[" + monthValue + "/" + dateValue + "/" + yearValue + "](" + dayNames[dayValue - 1] + ") < " + message.author.username + " >\n" +

     text + "\n"

    + "#############\n"
    + "```";

    message.delete();
    message.channel.send(output);
    console.log("\nUSER: "+message.author.username+" has logged an IMPORTANT event.");

  }
}

module.exports = logEvent;
