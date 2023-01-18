// Iteration 1: Names and Input
let hacker1 = "Esteban";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Julia";
console.log(`The navigartor's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log (`The navigator has the lingest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let newNameHacker1 = ""
let newNameHacker2 = ""
for (let i = 0; i < hacker1.length; i++) {
    newNameHacker1 = newNameHacker1 + hacker1[i].slice() + " ";
}
console.log(newNameHacker1.toUpperCase());


 for (let i = hacker2.length - 1; i >= 0; i--) {
    newNameHacker2 = newNameHacker2 + hacker2[i];
}
console.log(newNameHacker2);

//

/* if (hacker1.length >= hacker2.length) { */
    for (let i = 0; i < hacker1.length; i++) {
        if (hacker1[i] < hacker2[i]) {
            console.log(`The driver's name goes first.`)
            break;
        } else if ( hacker1[i] > hacker2[i]) {
            console.log(`The navigator's name goes first`)
            break;
        } else if ( hacker1 == hacker2 ) {
            console.log(`What?! You both have the same name?`)
            break;
        }
    }
/* } else if (hacker1.length < hacker2.length) {
    for (let i = 0; i < hacker2.length; i++) {
        if (hacker1[i] < hacker2[i]) {
            console.log(`The driver's name goes first.`)
            break;
        } else if ( hacker1[i] > hacker2[i]) {
            console.log(`The navigator's name goes first`)
            break;
        } else if ( hacker1 == hacker2 ) {
            console.log(`What?! You both have the same name?`)
            break;
        }
    }
} */


///

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum orci id dictum malesuada. Nullam convallis erat libero, ac ornare risus tempus id. Cras malesuada non quam nec viverra. Duis commodo imperdiet tincidunt. Aliquam nec neque nisl. Aliquam fringilla nibh vitae lorem venenatis, et blandit tortor vestibulum. In pellentesque eros sed turpis dictum sollicitudin. Sed rhoncus eu tortor at maximus. Nulla at nulla et nulla gravida dignissim quis quis quam. Morbi suscipit diam in laoreet egestas.

Curabitur eu mi id mi eleifend bibendum et a elit. Aenean vulputate risus eget risus hendrerit vestibulum. Sed ultricies, neque ut efficitur sagittis, nisi risus accumsan felis, ac blandit augue magna eget risus. Aliquam eleifend urna eu vehicula faucibus. In tortor sapien, malesuada ac velit in, consectetur tincidunt eros. Aliquam eu quam id velit faucibus tincidunt. Donec ac ex nisi. Nunc pharetra sagittis augue id ullamcorper. Suspendisse ut tellus luctus, condimentum felis quis, commodo justo. Vivamus condimentum arcu nec tortor lacinia, ac porttitor eros fringilla. Sed sagittis libero et volutpat tincidunt. Phasellus interdum feugiat facilisis. Sed at purus vitae nisi scelerisque interdum. Nullam luctus tortor eu ligula tincidunt, eget faucibus ligula consectetur.

Donec quis congue nisl. Cras id tortor risus. Aliquam at laoreet dolor. Nam elit erat, efficitur a sapien vel, suscipit iaculis ipsum. Sed arcu purus, egestas vel rhoncus fermentum, vestibulum consectetur arcu. Sed elementum, leo quis gravida tincidunt, nisl massa blandit lorem, ut pretium tellus leo vitae felis. Pellentesque iaculis vel quam nec sodales. Pellentesque at convallis ex, vel facilisis magna. Duis non porta justo. Mauris urna ante, dictum ac viverra vitae, condimentum hendrerit mauris. Phasellus in ipsum et risus pretium elementum ac at est.`

let counterWords = 0;
let testEt = "";
let counterEt = 0;

for (let i = 0 ; i < longText.length; i++) {
    if (longText[i] === " ") {
        counterWords++
    }
}
console.log(counterWords);

//


for (let i = 0; i < longText.length; i++) {
    testEt = longText[i] +longText[i+1];
    if (testEt == "et") {
        counterEt++
    }
}
console.log(counterEt);

//

//.replace lo termino en estos dias
//.split("").reverse().join(""); para array
let phraseToCheck = "taco cat";
let testPhrase = phraseToCheck.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
testPhrase = testPhrase.replace(/ /g, "");
let counterPalin = 0;
//console.log(testPhrase)
let testPhraseLength = (testPhrase.length -1);
//console.log(testPhraseLength)
for (i = 0; i < testPhrase.length; i++) {
    if (testPhrase[i] !== testPhrase[testPhraseLength-i]) {
        console.log("No es palindromo");
    } else if (testPhrase[i] == testPhrase[-i]) {
        counterPalin ++
        console.log(counterPalin);
    }
}
if (counterPalin == (Math.floor(testPhrase.length / 2))) {
    console.log("Es un palindromo");
}