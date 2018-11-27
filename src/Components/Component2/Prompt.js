import React, { Component } from 'react';

const contactArray = [
    {
        name: 'John',
        email: 'john@email.com',
        phone: '111-111-111'
      },
      {
        name: 'Dave',
        email: 'dave@email.com',
        phone: '222-222-222'
      }
    ];
    
    class Form extends React.Component {
    
      constructor() {
        super();
        this.state = {
          contacts: contactArray
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const
        { contacts } = this.state,
        name = this.refs.name.value,
        email = this.refs.email.value,
        phone = this.refs.phone.value;
        this.setState({
          contacts: [...contacts, {
            name,
            email,
            phone
          }]
        }, () => {
          this.refs.name.value = '';
          this.refs.email.value = '';
          this.refs.phone.value = '';
        });
      }
    
      render() {
        const { contacts } = this.state;
        console.log('message',this.state.contacts);
        return (   
          <div>
            <h2>Add Someone</h2>
            <form onSubmit={this.handleSubmit}>
              <input type="text" ref="name" placeholder="name" />
              <input type="text" ref="email" placeholder="email" />
              <input type="text" ref="phone" placeholder="phone" />
              <button type="submit">Submit</button>
            </form>
            <h2>Exsiting contacts:</h2>
            <ul>
              {contacts.map((contact) => 
               <li>{`Name: ${contact.name} Email: ${contact.email} Phone: ${contact.phone}`}</li>
              )}
            </ul> </div>
    ) 
  }
}





 export default Form;