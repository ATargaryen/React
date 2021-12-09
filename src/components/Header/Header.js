function Header() {

  const navItems = ['Shop','Orders','Cart','Profile'];

  return ( <div>

    <h2>Hi, I am a Header!</h2>

    <div> { navItems.map( item => <li key={item }>{ item }</li>) } </div>

  </div> ) ;
}

export default Header;