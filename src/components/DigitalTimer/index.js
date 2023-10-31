// Write your code here
import {Component} from 'react'
// import {v4 as uuidv4} from 'uuid'
import './index.css'

class DigitalTimer extends Component {
  state = {
    min: 25,
    sec: 0,
    isStarted: false,
  }

  clearTimeInterval = () => {
    clearInterval(this.timerId)
    this.setState({isStarted: false})
  }

  updateIsStarted = () => {
    this.setState(prevState => ({
      isStarted: !prevState.isStarted,
    }))
  }

  getMinutes = min => {
    if (min < 10) {
      return '0'.concat(min)
    }
    return min
  }

  decreaseTimeLimt = () => {
    this.setState(prevState => ({
      min: prevState.min - 1,
    }))
  }

  inccreaseTimeLimt = () => {
    this.setState(prevState => ({
      min: prevState.min + 1,
    }))
  }

  getSeconds = sec => {
    if (sec < 10) {
      return '0'.concat(sec)
    }
    return sec
  }

  updateSeconds = () => {
    this.setState(prevState => ({
      sec: prevState.sec - 1,
    }))
  }

  updateminutetoseconds = () => {
    this.setState(prevState => ({
      sec: 60,
      min: prevState.min - 1,
    }))
  }

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
  }

  render() {
    const {min, sec, isStarted} = this.state

    const minutes = this.getMinutes(min)
    const seconds = this.getSeconds(sec)
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
              <p>Paused</p>
            </div>
          </div>
          <div className="cont-2">
            <div className="startandreset-cont">
              <div className="start-cont">
                <button
                  type="button"
                  className="but-start"
                  onClick={isStarted ? this.clearTimeInterval : this.startTime}
                >
                  <img src={url} alt={alt} className="start-icon" />
                  {isStarted ? 'Pause' : 'Start'}
                </button>
              </div>
              <div className="start-cont">
                <button
                  type="button"
                  className="but-start"
                  onClick={this.resetTimer}
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
                disabled={isStarted}
                onClick={this.decreaseTimeLimt}
              >
                -
              </button>
              <p className="countnumber">{minutes}</p>
              <button
                className=""
                type="button"
                disabled={isStarted}
                onClick={this.inccreaseTimeLimt}
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
