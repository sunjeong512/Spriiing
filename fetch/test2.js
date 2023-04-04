const postURL = "https://jsonplaceholder.typicode.com/todos";

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    fetch(postURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  // test1 을 했을 때 두번째꺼가 다른 이유가 바로 저
  // post를 안으로 넣지 않고 밖에서 해서 데이터를 
  // 받지 않은 post가 진행된 것임 