import ItemTemplate from '../templates/single-item';

function Body() {
    
    const item_property = {
        name : 'Ladder',
        src : './assets/images/p2.png',
        price : '2092',
    };
    
    return ( <div>     

       <h2>Hi, I am a Body!</h2>
       <ItemTemplate  item={item_property}  />
       </div> );
  }
  
  export default Body;
