import React, { createContext, useContext, useReducer, useState } from 'react';



const TodoContext = createContext();


export const useTodoContext = () => {
  return useContext(TodoContext);
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};


const TodoInputComponent = () => {
  const { dispatch } = useTodoContext();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div className="card-header d-flex justify-content-between align-items-center bg-primary py-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control w-75" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          style={{ borderRadius: '0', padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" className="btn btn-light" style={{ borderRadius: '0', padding: '10px', fontSize: '16px' }}>
          Add
        </button>
      </form>
    </div>
  );
};


const TasksAllottedComponent = () => {
  const { todos } = useTodoContext();
  const { dispatch } = useTodoContext();

  const removeTodo = id => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  const handleDone = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <div className="card-body py-3" style={{ minHeight: '200px', maxHeight: '300px', overflowY: 'auto' }}>
      <ul className="list-group list-group-flush">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.completed ? 'bg-secondary text-white' : ''
            }`}
            style={{ padding: '10px', fontSize: '16px' }}
          >
            <span>{todo.text}</span>
            {!todo.completed && (
              <>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="btn btn-danger btn-sm me-2"
                  style={{ padding: '5px 10px', fontSize: '14px' }}
                >
                  Remove
                </button>
                <button
                  onClick={() => handleDone(todo.id)}
                  className="btn btn-success btn-sm"
                  style={{ padding: '5px 10px', fontSize: '14px' }}
                >
                  Done
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TasksDoneComponent = () => {
  const { todos } = useTodoContext();

  return (
    <div className="card-body py-3" style={{ minHeight: '200px', maxHeight: '300px', overflowY: 'auto' }}>
      <ul className="list-group list-group-flush">
        {todos.map((todo) => (
          todo.completed && (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center bg-success text-white"
              style={{ padding: '10px', fontSize: '16px' }}
            >
              <span>{todo.text}</span>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};


const TodoComponent = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <TodoInputComponent />
            <div className="card-header py-3 bg-secondary text-white">
              <h5 className="m-0">Tasks Allotted</h5>
            </div>
            <TasksAllottedComponent />
            <div className="card-header py-3 bg-success text-white mt-3">
              <h5 className="m-0">Tasks Done</h5>
            </div>
            <TasksDoneComponent />
          </div>
        </div>
      </div>
    </div>
  );
};


const Assignment8 = () => {
  return (
    <TodoProvider>
      <TodoComponent />
    </TodoProvider>
  );
};

export default Assignment8;
