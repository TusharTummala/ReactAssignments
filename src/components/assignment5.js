import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UsersComponent() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  const handleAddUser = () => {
    setUserCount(userCount + 1);
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {users.map((user) => (
          <div key={user.id} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <button className="btn btn-primary" onClick={handleAddUser}>
                  Add User
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <h3 className="text-center">User Count: {userCount}</h3>
      </div>
    </div>
  );
}

export default UsersComponent;
