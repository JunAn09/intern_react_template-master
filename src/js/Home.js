import React from 'react'
import { Form, Button } from 'react-bootstrap';
// import your other js functions
import AppendDDL from './Append/AppendDDL'
import '../css/example.css'

export default class Home extends React.Component {
  constructor() {
    super();
    // this is basically your global variable, it will not change until you use setState
    this.state = {
      title: "Personal Profile",
      text: "Props",
      userName: null,
      age: null,
      phone: null,
      email: null,
      gender: '',
      interest: ''
    }
  }
  // your function here
  handleSubmit = event => {
    event.preventDefault()
    // get your value in form with event.target.name.value
    //var input = event.target.userName.value
  
    // setState, one of the important function of react, to overwrite the state, else it will be same forever
    this.setState({ userName: event.target.userName.value, age: event.target.age.value, phone: event.target.phone.value, email: event.target.email.value }, () => {
      alert("Name: " + this.state.userName + "\nAge: " + this.state.age + "\nContact No.: " + this.state.phone + "\nEmail: " + this.state.email 
        + "\nGender: " + this.state.gender + "\nInterrest in: " + this.state.interest)
    })
  }
  returnValue = value =>{
    this.setState({gender: value})
  }
  returnMultiValue = value =>{
    this.setState({interest: value})
  }
  /*componentDidMount(){
    //this.setState({interest: event.target.userName.value})
    var array = this.state.interest
    var temp_arr = []
    array.forEach((data, index) => {
      temp_arr.push(<span key={"index" + index}>{data}</span>)
    });
    this.setState({body : temp_arr})
  }*/
  render() {
    // example of setting variable, try not to use this, use state instead
    // you render your template here
    return (
      <div>
        <div class="card_hearder">
          <h2>{this.state.title}</h2>
        </div>
        
          <div class="card-body">
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div class="col-md col-ex">
              <label>Name</label>
              <Form.Control name="userName"></Form.Control>
            </div>
            <div class="col-md col-ex">
              <label>Age</label>
              <Form.Control name="age"></Form.Control>
            </div>
            <div class="col-md col-ex">
              <label>Contac No.</label>
              <Form.Control name="phone"></Form.Control>
            </div>
            <div class="col-md col-ex">
              <label>User Name</label>
              <Form.Control name="email"></Form.Control>
            </div>
            <div class="col-md col-ex">
              <label>Gender</label>
              <AppendDDL returnValue = {this.returnValue} options={[{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }]} />
            </div>
            <div class="col-md col-ex">
              <label>Interested in</label>
              <AppendDDL options={[{ value: "Sport", label: "Sport" }, { value: "Art", label: "Art" }, { value: "Games", label: "Games" }, 
              { value: "Movie", label: "Movie" }, { value: "Music", label: "Music" }]} isMulti={true} returnMultiValue = {this.returnMultiValue}/>
            </div>
            <br/>
            <div class="col-md cold-ex btn-ex">
              <Button type="submit" class="btn">Click</Button>
            </div>
          {/* call your imported js function and throw props into it, if props exist, it will do something based on the props, ctrl + click on AppendDDL to check*/}
          </form>
        </div>
      </div>
    )
  }
}



// create an example class
class Example extends React.Component {
  // we need to add props here as this class will receive props
  constructor(props) {
    super(props);
    this.state = {
      label_text: "Hello world!"
    }
  }
  // this function will run whenever this class is rendered
  componentDidMount() {
    this.setState({ label_text: this.props.text })
  }
  // if the props will update, you need to use this function to catch nextProps
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.text)
    // MUST USE THIS TO VERIFY, else it will loop a lot of time and cause issue
    if (nextProps.text !== this.props.text) {
      // we set label_text to nextProps
      this.setState({ label_text: nextProps.text })
    }
  }
  render() {
    return (
      <span>{this.state.label_text}</span>
    )
  }
}
