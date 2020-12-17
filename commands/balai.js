const Command = require('./commands')

module.exports = class Balai extends Command {

    static match(message) {
        return message.content.startsWith('!balai')
    }

    static action(message) {


        if (!message.channel.name.startsWith('labo-des-pjs')) { return message.channel.send("Tu ne peux pas faire ça ici.") }
        message.channel.bulkDelete(100)
        message.channel.send("**MJ** Merci d'utiliser la commande **!balai** quand vous avez terminé pour nettoyer la salle.")
    }

}
