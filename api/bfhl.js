// api/bfhl.js

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      operation_code: 1
    });
  }

  if (req.method === "POST") {
    try {
      const { data } = req.body;

      if (!Array.isArray(data)) {
        return res.status(400).json({ error: "Invalid input. 'data' must be an array." });
      }

      // Separate numbers and alphabets
      const numbers = data.filter((item) => !isNaN(item));
      const alphabets = data.filter((item) => /^[a-zA-Z]+$/.test(item));

      // Find highest alphabet (case-insensitive)
      let highest_alphabet = [];
      if (alphabets.length > 0) {
        const maxChar = alphabets.reduce((a, b) =>
          a.toLowerCase() > b.toLowerCase() ? a : b
        );
        highest_alphabet.push(maxChar);
      }

      return res.status(200).json({
        is_success: true,
        user_id: "akshat_vishwakarma_1234",  // change with your format
        email: "your_email@example.com",
        roll_number: "YOUR_ROLL_NUMBER",
        numbers,
        alphabets,
        highest_alphabet,
      });
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  // Method not allowed
  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
