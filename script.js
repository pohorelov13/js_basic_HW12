//мені здається - найпростіший і найефектівніший алгоритм)
function isPalindrome(str) {
    if (typeof str !== 'string') {
        return false;
    }
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str.charAt(i).toLowerCase() !== str.charAt(str.length - 1 - i).toLowerCase()) {
            return false;
        }
    }
    return true;
}


const palindromes = ['Радар', 'оКо', 'eye', 'noon', '15gtytg51'];
const notPalindromes = ['радарdasd', 'окоs', 'eyes', 'noons', '15sgtytg51'];

palindromes.forEach(s => console.log('Palindrome array -', isPalindrome(s)))
notPalindromes.forEach(s => console.log('Not palindrome array -', isPalindrome(s)))