// *in the admin section of start.gg,* navigate to the bracket, hit f12 and paste this into the console and hit enter
// within 2 seconds, click in the background of the bracket page
// if you clicked in time, a message will appear in the console saying "copied"
// otherwise you'll get an error
// once it's copied you can paste directly into a spreadsheet

function getElementGreatNthGrandchild(element, n) {
    if (n===0) return element
    n--
    return getElementGreatNthGrandchild(element.children.item(0), n)
}

function getPlayerTag(block) {
    let player1TagAndSeed = getElementGreatNthGrandchild(block, 6).textContent
    return player1TagAndSeed.split(' ').slice(1).join(' ')
}

function getPlayerScore(block) {
    return getElementGreatNthGrandchild(block, 2).children.item(1).children.item(0).textContent
}

let returnString = ''

let sets = document.getElementsByClassName('match-affix-wrapper')

for (let set of sets) {
    let player1Block = set.children.item(0)
    let player2Block = set.children.item(2)
    returnString += getPlayerTag(player1Block) + '\t' + getPlayerScore(player1Block) + '\t'
        + getPlayerTag(player2Block) + '\t' + getPlayerScore(player2Block) + '\n'
}

//console.log(returnString)

setTimeout(() => {
    navigator.clipboard.writeText(returnString)
    console.log('copied')
}, 2000)