import React from 'react'
import { Link } from 'react-router-dom'

function ResultPage() {
  return (
    <section className='flex flex-col items-center'>
      <h1 className='text-4xl my-5 font-semibold tracking-wider pb-3 border-b-4 border-green-400'>Result Page</h1>
      <table className='table-fixed my-5'>
        <thead>
          <tr className='py-2'>
            <th className='w-1/7 py-2 text-center border-b-1 border-gray-300'>ID</th>
            <th className='w-1/7 py-2 text-center border-b-1 border-gray-300'>Name</th>
            <th className='w-1/7 py-2 text-center border-b-1 border-gray-300'>Location</th>
            <th className='w-1/7 py-2 text-center border-b-1 border-gray-300'>Feedback</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-gray-500 text-center py-3 border-b-1 border-gray-300'>1</td>
            <td className='text-gray-500 text-center py-3 border-b-1 border-gray-300'>Denis Rahmadi</td>
            <td className='text-gray-500 text-center py-3 border-b-1 border-gray-300'>Offline</td>
            <td className='text-gray-500 text-center py-3 border-b-1 border-gray-300'>Feedback</td>
          </tr>
        </tbody>
      </table>
      <Link to={'/'} className='text-blue-500 hover:underline hover:underline-offset-4'>Form Page</Link>
    </section>
  )
}



export default ResultPage