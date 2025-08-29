import React, { useState } from 'react'
import "./Sheader.css"
import { MdArrowDropDown } from "react-icons/md";
const Sheader = () => {
    const [pageDropDown, setPageDropDown] = useState(false)
    return (
        <div>
            <div className='S-HeaderWrapper'>
                <div className='S-HeaderContainer'>
                    <div className='shopCategory'>
                        <select className='shopCategory' >
                            <option value="">Shop by Departments</option>
                            <option value="">Groceries</option>
                            <option value="">Drinks</option>
                            <option value="">Chocolates</option>
                        </select>
                    </div>
                    <div className='S-Listed_Section'>
                        <ul className='listedTags'>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Kids</li>
                            <li>Accessories</li>
                            <div className='pageSec'>
                                 <li>Pages </li>
                                 < MdArrowDropDown className='Dropdown' onClick={()=> setPageDropDown(!pageDropDown)}/>
                                {
                                    pageDropDown && (
                                         <div className='pageDrop'>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Shop</li>
                                        <li>Single Product</li>
                                        <li>Cart</li>
                                        <li>Checkout</li>
                                        <li>Blog</li>
                                        <li>Single Post</li>
                                        <li>Styles</li>
                                        <li>Contact</li>
                                        <li>Thank You</li>
                                        <li>My Account</li>
                                        <li>404 Error</li>
                                    </ul>
                                 </div>

                                    )
                                }
                                
                            </div>
                            <li>Brand</li>
                            <li>Sale</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sheader
