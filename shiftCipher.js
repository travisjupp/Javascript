// A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

// Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

// encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.

// decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.

// In both methods, any character outside the alphabet should remain the same.
// But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
// Example:


class ShiftCipher {
    constructor(shift) {
        this._shift = shift;
    }
    encrypt(str) {
        // encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
        
        const re = /[A-Za-z]/;
        // console.log('a'.codePointAt()); // 97
        // console.log('z'.codePointAt()); // 122
        // console.log('x'.codePointAt()); // 120
        // console.log('v'.codePointAt()); // 118
        // console.log('b'.codePointAt()); // 98
        // console.log('h'.codePointAt()); // 104
        
        str = str.toLowerCase(); // to limit charCode range to lower alpha (97-122)
        let result = '';
        for (let char of str) {
            
            const charCode = str.charCodeAt(str.indexOf(char));// get charCode 
            if (re.test(char)){ // process only alpha chars

                // if charCode+shift > 122 subtract 122 from charCode+shift add remaining to 97
                // 122(z) with a shift of 1 should equal 97(a)
                // 122 + 1 = 123 - 122 = 1 + 97 = 98(b)  
                // needs to be 122(z) + 1(shift) = 123 - 122+shift(1) = 0 + 97 = 97(a)
                
                // shift x=>a
                // 120(x) + 3(shift) = 123 - 122 = 1 + 96 = 97(a)  // using 96 instead 97

                // shift v=>b
                // 118(v) + 6(shift) = 124 - 122 = 2 + 96 = 98(b)
                // console.log(`${char}:${charCode}`);

                if ((charCode + this._shift) > 122) {
                    result += String.fromCharCode(charCode + this._shift - 122 + 96).toUpperCase();
                    // console.log('>122',String.fromCharCode(charCode + this._shift - 122 + 96).toUpperCase());
                } else {
                    result += String.fromCharCode(charCode + this._shift).toUpperCase();
                    // console.log(String.fromCharCode(charCode + this._shift).toUpperCase());
                }
                // add shift to charCode for each letter of string
                // console.log(String.fromCharCode(charCode+this._shift));
            } else { // leave non-alpha chars unchanged
                result += char;
            }
            // console.log(`${char}:${str.charCodeAt(str.indexOf(char))}`); // returns charCode of each char
        }
        console.log(result);
    }
    decrypt(str) {
        // decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
        const re = /[A-Za-z]/;
        str = str.toLowerCase();
        let result = '';
        for (let char of str) {
            const charCode = str.charCodeAt(str.indexOf(char)); // get charCode
            if (re.test(char)) { // process only alpha chars
                // shift a=>z
                // 97(a) 122(z) 122 - shift leftover from charCode - 97
                // 97(a) + shift(2) = 99 - 97 = 2 122 - 2 =  120(x) offset by +1 = 121(y)
                // 98(b) + shift(2) = 100 - 97 = 3 122 - 3 = 119(w) offset by +1 = 120(x)
                // 99(c) + shift(3) = 102 - 97 = 5 122 - 5 = 117(u) offset by +1 = 118(v)
                
                // subtract shift?
                // shift a=>y
                // 97(a) - shift(2) = 95 - 97 = -2 + 122 = 120(x) offset by +1 = 121(y)
                // shift c=>z
                // 99(c) - shift(3) = 96 - 97 = -1 + 122 = 121(y) offset by +1 = 122(z)
                // shift d=>y
                // 100(d) - shift(5) = 95 - 97 = -2 + 122 = 120(x) offset by +1 = 121(y) 
                console.log(`${char}:${charCode}`);
                if (charCode - this._shift < 97) {

                    console.log(`=>${String.fromCharCode(charCode - this._shift - 97 + 122 + 1)}`)
                } else {
                    console.log(`==>${String.fromCharCode(charCode - this._shift)}`)
                }

                

                
            } else {
                console.log('y:',char);
            }
        }
    }
}

const cipher = new ShiftCipher(2);
// cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'

const cipher2 = new ShiftCipher(6)
// cipher2.encrypt('vWb?!'); // returns 'BCH?!'


// Feel free to reference the Unicode Table as well as the JavaScript String methods including: toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()