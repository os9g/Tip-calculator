import React from 'react'
import './css/style.css'
import './css/utililties.css'
import xtype from 'xtypejs'
import logo from './images/logo.svg'
import dollar from './images/icon-dollar.svg'
import person from './images/icon-person.svg'
let tip_amount = 0
let total_amount = 0
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tip: 0,
      bill: 0,
      people: 1,
    }
  }
  TipAmount = () => {
    tip_amount = this.state.bill * (this.state.tip / this.state.people)
    return tip_amount
  }
  TotalAmount = () => {
    total_amount = (this.state.bill + tip_amount) / this.state.people
    console.log(total_amount)
    return total_amount
  }
  Reset = () => {
    window.location.reload()
  }
  render() {
    return (
      <div className="calculator container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="card">
          <div className="grid">
            <section className="tip" action="">
              <div className="bill">
                <h3>Bill</h3>
                <div className="input-icon flex">
                  <img src={dollar} alt="" />
                  <input
                    type="number"
                    onChange={(e) =>
                      this.setState({ bill: Number(e.target.value) })
                    }
                  />
                </div>
              </div>

              <div className="tip-selection">
                <h3>Select Tip %</h3>
                <div className="grid">
                  <button
                    onClick={() => {
                      this.setState({ tip: 0.05 })
                    }}
                  >
                    5%
                  </button>
                  <button
                    onClick={() => {
                      this.setState({ tip: 0.1 })
                    }}
                  >
                    10%
                  </button>
                  <button
                    onClick={() => {
                      this.setState({ tip: 0.15 })
                    }}
                  >
                    15%
                  </button>
                  <button
                    onClick={() => {
                      this.setState({ tip: 0.25 })
                    }}
                  >
                    25%
                  </button>
                  <button
                    onClick={() => {
                      this.setState({ tip: 0.5 })
                    }}
                  >
                    50%
                  </button>
                  <input type="number" placeholder="Custom" />
                </div>

                <div className="people">
                  <div className="bill">
                    <h3 for="">Number of People</h3>
                    <div className="input-icon flex">
                      <img src={person} alt="" />
                      <input
                        type="number"
                        onChange={(e) => {
                          this.setState({ people: e.target.value })
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="display">
              <div className="card-green">
                <div className="flex">
                  <div className="tital">
                    <h3>Tip Amount</h3>
                    <p>/person</p>
                  </div>
                  <h1>{this.TipAmount()}</h1>
                </div>

                <div className="flex">
                  <div className="tital">
                    <h3>Total</h3>
                    <p>/person</p>
                  </div>
                  <h1>{this.TotalAmount()}</h1>
                </div>

                <button onClick={this.Reset}>RESET</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default App
