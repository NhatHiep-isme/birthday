import pic5 from "./pic5.jpg";
import pic6 from "./pic6.jpg";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic7 from "./pic7.jpg";

export default function Card() {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <img src={pic5} className="pic-inside" />
        <img src={pic6} className="pic-inside-6" />
        <img src={pic1} className="pic-inside-1" />
        <img src={pic2} className="pic-inside-2" />
        <img src={pic7} className="pic-inside-7" />

        <h3 className="happy">Thiệp mừng handmade nè ^^</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY Mỹ Lyyy!</h3>
        <p>Dear Friend,</p>
        <p>
          {`Happy birthday!!! Can't be the first one to give you the best wishes, I
          decided to be the last one ^^. I wish you all the best things not only
          in your birthday but also in your life. Tuổi mới ngày càng xinh đẹp
          nè, giỏi giang và hạnh phúc nhé ^^.
          This birthday card will be on this link all the time, if like it, you can visit it anytime <3.`}
        </p>
        <p className="name">From Pet with all luv.</p>
      </div>
    </div>
  );
}
