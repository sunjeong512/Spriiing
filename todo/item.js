class TodoItem {
    constructor(title, dueDate) {
      this.title = title; // 타이틀
      this.dueDate = dueDate; // 마감일
      this.completed = false; // 완료 여부에 대한 것임 초기값은 F
    }
  
    // 항목의 완료 여부를 토글하는 메소드
    toggleComplete() {
      this.completed = !this.completed;
    }
  } // !로 인해서 T랑 F를 전환하게 되는 것임
  
  export default TodoItem;