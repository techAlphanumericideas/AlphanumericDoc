// "use client";

// import { useEffect, useState } from "react";

// type User = {
//   _id: string;
//   email: string;
// };

// export default function AdminAssignments() {

//   const [users, setUsers] = useState<User[]>([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     userEmail: "",
//     dueDate: ""
//   });

//   useEffect(() => {

//     fetch("/api/users")
//       .then(res => res.json())
//       .then((data: User[]) => setUsers(data));

//   }, [])

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

//     e.preventDefault();

//     const res = await fetch("/api/admin/create-ass", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(form)
//     });

//     if (res) {
//       alert("Assignment Created");
//     }
//   }

//   return (

//     <div className="max-w-lg">

//       <h1 className="text-2xl font-bold mb-6">
//         Create Assignment
//       </h1>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         <input
//           placeholder="Title"
//           className="border p-2 w-full"
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         />

//         <textarea
//           placeholder="Description"
//           className="border p-2 w-full"
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />

//         <input
//           type="date"
//           className="border p-2 w-full"
//           onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
//         />

//         <select
//           className="border p-2 w-full"
//           onChange={(e) => setForm({ ...form, userEmail: e.target.value })}
//         >

//           <option>Select User</option>

//           {users.map((u) => (
//             <option key={u._id} value={u.email}>
//               {u.email}
//             </option>
//           ))}

//         </select>

//         <button className="bg-black text-white px-4 py-2">
//           Create Assignment
//         </button>

//       </form>

//     </div>
//   )
// }


import Assignments from '@/app/Components/Assignments'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1 className='text-blue-500 font-bold text-[30px] mb-5'> All Assignments </h1>
      <Assignments/>
      
    </div>
  )
}

export default Page
