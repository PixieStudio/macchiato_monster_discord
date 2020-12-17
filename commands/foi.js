const Command = require('./commands')

module.exports = class Foi extends Command {

    static match(message) {
        return message.content.startsWith('!foi')
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
            result = "Je suis un humble et misérable serviteur du Pourvoyeur de Seigle et de Lait. (Δ4)"
        }
        else if (roll === 2) {
            result = "Je porte les chaînes d’un prêtre au service de l’Impératrice esclavagiste. (Δ6)"
        }
        else if (roll === 3) {
            result = "Le Croupier du Destin me montre parfois sa main. (Δ4)"
        }
        else if (roll === 4) {
            result = "J’ai copié tant de textes sacrés que je peux citer les Saintes écritures toute la journée. (Δ4)"
        }
        else if (roll === 5) {
            result = "En tant que Connétable de l’Ordre éternel, je dois toujours faire respecter les règles. (Δ6)"
        }
        else if (roll === 6) {
            result = "J’ai avalé une relique, une fois, et elle n’est jamais ressortie. (Δ4)"
        }
        else if (roll === 7) {
            result = "Celle qui porte la Couronne d’or nous enseigne que la richesse est la vraie sainteté. (Δ6)"
        }
        else if (roll === 8) {
            result = "Les frères de la Quête sans fin font le vœu de toujours découvrir la vérité. (Δ6)"
        }
        else if (roll === 9) {
            result = "Je crois juste en Mère Nature, mec!(Δ6)"
        }
        else if (roll === 10) {
            result = "En tant que Sœur indigente de la Barbe pleureuse, je ne peux rien posséder. (Δ8)"
        }
        else if (roll === 11) {
            result = "Je suis un Architecte du Réel, un constructeur de machines merveilleuses. (Δ6)"
        }
        else if (roll === 12) {
            result = "Le chemin d’un Pâtre de la Paix est ardu, surtout chez les aventuriers. (Δ10)"
        }
        else if (roll === 13) {
            result = "Au crois chaos je Chaos chaos C H A 0 S(Δ8) chaos chaos 14. Mon Église s’aventure dans les contrées sauvages pour faire avancer la Sainte civilisation. (Δ8)"
        }
        else if (roll === 15) {
            result = "Le plan matériel n’est qu’illusion.Pécheurs, embrassez le Vide Vivace!(Δ8)"
        }
        else if (roll === 16) {
            result = "Tout meurt.C’est ce que disent les Røis de l’Entrøpie.J’accepte mon rôle dans leur plan. (Δ8)"
        }
        else if (roll === 17) {
            result = "Avez - vous douze heures pour parler de Notre Dame la Broyeuse d’Âmes ? (Δ8)"
        }
        else if (roll === 18) {
            result = "Je suis un avatar du Voyageur.Je dois marcher encore et toujours. (Δ10)"
        }
        else if (roll === 19) {
            result = "Je me suis aveuglé en échange de bénédictions de la Nuit Éternelle. (Δ10)"
        }
        else if (roll === 20) {
            result = "Vengeur le Rancunier parle à travers moi et tue par ma main.Repentez - vous!(Δ12)"
        }

        if (roll !== false) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Foi",
                    description: roll + ". " + result + "\n\n*Vous avez jeté les dés plusieurs fois ? Vous servez plusieurs divinités. Bonne chance !*"
                }
            })
        } else {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Foi",
                    description: "Veuillez indiquer un dé valide."
                }
            })
        }
    }

}
