import { useEffect, useRef, useState } from "react";

const items = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 1",
    description: "Description of item 1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 2",
    description: "Description of item 2",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 3",
    description: "Description of item 3",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const handlePrev = ()=>{
    if(currentIndex === 0){
      setCurrentIndex(items.length-1);
    }else{
      setCurrentIndex(currentIndex-1);
    }
  }

  const hanldeNext = ()=>{
    setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % items.length;
        return nextIndex;
      });
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % items.length;
        return nextIndex;
      });
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  });
  return (
    <div>
      <button onClick={handlePrev}>prev</button>
      <div>
        <img
          height={100}
          width={300}
          src={items[currentIndex].imageUrl}
          alt={items[currentIndex].title}
        />
        <h2>{items[currentIndex].title}</h2>
        <p>{items[currentIndex].description}</p>
      </div>
      <button onClick={hanldeNext}>next</button>
    </div>
  );
}
