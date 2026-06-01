import { useCallback, useState } from "react"

export default function ItemList(){
  const [items,setItems] = useState(['Item 1','Item 2','Item 3','Item 4']);
  const [value,setValue] = useState("");

  const removeItem = useCallback((itemToRemove)=>{
    setItems((prevItems)=>prevItems.filter((item)=>item!==itemToRemove));
  },[]) 

  return(
    <div>
       <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
       <div>
      {
        items.map((item)=>{
          return <div key={item}>
            {item}
            <button onClick={()=>removeItem(item)}>Remove</button>
          </div>
        })
      }
      </div>
    </div>
  )
}