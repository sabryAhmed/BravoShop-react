import React from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(

    <App />
  
)
