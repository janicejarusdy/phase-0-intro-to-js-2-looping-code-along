/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

const gifts = [`teddy bear`, `drone`, `doll`]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts;
}

wrapGifts(gifts)

*/


function writeCards(names, event) {
    const customMessages = []
    for (let i = 0; i < names.length; i++) {
        customMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }

    return customMessages
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(int) {
    while (int>=0) {
        console.log(int)
        int--
    }
}
