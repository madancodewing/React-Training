// import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav'
import Button from './Button'
import './index.css'
import './style.css'
import Card from './Card'

ReactDOM.createRoot(document.querySelector('.root')).render(
  <>
    {/* <Nav />
    <Nav />
    <Button /> */}
    <div className='Cards'>
      <Card
        name="Nisha"
        job="Front End Developer"
        startYear={2021}
        currentYear={2023}
        isEmployed={true}
      />
      <Card
        name="Ashish"
        job="Front End Developer"
        startYear={2022}
        currentYear={2023}
        isEmployed={false}

      />
      <Card
        name="Madan"
        job="Front End Developer"
        startYear={2022}
        currentYear={2023}
        isEmployed={true}

      />
      <Card
        name=""
        job="PHP Developer"
        startYear={2018}
        currentYear={2023}
        isEmployed={false}

      />
    </div>
  </>
)

