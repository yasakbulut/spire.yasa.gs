import { nouns, verbs } from './strings';

export function verbTheNoun() {
    const noun = nouns[randInt(nouns.length)];
    const verb = chooseVerb(noun);
    return `${verb} the ${noun}`;
}

function chooseVerb(noun: string) {
    const initial = noun[0];
    const sameInitialVerbs = verbs.filter(verb => verb[0] === initial);
    if (sameInitialVerbs.length > 0) {
        return sameInitialVerbs[randInt(sameInitialVerbs.length)];
    }
    return verbs[randInt(verbs.length)];
}

function randInt(nExclusive: number) {
    return Math.floor(Math.random() * nExclusive);
}
