const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.on("ready", async () => {
	console.log(`${bot.user.username} est connecté`)
});

// message de bienvenue
bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} a rejoint le discord`);
  let welcomechannel = member.guild.channels.find(`name`, "général");
  let questionsChannel = member.guild.channels.find(`name`, "questions");
  let filesChannel = member.guild.channels.find(`name`, "fichier-à-remplir");
  let propositionChannel = member.guild.channels.find(`name`, "proposition-activité");
  let annoncesChannel = member.guild.channels.find(`name`, "annonce");

  welcomechannel.send({
    embed: {
      title: `Boom !`,
      description: `@everyone Nouveau Kamikaze dans la place ! Bienvenue chez les Nakamikaze ${member} !\nSi tu as besoin d'aide, n'hésite pas à te rendre sur #${questionsChannel} \nSi tu cherches des informations, tu trouveras pleins d'aide sur la catégorie *Guide-FF* \n Quand tu auras un moment, merci de remplir les fichiers dans #${filesChannel} \nN'hésite pas à proposer des activités quand tu as envie de faire quelque chose en groupe dans #${propositionChannel} \nEt pour finir, pense à jeter un oeil à #${annoncesChannel} pour te tenir au courant et amuse toi ^^`,
      color: 0xFF724F
    }
  });
});

//message de départ
bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} est parti`);

  let welcomechannel = member.guild.channels.find(`name`, "général");
  welcomechannel.send(`${member} a quitté l'aventure, bonne chance à toi !`);
});

bot.login(process.env.TOKEN)
