const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

const DIG = require("discord-image-generation"); 

const setting = require('./setting.json')
client.on("ready", () => {
  console.log(`[ - Bot is Online - ]`);
  console.log(`Name Bot : ${client.user.username}`);
  console.log(`Guilds : ${client.guilds.cache.size}`);
  console.log(`Users : ${client.users.cache.size}`);
  console.log(`Channels : ${client.channels.cache.size}`);
  client.user.setActivity(`${prefix}help`, {
    type: "PLAYING"
  });
});
const prefix = setting.prefix

client.on("message", message =>{
if(message.content ===prefix+ "help"){
const embed = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setColor("RED")
.setAuthor("Bot Commands ✨",client.user.avatarURL())
.setDescription(`

\`${prefix}spank\`,\`${prefix}trash\`, \`${prefix}gay\`, \`${prefix}gray\`, \`${prefix}invert\`, \`${prefix}sepia\`, \`${prefix}blank\`, \`${prefix}trig\`, \`${prefix}ad\`, \`${prefix}aff\`, \`${prefix}slap\`, \`${prefix}beau\`, \`${prefix}bed\`, \`${prefix}bobr\`, \`${prefix}cs\`, \`${prefix}delete\`, \`${prefix}discord\`, \`${prefix}facepalm\`, \`${prefix}hitler\`, \`${prefix}jail\`, \`${prefix}k
iss\`, \`${prefix}lisa\`
`)
.setFooter("© !ZombieX#0001")
message.channel.send(embed)
} 
});



client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "spank")) {
              let user = message.mentions.users.first();
                                  if(!user) return message.reply("need mention user")
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Spank().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Spank.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "trash")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Trash().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Trash.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "gay")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Gay().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "gay.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "gray")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.Greyscale().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "gray.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "invert")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.Invert().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "invert.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "sepia")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.Sepia().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "sepia.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "blank")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Blink().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "blank.gif");;
        message.channel.send(attach)
    }
}); 
client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "trig")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Triggered().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "Triggered.gif");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "ad")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.Ad().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "ad.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "aff")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.Affect().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "af.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "slap")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Batslap().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "slap.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "beau")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.Beautiful().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "beau.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "bed")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Bed().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "bed.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "bobr")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.Bobross().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "bobr.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "cs")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.ConfusedStonk().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "csy.png");;
        message.channel.send(attach)
    }
});


client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "delete")) {
              let user = message.mentions.users.first();
              if(!user) return message.reply("need mention user")
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Delete().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Delete.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "discord")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.DiscordBlue().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "discord.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "facepalm")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.Facepalm().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "face.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "hitler")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.Hitler().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "hitler.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "jail")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false,size:1024, format: 'png' });
        let img = await new DIG.Jail().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "jail.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "kiss")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Kiss().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "kiss.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "lisa")){
const text = message.content.split(" ").slice(1).join()
        let img = await new DIG.LisaPresentation().getImage(text)
        let attach = new Discord.MessageAttachment(img, "text.png");;
        message.channel.send(attach)
    }
});



client.login(process.env.token)
