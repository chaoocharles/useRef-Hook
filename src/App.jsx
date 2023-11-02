import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState();
  const [count, setCount] = useState();
  // 1. get reference to DOM elements/manupulate dom directly without causing a re-render
  const inputRef = useRef();
  const contentRef = useRef(null);
  //2. store a value that persists across renders
  const renderCount = useRef(0);

  useEffect(() => {
    // setCount((prev) => prev + 1);
    renderCount.current++;
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [name]);

  return (
    <>
      <div className="card">
        <h1>
          useRef Hook: {renderCount.current} {count}
        </h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <div className="card">
          <button onClick={() => inputRef.current.focus()}>Focus Input</button>
          <button onClick={() => (inputRef.current.value = "")}>
            Clear Input
          </button>
        </div>

        <div ref={contentRef} className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          aliquid pariatur quis nam, dolorem, inventore sunt reiciendis eum,
          voluptatum voluptas possimus cupiditate sint molestiae a nobis at
          repudiandae officiis! Laboriosam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nihil possimus accusamus fugit repellat
          consequuntur ducimus repudiandae dolore totam debitis, dolor, sed
          consectetur tempora eum excepturi nostrum? Aspernatur animi corrupti
          consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum ad corrupti molestias. Quas, provident. Cum hic impedit
          molestias dicta voluptatibus temporibus consequuntur assumenda a,
          commodi praesentium enim dolores nobis obcaecati.
        </div>
      </div>
    </>
  );
}

export default App;
