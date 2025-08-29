const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const FULL_NAME = "akshat_vishwakarma"; 
const DOB = "29082004"; // put your DOB ddmmyyyy
const EMAIL = "akshatvishwa29@gmail.com";
const ROLL_NUMBER = "22BCE1223";

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        user_id: `${FULL_NAME}_${DOB}`,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: ""
      });
    }

    let odd = [];
    let even = [];
    let alphabets = [];
    let special = [];
    let sum = 0;
    let lettersForConcat = [];

    data.forEach(item => {
      if (!isNaN(item)) {
        // number
        let num = parseInt(item);
        if (!isNaN(num)) {
          if (num % 2 === 0) {
            even.push(item);
          } else {
            odd.push(item);
          }
          sum += num;
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        // alphabets
        alphabets.push(item.toUpperCase());
        lettersForConcat.push(item);
      } else {
        // special chars
        special.push(item);
      }
    });

    // Create concat_string (reverse order, alternating caps)
    let concatString = lettersForConcat.join("");
    concatString = concatString.split("").reverse().map((ch, idx) => {
      return idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
    }).join("");

    res.json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alphabets,
      special_characters: special,
      sum: sum.toString(),
      concat_string: concatString
    });
  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
});

// For local testing
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
