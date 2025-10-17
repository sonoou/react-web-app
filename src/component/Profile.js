import { useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  return (
    <div>
      <h1>Profile function component</h1>
      <h3>Name: Patel</h3>
      <h3>Address: Mumbai</h3>
      <h3>Email: patel@gmail.com</h3>
      <h3>Count: {count}</h3>
      <h3>Count1: {count1}</h3>
        <button onClick={() =>{
          setCount(count+1);
          setCount1(count1+1);
        }}>increment</button>
    </div>
  );
};

export default Profile;