import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class ContactCard extends Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return <table>
             <tr>
               <th>Name</th>
               <th>Mobile Number</th>
               <th>Work Number</th>
               <th>Email</th>
             </tr>
             <tr>
               <td>{this.props.name}</td>
               <td>{this.props.mobilenum}</td>
               <td>{this.props.worknum}</td>
               <td>{this.props.email}</td>
             </tr>
           </table>

  }
}

class IncrementDecrement extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      num: this.props.start
    }
  }

  Increment = () => {this.setState({ num: this.state.num + 1 });}
  Decrement = () => {if(this.state.num > 0){this.setState({ num: this.state.num - 1 })}else{alert("Cannot be less than zero")};}

  render()
  {
    return <div>
             <button onClick={this.Increment}>Increment</button>
             <h1>{this.state.num}</h1>
             <button onClick={this.Decrement}>Decrement</button>
           </div>
  }
}

class App extends Component
{

  render()
  {
    return <div>
             <ContactCard name="Karkat Vantas" mobilenum="4132000" email="applesauce@trollgmail.com"/>
             <ContactCard name="Nepeta Leijon" mobilenum="1234567" email="likenya@trollgmail.com"/>
             <ContactCard name="Vriska Serket" mobilenum="88888888" email="spidergurl@trollgmail.com"/>
             <br></br>
             <IncrementDecrement start={10}/>
           </div>
  }
}

ContactCard.propTypes =
{
  name: PropTypes.string.isRequired,
  mobilenum: PropTypes.string.isRequired,
  worknum: PropTypes.string,
  email: PropTypes.string.isRequired
}

IncrementDecrement.propTypes =
{
  start: PropTypes.number.isRequired
}

export default App;