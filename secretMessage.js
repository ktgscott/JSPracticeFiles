let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop();

secretMessage.push('to','program');

secretMessage.splice(6, 1, 'right');

secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage.join(" ")

console.log(secretMessage);
