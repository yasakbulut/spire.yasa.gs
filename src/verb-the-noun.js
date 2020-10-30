const { nouns, verbs } = require('./strings');

function verbTheNoun() {
    const noun = nouns[randInt(nouns.length)];
    const verb = chooseVerb(noun);
    return `${verb} the ${noun}`;
}

function chooseVerb(noun) {
    const initial = noun[0];
    const sameInitialVerbs = verbs.filter(verb => verb[0] === initial);
    if (sameInitialVerbs.length > 0) {
        return sameInitialVerbs[randInt(sameInitialVerbs.length)];
    }
    return verbs[randInt(verbs.length)];
}

function randInt(nExclusive) {
    return Math.floor(Math.random()*nExclusive);
}

module.exports = verbTheNoun;