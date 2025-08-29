async function testAPI() {
  const response = await fetch("http://localhost:3000/bfhl", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: ["a","1","334","4","R","$"] })
  });

  const result = await response.json();
  console.log("Example A Result:");
  console.log(result);
}

testAPI();
