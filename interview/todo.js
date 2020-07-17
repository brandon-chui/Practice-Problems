console.clear();

// ----------------
// STATE MANAGEMENT
// ----------------

// INITIALIZING STATE

function defaultState() {
	return {
		todos: [
			{
				name: 'Example todo 1',
				completed: true,
			},
			{
				name: 'Example todo 2',
				completed: false,
			}
		],
  };
}

const store = {
	// loadState calls defaultState internally
	state: Framework.loadState(),

	// MUTATING STATE

	create(todo) {
		const newTodo = {
			name: 'example todo',
			completed: false,
			...todo,
		};
		this.state.todos.push(newTodo);
	},

	destroy(todo) {
		this.state.todos = this.state.todos.filter(item => item !== todo);
	},

	// DERIVED STATE

	hasTodos() {
		return !!this.state.todos.length;
	},
  
  numberTodos() {
    let count = 0;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (!this.state.todos[i].completed) {
        count++
      }
    }
    return count;
  },
  
  clearTodos() {
    let newTodoList = [];
    this.state.todos = this.state.todos.filter(todo => !todo.completed)
    console.log(this.state.todos)
  }
};

// -------------------------
// RENDERING & EVENT BINDING
// -------------------------

// RENDER APP

function renderApp() {
	const id = 'app-template';
	const app = Framework.templateToElement(id);

	const header = renderHeader();
	addHeaderListeners(header);
	app.appendChild(header);

	const list = renderList();
	app.appendChild(list);

	const footer = renderFooter();
	addFooterListeners(footer);
	app.appendChild(footer);

	return app;
}

// RENDER HEADER

function renderHeader() {
	const id = 'header-template';
	const header = Framework.templateToElement(id);
	return header;
}

function addHeaderListeners(header) {
	const listeners = {};

	listeners['keyup .new-todo'] = (e) => {
		if (e.key === 'Enter') {
			const name = e.target.value.trim();
			if (!name) return;
			store.create({ name });
			e.target.value = '';
		}
	};

	return Framework.addListeners(header, listeners);
}

// RENDER LIST

function renderList() {
	const id = 'list-template';
	const list = Framework.templateToElement(id);

	const todos = store.state.todos;
	for (let todo of todos) {
		let todoElement = renderTodo(todo);
		addTodoListeners(todoElement, todo);
		list.appendChild(todoElement);
	}

	return list;
}

// RENDER TODO

function renderTodo(todo) {
	const id = 'todo-template';
	const data = {
		isCompleted: todo.completed ? 'completed' : '',
		...todo,
	};
	const todoElement = Framework.templateToElement(id, data);
	return todoElement;
}

function addTodoListeners(todoElement, todo) {
	const listeners = {};

	listeners['click .toggle'] = (e) => {
		todo.completed = !todo.completed;
	};

	listeners['click .destroy'] = (e) => {
		store.destroy(todo);
	};

	return Framework.addListeners(todoElement, listeners);
}

// RENDER FOOTER

function renderFooter() {
	const id = 'footer-template';
  const numberOfTodos = store.numberTodos();


	const data = {
		hideFooter: !store.hasTodos() ? 'hidden' : 'hasFooter',
    numberOfTodos: `${numberOfTodos}`,

		// TODO: Add footer template variables here

	};
  

  
  
  console.log(store.clearTodos())
	const footer = Framework.templateToElement(id, data);
	return footer;
}

function addFooterListeners(footer) {
	const listeners = {};
  
  listeners['click .remove'] = (e) => {
		store.clearTodos()
	};
	// TODO: Add footer event listeners here

	return Framework.addListeners(footer, listeners);
}


// RENDER APP AND INSERT IN DOM

Framework.updateApp();






/*
This app implements a small, custom framework to
help with rendering. Reviewing the framework code
is not necessary for the tech screen.

https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-640/todo-framework.js
*/