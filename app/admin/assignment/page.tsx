"use client";

import { useEffect, useState } from "react";

export default function AdminAssignments() {

  const [assignments, setAssignments] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    title: "",
    discripstion: "",
    dueDate: ""
  });

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = () => {
    fetch("/api/admin/all-ass")
      .then(res => res.json())
      .then(data => setAssignments(data));
  };
  const handleDelete = async (id: string) => {
    await fetch("/api/assignments-delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    fetchData();
  };
  const handleEdit = (a: any) => {
    setEditId(a._id);
    setEditForm({
      title: a.title,
      discripstion: a.discripstion,
      dueDate: a.dueDate.split("T")[0]
    });
  };
  const handleUpdate = async () => {
    await fetch("/api/assignments-update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: editId, ...editForm })
    });

    setEditId(null);
    fetchData();
  };
  return (
    <div className="p-6 min-h-screen text-black bg-gradient-to-br from-gray-100 to-gray-200">

      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        📋 Assignments Dashboard
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((a: any) => {
          const isDone = a.status === "done";
          return (
            <div
              key={a._id}
              className={`p-5 rounded-2xl backdrop-blur-lg shadow-xl border transition hover:scale-[1.02]
              ${isDone ? "bg-green-50 border-green-200" : "bg-white border-gray-200"}`}
            >
              {editId === a._id ? (
                <div className="space-y-3">
                  <input
                    className="border p-2 w-full rounded-lg"
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  />
                  <textarea
                    className="border p-2 w-full rounded-lg"
                    value={editForm.discripstion}
                    onChange={(e) => setEditForm({ ...editForm, discripstion: e.target.value })}
                  />
                  <input
                    type="date"
                    className="border p-2 w-full rounded-lg"
                    value={editForm.dueDate}
                    onChange={(e) => setEditForm({ ...editForm, dueDate: e.target.value })}
                  />
                  <button
                    onClick={handleUpdate}
                    className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <> <h2 className="text-lg font-bold text-gray-800 mb-2">{a.title}
                  </h2>
                  <p className="text-gray-600 mb-3 text-sm">
                      {a.discripstion}</p>
                  <div className="text-sm space-y-1"><p>
                      👤 <strong>{a.userEmail}</strong></p>
                    <p>
                      📅 Due: {new Date(a.dueDate).toLocaleDateString()}</p>
                      <p>
                      ⚡ Status:{" "}
                      <span className={isDone ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
                        {isDone ? "Done" : "Pending"}
                      </span>
                    </p>
                    <p>
                      ✅ Completed:{" "}
                      {a.completedAt
                        ? new Date(a.completedAt).toLocaleDateString()
                        : "Not yet"}
                    </p>
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleEdit(a)}
                      className="flex-1 bg-yellow-500 text-white py-1.5 rounded-lg hover:bg-yellow-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(a._id)}
                      className="flex-1 bg-red-500 text-white py-1.5 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </div>
                </>
              )} </div>
          )
        })}
      </div>

    </div>
  )
}