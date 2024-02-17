var longestCommonPrefix = function(strs) {
    let prefix = '';
    let word = strs[0];
    for (let i = 0; i < word.length; i++) {
      for (let j = 1; j < strs.length; j++) {
          if (!(strs[j][i] == word[i])) {
            return prefix;
          }
      }
      prefix += word[i];
    }
    return prefix;
};