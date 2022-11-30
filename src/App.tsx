import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {PageNotFound} from "./pages/PageNotFound/PageNotFound";
import {Home} from "./pages/Home/Home";

export default function App() {
  return (
      <BrowserRouter>
        <div className="App">

            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}
