class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'/ ]+/g, '')
  }
  
  static titleize(str) {
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    return str.split(" ").map((word) => {
      if (word === str.split(" ")[0]) {
        return Formatter.capitalize(word)
      } else if (exceptions.includes(word)) {
        return word
      } else {
        return Formatter.capitalize(word)
      }
    }).join(" ")
  }
}