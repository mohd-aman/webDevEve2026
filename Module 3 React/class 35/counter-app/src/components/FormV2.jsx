import { useState } from "react";

export default function FormV2() {
	const [formData,setFormData] = useState({
		name:"",
		email:""
	})
	// const [name,setName] = useState("");
	// const [email,setEmail] = useState("");

	const handleChange = (e)=>{
		const formKeyName = e.target.name;
		const formKeyValue = e.target.value;
		const copyFormData = {...formData};
		copyFormData[formKeyName] = formKeyValue;
		setFormData(copyFormData);
	}

	// const handleNameChange = (e)=>{
	// 	setName(e.target.value);
	// }

	// const handleEmailChange = (e)=>{
	// 	setEmail(e.target.value);
	// }

	const validate = ()=>{
		if(!formData.name || !formData.email){
			return false;
		}
		//add more and more validation here
		return true;
	}

  const handleSubmit = (e) => {
		e.preventDefault();
		if(!validate()){
			console.error("Form is invalid");
			return;
		}
		console.log(`Name: ${formData.name}, Email: ${formData.email}`);

	
		//optionally make state empty
		setFormData({
		name:"",
		email:""
	})
	};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name :
          <input name="name" type="text" value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email :
          <input name="email" type="email" value={formData.email} onChange={handleChange}/>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
