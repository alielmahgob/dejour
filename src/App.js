import Social from "./social.jpg"
import Facebook from "./facebook.png"
import Snapchat from "./snapchat.png"
import Tiktok from "./tiktok.png"
import Whatsapp from "./whatsapp.png"
import Instagram from "./instagram.png"

import "./App.css"

const App = () => {
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
    <div className="header">
      <a target="_blank" id="anchor"></a>
      <div className="inner-header flex">
        <div className="card">
          <h3>Follow our socials!</h3>
          <img width={130} style={{ marginTop: "20px" }} src={Social} />
          <div className="socials">
            <div onClick={() => onFacebookClick()} className="social">
              <img width={40} style={{ zIndex: "200" }} src={Facebook} />
              <div className="vertical-line"></div>
              <div className="social-right-side">
                <span className="social-text">Follow us on Facebook</span>
              </div>
            </div>
            <div onClick={() => onSnapchatClick()} className="social">
              <img width={40} style={{ zIndex: "200" }} src={Snapchat} />
              <div className="vertical-line"></div>
              <div
                className="social-right-side"
                style={{ backgroundColor: "#FFFC00", left: "20px" }}
              >
                <span className="social-text">Follow us on Snapchat</span>
              </div>
            </div>
            <div onClick={() => onInstagramClick()} className="social">
              <img width={40} style={{ zIndex: "200" }} src={Instagram} />
              <div className="vertical-line"></div>
              <div
                className="social-right-side"
                style={{ backgroundColor: "#F04C59", left: "20px" }}
              >
                <span className="social-text">Follow us on Instagram</span>
              </div>
            </div>
            <div onClick={() => onTiktokClick()} className="social">
              <img width={40} style={{ zIndex: "200" }} src={Tiktok} />
              <div className="vertical-line"></div>
              <div
                className="social-right-side"
                style={{ backgroundColor: "#000000" }}
              >
                <span className="social-text">Follow us on Tiktok</span>
              </div>
            </div>
            <div onClick={() => onWhatsappClick()} className="social">
              <img width={40} style={{ zIndex: "200" }} src={Whatsapp} />
              <div className="vertical-line"></div>
              <div
                className="social-right-side"
                style={{ backgroundColor: "#29A71A" }}
              >
                <span className="social-text">Contact us on Whatsapp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  )
}

export default App
