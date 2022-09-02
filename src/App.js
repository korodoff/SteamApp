import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Home from './component/Home';
import Product from './component/Product';
import ProductDetail from './component/ProductDetail';
import Data from "./utils/Data"
import{useState} from "react"
import filterNames from "./utils/FilterNames"
import Browse from './component/container/Browse/Browse';
import Header from "./component/Header"

function App() {
  const [currentFilter, setCurrentFilter] = useState("none");
  const [allGames, setAllGames] = useState(Data);
  const [shownGames, setShownGames] = useState(allGames);
  const [reviewDisplay, setReviewDisplay] = useState(false);
  const [cartDisplayed, setCartDisplayed] = useState(false);

  const handleSelect = (e) => {
    setCurrentFilter(filterNames[e.target.id - 8]);
  }
  
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
        <Route path='/browse' element={<Home/>}/>
        <Route path='/' element={<Browse
         shownGames={shownGames}
         setShownGames={setShownGames}
         currentFilter={currentFilter}
         setCurrentFilter={setCurrentFilter}
         allGames={allGames}
         setAllGames={setAllGames}
         handleSelect={handleSelect}
         reviewDisplay={reviewDisplay}
         setReviewDisplay={setReviewDisplay}
         cartDisplayed={cartDisplayed}
         setCartDisplayed={setCartDisplayed}
        />}/>
        <Route  path="/products" element={<Product/>} />
        <Route  path="/products/:id" element={<ProductDetail/>} />
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/checkout" element={<Checkout/>} />
     </Routes>
     
     </BrowserRouter> 


    </>
  );
}

export default App;
