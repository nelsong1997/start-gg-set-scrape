// https://stackoverflow.com/questions/63033012/copy-the-text-to-the-clipboard-without-using-any-input
function copyTextToClipboard(text) {
    let tempTextarea = document.createElement('textarea')
    tempTextarea.value = text
    document.body.appendChild(tempTextarea)
    tempTextarea.select()
    
    document.execCommand("copy")
    document.body.removeChild(tempTextarea)
}

let playersRow = document.getElementsByClassName('rr-row')[0]
let playerTags = playersRow.getElementsByClassName('match-player-name-container')
let playerTagsArr = []
for (let playerTag of playerTags) playerTagsArr.push(playerTag.textContent)

// https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
let setRows = [].slice.call(document.getElementsByClassName('rr-row')).slice(1)

let returnString = ''

for (let i=0; i<setRows.length; i++) {
    let sets = setRows[i].getElementsByClassName('rr-match')
    for (let j=0; j<sets.length; j++) {
        if (i===j) break // skip blank and opposite cells
        let player1Tag = playerTagsArr[i]
        let player2Tag = playerTagsArr[j]
        let player1Score = sets[j].textContent.split(' - ')[0]
        let player2Score = sets[j].textContent.split(' - ')[1]
        returnString += player1Tag + '\t' + player1Score + '\t' + player2Tag + '\t' + player2Score + '\n'
    }
}

console.log(returnString)

copyTextToClipboard(returnString)