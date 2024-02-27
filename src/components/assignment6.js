


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
  
    console.log(data); 
    setIsSubmitted(true);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4" style={{ width: "400px" }}>
        <div className="card-body">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.firstName && 'is-invalid'}`}
                  id="firstName"
                  {...register('firstName', {
                    required: true,
                    minLength: 4,
                    maxLength: 6,
                  })}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">
                    {errors.firstName.type === 'required' && (
                      <span>First name is required.</span>
                    )}
                    {(errors.firstName.type === 'minLength' ||
                      errors.firstName.type === 'maxLength') && (
                      <span>First name must be between 4 and 6 characters.</span>
                    )}
                  </div>
                )}
              </div>
             
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email && 'is-invalid'}`}
                  id="email"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <div className="invalid-feedback">Email is required.</div>
                )}
              </div>
           
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <h3>Registration Successful!</h3>
              <p>Thank you for registering.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
