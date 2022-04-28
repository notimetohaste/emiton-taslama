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
      id: 2,
      name: "Ashyr",
      phone: "2455555",
      email: "amail@asdfadsf"
    },
    {
      id: 3,
      name: "Sazak",
      phone: "2455555",
      email: "amail@asdfadsf"
    }
  ]
}
}
render(){
  
  return(
    <div>
     {this.state.contact.map(c => (
       <Contact key={c.id} contact={c} />
     ))}
    </div>
  )
}
}

export default Contacts