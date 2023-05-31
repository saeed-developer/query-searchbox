export function addQuotesIfWhitespace(value : string) {
    if (value.includes(' ')) {
      return `"${value}"`;
    } else {
      return value;
    }
  }


  export function removeQuotesIfExists(value : string) {
    if (value.startsWith('"') && value.endsWith('"')) {
      return value.slice(1, -1);
    } else {
      return value;
    }}


    export function splitText(text : string) {
      let words = [];
      let isInQuotes = false;
      let currentWord = '';
    
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ' && !isInQuotes) {
          if (currentWord !== '') {
            words.push(currentWord);
            currentWord = '';
          }
        } else if (text[i] === '"') {
          isInQuotes = !isInQuotes;
        } else {
          currentWord += text[i];
        }
      }
    
      if (currentWord !== '') {
        words.push(currentWord);
      }
    
      return words;
    }