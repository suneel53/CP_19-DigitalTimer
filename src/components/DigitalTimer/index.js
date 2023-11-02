// Write your code here
import {Component} from 'react'
// import {v4 as uuidv4} from 'uuid'
import './index.css'

class DigitalTimer extends Component {
  state = {
    tes: 1500,
    isStarted: false,
  }

  updateIsStarted = () => {
    this.setState({isStarted: true})
  }

  clearTimeInterval = () => {
    console.log('clearTimeInterval called')
    clearInterval(this.timerId)
    this.setState({isStarted: false})
  }

  getMinutes = () => {
    const {tes} = this.state
    const min = Math.floor(tes / 60)
    if (min < 10) {
      return `0${min}`
    }
    return min
  }

  getSeconds = () => {
    const {tes} = this.state
    const sec = Math.floor(tes % 60)
    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  updateTime = () => {
    const {tes} = this.state
    if (tes === 0) {
      this.clearTimeInterval()
      return
    }
    console.log('onStartTimer - updateTime- called')
    this.setState(prevState => ({
      tes: prevState.tes - 1,
    }))
  }

  onStartTimer = () => {
    this.updateIsStarted()
    console.log('onStartTimer called')
    this.timerId = setInterval(this.updateTime, 1000)
  }

  onreset = () => {
    console.log('onreset called')
    this.clearTimeInterval(this.timerId)
    this.setState({
      isStarted: false,
      tes: 1500,
    })
  }

  increasetime = () => {
    this.setState(prevState => ({
      tes: prevState.tes + 60,
    }))
  }

<<<<<<< HEAD
  decreasetime = () => {
    this.setState(prevState => ({
      tes: prevState.tes - 60,
    }))
=======
  startTime = () => {
     this.updateIsStarted()
    const {min, sec} = this.state
    let totalSeconds = min * 60 + sec
    this.timerId = setInterval(() => {
      if (totalSeconds === 0) {
        this.clearTimeInterval()
        return
      }
      totalSeconds -= 1
      const updateMin = Math.floor(totalSeconds / 60)
      const updateSec = totalSeconds % 60
      this.setState({
        min: updateMin,
        sec: updateSec,
      })
    }, 1000)
  }

  resetTimer = () => {
    this.clearTimeInterval()
    this.setState({min: 25, sec: 0})
>>>>>>> origin/main
  }

  // updated code
  render() {
    const {isStarted} = this.state

    const minutes = this.getMinutes()
    const seconds = this.getSeconds()
    const url = isStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const alt = isStarted ? 'pause icon' : 'play icon'
    return (
      <div className="bg-cont">
        <h1>Digital Timer</h1>
        <div className="cont">
          <div className="timer-cont">
            <div className="timer-circle">
              <h1 className="timer">
                {minutes}:{seconds}
              </h1>
              <p>{isStarted ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="cont-2">
            <div className="startandreset-cont">
              <div className="start-cont">
                <button
                  type="button"
                  onClick={
                    isStarted ? this.clearTimeInterval : this.onStartTimer
                  }
                  className="but-start"
                >
                  <img src={url} alt={alt} className="start-icon" />
                  {isStarted ? 'Pause' : 'Start'}
                </button>
              </div>
              <div className="start-cont">
                <button
                  type="button"
                  onClick={this.onreset}
                  className="but-start"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="start-icon"
                  />
                </button>
                <p>Reset</p>
              </div>
            </div>
            <p>Set Timer limit</p>
            <div className="increaseordecrese-cont">
              <button
                className=""
                type="button"
                onClick={this.decreasetime}
                disabled={isStarted}
              >
                -
              </button>
              <p className="countnumber">{minutes}</p>
              <button
                className=""
                type="button"
                onClick={this.increasetime}
                disabled={isStarted}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
