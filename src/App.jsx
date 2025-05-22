import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormPage from './pages/FormPage'
import ResultPage from './pages/ResultPage'
import ExamplePage from './pages/ExamplePage'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/example" element ={<ExamplePage />} />
      </Routes>
      </Provider>
    </>
  )
}

export default App