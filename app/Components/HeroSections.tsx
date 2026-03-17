import React from 'react'


const HeroSections = () => {
  return (
<div className='w-full h-150 text-center mt-5'>
  {/* <img src='/h12.jpg'className='px-2 py-1' alt='hero banner'/>
 <div className='bg-amber-600 w-full h-50 p-2'></div> */}

      <h1 className='text-[35px] font-bold text-red-600'>WellCome <span className='text-blue-600'>AlphaDocs</span></h1>
      <p className='text-black px-39 mt-5  font-sans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum repudiandae iusto, enim deleniti ullam obcaecati? Doloremque praesentium quisquam ullam assumenda quod atque quam sequi? enim deleniti ullam obcaecati? Doloremque praesentium quisquam ullam assumenda quod atque quam sequi?</p>

      <div className='w-full h-90 p-3 bg-red-700 mt-3 rounded-full flex justify-center items-center'> 

        <div className='w-50 h-50 bg-white rounded-lg text-black ml-15 shadow-inner'>
          <img src='https://camo.envatousercontent.com/171e2774f3d983b002812ee30a88114a2a6c02ed/68747470733a2f2f636f64657276656e742e636f6d2f726f636b65722f6173736574732f696d616765732f30322e706e67' className='p-3'/>
          <h1 className='font-semibold pt-5  '>Admin Panel</h1>
        </div>

        <div className='w-50 h-50 bg-white rounded-lg text-black ml-15 shadow-inner'>
          <img src='https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?semt=ais_hybrid&w=740&q=80' className='p-3' />
          <h1 className='font-semibold pt-5  '>User Dashboard</h1>
        </div>
        <div className='w-50 h-50 bg-white rounded-lg text-black ml-15 shadow-inner'>
          <img src='https://i0.wp.com/iserotope.com/wp-content/uploads/2014/02/8151789_orig.png' className='p-3' />
          <h1 className='font-semibold pt-5  '>Assignments</h1>
        </div>
        <div className='w-50 h-50 bg-white rounded-lg text-black ml-15 shadow-inner'>
          <img src='https://www.n-able.com/wp-content/uploads/blog/2017/09/deeper_access.jpg' className='p-3' />
          <h1 className='font-semibold pt-5 mt-8  '>Admin Acess</h1>
        </div>
        



      </div>

</div>
  )
}

export default HeroSections
