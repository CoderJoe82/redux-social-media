import React, { Component } from 'react'
import ServerSection from '../serverSection/server.section'
import './app.body.css'

class AppBody extends Component {



    render() {
        return (
            <div id = "appBody">
                <ServerSection />
            </div>
        )
    }
}

export default AppBody