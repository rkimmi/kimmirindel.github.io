import React from 'react'
import { Link } from 'react-router-dom'

class Welcome extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            routes: ['/blog', '/writing', '/randompic'],
            routePath: ''
        }
        this.getRandomRoute = this.getRandomRoute.bind(this)
    }

    componentWillMount () {
        this.getRandomRoute()
    }

    getRandomRoute () {
        const randomRoute = this.state.routes[Math.floor(Math.random()* this.state.routes.length)]
        this.setState({
            routePath: randomRoute
        })

    }
    render () {
        return (
            <div>
                <div className='bird-pic-container'>
                    <Link to={`${this.state.routePath}`}><img className='bird-pic zoom' src='birdie.png' /></Link>
                </div>
            </div>
        )
    }
}

export default Welcome
