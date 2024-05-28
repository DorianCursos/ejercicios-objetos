// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// - Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }
};

for (const number of data.numbers) {
  data.firstFloor.secondFloor.numbersPlus2.push(number + 2);
  data.firstFloor.thirdFloor.numbersDouble.push(number * 2);
  data.fourthFloor.numbersDividedBy2.push(number / 2);
  if (number % 2 === 0) {
    data.fifthFloor.onlyEven.push(number);
  } else {
    data.fifthFloor.onlyOdd.push(number);
  }
}

// - Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Victor", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
//   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

const data2 = {
  firstFloor: {
    vowels: []
  },
  secondFloor: {
    consonants: []
  },

  fourthFloor: {
    asciiCode: []
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};

const saveSentenceInObject = sentence => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
  const vowelsRegexp = /[aeiouáéíóú]/i; //insensitive
  const lettersRegexp = /[a-zñ]/i;
  for (const letter of sentence) {
    // if (vowels.includes(letter.toLowerCase())) {
    //   data2.firstFloor.vowels.push(letter);
    // }
    if (vowelsRegexp.test(letter)) {
      data2.firstFloor.vowels.push(letter);
    } else if (lettersRegexp.test(letter)) {
      data2.secondFloor.consonants.push(letter);
    }

    data2.fourthFloor.asciiCode.push(letter.charCodeAt());
  }

  let startPosition = 0;
  let endPosition = 0;
  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === ' ' || i === sentence.length) {
      endPosition = i;
      const wordToSave = sentence.substring(startPosition, endPosition);
      data2.fifthFloor.wordsInLowercase.push(wordToSave.toLowerCase());
      data2.fifthFloor.wordsInUppercase.push(wordToSave.toUpperCase());
      startPosition = i + 1;
    }
  }

  const consonants = 'bcdfghjklmnñpqrstvwxyz';
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz';

  let encodedSentence = '';

  for (const letter of sentence.toLowerCase()) {
    if (letter === 'a' || letter === 'á') {
      encodedSentence += 1;
    } else if (letter === 'e' || letter === 'é') {
      encodedSentence += 2;
    } else if (letter === 'i' || letter === 'í') {
      encodedSentence += 3;
    } else if (letter === 'o' || letter === 'ó') {
      encodedSentence += 4;
    } else if (letter === 'u' || letter === 'ú') {
      encodedSentence += 5;
    } else if (consonants.includes(letter)) {
      let consonantPosition;
      let previousConsonant;
      if (letter === 'b') {
        previousConsonant = consonants.length - 1;
      } else {
        consonantPosition = consonants.indexOf(letter);
        previousConsonant = consonantPosition - 1;
      }
      encodedSentence += consonants.charAt(previousConsonant);
    } else if (letter === ' ') {
      const randomPosition = Math.floor(Math.random() * alphabet.length);
      const randomLetter = alphabet.charAt(randomPosition);
      encodedSentence += randomLetter;
    } else {
      encodedSentence += letter;
    }

    data2.sixthFloor.secretCode = encodedSentence;
  }
  console.log(data2.sixthFloor.secretCode);
};

saveSentenceInObject('Si no estudias acabarás como Victor');
