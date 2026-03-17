import React from 'react'



type AssignMentDetails = {
  _id: string;
  title: string;
  userEmail: string;
  dueDate:string;
  status:string;

}

function CardComponents({ assignment }: { assignment: AssignMentDetails }) {
  return (
    <div className='w-full h-10 bg-gray-200 p-2 flex justify-between'>
        <p className='text-blue-500'>{assignment.userEmail}</p>
        <p className='text-green-600'>{assignment.title}</p>
          <p className='text-red-600'>{assignment.dueDate}</p>
          <p className='text-green-600 px-4'>{assignment.status}</p>

      
    </div>
  )
}

export default CardComponents
