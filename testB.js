async function testAPI() {
  const response = await fetch("http://localhost:3000/bfhl", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: ["2","a","y","4","&","-","*","5","92","b"] })
  });

  const result = await response.json();
  console.log("Example B Result:");
  console.log(result);
}

testAPI();
