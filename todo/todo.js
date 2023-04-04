import TodoItem from "./item.js";

// 전체 항목들을 넣었다 뺐다 하는 것을 조절하는 파일임
const todoList = {
  items: [], // To-Do 항목 리스트 // 대괄호 안에 있는 것들을 바로 개체로 만드는 것
  // 객체는 객체별로 함수가 다 따로 있는데 클래스는 하나의 함수로 통괄이 가능하다는 차이
  // 객체들의 경우 본인들 각각에게만 적용이 된다.

  // 항목 추가 메소드
  add(title, dueDate) {
    const item = new TodoItem(title, dueDate);
    this.items.push(item); // 리스트에는 push 함수가 있는데 이게 항목을 추가하는 함수임
    this.save(); // this는 반드시 해당 객체 안에 있는 아이템을 지정하는 것임, 로컬 스토리지에 리스트 저장
    return item;
  },

  // 항목 삭제 메소드
  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1); // 제거하라는 의미의 함수임, -1은 없다는 의미
      this.save(); // 로컬 스토리지에 리스트 저장
    }
  },

  // 항목의 완료 여부를 토글하는 메소드
  toggleComplete(item) {
    item.toggleComplete();
    this.save(); // 로컬 스토리지에 리스트 저장
  },

  // To-Do 항목 리스트를 로컬 스토리지에 저장하는 메소드
  save() {
    // console.log(this.items);
    //     (2) [{…}, TodoItem]
    //     0: {title: 'abc', dueDate: '2023-04-02', completed: false}
    //     1: TodoItem {title: 'a', dueDate: '2023-04-11', completed: false}
    //     length: 2
    //     [[Prototype]]: Array(0)
    // console.log(JSON.stringify(this.items));
    //     [{ title: "abc", dueDate: "2023-04-12", completed: false }];
    localStorage.setItem("todoList", JSON.stringify(this.items));
  },
  // 여기에 저장하는 아이템은 텍스트여야 함, 그 텍스트로 만드는 방식을 json~items로 지정하는 것임. 그 아이템스를 텍스트화하는 것
  

  // To-Do 항목 리스트 로컬 스토리지에서 불러오는 메소드
  load() {
    const items = localStorage.getItem("todoList");
    if (items) {
      this.items = JSON.parse(items); //아까 텍스트로 넣었기 때문에 json을 사용해서 불러와야함
    }
  },
};

export { todoList }; // 위에 있는 투두리스트를 추출하는 것이고 이거를 app.js에 사용하게 됨