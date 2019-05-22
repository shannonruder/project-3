import React from "react";
import API from '../utils/API'
import EventCard from '../components/EventCard/EventCard';
import Wrapper from "../components/Wrapper";
import "./styles/index.css";
import Utils from '../utils/utilitieFunctions'
export default class Explore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            venues: [],
            artist: []
        };
    }

    componentDidMount() {
        API.getIndieArtistEvents()
            .then((results) => {
                this.setState({ artists: results })
            })
    }

    render() {
        console.log(this.state)
        return (
            <Wrapper>
            <div>
               <p>
                <h1>Explore IndieEvents</h1></p>
                {this.state.artists.data && this.state.artists.data.map(event => {
                    return <EventCard event={event}/>
                })}

            </div>
            </Wrapper>
        )
    }
}