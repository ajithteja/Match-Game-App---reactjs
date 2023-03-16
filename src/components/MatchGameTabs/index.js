import './index.css'

const MatchGameTabs = props => {
  const {selectedTab, eachItem, onActiveTab} = props
  const {tabId, displayText} = eachItem

  const activeId = selectedTab ? 'active-tab' : ''

  const onTabActiveBtn = () => {
    onActiveTab(tabId)
  }

  return (
    <li className="tabs-li-container">
      <button onClick={onTabActiveBtn} type="button" className="tabs-button">
        <p className={`${activeId} tabs-text`}>{displayText}</p>
        {selectedTab && <hr className="hr-tab-line" />}
      </button>
    </li>
  )
}

export default MatchGameTabs
