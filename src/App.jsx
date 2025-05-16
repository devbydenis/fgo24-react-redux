import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormPage from './pages/FormPage'
import ResultPage from './pages/ResultPage'
import ExamplePage from './pages/ExamplePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/example" element ={<ExamplePage />} />
      </Routes>
    </>
  )
}

export default App