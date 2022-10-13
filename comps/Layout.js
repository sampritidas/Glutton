import Footer from './Footer'
import Navbar from './Navbar'
import { CartContextProvider } from './CartComponent';

const Layout = ({children}) => {
  return ( 
    <div className="content">
        <CartContextProvider>
          <Navbar />
          { children }
          <Footer />
        </CartContextProvider>
    </div>
   );
}
 
export default Layout;