import React, { Component } from 'react';


class PurchaseForm extends Component {



    state = {
        info: 
            {
             full_name: '',
             email: "", 
             phoneNumber: "",
             homeAddress: "",
             country: "",
             city: "",
             paymentMethod: "cashOnDelivery",
             creditCardInfo: {}
            }
    }
    
    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = ({currentTarget: input}) => {
        const info = {...this.state.info}
        info[input.name] = input.value        
        this.setState({info})
    }


     render() { 

        const {full_name, email, phoneNumber,country, city, homeAddress, paymentMethod} = this.state.info
        
         return (

           <React.Fragment>
               
               <form onSubmit={this.handleSubmit}>
                 
                 <div className="row">
                   <div className="form-group col-12">
                   <label htmlFor="full_name">Full Name</label>
                   <input
                   value={full_name}
                   id="full_name"
                   name="full_name"
                   type="text"
                   className="form-control"
                   onChange= {this.handleChange}
                     required
                   />
                   </div>
                   <div className="form-group col-6">
                   <label htmlFor="email"> Email address </label>
                   <input
                   value = {email}
                   id="email"
                   name="email"
                   type="text"
                   className="form-control"
                   onChange={this.handleChange}
                     required
                   />
                   </div>
                   <div className="form-group col-6">
                     <label htmlFor='phoneNumber'>Phone Number</label>
                     <input
                     value={phoneNumber}
                     id= "phoneNumber"
                     name='phoneNumber' 
                     type="tel" 
                     className="form-control" 
                     onChange={this.handleChange}
                       required
                     />
                   </div>

                   <div className="form-group col-6">
                     <label>Country</label>
                     <input
                       value={country}
                       id= "country"
                       name='country' 
                       type="text" 
                       className="form-control" 
                       onChange={this.handleChange} 
                          required
                        />
                   </div>

                   <div className="form-group col-6">
                     <label>City</label>
                     <input 
                       value={city}
                       id= "city"
                       name='city' 
                       type="text" 
                       className="form-control" 
                       onChange={this.handleChange} 
                       required
                     />
                   </div>

                   <div className="form-group col-12">
                     <label>Delivery Address</label>
                     <input 
                       value={homeAddress}
                       id= "homeAddress"
                       name='homeAddress' 
                       type="text" 
                       className="form-control" 
                       onChange={this.handleChange} 
                       required
                     />
                   </div>


                 </div>



                 <label> Payment Option: </label>

                 <div className="form-check">
                  <input 
                   className="form-check-input" 
                   type="radio" 
                   id="paymentMethod"
                   name="paymentMethod" 
                   value="cashOnDelivery"
                   onChange={this.handleChange} 
                   checked={(paymentMethod === "cashOnDelivery") ? true : false}
                   />
                   <label className="form-check-label" htmlFor="paymentMethod">
                      Cash on delivery
                    </label>
                    </div>

                 <div className="form-check">
                 <input 
                  className="form-check-input" 
                  type="radio" 
                  id="paymentMethod1"
                  name="paymentMethod" 
                  value="creditCard" 
                  onChange={this.handleChange}
                  
                  />
                 <label className="form-check-label" htmlFor="paymentMethod1">
                         Credit Card
                   </label>
                 </div>

                 {paymentMethod === "creditCard" &&
                 
                 <div className="row">
                <div className="col-12">
                <label htmlFor="" >Card Number</label>
                <input type="text" className="form-control" placeholder=" "/> 
                 
                </div>
                <div className="col-6">
                <label htmlFor="" >MM / yy</label>
                <input type="text" className="form-control" placeholder=" "/>  
                </div>
                
                <div className="col-6">
                <label htmlFor="" >cvv code</label>
                <input type="password" className="form-control" placeholder=" "/> 
                  </div>
                
                   <div className="col-12">
                   <label htmlFor="" >name on the card</label> 
                   <input type="text" className="form-control" placeholder=" "/> 
                   </div>
                 
                 
                  </div>

                 }
                
                 <br/>
                  <button className='btn btn-primary mb-2'>Submit</button>
                 
               
               
                 </form>
           </React.Fragment>


         );
     }
 }
  
 export default PurchaseForm;