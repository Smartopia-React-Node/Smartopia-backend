import React from 'react';
import './App.css';
import Home from './Pages/Home/home'
import ProductDetail from './Pages/ProductDeatail/productDetail'
import Submission from './Pages/Submission/submission'
import Register from './Pages/Register/register'
import Login from './Pages/Login/login'
import News from './Pages/News/news'
import Glossary from './Pages/Glossary/glossary';
import AdminSubmission from './Pages/Admin/Submission/submission';
import AdminTools from './Pages/Admin/Tools/tools';
import AdminCategory from './Pages/Admin/Category/category';
import AdminTutorial from './Pages/Admin/Tutorial/tutorial';
import AdminGlossary from './Pages/Admin/Glossary/glossay';
import AdminDashboard from './Pages/Admin/Dashboard/Dashboard';
import NewAdmin from './Pages/Admin/NewAdmin/NewAdmin';
import Learn from './Pages/Learn/learn';
import Play from './Pages/Play/play';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/productdetail/:productId" element={<ProductDetail />}/>
          <Route path="/submit" element={<Submission />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/glossary" element={<Glossary />}/>
          <Route path="/learn" element={<Learn />}/>
          <Route path="/learn/play/:id" element={<Play />}/>

          <Route path="/admin/submission" element={<AdminSubmission />}/>
          <Route path="/admin/tools" element={<AdminTools />}/>
          <Route path="/admin/category" element={<AdminCategory />}/>
          <Route path="/admin/tutorials" element={<AdminTutorial />}/>
          <Route path="/admin/glossary" element={<AdminGlossary />}/>
          <Route path="/admin/dashboard" element={<AdminDashboard />}/>
          <Route path="/admin/newadmin" element={<NewAdmin />}/>
        </Routes>
    </Router>
    {/* <Footer /> */}
    </>
  );
}

export default App;
