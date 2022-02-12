import React, { Component } from 'react'
import CV from 'react-cv'
 
export default class Example extends Component {
  render () {
    return (
      <CV
        personalData={{
          name: 'Henadzi Myslitski',
          title: 'Senior Software Engineer',
          image: 'https://media-exp1.licdn.com/dms/image/C5603AQEBZrL8hWe64w/profile-displayphoto-shrink_200_200/0/1564034782491?e=1649894400&v=beta&t=0y7Exig6iC7SVhUbN6-0451QUGuNX6caxrAJH2WKdek',
          contacts: [
            { type: 'email', value: 'fargutvest@gmail.com' },
            { type: 'phone', value: '+375 (29) 886 59 57' },
            { type: 'location', value: 'Minsk, Belarus' },
            { type: 'website', value: 'example.com' },
            { type: 'linkedin', value: 'www.linkedin.com/in/henadzi-myslitski-5383a2a6/' },
            { type: 'github', value: 'github.com/fargutvest' }
        ]}}
        sections= {[{
          type: 'text',
          title: 'Career Profile',
          content: 'When I was child, I always want to be a developer.',
          icon: 'usertie'
        }]}
        branding={true} // or false to hide it.
      />
    )
  }
}