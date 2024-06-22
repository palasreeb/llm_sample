async function query(data) {
    const response = await fetch(
      "https://llm.datasaur.ai/api/llm-applications/2310/1081/playground-1",
      {
        headers: {
          'Authorization': 'Bearer 3f2f9efe-7169-43fa-8040-a33738c83f56',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    console.log("response", response.status)
    const result = await response.json();
    return result;
  }

  query({"prompt": "whatisdatasaur?"}).then((response) => {
    console.log(response?.message)
  });