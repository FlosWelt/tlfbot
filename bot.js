const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
//const client = new Discord.Client()
//const queue = new Map();

client.login(config.token)

const activities_list = [
    "Mitglieder",
    ".help",
    "discord.gg/qRhTWUQPzf",
    "Moderatoren",
    "sich den Server an"
    ]; // creates an arraylist containing phrases you want your bot to switch through.
 
 client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    zaehler = 0
    setInterval(() => {
        zaehler = zaehler + 1;
        if (zaehler === 5) {
          zaehler = 0;
        }
        const index = zaehler; // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index],{type: "WATCHING"}); // sets bot's activities to one of the phrases in the arraylist.
        //onsole.log(`Still online!` + Date.now() + `Zaehler:` + zaehler);
       
    }, 10 * 1000); // Runs this every 10 seconds.
    setInterval(() => {
        //client.user.setActivity(activities_list[index],{type: "WATCHING"}); // sets bot's activities to one of the phrases in the arraylist.
        //console.log(`Still online!` + Date.now() + `Zaehler:` + zaehler);
        client.channels.fetch("800690431759351811")
        .then(channel => channel.send(`
╔╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╦╗
╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╣
╠╬╬╬╬╬╬:arrow_right:  TLF :arrow_left:╬╬╬╬╣
╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╣
╚╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╩╝

Was ihr hier seht? TLF
TLF ist ein Server, der noch am Anfang steht
Wir freuen uns über jedes neue Mitglied, dass den Server ein Stück weit aktiver macht 
Egal ob Du ein Zocker bist, ein Künstler bist oder einfach gerne entspannst: Bei uns bist Du jederzeit Willkommen
Das Beste
:infinity:  Häufige Gewinnspiele bei denen man Server, Steamkeys, Nitro und viel mehr gewinnen kann
:infinity:  Du kannst bei uns das moderieren erlernen (bei großen Servern braucht man meistens schon Erfahrung, die Du bei uns sammeln kannst)


════════════════════════════════════════

Und das bieten wir

:white_check_mark: Ein übersichtliches Regelwerk :books: 
:white_check_mark: Die Möglichkeit, in unser Team zu kommen :white_check_mark: 
:white_check_mark: Die Möglichkeit, Partner zu werden :newspaper: 
:white_check_mark: Ein Casino, in dem ihr ein wöchentliches Einkommen bekommen könnt :moneybag:
:white_check_mark: Ein Kopfgeld System :bust_in_silhouette:
:white_check_mark: Einen guten Musikbot :headphones: 
:white_check_mark: (Fast) keine everyone pings :mute:
:white_check_mark: Übersichtliche Kanäle :dividers:
:white_check_mark: Einen eigenen Memechannel mit dem beliebtem Dankmemer :frog: 
:white_check_mark: Reaction roles :performing_arts: 
:white_check_mark: Ein Levelsystem, dass für Aktivität belohnt :first_place: 
:white_check_mark: lustige Minigames wie TicTacToe  :game_die: 
:white_check_mark:  Giveaways bei allen Meilensteinen und auch Giveaways ohne besonderen Anlass :tada: 

════════════════════════════════════════

Du möchtest jetzt auf unseren Server kommen?

Dann klick einfach auf die Einladung

Viel Spaß auf dem Server:thumbsup:

https://discord.gg/UVeKuzrDA7
        
        
        `));
       
    }, 20 * 1000); // Runs this every 10 seconds.
   });

   
client.on("message", function(message) {
  
    const args = message.content.split(' ');
    const command = args.shift().toLowerCase();
  
    if (command === ".help") {
      
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('TLF Hilfe')
        .setURL('https://tlfbot.floswelt.com')
        .setAuthor('Tlf Bot 1.0', 'https://cdn.discordapp.com/attachments/818871522164080701/819228760528125982/image0.png', 'https://discord.gg/7S49xvb7GC')
        .setDescription('Hilfe des Tlf Servers.')
        .setThumbnail('https://cdn.discordapp.com/attachments/818871522164080701/819228760528125982/image0.png')
        .addFields(
            { name: 'Moderatoren Hilfe', value: 'Um mit unseren Moderatoren in Kontakt zu kommen gehe in #🎫︱ticket-erstellen.' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Bot Commands', value: 'Klicke hier um alle BotCommands an zusehen: https://tlfbot.floswelt.com', inline: true },
            { name: 'Coming Soon...', value: '--- ', inline: true },
        )
        .addField('Bot Status:', 'https://status.floswelt.com/', true)
        //.setImage('https://cdn.discordapp.com/attachments/818871522164080701/819228760528125982/image0.png')
        .setTimestamp()
        .setFooter('© TLF', 'https://cdn.discordapp.com/attachments/818871522164080701/819228760528125982/image0.png');
    
    message.channel.send(exampleEmbed);
    }}
);