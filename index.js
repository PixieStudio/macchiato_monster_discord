const Discord = require('discord.js')
const Caracs = require('./commands/caracs')
const Equipement = require('./commands/equipement')
const Nourriture = require('./commands/nourriture')
const Richesses = require('./commands/richesses')
const Melee = require('./commands/melee')
const Distance = require('./commands/distance')
const Armure = require('./commands/armure')
const Babiole = require('./commands/babiole')
const Heritage = require('./commands/heritage')
const NouveauPerso = require('./commands/nouveau_perso')
const Foi = require('./commands/foi')
const { prefix, token } = require('./config.json')
const client = new Discord.Client()


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return
    let commandUsed = [Caracs.parse(message), Equipement.parse(message), Nourriture.parse(message), Richesses.parse(message), Melee.parse(message), Distance.parse(message), Armure.parse(message), Babiole.parse(message), Heritage.parse(message), Foi.parse(message), NouveauPerso.parse(message)]

})

client.login(token)
