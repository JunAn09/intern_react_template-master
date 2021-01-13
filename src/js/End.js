import React from 'react'
import '../css/example.css'

export default class Home extends React.Component {
  constructor() {
    super();
    // this is basically your global variable, it will not change until you use setState
    this.state = {
    }
  }
  render() {
    return (
      <div class="font-ex">
        <h1 class="font-ex">Thank You</h1> 
        Have a nice day
      </div>
    )
  }
}
