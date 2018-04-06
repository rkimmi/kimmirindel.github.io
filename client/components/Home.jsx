import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            routes: ['/blog', '/writing', '/randompic']
        }
        this.getRandomRoute = this.getRandomRoute.bind(this)
    }

    componentWillMount () {
        this.getRandomRoute()
    }

    getRandomRoute () {
        const random = this.state.routes[Math.floor(Math.random()* this.state.routes.length)]
        this.setState({
            routes: random
        })

    }
    render () {
        return (
            <div>
                <div className='bird-pic-container'>
                    <Link to={`${this.state.routes}`}><img className='bird-pic zoom' src='birdie.png' /></Link>
                </div>
            </div>
        )
    }
}

export default Home