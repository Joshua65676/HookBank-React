import '/src/index.css'
// import Style from './style'
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
// import styles from './style'

export default function App() {
  return (
    <div className='overflow-x-hidden'>
      {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div> */}
         <NavBar />

      {/* <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div> */}
          <Main />
      
      {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div> */}
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