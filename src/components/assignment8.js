


// import React, { createContext, useContext, useReducer, useState } from 'react';

// // Create TodoContext
// // const TodoContext = createContext();

// // // Custom hook to use TodoContext
// // export const useTodoContext = () => {
// //   return useContext(TodoContext);
// // };

// // // Todo reducer
// // const todoReducer = (state, action) => {
// //   switch (action.type) {
// //     case 'ADD_TODO':
// //       return [...state, { id: Date.now(), text: action.payload, completed: false }];
// //     case 'TOGGLE_TODO':
// //       return state.map(todo =>
// //         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
// //       );
// //     case 'REMOVE_TODO':
// //       return state.filter(todo => todo.id !== action.payload);
// //     default:
// //       return state;
// //   }
// // };

// // // TodoProvider component
// // const TodoProvider = ({ children }) => {
// //   const [todos, dispatch] = useReducer(todoReducer, []);

// //   return (
// //     <TodoContext.Provider value={{ todos, dispatch }}>
// //       {children}
// //     </TodoContext.Provider>
// //   );
// // };

// // // TodoComponent
// // const TodoComponent = () => {
// //   const { todos, dispatch } = useTodoContext();
// //   const [text, setText] = useState('');

// //   const handleSubmit = e => {
// //     e.preventDefault();
// //     if (text.trim()) {
// //       dispatch({ type: 'ADD_TODO', payload: text });
// //       setText('');
// //     }
// //   };

// //   const toggleTodo = id => {
// //     dispatch({ type: 'TOGGLE_TODO', payload: id });
// //   };

// //   const removeTodo = id => {
// //     dispatch({ type: 'REMOVE_TODO', payload: id });
// //   };

// //   return (
// //     <div>
// //       <h1>Todo List</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           value={text}
// //           onChange={e => setText(e.target.value)}
// //           placeholder="Add a new todo..."
// //         />
// //         <button type="submit">Add</button>
// //       </form>
// //       <ul>
// //         {todos.map(todo => (
// //           <li key={todo.id} className={todo.completed ? 'completed' : ''}>
// //             <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
// //             <button onClick={() => removeTodo(todo.id)}>Remove</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // // Combined Assignment8 component
// // const Assignment8 = () => {
// //   return (
// //     <TodoProvider>
// //       <TodoComponent />
// //     </TodoProvider>
// //   );
// // };

// // export default Assignment8;



// import React, { createContext, useContext, useReducer, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // Create TodoContext
// const TodoContext = createContext();

// // Custom hook to use TodoContext
// export const useTodoContext = () => {
//   return useContext(TodoContext);
// };

// // Todo reducer
// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [...state, { id: Date.now(), text: action.payload, completed: false }];
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//       );
//     case 'REMOVE_TODO':
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// // TodoProvider component
// const TodoProvider = ({ children }) => {
//   const [todos, dispatch] = useReducer(todoReducer, []);

//   return (
//     <TodoContext.Provider value={{ todos, dispatch }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// // TodoComponent
// const TodoComponent = () => {
//   const { todos, dispatch } = useTodoContext();
//   const [text, setText] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (text.trim()) {
//       dispatch({ type: 'ADD_TODO', payload: text });
//       setText('');
//     }
//   };

//   const toggleTodo = id => {
//     dispatch({ type: 'TOGGLE_TODO', payload: id });
//   };

//   const removeTodo = id => {
//     dispatch({ type: 'REMOVE_TODO', payload: id });
//   };

//   return (
//     <div className="container mt-3">
//       <div className="card">
//         <div className="card-header d-flex justify-content-between align-items-center">
//           <h1>Todo List</h1>
//           <input
//             type="text"
//             className="form-control w-25"
//             value={text}
//             onChange={e => setText(e.target.value)}
//             placeholder="Add a new todo..."
//           />
//           <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
//             Add
//           </button>
//         </div>
//         <ul className="list-group list-group-flush">
//           {todos.map(todo => (
//             <li
//               key={todo.id}
//               className={`list-group-item ${todo.completed ? 'bg-secondary text-white' : ''}`}
//             >
//               <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
//               <button onClick={() => removeTodo(todo.id)} className="btn btn-sm btn-danger float-end">
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// // Combined Assignment8 component
// const Assignment8 = () => {
//   return (
//     <TodoProvider>
//       <TodoComponent />
//     </TodoProvider>
//   );
// };

