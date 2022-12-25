import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  // One effect use for one Logic
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    // Add event by use effect
    window.addEventListener("resize", handleResize);

    // clean up function 
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app" style={{ padding: 10 }}>
      <label style={{ paddingLeft: 10, paddingRight: 10, fontWeight: "bold" }}>
        Title
      </label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() =>  setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>{size}</h1>}
    </div>
  );
}

export default App;
