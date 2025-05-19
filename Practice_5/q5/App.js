
import {Switch, Link, Route} from 'react-router-dom';
import Product from "./Product.js"

export default function App() {
  return (<>
    <header>
      <nav>
        <Link to="/product/1">Ürün 1</Link>
        <Link to="/product/2">Ürün 2</Link>
        <Link to="/product/3">Ürün 3</Link>
      </nav>
    </header>
    
    <Switch>
        <Route path="/product/{id}">
            <Product />
        </Route>
    </Switch>
    </>)
}
