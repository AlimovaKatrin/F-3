// Анаграмма должна содержать одинаковые буквы:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false

// Напишите функцию, которая найдет все анаграммы слова из списка. 
// Вам будет дано два аргумента слово и массив со словами.
// Вы должны вернуть массив всех анаграмм или пустой массив, если их нет

const list = ['baab','abbba','bbaa','abca'];

const anagrams = (word, wordsList) => {
    const sortedWord = word.split('').sort().join('');
    return wordsList.filter((el) => el.split('').sort().join('') === sortedWord)
}

console.log(anagrams('abba',list ))
