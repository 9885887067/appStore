import './index.css'

const TabItem = props => {
  const {tabs, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabs
  const onClickItem = () => {
    updateActiveTabId(tabId)
  }

  const activeClassName = isActive ? 'active-btn' : 'button'

  return (
    <li className="tab-item">
      <button
        className={`button ${activeClassName}`}
        type="button"
        onClick={onClickItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
