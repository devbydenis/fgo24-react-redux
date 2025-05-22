// import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { removeData } from "../redux/reducers/surveyResult";


function ResultPage() {
  // const [data, setData] = useState([])
  const dispatch = useDispatch()
  const surveyList = useSelector((state) => state.surveyResult.data)
  
  // useEffect(() => {
  //   setData(surveyList)
  // }, [])

  // useEffect(() => {
  //   setData(JSON.parse(localStorage.getItem("form")))
  // }, [])

  console.log(surveyList);
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
            <th className='w-1/7 py-2 text-center border-b-1 border-gray-300'></th>
          </tr>
        </thead>
        <tbody>
          
            {
              surveyList && surveyList.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className='w-1/7 py-2 text-center border-b-1 border-gray-300'>{item.id}</td>
                    <td className='w-1/7 py-2 text-center border-b-1 border-gray-300'>{item.name}</td>
                    <td className='w-1/7 py-2 text-center border-b-1 border-gray-300'>{item.location}</td>
                    <td className='w-1/7 py-2 text-center border-b-1 border-gray-300'>{item.feedback}</td>
                    <td className='w-1/7 py-2 text-center border-b-1 border-gray-300'>
                      <button onClick={() => dispatch(removeData(item.id))} type='submit' className='text-red-400 cursor-pointer'><MdDelete /></button>
                    </td>
                  </tr>
                )
              })
            }
          
        </tbody>
      </table>
      <Link to={'/'} className='text-blue-500 hover:underline hover:underline-offset-4'>Form Page</Link>
    </section>
  )
}



export default ResultPage