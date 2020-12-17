const Command = require('./commands')

module.exports = class NouveauPerso extends Command {

    static match(message) {
        return message.content.startsWith('!nouveau')
    }

    static action(message) {

        // ID Role Joueurs
        if (!message.member.roles.cache.has('746126396891594822')) { return message.channel.send("Tu n'as pas le droit de faire ça.") }
        if (!message.channel.name.startsWith('labo-des-pjs')) { return message.channel.send("Tu ne peux pas faire ça ici.") }

        message.channel.send({
            embed: {
                color: 3447003,
                title: "Nouveau personnage",
                fields: [{
                    name: "Par où je commence ?",
                    value: "Vous pouvez commencer par définir votre équipement de départ, puis vos caractéristiques, ou l'inverse !"
                },
                {
                    name: "Tirer les caractéristiques",
                    value: "`!caracs`"
                },
                {
                    name: "Instructions pour l'équipement",
                    value: "`!equipement`"
                }
                ]
            }
        })
    }

}
