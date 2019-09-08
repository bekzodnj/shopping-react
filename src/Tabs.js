import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SingleTab from './SingleTab';

class Tabs extends Component{

    static propTypes = {
        children: PropTypes.instanceOf(Array)
    };

    state = {
        activeTab: this.props.children[0].props.label,
    }

    onClickSingleTab = (tab) =>{
        this.setState({
            activeTab: tab,
        })
    }

    render(){
        const {children} = this.props;
        const {activeTab} = this.state;
        const {onClickSingleTab} = this;

        return(
            <div>
                <ul className="list-unstyled d-flex border-bottom">
                    
                    {
                        children.map(child => {
                            const {label} = child.props;
                            
                            return <SingleTab 
                                activeTab = {activeTab}
                                key = {label}
                                onClickTab = {onClickSingleTab}
                                label = {label}
                            />
                        })
                    }
                </ul>
                
                <div>

                {children.map(child=>{
                    if(child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
                </div>
            </div> 
        );
    }
}

export default Tabs;