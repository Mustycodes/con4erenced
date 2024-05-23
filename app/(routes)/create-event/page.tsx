import React from 'react'

const CreateEventPage = () => {
  return (
    <div className='w-1/2 mx-auto'>
        <h2>Create New Event</h2>
        <form action="" className='flex flex-col'>
          <div className='flex flex-col'>
            <label htmlFor="">Event Name</label>
            <input type="text" className='border' placeholder='Name of your event' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Event Date</label>
            <input type="text" className='border' placeholder='format (dd/mm/yyyy)' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Event Time</label>
            <input type="text" className='border' placeholder='Starting time for event' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Event Price</label>
            <input type="text" className='border' placeholder='Event price' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Event Location</label>
            <input type="text" className='border' placeholder='Location of the event' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Event online url</label>
            <input type="text" className='border' placeholder='https://www.example.com' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Image</label>
            <input type="text" className='border' />
          </div>
          <div className='flex flex-col'>
            <button className='bg-orange-500 border text-white font-semibold p-2'>Create Event</button>
          </div>
        </form>
    </div>
  )
}

export default CreateEventPage