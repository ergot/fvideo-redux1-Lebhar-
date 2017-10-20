import React from 'react'
import SearchBar from '../components/SearchBar'
import VideoList from './VideoList'
import axios from 'axios'
import VideoDetail from '../components/VideoDetail'

const API_END_POINT = 'https://api.themoviedb.org/3/'
const POPULAR_MOVIES_URL = 'discover/movie?'
const API_KEY = 'api_key=d0202279211bbec3135bba06af0b8933'

class App extends React.Component {

    state = {currentMovie:{}, movieList:[]}

    componentWillMount = () => {
        this.initMovies()
    }

    initMovies = () =>{
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(
            (response)=>{
                this.setState({movieList: response.data.results.slice(1,6), currentMovie: response.data.results[0]})
            }
        )
    }


    render(){

        const renderVideoList = () => {
            if(this.state.movieList.length >4) {
                return <VideoList movieList={this.state.movieList}/>
            }
        }

        return <div>
            <SearchBar/>
            {renderVideoList()}
            <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
        </div>
    }

}

export default App