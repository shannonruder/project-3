import React, { Component } from "react";

export default function SearchArtist(props) {
  const artist = props.location.state.artist
    return (
        <h1>{artist.name} </h1>
        
    )
}
