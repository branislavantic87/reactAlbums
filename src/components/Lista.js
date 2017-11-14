import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Detalji from './Detalji';

class Lista extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
    }

    renderAlbums(){
        return this.state.albums.map(album => <Detalji key={album.title} album={album} />)
    }


    render() {
        console.log(this.state);
        return (

            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}



export default Lista;