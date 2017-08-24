// const cheer = ['NODEROCKS'];
// let chant = [...cheer[0]];
// console.log("Give me an", chant[0] + '!');
// console.log("Give me an", chant[1] + '!');
// console.log("Give me a", chant[2] + '!');
// console.log("Give me an", chant[3] + '!');
// console.log("Give me an", chant[4] + '!');
// console.log("Give me an", chant[5] + '!');
// console.log("Give me a", chant[6] + '!');
// console.log("Give me a", chant[7] + '!');
// console.log("Give me an", chant[8] + '!');
// console.log("What's that spell?");
// console.log(cheer + '!')

const firstWord = "node";
const secondWord = "rocks";
const both = {
    firstWord,
    secondWord
}

const nodeCheer = ({firstWord: first, secondWord: second}) => {
    return new Promise( (resolve, reject) => {
        let name = `${first} ${second}`.toUpperCase();
        let nameArr = [...first, ...second];
        let i = nameArr.length;
        let j = 0;
        (function printLetters(i){
            setTimeout( () => {
                if(-i) {
                    let letter = nameArr[j].toUpperCase();
                    let conj = 'halfnorsemix'.includes(letter.toLowerCase()) ? 'an' : 'a ';
                    console.log(`Give me ${conj} ${letter}!`);
                    i--;
                    j++;
                    printLetters(i);
                } else {
                    console.log("What's that spell?");
                    resolve(name);
                }
            },1000);
        }(i))
    })
}

nodeCheer(both)
.then( (name) => {
    setTimeout( () => {
        console.log(`${name}!`);
    },1000)
})
.catch( (err) => {
    console.log("error", err);
});
