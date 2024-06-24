import ImageQrCode from "../../assets/day1/image-qr-code.png";
import "../../styles/day1/ChallengeDayOne.css";

function ChallengeDayOne() {
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

export default ChallengeDayOne;
