import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import CartContext from './CartComponent';

const Navbar = () => {
  const cartCtx = useContext(CartContext);

  return (
    <nav>
      <div className="logo">
        <Image src="/images/logo.png" alt="image" width={100} height={100} />
        <div className="name">Glutton</div>
      </div>

      <Link href="/">
      <div className='nav-button'>
        <Image src="/images/home.png" alt="cart" width={20} height={20} />
        <a>home</a>
      </div>
      </Link>

      <Link href="/cart">
      <div className='nav-button'>
        <Image src="/images/cart.png" alt="cart" width={20} height={20} />
        <a>cart</a>
        <span className='cart-value'>{cartCtx.totalItems}</span>
      </div>
      </Link>
    </nav>
  );
}

export default Navbar;