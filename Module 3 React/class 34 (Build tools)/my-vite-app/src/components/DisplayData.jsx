export default function DisplayData({fruits,person}) {
//   console.log(props);
//   const fruits = props.fruits;
//   const person = props.person
    // const {fruits,person} = props;
  
  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {/* <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li> */}
        {
            fruits.map((fruite,index)=>{
                return <li key={index}>{fruite}</li>
            })
        }
      </ul>
        <h2>Person Info : </h2>
        <p>Name : {person.name}</p>
        <p>Age : {person.age}</p>
    </div>
  );
}


// don't make change in input array. 
// [1,2,3,4,5,6] give me new array which has square of each element of input arr
// [1,4,9,16,25,36]