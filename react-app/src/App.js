import React, { Component, lazy, Suspense } from 'react';
import 'bulma/css/bulma.css';
import './styles.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HeaderBar, NavBar, NotFound } from './components';
import About from './About';

const Products = lazy(() => import(/* webpackChunkName: "products" */ './products/Products'));

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="section columns">
          <NavBar />
          <main className="column">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
