module.exports = function toReadable (number) {
    
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    if (number === 0) {
      return 'zero';
    }
  
    function convertTwoDigits(num) {
      if (num < 10) {
        return ones[num];
      } else if (num < 20) {
        return teens[num - 10];
      } else {
        const digitOne = Math.floor(num / 10);
        const digitTwo = num % 10;
        return tens[digitOne] + (digitTwo !== 0 ? ' ' + ones[digitTwo] : '');
      }
    }
  
    if (number < 100) {
      return convertTwoDigits(number);
    } else {
      const digitHundred = Math.floor(number / 100);
      const remainingDigits = number % 100;
      return ones[digitHundred] + ' hundred' + (remainingDigits !== 0 ? ' ' + convertTwoDigits(remainingDigits) : '');
    }
      }
    
