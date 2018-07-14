const commando = require("discord.js-commando");
const { RichEmbed } = require("discord.js");
class embed extends commando.Command {
  constructor(client){
    super(client, {
      name: "embed",
      aliases: ["mm"],
      group: "embed",
      memberName: "embed",
      description: "embeds a message",
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

    var re = /\s*;\s*/;
    var splitt = text.split(re);

    if(splitt[0] == "null"){
      splitt[0] = "";
    }
    if(splitt[1] == "null"){
      splitt[1] = "";
    }
    if(splitt[2] == "null"){
      splitt[2] = "";
    }
    if(splitt[3] == "null"){
      splitt[3] = "";
    }
    if(splitt[4] == "null"){
      splitt[4] = "";
    }


    var color = message.member.displayColor;
    var embed = new RichEmbed()
      .setColor(color)
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setTitle(splitt[0])
      .setDescription(splitt[1])
      .setImage(String(splitt[2]))
      .setThumbnail(String(splitt[3]))
      .setFooter(splitt[4]);

    message.delete();
    message.channel.send(embed);
    console.log("\nUSER: "+message.author.username+" has embeded a message.");
  }
}

module.exports = embed;

//String(message.author.username)
