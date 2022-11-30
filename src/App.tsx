import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {PageNotFound} from "./pages/PageNotFound/PageNotFound";
import {Home} from "./pages/Home/Home";
import {Navbar} from "./components/Navbar/Navbar";
import {Form} from "./pages/Form/Form";
import "./App.css"

export default function App() {
  return (
      <BrowserRouter>
        <div
            style={{
                backgroundColor: "#E5E5E5"
            }}
        >
            <div
                className="p-5"
                style={{
                    height: "100vh",
                    borderRadius: "30px",
                    backgroundColor: "#1F2223",
                }}
            >
                <div
                    className="p-5 w-100 h-100"
                    style={{
                        borderRadius: "28px",
                        backgroundColor: "#000000",
                        color: "white",
                        maxHeight: "100%",
                        overflowY: "auto",
                    }}
                >

                <Routes>
                    <Route path="*" element={<Navbar/>}>
                        <Route path="form" element={<Form/>}/>
                        <Route path="palette" element={<Home/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Route>
                </Routes>

                </div>
            </div>
        </div>
      </BrowserRouter>
  );
}
