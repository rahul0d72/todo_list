"use client";
import React, { useState } from 'react';

const Todo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  const handleDelete=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1);
    setMainTask(copyTask);
  }
  let renderTask = <h2>no task available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (

               <li key={i} className='flex items-center justify-between mb-9'>
         <div className='flex justify-between items-center mb-5 w-2/3' >
          <h5 className='text-xl font-medium  p-2 rounded-md bg-amber-800'>{t.title}</h5>
          <h6 className='text-lg font-medium  p-2 rounded-md bg-blue-300 '>{t.desc}</h6>
        </div>
        <button 
        onClick={()=>handleDelete(i)}
        className='bg-red-500 text-white px-4 py-1 rounded font-bold'>Delete</button>
       </li>
      );
    });
  }

  return (
    <>
      <h1 className='text-black font-bold bg-amber-300 text-center text-5xl'>
        This is my todo list
      </h1>

      <form
        className="mt-4 flex flex-col gap-4 items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="task"
          placeholder="Enter a task"
          className="border px-2 py-1 rounded w-80"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          name="description"
          placeholder="Enter description"
          className="border px-2 py-1 rounded w-80"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </form>

      <hr />

      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default Todo;







































// import axios from 'axios'
// import React from 'react'


// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page
















// "use client";
// import React, { useState } from 'react';
// import Headerx from './Components/Header';
// import './globals.css'; // Make sure Tailwind CSS is working

// const Page = () => {
//   const [user, setUser] = useState("rahul");
//   const [editor, setEditor] = useState("tarun");

//   return (
//     <>
//       <nav className="flex justify-center items-center h-20 bg-red-500 text-white gap-8">
//         <a href="/home">Home</a>
//         <a href="/about">About</a>
//         <a href="/contact">Contact</a>
//         <Headerx name="tarun" />
//       </nav>

//       {/* Pass both user and editor props properly */}
//       <Headerx user={user} editor={editor} />

//       {/* Display values */}
//       <p>{user}</p>
//       <p>{editor}</p>
//     </>
//   );
// };

// export default Page;


// **** routing***
// import React from 'react'
// import Headerx from './Components/Header'
// const page = () => {
//   return (
//    <Headerx />
//   )
// }

// export default page