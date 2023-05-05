function generateString() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
  
    for (let i = 0; i < 30; i++) {
      const charSet = Math.floor(Math.random() * 2); // 0 for letters, 1 for digits
      if (charSet === 0) {
        const charIndex = Math.floor(Math.random() * alphabet.length);
        result += alphabet[charIndex];
      } else {
        const digit = Math.floor(Math.random() * 10);
        result += digit.toString();
      }
    }
  
    return result;
  }
export default generateString;
