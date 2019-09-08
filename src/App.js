import React from 'react';
import './App.css';
import Tabs from './Tabs';
import Selector from './Selector';
import PurchaseBtn from './PurchaseBtn';

export default class App extends React.Component{
    state = {
        selectValue: "1",
        imgUrl: "./images/img1.jpg",
    }
    handleChange = e =>{
        this.setState({
            selectValue: e.target.value
        });
    }
  render(){
    const {selectValue} = this.state

    //Changing images according to select's value
    let imgName;
    if(selectValue === "1") imgName = "1";
    else imgName = "2";

    return (
        <div className="App">
          <div className="container">
              <div className="row no-gutters">
                    <div className="col-12 col-md-7 border-right">
                         <div className="text_info mt-4">
                                <div className="top_bar">
                                    <span className="back_menu"> <span>&larr;</span>All Products</span>
                                </div>
    
                                <div className="product_info my-5">
                                    <h2>Audio-Technica ATH-MSR7</h2>
                                    <p>2017 Best Headphones of the Year Award Winner</p>
                                </div>
    
                            <Tabs>
                                <div label="DESCRIPTION">
                                        <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing 
                                        elit. Odit voluptatibus alias qui labore dignissimos
                                         natus animi architecto incidunt sed, officia 
                                         laudantium voluptate accusamus eligendi, optio
                                          vitae doloremque aperiam suscipit quidem dolorum. 
                                          Aliquam molestiae deserunt, officiis, omnis modi 
                                          vitae doloremque aperiam suscipit quidem dolorum. 
                                          Aliquam molestiae deserunt, officiis, omnis modi.
                                        </p>
    
                                        <p className="price">
                                            <span className="new_price mr-4">$59.99</span>
                                            <span className="old_price">$89.99</span>
                                        </p>

                                        <Selector handleChange={this.handleChange}/>
                                        
                                        <hr/>

                                        <PurchaseBtn />
                                </div>

                                <div label="DETAILS">
                                <dl>          
                                    <dt>Color: </dt>
                                    <dd>Black, Brow</dd>
                                            
                                    <dt>Year: </dt>
                                    <dd>2019</dd>
                                                
                                    <dt>Frequency: </dt>
                                    <dd>18 - 20.000 Hz</dd>
                                                
                                    <dt>Connection:</dt>
                                    <dd>Bluetooth 4.0</dd>

                                    <dt>Power:</dt>
                                    <dd>Li-Ion</dd>
                                </dl>
                                </div>
                            </Tabs>

                           
                        </div>
                    </div>
    
                    <div className="col-12 col-md-5 mt-4">
                        <img src={require(`./images/img${imgName}.jpg`)} alt="Headphone" className="img-fluid"/>   
                    </div>
              </div>
          </div>
        </div>
      );
  }
}

