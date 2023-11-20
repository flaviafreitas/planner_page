import { Outlet } from 'react-router-dom'
import Header from '../components/header/header'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  )
}

export default App