// export default Assignment8;


// import React, { createContext, useContext, useReducer, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // Create TodoContext
// const TodoContext = createContext();

// // Custom hook to use TodoContext
// export const useTodoContext = () => {
//   return useContext(TodoContext);
// };

// // Todo reducer
// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [...state, { id: Date.now(), text: action.payload, completed: false }];
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//       );
//     case 'REMOVE_TODO':
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// // TodoProvider component
// const TodoProvider = ({ children }) => {
//   const [todos, dispatch] = useReducer(todoReducer, []);

//   return (
//     <TodoContext.Provider value={{ todos, dispatch }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// // TodoComponent
// const TodoComponent = () => {
// //   const { todos, dispatch } = useTodoContext();
// //   const [text, setText] = useState('');

// //   const handleSubmit = e => {
// //     e.preventDefault();
// //     if (text.trim()) {
// //       dispatch({ type: 'ADD_TODO', payload: text });
// //       setText('');
// //     }
// //   };

// //   const toggleTodo = id => {
// //     dispatch({ type: 'TOGGLE_TODO', payload: id });
// //   };

// //   const removeTodo = id => {
// //     dispatch({ type: 'REMOVE_TODO', payload: id });
// //   };

// //   return (
// //     <div className="container mt-3">
// //       <div className="card shadow-sm">
// //         <div className="card-header d-flex justify-content-between align-items-center py-3">
// //           <h1 className="m-0">Todo List</h1>
// //           <div className="d-flex gap-2">
// //             <input
// //               type="text"
// //               className="form-control w-50"
// //               value={text}
// //               onChange={e => setText(e.target.value)}
// //               placeholder="Add a new todo..."
// //             />
// //             <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
// //               Add
// //             </button>
// //           </div>
// //         </div>
// //         <ul className="list-group list-group-flush">
// //           {todos.map(todo => (
// //             <li
// //               key={todo.id}
// //               className={`list-group-item d-flex justify-content-between align-items-center mb-1 ${
// //                 todo.completed ? 'bg-secondary text-white' : ''
// //               }`}
// //             >
// //               <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
// //               <button onClick={() => removeTodo(todo.id)} className="btn btn-sm btn-danger">
// //                 Remove
// //               </button>
// //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Combined Assignment8 component
// // // const Assignment8 = () => {
// // //   return (
// // //     <TodoProvider>
// // //       <TodoComponent />
// // //     </TodoProvider>
// // //   );
// // // };

// // // export default Assignment8;


// // import React, { createContext, useContext, useReducer, useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // // Create TodoContext
// // const TodoContext = createContext();

// // // Custom hook to use TodoContext
// // export const useTodoContext = () => {
// //   return useContext(TodoContext);
// // };

// // // Todo reducer
// // const todoReducer = (state, action) => {
// //   switch (action.type) {
// //     case 'ADD_TODO':
// //       return [...state, { id: Date.now(), text: action.payload, completed: false }];
// //     case 'TOGGLE_TODO':
// //       return state.map(todo =>
// //         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
// //       );
// //     case 'REMOVE_TODO':
// //       return state.filter(todo => todo.id !== action.payload);
// //     default:
// //       return state;
// //   }
// // };

// // // TodoProvider component
// // const TodoProvider = ({ children }) => {
// //   const [todos, dispatch] = useReducer(todoReducer, []);

// //   return (
// //     <TodoContext.Provider value={{ todos, dispatch }}>
// //       {children}
// //     </TodoContext.Provider>
// //   );
// // };

// // // TodoComponent
// // const TodoComponent = () => {
// //   const { todos, dispatch } = useTodoContext();
// //   const [text, setText] = useState('');

// //   const handleSubmit = e => {
// //     e.preventDefault();
// //     if (text.trim()) {
// //       dispatch({ type: 'ADD_TODO', payload: text });
// //       setText('');
// //     }
// //   };

// //   const toggleTodo = id => {
// //     dispatch({ type: 'TOGGLE_TODO', payload: id });
// //   };

// //   const removeTodo = id => {
// //     dispatch({ type: 'REMOVE_TODO', payload: id });
// //   };

