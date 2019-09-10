import React, {Component} from 'react';
import './PurchaseBtn.css';

class PurchaseBtn extends Component{
    state = {
        loading: false,
        after_wait: false,
        btnName: ""
    }

    handleClick = async () =>{
        this.setState({
            loading: true
        })
        
        await new Promise(resolve => {
            setTimeout(resolve, 2000)
        });
        
        this.setState({
            after_wait: true,
            loading: false
        })

    }
    render(){
        const {loading, after_wait} = this.state;
        
        const btn_state = after_wait ? "VIEW IN CART" : "ADD TO CART";

        const message = after_wait ? <div className="alert alert-info w-50 my-3" role="alert">
                                            Item added to Cart
                                        </div> : undefined;
       
        return(
           <div>
               {message}

               <button className="button"
                 onClick = {this.handleClick}
                 >
                    {loading ? "LOADING..." : btn_state}
                </button>

                
               
           </div>
        );
    }
}

export default PurchaseBtn;