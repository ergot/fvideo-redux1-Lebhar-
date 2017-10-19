import React from 'react'

class  SearchBar extends React.Component {
    state = {
        searchText: '',
        placeHolder: 'Tapez votre film'
    }

    handleChange = (event) => {
        this.setState({searchText: event.target.value})
    }

    render() {
        return (
        <div>
            <input onChange={this.handleChange} placeholder={this.state.placeHolder}/>
            <p>{this.state.searchText}</p>
        </div>
        )
    }
}

export default SearchBar