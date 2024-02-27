



import React, { useState } from 'react';

const PersonList = ({ persons, showPersons }) => {
  // PersonCard component
  const PersonCard = ({ person }) => {
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <img src={person.avatar} className="card-img-top" alt={`${person.first_name} ${person.last_name}`} />
          <div className="card-body">
            <h5 className="card-title">{person.first_name} {person.last_name}</h5>
            <p className="card-text">{person.email}</p>
            <p className="card-text"><strong>Company:</strong> {person.company}</p>
            <p className="card-text"><strong>Job:</strong> {person.job}</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary btn-block">
              View Details
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        {persons && persons.length > 0 ? (
          persons.map((person) => <PersonCard key={person.id} person={person} />)
        ) : (
          <div className="col text-center">
            <p>No persons found</p>
          </div>
        )}
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={showPersons}>
          Show Persons
        </button>
      </div>
    </div>
  );
};

// Parent component
const ParentComponent = () => {
  const [persons, setPersons] = useState([]);

  // Function to fetch persons (replace with actual API call)
  const fetchPersons = () => {
    // Simulated API call to fetch persons
    setTimeout(() => {
      setPersons([
        {
          id: 1,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
          company: "ABC Company",
          job: "Software Engineer"
        },
        {
          id: 2,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
          company: "XYZ Corporation",
          job: "Data Analyst"
        },
        {
          id: 3,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
          company: "PQR Ltd.",
          job: "UI/UX Designer"
        },
      ]);
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Person Portfolio</h2>
      <PersonList persons={persons} showPersons={fetchPersons} />
    </div>
  );
};

export default ParentComponent;
