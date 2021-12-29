import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Main } from 'components/Main'

import Dashboard from 'pages/Dashboard'
import { NotFound404 } from 'pages/NotFound404'

export default function Routing() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ToastContainer />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/404" element={<NotFound404 />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}
