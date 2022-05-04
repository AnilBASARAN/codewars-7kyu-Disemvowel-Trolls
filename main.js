

function disemvowel(str) {
    let vovels = ["a","e","i","o","u","O","U","A","E","A","I"]
    return str.split('').filter(x => !vovels.includes(x)).join('') 
  }


/*

7kyu-Disemvowel Trolls


Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

CLEVER SOLUTİONS

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
-------------------------------------------------------
disemvowel = str => str.replace(/[aeiou]/gi,'');

--------------------------------------------------------

function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}
-----------------------------------------------------------
