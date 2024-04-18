import React from 'react'
import '../navbar.css'
export default function Navbar() {
  
    return (
        <div>
            <div className='nav'>
                <ul>
                    <li>
                    <img src="https://play-lh.googleusercontent.com/qKbCVs3UjZz_5CDowadsN5TbcCWZGbFx2XzAiBlHLARHN_rzheWgWKvXrAlMEvqt2Q=w480-h960-rw" alt="" />
                    </li>
                    <li>Location</li>
                </ul>
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Helps</li>
                    <li className='signIn'>Sign in</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
