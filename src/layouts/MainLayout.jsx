import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className='max-w-7xl mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
