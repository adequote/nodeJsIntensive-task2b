import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

/**
 * Задача 2b
 * Из разряда "лишь бы сдать"
 * В силу недостатка времени и нежелания ковыряться, достигнув порога 8 баллов, задачу сдаю
 * Не претендую на изящество, также код не ES6
 */
app.get('/task2b', (req, res) => {

  function getAbbreviation(name) {
    var arChars = name.split('');
    var firstChar = arChars[0];

    return firstChar.toUpperCase() + '.';
  }

  function validate(arWords) {
    if(arWords != null) {
      return !!(arWords.length > 0 && arWords.length < 4);
    }
    else return false;
  }

  function getShortName(arWords) {
    var result = '';
    arWords.forEach(function(item, i) {
      // если фамилия
      if(arWords.length == i + 1) {
        result = item + ' ' + result;
      } else {
        result += getAbbreviation(item) + ' ';
      }
    });

    return result.trim();
  }

  const fullname = req.query.fullname;

  var arWords = fullname.match(new RegExp('[a-zA-Zа-яА-Яó0-9-]+', "g"));

  if(validate(arWords)) {
    res.send(getShortName(arWords));
  } else {
    res.send('Invalid fullname');
  }
});
