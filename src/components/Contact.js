import React, {Component} from 'react'



class Contact extends Component {
    render(){
        const {contact} = this.state
        return (
            <div>
       <ul>
           <li>{contact.name}</li>
           <li>{contact.phone}</li>
           <li>{contact.email}</li>
       </ul>
    </div>
  )
}
}
export default Contact