import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='link'>
                    <Link to='/blog'>Blog</Link>
                </div>
                <div className='link'>
                    <Link to='/writing'>Writing</Link>
                </div>
                <div className='link'>
                    <Link to='/randompic'>Random Pic</Link>
                </div>
            </div>
        </div>
    )
}

export default Header