const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

var app = new Vue({
    el: '#app',
    data: {
        text: '',
        todos: [
            {id: 1, text: 'Learn Vue', done: 0},
            {id: 2, text: 'Learn Angular', done: 0},
            {id: 3, text: 'Learn React', done: 1},
        ],
        id: 4,
    },
    methods: {
        add() {
            if(this.text) {
                this.todos.push({ id: this.id, text: this.text, done: 0 });
                this.text = '';
                this.id++;
                Toast.fire({
                    type: 'success',
                    title: 'A new task was added!'
                  })
            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Task may not be empty.',
                  })
            }
        },
        done(id) {
            this.todos.map((item) => {
                if(item.id === id) {
                    return item.done = 1;
                }
            })
        },
        undo(id) {
            this.todos.map(item => {
                if(item.id === id) {
                    return item.done = 0;
                }
            });
        },
        destroy(id) {
            this.todos = this.todos.filter((item) => item.id !== id);
        }
    },
    computed: {
        todoList() {
            return this.todos.filter((item) => item.done === 0 );
        },
        doneList() {
            return this.todos.filter((item) => item.done === 1 );
        }
    },
});