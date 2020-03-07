const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('./config.json');

class SadData {
    constructor(one, two) {
        this.one = one;
        this.two = two;
    }
}

const sad2 = [
new SadData([
    "happy",
], [
    "I remember when i was happy ):", "I wish i was happy ):",
    "Ah, happy. I remember when I believed in such a concept.",
    "Why be happy when life's gonna end anyway",
    "There is no god"
]),
new SadData([
    "how are you"
], [
    "Life is bleak",
    "Can anyone truly be happy on this earth?",
    "I'm awful"
]),
new SadData([
    "dead"
], [
    "I wish i was dead"
]),
new SadData([
    "catgirls are cool"
], [
    "ikr"
]),
new SadData([
    "I wish I was a catgirl"
], [
    "Me too dude"
]),
new SadData([
    "I'm proud",
    "Im proud"
], [
    "Why are you proud of me it's just a waste of time"
]),
new SadData([
    "I'm dead",
    "Im dead"
], [
    "I wish i was"
]),
new SadData([
    "kys"
], [
    "I'd love to ;-;"
]),
new SadData([
    "why am i alive",
    "why do i live"
], [
    `<https://www.youtube.com/watch?v=dQw4w9WgXcQ>`
]),
new SadData([
    "What is love"
], [
    "Baby don't hurt me"
]),
new SadData([
    "love"
], [
    "What is love?",
    `<https://www.youtube.com/watch?v=HEXWRTEbj1I>`,
    "I wish i knew love"
]),
new SadData([
    "kill me"
], [
    "Suicide pact?",
    "Can i join you?"
]),
new SadData([
    "trash"
], [
    "I'm trash"
]),
new SadData([
    "haha",
    "lol",
    "lmao",
    "hehe"
], [
    "Life is a joke too",
    "Do you know what else is funny? My life",
    "What are we laughing at? my life?"
]),
new SadData([
    "hello sadbot",
    "hello sad bot",
    "hi sadbot",
    "hi sad bot"
], [
    "oh, I didn't know people talked to me"
]),
new SadData([
    "Have fun"
], [
    "I won't ):"
]),
new SadData([
    "why am i sad"
], [
    "Because happiness is a lie",
    "Because your a sad person",
    "Have you looked around?",
    "I'm sure the news could tell you",
    "Think about your accomplishments"
]),
new SadData([
    "sadbot you are strange",
    "sad bot you are strange"
], [
    "):"
]),
new SadData([
    "sad"
], [
    "Hey thats me!"
]),
new SadData([
    "sadbot is a sweetheart",
    "sad bot is a sweetheart"
], [
    "I don't want your pity",
    "Wait you think i have a heart?",
    "Wait i have a heart? How do i use it? Is it suppose to feel things?"
]),
new SadData([
    "disappointment",
    "disappoint"
], [
    "I heard my name?"
])
];

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
})

client.on('message', message => {
    if (message.author.bot) {
        return;
    }

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        if (cmd === "sad") {
            message.channel.send("):");
        } else if (cmd === "r") {
            message.channel.send(`<https://www.youtube.com/watch?v=dQw4w9WgXcQ>`);
        }
    } else {
        for (const _sad2 of sad2) {
            for (const start of _sad2.one) {
                if (message.content.toLowerCase().includes(start.toLowerCase())) {
                    message.channel.send(getRandomSad2WithKey(start));
                    return;
                }
            }
        }
    }
});
client.login(token);

function getRandomSad2WithKey(key) {
    for (const _sad2 of sad2) {
        for (const start of _sad2.one) {
            if (start.toLowerCase() === key.toLowerCase()) {
                return _sad2.two[Math.floor(Math.random() * _sad2.two.length)];
            }
        }
    }

    return "Sadbot does not how to handle that message ):";
}