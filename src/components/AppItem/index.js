import './index.css'

const AppItem = props => {
  const {apps} = props
  const {appId, appName, imageUrl, category} = apps
  return (
    <>
      <li className="list-item">
        <img src={imageUrl} className="image" alt={appName} />
        <p className="name">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
