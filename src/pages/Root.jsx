import { Fragment, useState } from "react"
import { NavLink } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import { Outlet } from "react-router-dom"
import Logo from "../components/Logo"
import "../styles/Root.css"


const RootLayout = () => {
  const [menuActive, setMenuActive] = useState(false)

  console.log(menuActive)

  return (
    <Fragment>
      <header className="header">
        <Logo />
        <MainNavigation setMenuActive={setMenuActive} menuActive={menuActive} />
      </header>
      <div className={`${menuActive ? "menu-active" : "menu"}`}>
        <ul className="menu-ul">
          <NavLink onClick={()=> setMenuActive(false)} className="menu-option" to="/Anasayfa">ANASAYFA</NavLink>
          <NavLink onClick={()=> setMenuActive(false)} className="menu-option" to="/Hakkımızda">HAKKIMIZDA</NavLink>
          <NavLink onClick={()=> setMenuActive(false)} className="menu-option" to="/Hizmetlerimiz">HİZMETLERİMİZ</NavLink>
          <NavLink onClick={()=> setMenuActive(false)} className="menu-option" to="/İletişim"><i className="fa-solid fa-phone icon trin-trin"></i> İLETİŞİM</NavLink>
        </ul>
      </div>

      <Outlet />
      <div className="page-footer">
        <div className="page-footer-texts">
          <h2 className="page-footer-texts-title">
            Tatar Nakliyat
          </h2>
          <div className="page-footer-contact-infos">
          <div className="footer-adress-info">
              <span className='footer-icon-bg'>
                <i class="fa-solid fa-location-dot location-info-icon infos-icon"></i>              </span>
              İstanbul/Kartal/Soğanlık/ <br />Yeni mahalle/Atatürk caddesi/no:7
            </div>
            <div className='footer-email-info'>
              <span className='footer-icon-bg'>
                <i class="fa-solid fa-paper-plane email-info-icon infos-icon"></i>
              </span>
              <span className='contact-us-info-title'>Email:</span> tatarnakliyat61@gmail.com
            </div>
            <div className="footer-phone-info">
              <span className='footer-icon-bg'>
                <i class="fa-solid fa-phone phone-info-icon infos-icon"></i>
              </span>
              <span className='contact-us-info-title'>Telefon Numarası:</span>  0539 858 73 61
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default RootLayout