import { useEffect, useState } from "react";

function App() {

  const [title, setTitle] = useState('')
  const [breakpoint, setBreakPoint] = useState('posts')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${breakpoint}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  },[breakpoint])

  return (
    <div className="app" style={{padding: 10}}>  
      <label 
        style={{paddingLeft: 10, paddingRight: 10, fontWeight: "bold"}}
      >
        Title
      </label>
      <input 
        value={title}  
        onChange={(e) => setTitle(e.target.value)} 
      />
        {/* Control */}
      <div>
        <button 
          onClick={() => setBreakPoint('posts')}
        >
          Posts
        </button>
        <button
          onClick={() => setBreakPoint('albums')}
        >
          Albums
        </button>
        <button
          onClick={() => setBreakPoint('comments')}
        >
          Comments
        </button>
      </div>
      {/* Show */}
      <div>
        <ul>
          {
            data.map((item) => <li key={item.id}>{item.title || item.body}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
