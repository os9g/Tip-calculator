import React from 'react'
import './css/style.css'
import './css/utililties.css'
import xtype from 'xtypejs'
import logo from './images/logo.svg'
import dollar from './images/icon-dollar.svg'
import person from './images/icon-person.svg'
let tip_amount = 0
let total_amount = 0
let worning = ''
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tip: 0,
      bill: '',
      people: 1,
      custom_tital: 'Custom',
      filed_border: '#fff',
      bg5: '#00474b',
      bg10: '#00474b',
      bg15: '#00474b',
      bg25: '#00474b',
      bg50: '#00474b',
    }
  }
  TipAmount = () => {
    tip_amount = this.state.bill * (this.state.tip / this.state.people)
    tip_amount = (Math.round(tip_amount * 100) / 100).toFixed(2)
    tip_amount = Number(tip_amount)
    if (tip_amount === Infinity || isNaN(tip_amount)) {
      tip_amount = 0
      worning = 'Please enter the number of people'
    }
    return tip_amount
  }
  TotalAmount = () => {
    total_amount = (this.state.bill + tip_amount) / this.state.people
    total_amount = (Math.round(total_amount * 100) / 100).toFixed(2)
    total_amount = Number(total_amount)
    console.log(total_amount)
    if (total_amount === Infinity || isNaN(total_amount)) {
      total_amount = 0
      worning = 'Please enter the number of people'
    }
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
                    style={{ background: this.state.bg5 }}
                    onClick={() => {
                      this.setState({
                        tip: 0.05,
                        filed_border: '#fff',
                        custom_tital: 'Custom',
                        bg5: '#35c3b2',
                        bg50: '#00474b',
                        bg10: '#00474b',
                        bg15: '#00474b',
                        bg25: '#00474b',
                      })
                    }}
                  >
                    5%
                  </button>
                  <button
                    style={{ background: this.state.bg10 }}
                    onClick={() => {
                      this.setState({
                        tip: 0.1,
                        custom_tital: 'Custom',
                        filed_border: '#fff',
                        bg10: '#35c3b2',
                        bg5: '#00474b',
                        bg50: '#00474b',
                        bg15: '#00474b',
                        bg25: '#00474b',
                      })
                    }}
                  >
                    10%
                  </button>
                  <button
                    style={{ background: this.state.bg15 }}
                    onClick={() => {
                      this.setState({
                        tip: 0.15,
                        filed_border: '#fff',
                        custom_tital: 'Custom',
                        bg15: '#35c3b2',
                        bg5: '#00474b',
                        bg10: '#00474b',
                        bg50: '#00474b',
                        bg25: '#00474b',
                      })
                    }}
                  >
                    15%
                  </button>
                  <button
                    style={{ background: this.state.bg25 }}
                    onClick={() => {
                      this.setState({
                        tip: 0.25,
                        filed_border: '#fff',
                        custom_tital: 'Custom',
                        bg25: '#35c3b2',
                        bg5: '#00474b',
                        bg10: '#00474b',
                        bg15: '#00474b',
                        bg50: '#00474b',
                      })
                    }}
                  >
                    25%
                  </button>
                  <button
                    style={{ background: this.state.bg50 }}
                    onClick={() => {
                      this.setState({
                        tip: 0.5,
                        filed_border: '#fff',
                        custom_tital: 'Custom',
                        bg50: '#35c3b2',
                        bg5: '#00474b',
                        bg10: '#00474b',
                        bg15: '#00474b',
                        bg25: '#00474b',
                      })
                    }}
                  >
                    50%
                  </button>
                  <input
                    type="number"
                    style={{ border: `3px ${this.state.filed_border} solid` }}
                    placeholder={this.state.custom_tital}
                    onChange={(e) => {
                      this.setState({ tip: Number(e.target.value) })
                    }}
                    onSelect={() => {
                      this.setState({
                        custom_tital: '',
                        filed_border: '#35c3b2',
                        bg50: '#00474b',
                        bg10: '#00474b',
                        bg15: '#00474b',
                        bg5: '#00474b',
                        bg25: '#00474b',
                      })
                    }}
                  />
                </div>

                <div className="people">
                  <div className="bill">
                    <h3 for="">Number of People</h3>
                    <p></p>
                    <div className="input-icon flex">
                      <img src={person} alt="" />
                      <input
                        type="number"
                        value={this.state.people}
                        onChange={(e) => {
                          this.setState({ people: Number(e.target.value) })
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
