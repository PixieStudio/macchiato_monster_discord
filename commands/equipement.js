const Command = require('./commands')

module.exports = class Equipement extends Command {

    static match(message) {
        return message.content.startsWith('!equipement')
    }

    static action(message) {

        // ID Role Joueurs
        if (!message.member.roles.cache.has('746126396891594822')) { return message.channel.send("Tu n'as pas le droit de faire ça.") }
        if (!message.channel.name.startsWith('labo-des-pjs')) { return message.channel.send("Tu ne peux pas faire ça ici.") }

        message.channel.send({
            embed: {
                color: 3447003,
                title: "Equipement",
                fields: [{
                    name: "Comment faire ?",
                    value: "Vous devez lancer 1 dé de chaque type : d20 d12 d10 d8 d6 d4, sur les tables d'équipement de départ.\nVous pouvez ignorer certaines tables ou lancer sur la même."
                },
                {
                    name: "Choisissez une table et un dé à lancer",
                    value: "Par exemple : Equipement et nourriture avec d10. Je tape la commande :\n `!nourriture d10`"
                },
                {
                    name: "Equipement et nourriture",
                    value: "!nourriture"
                },
                {
                    name: "Richesses et objets de valeur",
                    value: "!richesses"
                },
                {
                    name: "Armes de mêlée",
                    value: "!melee"
                },
                {
                    name: "Armes à distance",
                    value: "!distance"
                },
                {
                    name: "Armures",
                    value: "!armures"
                },
                {
                    name: "Babioles magiques",
                    value: "!babioles"
                },
                {
                    name: "Héritages",
                    value: "!heritages"
                },
                {
                    name: "Foi",
                    value: "!foi"
                },
                {
                    name: "Caractéristiques :",
                    value: "Poursuivez avec la commande `!caracs` si elles ne sont pas déjà définies."
                }
                ]
            }
        })
    }

}
