let postData;
// 이 메서드를 호출하면, 응답(response) 객체로 부터 JSON 포멧의 응답 전문을 
// 자바스크립트 객체로 변환하여 얻을 수 있습니다.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    postData = data;
  });

const postURL = "https://jsonplaceholder.typicode.com/todos";

//위는 비동기여서 기다렸다가 확인하고 그래야하는데, 
// 지금 밑에는 기다렸다가 확인을 하는게 아니어서 그럼
// 그래서 test2처럼 데이터를 안으로 넣어야 한다<-???

//POST 호출
fetch(postURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

