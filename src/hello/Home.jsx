import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <Link to="/" class="navbar-brand" >Bitcamp</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/bmi" class="nav-link" >Bmi</Link>
          </li>
          <li class="nav-item">
            <Link to="/calc" class="nav-link" >Calc</Link>
          </li>
          <li class="nav-item">
            <Link to="/grade" class="nav-link" >Grade</Link>
          </li>
          <li class="nav-item">
            <Link to="/login" class="nav-link" >Login</Link>
          </li>
        </ul>
      </div>
      </div>
      </nav>
      <h5>여기가 홈입니다.</h5>
    </div>
  )
}

export default Home
