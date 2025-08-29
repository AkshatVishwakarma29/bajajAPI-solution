async function testAPI() {
  const response = await fetch("http://localhost:3000/bfhl", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: ["A","ABcD","DOE"] })
  });

  const result = await response.json();
  console.log("Example C Result:");
  console.log(result);
}

testAPI();
