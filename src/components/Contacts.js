import React, {Component} from 'react'
import Contact from './Contact'

class Contacts extends  Component {
constructor(){
  super()
  this.state = {
    contact: [
      {
      id: 1,
      name: "Nurgeldi",
      phone: "2455555",
      email: "amail@asdfadsf"
    },
    {
      id: 1,
      name: "Ashyr",
      phone: "2455555",
      email: "amail@asdfadsf"
    },
    {
      id: 1,
      name: "Sazak",
      phone: "2455555",
      email: "amail@asdfadsf"
    }
  ]
}
}
render(){
  const {contact} = this.state;
 
  return(
    <div>
     {contact.map(c => (
       <Contact contact={contact} />
     ))}
    </div>
  )
}
}

export default Contacts