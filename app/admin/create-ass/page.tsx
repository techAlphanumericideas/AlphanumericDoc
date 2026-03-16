"use client";

import { title } from "process";
import { useEffect, useState } from "react";

type User = {
    _id: string;
    email: string;
};

export default function AdminAssignments() {

    const [users, setUsers] = useState<User[]>([]);
    const [form, setForm] = useState({
        title: "",
        discripstion: "",
        userEmail: "",
        dueDate: ""
    });

    useEffect(() => {

        fetch("/api/users")
            .then(res => res.json())
            .then((data: User[]) => setUsers(data));

    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const res = await fetch("/api/admin/create-ass", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

   

        if (res) {
            alert("Assignment Created");
       
        }
        setForm({
            title: "",
            discripstion: "",
            userEmail: "",
            dueDate: ""
        })
    }

    return (
        <div className="w-full h-140 bg-blue-100 rounded-lg flex justify-center items-center">
        <div className="max-w-lg h-100  border-3 bg-gray-100">

            <h1 className="text-2xl mt-5 text-blue-500 text-center font-bold mb-6">
                Create Assignment
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    placeholder="Title"
                    className="border p-2 w-full text-black"
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    className="border p-2 w-full text-black"
                        onChange={(e) => setForm({ ...form, discripstion: e.target.value })}
                />
                <input
                    type="date"
                    className="border p-2 w-full text-black"
                    onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                />
                <select
                    className="border p-2 w-full text-black"
                    onChange={(e) => setForm({ ...form, userEmail: e.target.value })}
                >

                    <option>Select User</option>

                    {users.map((u) => (
                        <option key={u._id} value={u.email}>
                            {u.email}
                        </option>
                    ))}

                </select>

                <button className="bg-blue-500 rounded-lg text-white px-4 py-2">
                    Create Assignment
                </button>

            </form>

        </div>
        </div>
    )
}