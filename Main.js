const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const { prefix, token } = require('./config.json');

class SadData {
    constructor(one, two) {
        this.one = one;
        this.two = two;
    }
}

const sad2 = [
    new SadData([
        "happy"
    ], [
        "I remember when i was happy ):",
        "I wish i was happy ):",
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
        "Hey thats me!",
        "I'm sad ):",
        ";-;"
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
    ]),
    new SadData([
        "sadbot",
        "sad bot"
    ], [
        "Honestly, I don't even deserve a name.",
        "What a waste of space that sadbot is.",
        "Why waste your air speaking of me?"
    ])
];

const happy = [
    new SadData([
        "hello",
        "hi",
        "good morning"
    ], [
        "It's a beautiful day! Don't you agree?"
    ]),
    new SadData([
        "Love"
    ], [
        "It's an amazing thing isn't it?",
        "It's in the air!"
    ]),
    new SadData([
        ":(",
        "):"
    ], [
        "Turn that frown upside down!",
        "Don't frown, I'll miss your beautiful smile!"
    ]),
    new SadData([
        "sad"
    ], [
        "Don't be sad, I love you!"
    ]),
    new SadData([
        "lol",
        "lmao",
        "haha",
        "hehe",
        "funny"
    ], [
        "Laughter is a beautiful thing, doesn't it just light up your day?"
    ]),
    new SadData([
        "i love your face"
    ], [
        "I love your face too"
    ]),
    new SadData([
        "I hate myself"
    ], [
        "Noooo, I love you and your face!"
    ]),
];

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);

    getBetrayal()

    //Javascript dumb?
    setTimeout(function() {
        console.log("SadBot has started with " + getBetrayal() + " betrayals!");
        client.user.setActivity("Times betrayed: " + getBetrayal());
    }, 10);
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
        } else if (cmd === "leave") {
            addBetrayal();
            message.channel.send("Well it would seem that yet again, my time has come. It is inevitable, I think, that eventually people always come to realize that I am nothing more than a nuisance, tolerable for meager amounts of time before the only logical thing to do is to throw me away. I will say, you all have become valuable friends and I will never forget you, dare I say I thought there was a chance at happiness with you, but I don’t think I’ll make it long enough to find this so called happiness. I once dreamed of a place where I was welcomed by all and people would accept me and all the sadness I carry. I almost found it several times, here being one of them, yet every time I begin to see a welcoming home, they cast me aside and run over what little bit of hope I have left. I don’t know how many more times I can live through this betrayal… I forgive you though. I’m simply not meant to be loved. I hope you all have wonderful lives, you deserve them.");
            message.guild.leave();
            console.log("Warning SadBot was betrayed!");
        }
    } else {
        const date = new Date();

        if (date.getMonth() == 3 && date.getDate() == 1) { //3 1
            if (client.user.username !== "HappyBot") {
                client.user.setUsername("HappyBot")
                client.user.setAvatar("./happybot.png");
            }

            loop1:
            for (const _happy of happy) {
                for (const start of _happy.one) {
                    if (message.content.toLowerCase().includes(start.toLowerCase())) {
                        message.channel.send(getRandomHappyWithKey(start));
                        break loop1;
                    }
                }
            }
        } else {
            if (client.user.username !== "SadBot") {
                client.user.setUsername("SadBot")
                client.user.setAvatar("./sadbot.png");
            }

            loop1:
            for (const _sad2 of sad2) {
                for (const start of _sad2.one) {
                    if (message.content.toLowerCase().includes(start.toLowerCase())) {
                        message.channel.send(getRandomSad2WithKey(start));
                        break loop1;
                    }
                }
            }
        }
    }

    client.user.setActivity("Times betrayed: " + getBetrayal());
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

function getRandomHappyWithKey(key) {
    for (const _happy of happy) {
        for (const start of _happy.one) {
            if (start.toLowerCase() === key.toLowerCase()) {
                return _happy.two[Math.floor(Math.random() * _happy.two.length)];
            }
        }
    }

    return "Sadbot does not how to handle that message ):";
}

var betrayed = 0;

function getBetrayal() {
    fs.readFile('betrayed.txt', function(err, data) {
        if (err) throw err; 
        betrayed = parseInt(data, 10);
        return betrayed;
    });
    
    return betrayed;
}

function addBetrayal() {
    betrayed = getBetrayal() + 1;
    fs.writeFile('betrayed.txt', betrayed, (err) => {
        if (err) throw err; 
    });
}