import React, { Component } from 'react'
import { fetchGhData } from '../modules/fetchGhData'

class DisplaySearches extends Component {
    state = {
        searches: [],
    }

    componentDidMount = async () => {
        const searches = await fetchGhData();
        this.setState({searches: searches})
    }

    render() {
        return (
            <div id='displaysearches'>GH users searched
                
            </div>
        )
    }
}

export default DisplaySearches
