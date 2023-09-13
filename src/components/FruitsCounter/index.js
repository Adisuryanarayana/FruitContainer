// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="big-container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="count">{count}</span> mangoes
            <span className="count">{count}</span> bananas
          </h1>
          <div className="img-con">
            <div className="Mango-banana">
              <img
                className="imgCard"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="Mango-bananaT" onClick={this.onIncrement}>
                Eat Mango
              </button>
            </div>
            <div className="Mango-banana">
              <img
                className="imgCard"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="Mango-bananaT" onClick={this.onIncrement}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
