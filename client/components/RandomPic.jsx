import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import randomPics from './randompic.js'

class RandomPic extends React.Component {
    render () {
        const picData = randomPics[Math.floor(Math.random() * randomPics.length)]
        return (
            <div>
                <Header />
                <div className='randompic-container'>
                    <p>
                        Here's the randompic page
                </p>
                <Link to='/randompic'><img className='randomimage' src={`.` + `${picData}`}/></Link>
                </div>
            </div>
        )
    }
}

export default RandomPic