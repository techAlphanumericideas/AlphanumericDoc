import React from 'react'

const page = () => {
  return (
    <div className=' w-full h-full flex-col justify-center items-center'>
        <h1 className='text-black p-2 font-bold text-[25px]'>Edit The Assigment</h1>

        <div className='w-200 h-100 mx-20 my-10 flex justify-center text-black'>

        <form>
            <div>
                  <input type="text" placeholder='Title' className="w-100  mt-2 px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-indigo-500" />
            </div>

                  <div>
                      <textarea placeholder='Description' className="w-100  mt-2 px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                  <input
                      type="date"
                      className="w-100 px-4 py-3 rounded-lg border-2 mt-2  focus:ring-2 focus:ring-indigo-500"
                      //onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                      /></div>
                  <select
                      className="w-100 px-4 py-3 rounded-lg border-2 mt-2  focus:ring-2 focus:ring-indigo-500"
                      //onChange={(e) => setForm({ ...form, userEmail: e.target.value })}
                  >

                      <option>Select User</option>

                      {/* {users.map((u) => (
                          <option key={u._id} value={u.email}>
                              {u.email}
                          </option>
                      ))} */}

                  </select> <br/>

                  <button className='bg-[#fec195] text-[17px] text-[#181818] px-8 py-3 font-bold rounded-lg mt-5  '>Submit</button>


        </form>
          </div>
      
    </div>
  )
}

export default page
