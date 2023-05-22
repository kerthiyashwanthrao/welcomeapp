// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {word: 'Subscribe', subscribed: false}

  changeButton = () => {
    const {subscribed} = this.state
    if (subscribed === false) {
      this.setState({subscribed: true, word: 'Subscribed'})
    } else if (subscribed === true) {
      this.setState({subscribed: false, word: 'Subscribe'})
    }
  }

  render() {
    const {word} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        <button className="button" type="button" onClick={this.changeButton}>
          {word}
        </button>
      </div>
    )
  }
}
export default Welcome