// //   return (
// //     <div className="container mt-3">
// //       <div className="card shadow">
// //         <div className="card-header py-3 d-flex justify-content-between align-items-center">
// //           <h1 className="m-0">Todo List</h1>
// //           <div className="input-group w-50">
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={text}
// //               onChange={e => setText(e.target.value)}
// //               placeholder="Add a new todo..."
// //             />
// //             <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
// //               Add
// //             </button>
// //           </div>
// //         </div>
// //         <ul className="list-group list-group-flush">
// //           {todos.map(todo => (
// //             <li
// //               key={todo.id}
// //               className={`list-group-item d-flex justify-content-between align-items-center ${
// //                 todo.completed ? 'bg-secondary text-white' : ''
// //               }`}
// //             >
// //               <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
// //               <button onClick={() => removeTodo(todo.id)} className="btn btn-sm btn-danger">
// //                 Remove
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // // Combined Assignment8 component
// // const Assignment8 = () => {
// //   return (
// //     <TodoProvider>
// //       <TodoComponent />
// //     </TodoProvider>
// //   );
// // };

// // export default Assignment8;


// import React, { createContext, useContext, useReducer, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // Create TodoContext
// const TodoContext = createContext();

// // Custom hook to use TodoContext
// export const useTodoContext = () => {
//   return useContext(TodoContext);
// };

// // Todo reducer
// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [...state, { id: Date.now(), text: action.payload, completed: false }];
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//       );
//     case 'REMOVE_TODO':
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// // TodoProvider component
// const TodoProvider = ({ children }) => {
//   const [todos, dispatch] = useReducer(todoReducer, []);

//   return (
//     <TodoContext.Provider value={{ todos, dispatch }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// // TodoComponent
// const TodoComponent = () => {
//   const { todos, dispatch } = useTodoContext();
//   const [text, setText] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (text.trim()) {
//       dispatch({ type: 'ADD_TODO', payload: text });
//       setText('');
//     }
//   };

//   const toggleTodo = id => {
//     dispatch({ type: 'TOGGLE_TODO', payload: id });
//   };

//   const removeTodo = id => {
//     dispatch({ type: 'REMOVE_TODO', payload: id });
//   };

//   return (
//     <div className="container mt-3">
//       <div className="card shadow">
//         <div className="card-header py-3 d-flex justify-content-between align-items-center">
//           <h1 className="m-0">Todo List</h1>
//           <div className="input-group w-2000">
//             <input
//               type="text"
//               className="form-control"
//               value={text}
//               onChange={e => setText(e.target.value)}
//               placeholder="Add a new todo..."
//             />
//             <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
//               Add
//             </button>
//           </div>
//         </div>
//         <ul className="list-group list-group-flush">
//           {todos.map(todo => (
//             <li
//               key={todo.id}
//               className={`list-group-item d-flex justify-content-between align-items-center ${
//                 todo.completed ? 'bg-secondary text-white' : ''
//               }`}
//             >
//               <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
//               <button onClick={() => removeTodo(todo.id)} className="btn btn-sm btn-danger">
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// // Combined Assignment8 component
// const Assignment8 = () => {
//   return (
//     <TodoProvider>
//       <TodoComponent />
//     </TodoProvider>
//   );
// };

// export default Assignment8;


import React, { createContext, useContext, useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Create TodoContext
const TodoContext = createContext();

// Custom hook to use TodoContext
export const useTodoContext = () => {
  return useContext(TodoContext);
};

// Todo reducer
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

// TodoProvider component
const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// TodoComponent
const TodoComponent = () => {
  const { todos, dispatch } = useTodoContext();
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const removeTodo = id => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <div className="card-header py-3 d-flex justify-content-between align-items-center">
              <h1 className="m-0">Todo List</h1>
              <form onSubmit={handleSubmit} className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Add a new todo..."
                />
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {todos.map(todo => (
                  <li
                    key={todo.id}
                    className={`list-group-item d-flex justify-content-between align-items-center ${
                      todo.completed ? 'bg-secondary text-white' : ''
                    }`}
                  >
                    <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                    <button onClick={() => removeTodo(todo.id)} className="btn btn-sm btn-danger">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Combined Assignment8 component
const Assignment8 = () => {
  return (
    <TodoProvider>
      <TodoComponent />
    </TodoProvider>
  );
};

export default Assignment8;

