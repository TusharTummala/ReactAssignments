

import React, { useState } from 'react';

const Assignment2 = () => {
  const [showComponent1, setShowComponent1] = useState(true);

  const toggleComponent = () => {
    setShowComponent1(!showComponent1);
  };

  return (
    <div className="container mt-3">
      <button className="btn btn-primary mb-3" onClick={toggleComponent}>
        Toggle Components
      </button>
      <div className="row justify-content-center">
        {showComponent1 ? (
          <div className="col-md-6">
            <Card component={Component1} title="Component 1" description="This is Component 1. It contains Component 1.1 and Component 1.2." />
          </div>
        ) : (
          <div className="col-md-6">
            <Card component={Component2} title="Component 2" description="This is Component 2. It contains Component 2.1 and Component 2.2." />
          </div>
        )}
      </div>
    </div>
  );
};

const Card = ({ component: Content, title, description }) => {
  return (
    <div className="card border border-primary mb-3">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <p>{description}</p>
        <Content />
      </div>
    </div>
  );
};

const Component1 = () => {
  return (
    <ul>
      <li>
        <Component11 />
      </li>
      <li>
        <Component12 />
      </li>
    </ul>
  );
};

const Component2 = () => {
  return (
    <ul>
      <li>
        <Component21 />
      </li>
      <li>
        <Component22 />
      </li>
    </ul>
  );
};

const Component11 = () => {
  return <div>Component 1.1</div>;
};

const Component12 = () => {
  return <div>Component 1.2</div>;
};

const Component21 = () => {
  return <div>Component 2.1</div>;
};

const Component22 = () => {
  return <div>Component 2.2</div>;
};

export default Assignment2;