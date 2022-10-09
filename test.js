const request = require("request");
const cheerio = require("cheerio");

function getInfos(title) {
  request(
    `https://www.dictionary.com/browse/${title}`,
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        //getting Adjectives
        let temp = $(".css-10ul8x");
        const meaningAdj1 = temp.children(".css-nnyc96").text();

        temp = $(".css-1o7vb91");
        const meaningAdj2 = temp.children(".css-nnyc96").text();

        //getting noun
        temp = $(".css-65b0rv");
        const meaningNoun1 = temp.children(".css-nnyc96").text();

        temp = $(".css-8534id");
        const meaningNoun2 = temp.children(".css-nnyc96").text();

        const obj = {
          adjective1: meaningAdj1,
          adjective2: meaningAdj2,
          noun1: meaningNoun1,
          noun2: meaningNoun2,
        };
        return obj;
      } else if (error) {
        return error;
      }
    }
  );
}

module.exports = { getInfos };
