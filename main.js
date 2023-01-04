let friends = ["Ahmed", "Sayed","Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let one = letter.length

for (let i = one - one  ; i < friends.length ; i++) {
    if (friends[i][0] === "A") {
        continue;
    }
    console.log(`${one++} => ${friends[i]}`);

}

/*
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/