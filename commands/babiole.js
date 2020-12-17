const Command = require('./commands')

module.exports = class Babiole extends Command {

    static match(message) {
        return message.content.startsWith('!babiole')
    }

    static action(message) {

        let roll
        // ID Role Joueurs
        if (!message.member.roles.cache.has('746126396891594822')) { return message.channel.send("Tu n'as pas le droit de faire ça.") }
        if (!message.channel.name.startsWith('labo-des-pjs')) { return message.channel.send("Tu ne peux pas faire ça ici.") }

        if (message.content.endsWith('d20')) {
            roll = Math.floor(Math.random() * 20 + 1)
        }
        else if (message.content.endsWith('d12')) {
            roll = Math.floor(Math.random() * 12 + 1)
        }
        else if (message.content.endsWith('d10')) {
            roll = Math.floor(Math.random() * 10 + 1)
        }
        else if (message.content.endsWith('d8')) {
            roll = Math.floor(Math.random() * 8 + 1)
        }
        else if (message.content.endsWith('d6')) {
            roll = Math.floor(Math.random() * 6 + 1)
        }
        else if (message.content.endsWith('d4')) {
            roll = Math.floor(Math.random() * 4 + 1)
        } else {
            roll = false
        }

        let result = ''
        if (roll === 1) {
            result = "Le porte - bonheur d’un être cher"
        }
        else if (roll === 2) {
            result = "Bocal d’antidote universel Δ6"
        }
        else if (roll === 3) {
            result = "Statuette de bronze primitive(Δ4 in.)"
        }
        else if (roll === 4) {
            result = "Poignée de baies bénéfiques(soins Δ4)"
        }
        else if (roll === 5) {
            result = "Relique d’un demi - saint(Δ6 in.)"
        }
        else if (roll === 6) {
            result = "Fiole de poison paralysant Δ6"
        }
        else if (roll === 7) {
            result = "Sachet d’encens des Grands oracles Δ4"
        }
        else if (roll === 8) {
            result = "Poignée de plumes d’hibours(Δ8 in.)"
        }
        else if (roll === 9) {
            result = "Masse de flescargots(dégâts Δ6 ou utilisé comme in.)"
        }
        else if (roll === 10) {
            result = "Parchemin de métamorphose(durée Δ10)"
        }
        else if (roll === 11) {
            result = "Poudre noirâtre Δ10(à sniffer pour utiliser comme in.)"
        }
        else if (roll === 12) {
            result = "Flacon d’élixir de la Croix(soins Δ8)"
        }
        else if (roll === 13) {
            result = "Cape d’armure Δ10(ou utilisée comme in.)"
        }
        else if (roll === 14) {
            result = "Chaussettes de marche dans les nuages Δ8"
        }
        else if (roll === 15) {
            result = "Têtes de singe réduites(Δ12 in.)"
        }
        else if (roll === 16) {
            result = "Fez d’empathie Δ8(ou utilisé comme in.)"
        }
        else if (roll === 17) {
            result = "Pièces de la Cité des Ombres(Δ12 in.)"
        }
        else if (roll === 18) {
            result = "Fléchettes infaillibles(dégâts Δ10)"
        }
        else if (roll === 19) {
            result = "Boîte de grains de café ju - ju(Δ12 in.)"
        }
        else if (roll === 20) {
            result = "Baguette de coercition Δ10(ou utilisée comme in.)"
        }

        if (roll !== false) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Babioles magiques",
                    description: roll + ". " + result
                }
            })
        } else {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Babioles magiques",
                    description: "Veuillez indiquer un dé valide."
                }
            })
        }
    }

}
