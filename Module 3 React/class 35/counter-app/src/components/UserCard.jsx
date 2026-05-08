import { useState } from "react";

export default function UserCard({ user }) {
  console.log(user);
  const [showEmail,setShowEmail] = useState(true);
  const handleEmailToggle = ()=>{
    if(showEmail){
        setShowEmail(false);
    }else{
        setShowEmail(true);
    }
  }
  return (
    <div className="user-card-container">
      <h2>
        <div className="image"></div> {user.name.firstName}
      </h2>
      <p>
        Age: {user.dob.age}, {user.dob.age > 18 ? "Adult" : "Minor"}
      </p>
      <p>
        Location : {user.location.city}, {user.location.country}
      </p>
      {showEmail && <p>Email : {user.email}</p>}
      <button onClick={handleEmailToggle}>{showEmail?"Hide Email":"Show Email"}</button>
    </div>
  );
}
