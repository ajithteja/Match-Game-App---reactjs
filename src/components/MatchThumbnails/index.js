import './index.css'

const MatchThumbnails = props => {
  const {eachItem, onThumbnailFunc} = props
  const {id, thumbnailUrl} = eachItem

  const onThumbnailBtn = () => {
    onThumbnailFunc(id)
  }

  return (
    <li className="thumbnails-li-container">
      <button
        onClick={onThumbnailBtn}
        type="button"
        className="thumbnail-button"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default MatchThumbnails
