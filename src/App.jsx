import './App.css'
import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Explorer from './pages/Explorer'
import Notfound from './pages/Notfound'

function App() {


  return (
    <>
    <BrowserRouter> 
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/explorer' element={<Explorer/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
