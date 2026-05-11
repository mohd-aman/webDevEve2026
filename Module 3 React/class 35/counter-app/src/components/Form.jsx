import { useState } from "react";

export default function Form() {
	const [name,setName] = useState("");
	const [email,setEmail] = useState("");

	const handleNameChange = (e)=>{
		setName(e.target.value);
	}

	const handleEmailChange = (e)=>{
		setEmail(e.target.value);
	}

  const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`Name: ${name}, Email: ${email}`);

		//optionally make state empty
		setEmail("");
		setName("");
	};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name :
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Email :
          <input type="email" value={email} onChange={handleEmailChange}/>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
