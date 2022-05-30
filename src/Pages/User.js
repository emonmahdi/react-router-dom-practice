import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

// route and query para metet using - useSearchParams

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({name: name, age: age})
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>User</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        /> 
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        /> 
        <button type="submit">Add User</button>
      </form> 
      {/* user {searchParams.get('id')}
            <h3>{searchParams.get('name')}</h3>
            <h3>{searchParams.get('age')}</h3> */}
    </div>
  );
};

export default User;
