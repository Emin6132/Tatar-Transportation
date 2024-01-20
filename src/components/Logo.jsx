import "../styles/Logo.css"
import siteLogo from '/TatarLogo2.png'

const Logo = () => {
  return (
    <div className="logo-container">
        <img src={siteLogo} className="pageLogo" />
        <h2 className="logo-container-title">
          Tatar Nakliyat
        </h2>
    </div>
  )
}

export default Logo

