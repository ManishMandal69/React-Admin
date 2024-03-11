import '../styles/navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="../src/assets/icons8-m-64.png" alt="" />
        <span>admin</span>
      </div>
      <div className="icons">
        <img src="../src/assets/search.svg" alt=""  className="icon" />
        <img src="../src/assets/app.svg" alt="" className="icon" />
        <img src="../src/assets/expand.svg" alt="" className="icon" />

        <div className="notifiction">
          <img src="../src/assets/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="../src/assets/WhatsApp Image 2024-01-24 at 5.01.27 PM.jpeg" alt="" />
          <span>Manish</span>
        </div>
        <img src="../src/assets/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar
