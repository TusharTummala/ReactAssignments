



// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const AddUser = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [users, setUsers] = useState([]);

//   const onSubmit = (data) => {
//     setUsers([...users, data]);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card border-0 shadow-sm mb-4">
//             <div className="card-header bg-light text-dark py-3">
//               <h2 className="text-center mb-0">Add User</h2>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <div className="form-floating">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="username"
//                         placeholder="Username"
//                         {...register('username', {
//                           required: true,
//                           minLength: { value: 4, message: 'Username must be at least 4 characters' },
//                           maxLength: { value: 8, message: 'Username must not exceed 8 characters' },
//                         })}
//                       />
//                       <label htmlFor="username">Username</label>
//                       {errors.username && (
//                         <div className="text-danger">{errors.username.message}</div>
//                       )}
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-floating">
//                       <input
//                         type="date"
//                         className="form-control"
//                         id="dateOfBirth"
//                         {...register('dateOfBirth', { required: true })}
//                       />
//                       <label htmlFor="dateOfBirth">Date of Birth</label>
//                       {errors.dateOfBirth && (
//                         <div className="text-danger">{errors.dateOfBirth.message}</div>
//                       )}
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-floating">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="city"
//                         placeholder="City"
//                         {...register('city', { required: true })}
//                       />
//                       <label htmlFor="city">City</label>
//                       {errors.city && <div className="text-danger">{errors.city.message}</div>}
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <button type="submit" className="btn btn-primary w-100">
//                       Add User
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>

//           <div className="card border-0 shadow-sm">
//             <div className="card-header bg-light text-dark py-3">
//               <h2 className="text-center mb-0">Users</h2>
//             </div>
//             <div className="card-body p-4">
//   <table className="table table-hover">
//     <thead>
//       <tr>
//         {/* <th scope="col">#</th> */}
//         <th scope="col" className="col-md-4">Username</th>
//         <th scope="col" className="col-md-4">Date of Birth</th>
//         <th scope="col" className="col-md-4">City</th>
//       </tr>
//     </thead>
//     <tbody>
//       {users.map((user, index) => (
//         <tr key={index}>
//           {/* <th scope="row">{index + 1}</th> */}
//           <td className="col-md-4">{user.username}</td>
//           <td className="col-md-4">{user.dateOfBirth}</td>
//           <td className="col-md-4">{user.city}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddUser;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    setUsers([...users, data]);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-light text-dark py-3">
              <h2 className="text-center mb-0">Add User</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        {...register('username', {
                          required: true,
                          minLength: { value: 4, message: 'Username must be at least 4 characters' },
                          maxLength: { value: 8, message: 'Username must not exceed 8 characters' },
                        })}
                      />
                      <label htmlFor="username">Username</label>
                      {errors.username && (
                        <div className="text-danger">{errors.username.message}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control"
                        id="dateOfBirth"
                        {...register('dateOfBirth', { required: true })}
                      />
                      <label htmlFor="dateOfBirth">Date of Birth</label>
                      {errors.dateOfBirth && (
                        <div className="text-danger">{errors.dateOfBirth.message}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="City"
                        {...register('city', { required: true })}
                      />
                      <label htmlFor="city">City</label>
                      {errors.city && <div className="text-danger">{errors.city.message}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button type="submit" className="btn btn-primary w-100">
                      Add User
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-header bg-light text-dark py-3">
              <h2 className="text-center mb-0">Users</h2>
            </div>
            <div className="card-body p-4">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="col-md-4">Username</th>
                    <th scope="col" className="col-md-4">Date of Birth</th>
                    <th scope="col" className="col-md-4">City</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td className="col-md-4">{user.username}</td>
                      <td className="col-md-4">{user.dateOfBirth}</td>
                      <td className="col-md-4">{user.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
