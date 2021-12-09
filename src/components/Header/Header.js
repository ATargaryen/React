import Cart from '../templates/cart-item';

function Header() {

  const navItems = ['Shop','Orders','Cart','Profile'];

  return ( <div >
    <div className="bg-light" >
      <h2 className="text-center" >Youngman Store</h2>
      <div className="container d-flex" > { navItems.map( item => <a key={item }>{ item }</a>) } </div>
    </div>

  </div> ) ;
}

export default Header;