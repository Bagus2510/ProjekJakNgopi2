import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tempatnongkrong from './Pages/Sesudah dilogin/Tempatnongkrong.jsx'
import Artikel from './Pages/Sesudah dilogin/Artikel.jsx'
import TentangKami from './Pages/Sesudah dilogin/TentangKami.jsx'
import LoginPage from './Pages/Sebelum dilogin/LoginPage.jsx'
import SignUp from './Pages/Sebelum dilogin/SignUp.jsx'
import Profil from './Pages/Sesudah dilogin/Profil.jsx'
import Tanjakan13 from './Pages/Sesudah dilogin/Tanjakan 13/Tanjakan13.jsx'
import UlasanTanjakan13 from './Pages/Sesudah dilogin/Tanjakan 13/UlasanTanjakan13.jsx'
import { Cards2 } from './Elements/Cards2.jsx'
import HomePages from './Pages/Sesudah dilogin/Homepages.jsx'
import { Homepages } from './Pages/Sebelum dilogin/Homepages.jsx'
import axios from "axios";
import Pengembangan from './Pages/Sesudah dilogin/Pengembangan.jsx'
axios.defaults.withCredentials = true;

const BrowserRouter = createBrowserRouter ([
  {
    path: "/",
    element: <Homepages />
  },
  {
    path: "/Tempatnongkrong",
    element: <Tempatnongkrong />
  },
  {
    path: "/Artikel",
    element: <Artikel />
  },
  {
    path: "/About",
    element: <TentangKami />
  },
  {
    path: "/Login",
    element: <LoginPage />
  },
  {
    path: "/Daftar",
    element: <SignUp />
  },
  {
    path: "/Profil",
    element: <Profil />
  },
  {
    path: "/Tanjakan13",
    element: <Tanjakan13 />
  },
  {
    path: "/test",
    element: <Cards2 />
  },
  {
    path: "/UlasanTanjakan13",
    element: <UlasanTanjakan13 />
  },
  {
    path: "/LoginHomepages",
    element: <HomePages />
  },
  {
    path: "/Pengembangan",
    element: <Pengembangan />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}/>
  </React.StrictMode>
)
