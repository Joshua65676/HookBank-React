import '/src/index.css'
import NavBar from './component/Navbar'
import Main from './component/Section'
import Active from './component/Active'
import Business from './component/Business'
import Billing from './component/Billing'
import Card from './component/Card'
import People from './component/People'
import Logo from './component/Logo'
import Service from './component/Service'
import Footer from './component/Footer'

export default function App() {
  return (
    <div className='overflow-x-hidden'>
           <NavBar />
           <Main />
           <Active />
           <Business />
           <Billing />
           <Card />
           <People />
           <Logo />
           <Service />
           <Footer />
    </div>
  )
}