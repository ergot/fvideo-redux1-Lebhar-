import React from 'react'
import SearchBar from '../components/SearchBar'
import VideoList from './VideoList'
import axios from 'axios'
import VideoDetail from '../components/VideoDetail'
import Video from '../components/Video'

const API_END_POINT = 'https://api.themoviedb.org/3/'
const POPULAR_MOVIES_URL = 'discover/movie?'
const API_KEY = 'api_key=d0202279211bbec3135bba06af0b8933'
const SEARCH_URL = 'search/movie?language=fr'

class App extends React.Component {

    state = {currentMovie:{}, movieList:[]}

    componentWillMount = () => {
        this.initMovies()
    }

    initMovies = () =>{
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(
            (response)=>{
                this.setState({movieList: response.data.results.slice(1,6), currentMovie: response.data.results[0]}, ()=>{
                    this.applyVideoToCurrentMovie()
                })
            }
        )
    }

    applyVideoToCurrentMovie = () => {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos`).then(
            (response)=> {
                const youtubeKey = response.data.videos.results[0].key
                let newCurrentMoviesState = this.state.currentMovie
                newCurrentMoviesState.videoId = youtubeKey
                console.log(newCurrentMoviesState)
                this.setState({currentMovie: newCurrentMoviesState})
            }
        )
    }

    onClickListItem = (movie) => {
    this.setState({currentMovie:movie}, ()=> {
        this.applyVideoToCurrentMovie()
        this.setRecommendation()
        })
    }

    onClickSeach = (searchText) => {

        if(searchText) {
            axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(
                (response)=> {
                    if(response.data && response.data.results[0]) {
                        if (response.data.results[0].id != this.state.currentMovie.id) {
                            this.setState({currentMovie: response.data.results[0]}, ()=>{
                                this.applyVideoToCurrentMovie()
                                this.setRecommendation()
                            })
                        }
                    }
                }
            )
        }


    }

    setRecommendation = () => {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then(
            (response)=> {
            this.setState({movieList: response.data.results.slice(0,5)})
            }
        )
    }

    render(){

        const renderVideoList = () => {
            if(this.state.movieList.length >4) {
                return <VideoList movieList={this.state.movieList} callback={this.onClickListItem}/>
            }
        }

        return (
            <div>
                <div className="search_bar">
                    <SearchBar callback={this.onClickSeach}/>
                </div>

            <div className="row">
                <div className="col-md-8">
                    <Video videoId={this.state.currentMovie.videoId} />
                    <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
                </div>
                <div className="col-md-4">
                    {renderVideoList()}
                </div>

            </div>

        </div>
        )
    }

}

export default App