
var app = new Vue({
  el: '#app',
  
  data: {
      isEditing: false,
      todo: '',
      description: '',
      todos: [],
      selectedTodo: null,
      completed: false,
      date: ''
  },

  //retrieve information every load
  created(){
    this.todos = JSON.parse(localStorage.getItem('todo-storage' || '[]'))
  },

  methods: {
      storeTodo() {
          this.todos.push({title: this.todo, completed:false, description: this.description , date: this.date});
          localStorage.setItem('todo-storage', JSON.stringify(this.todos));
          this.todo = '';
          this.description ='';
          this.date ='';
          console.log(this.date);
      },
      
      removeTodo(index) {
          this.todos.splice(index, 1);
          localStorage.setItem('todo-storage', JSON.stringify(this.todos));
          console.log('remove')
      },

      updateTodo() {
          var obj = this.todos[this.selectedIndex]//this gives us object the object inside array
          obj.title = this.todo
          obj.description = this.description
          obj.date = this.date
          this.todo = '';
          this.description = ''
          this.date = ''
          this.isEditing = false;
          localStorage.setItem('todo-storage', JSON.stringify(this.todos));
      },

      editTodo(index, todo) {
        this.todo = todo.title;
        this.description = todo.description;
        this.date = todo.date;
        this.isEditing = true;
        this.selectedIndex = index

      },

      checkCheckbox(){
        if(this.completed = false){
          this.completed = true
          localStorage.setItem('todo-storage', JSON.stringify(this.todos));
        }
        else{
          localStorage.setItem('todo-storage', JSON.stringify(this.todos));
        }
      }
  },
})
