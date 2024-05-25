import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {

  return (
    <>
      <ul class="nav nav-tabs sticky-top bg-body-tertiary">
        <li class="nav-item">
          <a class="nav-link active text-warning" aria-current="page" href="/#">RUN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-secondary" href="/#run2022">Run 2022</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-secondary" href="/#run2023">Run 2023</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-secondary" href="/#run2024">Run 2024</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
