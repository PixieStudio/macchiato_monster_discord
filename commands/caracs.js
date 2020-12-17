const Command = require('./commands')

module.exports = class Caracs extends Command {

    static match(message) {
        return message.content.startsWith('!caracs')
    }

    static action(message) {

        // ID Role Joueurs
        if (!message.member.roles.cache.has('746126396891594822')) { return message.channel.send("Tu n'as pas le droit de faire ça.") }
        if (!message.channel.name.startsWith('labo-des-pjs')) { return message.channel.send("Tu ne peux pas faire ça ici.") }

        const force1 = Math.floor(Math.random() * 6 + 1)
        const force2 = Math.floor(Math.random() * 6 + 1)
        const force3 = Math.floor(Math.random() * 6 + 1)
        const force = force1 + force2 + force3

        const intelligence1 = Math.floor(Math.random() * 6 + 1)
        const intelligence2 = Math.floor(Math.random() * 6 + 1)
        const intelligence3 = Math.floor(Math.random() * 6 + 1)
        const intelligence = intelligence1 + intelligence2 + intelligence3

        const sagesse1 = Math.floor(Math.random() * 6 + 1)
        const sagesse2 = Math.floor(Math.random() * 6 + 1)
        const sagesse3 = Math.floor(Math.random() * 6 + 1)
        const sagesse = sagesse1 + sagesse2 + sagesse3

        const dexterite1 = Math.floor(Math.random() * 6 + 1)
        const dexterite2 = Math.floor(Math.random() * 6 + 1)
        const dexterite3 = Math.floor(Math.random() * 6 + 1)
        const dexterite = dexterite1 + dexterite2 + dexterite3

        const constitution1 = Math.floor(Math.random() * 6 + 1)
        const constitution2 = Math.floor(Math.random() * 6 + 1)
        const constitution3 = Math.floor(Math.random() * 6 + 1)
        const constitution = constitution1 + constitution2 + constitution3

        const charisme1 = Math.floor(Math.random() * 6 + 1)
        const charisme2 = Math.floor(Math.random() * 6 + 1)
        const charisme3 = Math.floor(Math.random() * 6 + 1)
        const charisme = charisme1 + charisme2 + charisme3

        const pv = Math.floor(Math.random() * 6 + 1)

        message.channel.send({
            embed: {
                color: 3447003,
                title: "Vos caractéristiques",
                fields: [{
                    name: "Force",
                    value: `${force1} + ${force2} + ${force3}\nTotal : **${force}**`
                },
                {
                    name: "Intelligence",
                    value: `${intelligence1} + ${intelligence2} + ${intelligence3}\nTotal : **${intelligence}**`
                },
                {
                    name: "Sagesse",
                    value: `${sagesse1} + ${sagesse2} + ${sagesse3}\nTotal : **${sagesse}**`
                },
                {
                    name: "Dextérité",
                    value: `${dexterite1} + ${dexterite2} + ${dexterite3}\nTotal : **${dexterite}**`
                },
                {
                    name: "Constitution",
                    value: `${constitution1} + ${constitution2} + ${constitution3}\nTotal : **${constitution}**`
                },
                {
                    name: "Charisme",
                    value: `${charisme1} + ${charisme2} + ${charisme3}\nTotal : **${charisme}**`
                },
                {
                    name: "Points de Vie",
                    value: `Dé de vie : **d6**\nPV : __à lancer après avoir fait les choix plus bas__`
                },
                {
                    name: "Modifications",
                    value: "Vous pouvez permutter deux scores si vous le désirez.\nInventez un trait (race, métier, détail biographique, faction..)"
                },
                {
                    name: "Faites deux choix parmis les suivants (ou choisir deux fois la même option)",
                    value: "- Ajoutez d6 à une caractéristique dont le score est de 10 ou moins.\n- Écrivez un trait supplémentaire.\n- Gagnez un dé de vie du type que vous possédez déjà.\n- Entraînement magique: inventez deux sorts.\n- Entraînement martial: augmentez votre ou vos dés de vie d’un cran.\n- Entraînement spécialisé: inventez une capacité(1 / jour)."
                },
                {
                    name: "Lancez vos dés de vie, en fonction des choix précédents :",
                    value: "!XdY"
                },
                {
                    name: "Equipement :",
                    value: "Poursuivez avec la commande `!equipement` s'il n'est pas déjà défini."
                }
                ]
            }
        })
    }

}
