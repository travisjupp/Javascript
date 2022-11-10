// A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

// Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

// encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.

// decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.

// In both methods, any character outside the alphabet should remain the same.
// But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.

// Feel free to reference the Unicode Table as well as the JavaScript String methods including: toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()

class ShiftCipher {
    constructor(shift) {
        this._shift = shift;
    }
    encrypt(str) {
        // encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
        const re = /[A-Za-z]/;
        str = str.toLowerCase(); // to limit charCode range to lower alpha (97-122)
        let result = '';
        for (let char of str) {
            const charCode = str.charCodeAt(str.indexOf(char)); // get charCode 
            if (re.test(char)) { // process only alpha chars
                if ((charCode + this._shift) > 122) { // if char shift > z shift from a
                    result += String.fromCharCode(charCode + this._shift - 122 + 96).toUpperCase();
                } else {
                    result += String.fromCharCode(charCode + this._shift).toUpperCase();
                }
            } else { // leave non-alpha chars unchanged
                result += char;
            }
        }
        return result;
    }
    decrypt(str) {
        // decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
        const re = /[A-Za-z]/;
        str = str.toLowerCase(); // to limit charCode range to lower alpha (97-122)
        let result = '';
        for (let char of str) {
            const charCode = str.charCodeAt(str.indexOf(char)); // get charCode
            if (re.test(char)) { // process only alpha chars
                if (charCode - this._shift < 97) { // if char shift < a shift from z
                    result += String.fromCharCode(charCode - this._shift - 97 + 122 + 1);
                } else {
                    result += String.fromCharCode(charCode - this._shift);
                }
            } else { // leave non-alpha chars unchanged
                result += char;
            }
        }
        return result;
    }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'


