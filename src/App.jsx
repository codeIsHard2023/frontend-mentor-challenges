import ImageQrCode from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <section id="qrSection">
      <div className="card">
        <div className="qrCode">
          <img className="imageQrCode" src={ImageQrCode} alt="QR code" />
        </div>
        <div className="textContainer">
          <p>Improve your front-end skills by building projects</p>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
