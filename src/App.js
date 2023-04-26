import Social from "./social.jpg"
import Facebook from "./facebook.png"
import Snapchat from "./snapchat.png"
import Tiktok from "./tiktok.png"
import Whatsapp from "./whatsapp.png"
import Instagram from "./instagram.png"

import "./App.css"

const App = () => {
  let iconSize = 80

  const onFacebookClick = () => {
    let a = document.getElementById("anchor")
    a.setAttribute(
      "href",
      "https://www.facebook.com/profile.php?id=100087298404139&mibextid=LQQJ4d"
    )
    a.click()
  }
  const onInstagramClick = () => {
    let a = document.getElementById("anchor")
    a.setAttribute(
      "href",
      "https://instagram.com/_dej.our_?igshid=YmMyMTA2M2Y="
    )
    a.click()
  }
  const onWhatsappClick = () => {
    let a = document.getElementById("anchor")
    a.setAttribute("href", "https://wa.me/c/218912478601")
    a.click()
  }
  const onTiktokClick = () => {
    let a = document.getElementById("anchor")
    a.setAttribute(
      "href",
      "https://www.tiktok.com/@_dejour_1?_t=8bYdVIqLfJm&_r=1"
    )
    a.click()
  }
  const onSnapchatClick = () => {
    let a = document.getElementById("anchor")
    a.setAttribute(
      "href",
      "https://www.snapchat.com/add/dejour.1?share_id=CBXA689Oxx8&locale=en-GB"
    )
    a.click()
  }
  return (
    <div className="wrapper">
      <a target="_blank" id="anchor"></a>
      <div className="card">
        <h3>Follow our socials!</h3>
        <img width={130} style={{ marginTop: "20px" }} src={Social} />
        <div className="socials">
          <div onClick={onFacebookClick} className="social">
            <img width={iconSize} style={{ zIndex: "200" }} src={Facebook} />
          </div>
          <div onClick={onSnapchatClick} className="social">
            <img width={iconSize} style={{ zIndex: "200" }} src={Snapchat} />
          </div>
          <div onClick={onInstagramClick} className="social">
            <img width={iconSize} style={{ zIndex: "200" }} src={Instagram} />
          </div>
          <div onClick={onTiktokClick} className="social">
            <img width={iconSize} style={{ zIndex: "200" }} src={Tiktok} />
          </div>
          <div onClick={onWhatsappClick} className="social">
            <img width={iconSize} style={{ zIndex: "200" }} src={Whatsapp} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
