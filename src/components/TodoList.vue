<template>
  <!-- template는 html코드를 넣는 부분이다. -->
  <div class="todo-list">
    <!-- intro의 todoList.js의 template에서 가져온다. -->
    <!-- todo-list 태그의 category 값이 {{category}}에 저장된다. -->
    <h1>{{category}}</h1>
    <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo">+</button>
    <li v-for="todo in todos" v-bind:key="todo.id">
        <span>{{ todo.content }}</span>
        <button v-on:click="removeTodo(todo.id)">x</button>
    </li>
  </div>
</template>

<script>
export default {
  // intro의 todoList.js의 template을 제외한 나머지에서 가져온다.
  props: ['category'],
  data: function(){
      return {
      todos: [],
      newTodo: '',
      }
  },
  methods: {
    addTodo: function(e) {
      if (this.newTodo.length != 0) {
          this.todos.push({
          id: Date.now(),
          content: this.newTodo,
          completed: false,
          })
          this.newTodo = ''
      }
    },
    removeTodo: function(todoID) {
      this.todos = this.todos.filter(todo => {
          return todo.id !== todoID
      })
    }  
  }

}
</script>

<style>

</style>