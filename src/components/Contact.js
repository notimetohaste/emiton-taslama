import React from 'react'



function Contact(props) {
        const {name, phone, email} = props.contact
        return (
            <div>
       <ul>
           <li>{name}</li>
           <li>{phone}</li>
           <li>{email}</li>
       </ul>
    </div>
  )
}

export default Contact