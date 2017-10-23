import React from 'react'

class  SearchBar extends React.Component {
    state = {
        searchText: '',
        placeHolder: 'Tapez votre film'
    }

    handleChange = (event) => {
        this.setState({searchText: event.target.value})
    }

    handleOnClick =  (event) => {
        this.props.callback(this.state.searchText)
    }

    render() {
        return (
        <div className="row">
            <div className="col-md-8 input-group">
                <input type="text" className="form-control input-lg" onChange={this.handleChange} placeholder={this.state.placeHolder}/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" onClick={this.handleOnClick}>go</button>
                </span>
            </div>

        </div>
        )
    }
}

export default SearchBar