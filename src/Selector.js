import React, {Component} from 'react';

class Selector extends Component{
    render(){
        const style = {
            cursor: "pointer",
            width: "120px"
        }
        return(
            <select 
            onChange={this.props.handleChange} 
            className="form-control my-4" 
            style={style}
            >
                <option value="1">Black</option>
                <option value="2">Brown</option>
            </select>
        );
    }
}

export default Selector;