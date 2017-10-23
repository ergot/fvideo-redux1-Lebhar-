import React from 'react'

class  SearchBar extends React.Component {
    state = {
        searchText: '',
        placeHolder: 'Tapez votre film',
        intervalBeforeRequest:1000,
        lockRequest: false
    }

    handleChange = (event) => {
        this.setState({searchText: event.target.value})
        if(!this.state.lockRequest) {
            console.log('yooooooooolo')
            this.setState({lockRequest:true})
            setTimeout(()=>{
                this.search()
            }, this.state.intervalBeforeRequest)
        }
    }

    handleOnClick =  () => {
        this.search()
    }

    search = () => {
        this.props.callback(this.state.searchText)
        this.setState({lockRequest:false})
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