import { config } from "dotenv";
import { Client, RichEmbed } from "discord.js";

config();
const { TOKEN_DISCORD } = process.env;
const bot = new Client();

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}`);
  console.log(`Exit ${bot.user.tag}: Ctrl + c`);
});

bot.on("message", msg => {
  const commands = [];
  commands["!invite"] = "https://discord.gg/uhYXTSD";
  commands["!github"] = "https://github.com/afpp3";

  if (commands[msg.content]) {
    msg.reply(commands[msg.content]);
  }
});

bot.on("message", message => {
  if (message.content === "!embed") {
    const embed = new RichEmbed()
      .setTitle("A slick little embed")
      .setColor(0xff0000)
      .setDescription("Hello, this is a slick embed!");

    message.channel.send(embed);
  }
});

bot.login(TOKEN_DISCORD);
