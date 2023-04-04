import { todoList } from "./todo.js";

// UI 부분을 정리해 주는거
const app = {
  todoList: document.getElementById("todoList"), // To-Do 항목 가져오기
  form: document.querySelector("form"), // To-Do 항목 입력 폼 부분 조작하는 것
  titleInput: document.getElementById("title"), // 타이틀, 할일이라는 부분을 가져온 것
  dueDateInput: document.getElementById("dueDate"), // 마감일 가져오기
  // 각 항목들을 하나하나 잘 가져오는 것 -> id 를 잘 지정해줘야함

  // To-Do 항목을 렌더링해서 표시하는 부분임
  renderItem(item) {
    const li = document.createElement("li"); // To-Do 항목용 li 엘리먼트 생성
    if (item.completed) {
      // 항목이 완료되었는지 여부에 따라 CSS 클래스 추가
      li.classList.add("completed");
    }

    const titleText = document.createElement("div"); // 타이틀인 div 엘리먼트 생성
    titleText.textContent = `${item.title} - ${item.dueDate}`; // 타이틀과 마감일 텍스트로 설정 // 역따옴표는 변수 이름, 그냥 따옴표는 이름 지정
    titleText.classList.add("title"); // CSS 클래스 추가

    const toggleBtn = document.createElement("button"); // 완료 여부를 토글하는 버튼 엘리먼트 생성
    toggleBtn.textContent = "✔️"; // 텍스트 설정
    toggleBtn.addEventListener("click", () => {
      // 클릭한 버튼에 이벤트 핸들러를 등록한 것임
      todoList.toggleComplete(item); // 항목의 완료 여부를 토글
      this.renderList(); // To-Do 항목 리스트 렌더링
    });

    const removeBtn = document.createElement("button"); // 항목을 삭제하는 버튼 엘리먼트 생성
    removeBtn.textContent = "🗑️"; // 텍스트 설정
    removeBtn.addEventListener("click", () => {
      // 클릭 이벤트 핸들러 등록
      todoList.remove(item); // 항목 삭제, 앞에 this가 없기 때문에 맨 위에 투두모듈에서 가져온 투두리스트임
      this.renderList(); // To-Do 항목 리스트 렌더링
    });

    li.appendChild(toggleBtn); // li 엘리먼트에 toggleBtn 엘리먼트 추가
    li.appendChild(removeBtn); // li 엘리먼트에 removeBtn 엘리먼트 추가
    li.appendChild(titleText); // li 엘리먼트에 titleText 엘리먼트 추가
    this.todoList.appendChild(li); // this는 자기 객체 안이니까 위에서 가져왔던 투두리스트를 이야기 하는 것, To-Do 항목 리스트 엘리먼트에 li 엘리먼트 추가
  },

  // To-Do 항목 리스트를 렌더링하는 메소드
  renderList() {
    this.todoList.innerHTML = ""; // 기존 To-Do 항목 리스트 엘리먼트 내용 삭제
    todoList.items.forEach((item) => {
      this.renderItem(item); // To-Do 항목 리스트를 순회하면서 항목을 렌더링을 통해서 표시를 한다
    });
  },

  // 초기화 메소드
  init() {
    todoList.load(); // 로컬 스토리지에서 To-Do 항목 리스트 불러오기
    this.renderList(); // 가져온 To-Do 항목 리스트를 렌더링하는 것

    this.form.addEventListener("submit", (event) => {
      // 폼 제출 이벤트 등록, submit이라는 이벤트가 발생하면 아래와 같이 작동한다.
      event.preventDefault(); // 기본 동작 취소
      const title = this.titleInput.value; // 입력된 할 일 제목
      const dueDate = this.dueDateInput.value; // 입력된 마감 기한

      if (title && dueDate) {
        // 할 일 제목과 마감 기한이 모두 입력되었는지 확인
        const item = todoList.add(title, dueDate); // To-Do 항목 리스트에 항목 추가해서 아이템 객체를 만드는 것
        this.renderItem(item); // 추가된 항목 표시해주는 것
        this.titleInput.value = ""; // 입력 필드 초기화
        this.dueDateInput.value = ""; // 입력 필드 초기화 // 위에 두개 초기화하는거는 추가하고 계속해서 더 추가할 수 있게 하기 위해서
      } // else 뭐시기 해서 넣으면 입력되지 않았을 때를 지정하는 함수가 생김
    });
  },
};

app.init(); // UI 모듈 초기화