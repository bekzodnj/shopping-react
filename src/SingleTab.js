import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SingleTab.css'
class SingleTab extends Component{

    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClickTab: PropTypes.func.isRequired
    }

    onClickTab= () =>{
        const {label, onClickTab} = this.props;
        onClickTab(label);
    }
   
    render(){
        let className = "mr-5";

        const {label, activeTab} = this.props;
        
        if(activeTab === label){
            className += " active_tab";
        }
        return(
            <li onClick={this.onClickTab} className={className}>{label}</li>
        );
    }
}

export default SingleTab;