import './index.css'

const ShowResults = props => {
  const {score, onReplayFunc} = props

  const onReplayBtn = () => {
    onReplayFunc()
  }
  return (
    <div className="results-container">
      <div className="bg-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p className="your-score">YOUR SCORE</p>
        <h1 className="your-score">{score}</h1>
        <button onClick={onReplayBtn} type="button" className="results-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="restart"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ShowResults
