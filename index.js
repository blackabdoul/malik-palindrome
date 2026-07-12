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

    // palingrom using the method we created for all string object fro comparison
    this.palindrome = function palindrome(){
        return this.processedContent() === this.processedContent().reverse();
    }

    //Return true for a palindrome, false otherwise 21.5.2026 
    this.palindrome = function palindrome(){
      if(this.processedContent())
        return this.processedContent() === this.processedContent().reverse();
      else
        return false; 
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

