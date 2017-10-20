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
        <div className="row">
            <div className="col-md-8">
                <input type="text" className="form-control input-lg" onChange={this.handleChange} placeholder={this.state.placeHolder}/>
            </div>

            <p>{this.state.searchText}</p>
        </div>
        )
    }
}

export default SearchBar