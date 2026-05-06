export default function Button(){
    const handleClick = ()=>{
        console.log("Hello world")
    }
    return (
        <button onClick={handleClick}>Submit</button>
    )
}