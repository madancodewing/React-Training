// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './style.css'
import Madan from './Madan';
import Delete from './assets/Components/Delete';
import Messages from './assets/Components/Messages';

ReactDOM.createRoot(document.querySelector('.root')).render(
  <>
    <div className="container">
      < Delete />
      {/* <Madan /> */}
    </div>
  </>
)

