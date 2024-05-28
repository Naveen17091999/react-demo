import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './components/banner/Banner';
import { Footer } from './components/footer/Footer';
import Courses from './components/market/market';
import Navbar from './components/navbar/navbar';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import Notification from './components/notification/Notification';
import Profile from './components/profile/Profile';
import Login from './components/login/Login';


function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

function Home() {
  return (
    <div className="home">
      <Banner />
      <Courses />
    </div>
  )
}


function App() {

  const routingPath = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:'notification',
          element:<Notification/>
        },
        {
          path:'profile',
          element:<Profile/>
        },
        {
          path:'login',
          element:<Login/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={routingPath}/>
  );
}

export default App;
