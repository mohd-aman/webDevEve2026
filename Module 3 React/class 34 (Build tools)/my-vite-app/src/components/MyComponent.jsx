

function MyComponent(props){
    console.log(props);
    const message = props.message;
    return <h1>{message}</h1>
}

export default MyComponent;



// let obj = {
//     name:"Mike",
//     age:50,
//     location:"Delhi"
// }

// const name = obj.name;
// const {name} = obj; // same as above;