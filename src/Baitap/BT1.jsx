import React, { useState } from 'react'
import "./BT1.scss"
import { IoMdArrowDropdown } from "react-icons/io";
import img from "../assets/images/vip.jpg"
export default function BT1() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Cờ đảng",
            image: img
        },
        {
            id: 2,
            name: "Búa liềm",
            image: img
        },
        {
            id: 3,
            name: "Vippro",
            image: img
        }
    ]
    )
    return (
        <>



            <header>
                <div className='header'>
                    <div className='navBar'>
                        <h3>Example Site</h3>
                        <ul className='nav'>
                            <li>Home</li>
                            <li>Link</li>

                            <li>Dropdown <IoMdArrowDropdown></IoMdArrowDropdown>
                                <ul>
                                    <li>what's up</li>
                                    <li>This is</li>
                                    <li>A dropdown</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main>
                <div className='products'>
                    {products.map((item, index) => (
                        <div className='product' key={index}>
                            <img src={item.image} />

                            <p>Tên: {item.name}</p>
                            <button>Example Button</button>
                        </div>

                    ))}

                </div>
            </main>
            <footer>
                <div className='footer'>
                        <h3>Thank you for visiting this website</h3>
                        <h4>Follow us on social media</h4>
                        <div className='links'>
                        <ul>
                            <li><a href='#'>Facebook</a></li>
                            <li><a href='#'>Twitter</a></li>
                            <li><a href='#'>Youtube</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
