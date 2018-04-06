import React from 'react'

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
                <img className='randomimage' src={`.` + `${picData}`}/>
                </div>
            </div>
        )
    }
}

export default RandomPic