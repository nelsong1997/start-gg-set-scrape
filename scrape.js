function getPlayerTag(block) {
    playerTagBlock = block.getElementsByClassName('match-player-name-container')[0]
    if (playerTagBlock.children.length > 0) { // includes seed
        return playerTagBlock.textContent.split(' ').slice(1).join(' ')
    } else { // just the tag 
        return playerTagBlock.textContent
    }
}

function getPlayerScore(block) {
    return block.getElementsByClassName('match-player-stocks')[0].textContent
}

// https://stackoverflow.com/questions/63033012/copy-the-text-to-the-clipboard-without-using-any-input
function copyTextToClipboard(text) {
    let tempTextarea = document.createElement('textarea')
    tempTextarea.value = text
    document.body.appendChild(tempTextarea)
    tempTextarea.select()
    
    document.execCommand("copy")
    document.body.removeChild(tempTextarea)
}

let returnString = ''

let sets = document.getElementsByClassName('match-affix-wrapper')

for (let set of sets) {
    let player1Block = set.getElementsByClassName('match-section-top')[0]
    let player2Block = set.getElementsByClassName('match-section-bottom')[0]
    returnString += getPlayerTag(player1Block) + '\t' + getPlayerScore(player1Block) + '\t'
        + getPlayerTag(player2Block) + '\t' + getPlayerScore(player2Block) + '\n'
}

copyTextToClipboard(returnString)