module.exports = Phrase
// Reverse a string
// function reverse(string){
//     return string.split('').reverse().join('');
// }

// function reverse1(string){ //reversing strings with emojis,
//     return Array.from(string).reverse().join('');
// }

// Adds reverse method to all string objects
String.prototype.reverse = function (){
    return Array.from(this).reverse().join('')
}

// // Retruns a reversed string
// function reverse(string){
//     return string.split('').reverse().join('');
// }
// // Returns reversed strings with emojis,
// function reverse1(string){ 
//     return Array.from(string).reverse().join('');
// }
// // Returns 
// function palindrome(string){
//     let lowerstring = string.toLowerCase();
//     return lowerstring === reverse(lowerstring);
// }

// let emailParts=(email)=>{
//     email=email.toLowerCase();
//     return email.split('@');
// }

// 9th april (prototyping = inheritance)
function Phrase(content){
    this.content = content;

    //return unpunctuated content
    this.puncContent = function puncContent(){
        return Array.from(this.content).filter(c => c.match(/^[a-zA-Z]$/)).join('');
    }

    //return processed content for palindrome testing
    this.processedContent = function processedContent(){
        return this.puncContent().toLowerCase();
    }

    // palingrom with our custom defined reverse() for comparison
    // this.palindrome = function palindrome(){
    //     return this.processedContent() === reverse(this.processedContent());
    // }

    // palingrom using the method we created for all string object fro comparison
    this.palindrome = function palindrome(){
        return this.processedContent() === this.processedContent().reverse();
    }

    //return uppercased content
    this.louder = function louder(){
        let upperstring =this.content.toUpperCase();
        return upperstring;
    }

}

function translatedPhrase(content, translation){
    this.content = content;
    this.translation = translation;

    this.processedContent = function processedContent(){
        return this.translation.toLowerCase()
    }
}

//prototyping (inheritance)
translatedPhrase.prototype = new Phrase();

