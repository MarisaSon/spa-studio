import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../components/Hero";

function Home() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000, 
    fade: true, 
    cssEase: "linear",
  };
  return (
    <div className="home">
      <Hero />
      <section className="home-slider">
        <Slider {...settings}>
          <div>
            <img src="/home_page/room-decor.jpg" alt="Интерьер" />
            <p>Погрузитесь в мир расслабления!</p>
          </div>
          <div>
            <img src="/home_page/bath.jpg" alt="Ванна" />
            <p>Натуральные ритуалы ухода за телом</p>
          </div>
          <div>
            <img src="/home_page/massage-room.png" alt="Интерьер" />
            <p>Погрузитесь в мир расслабления!</p>
          </div>
          <div>
            <img src="/home_page/bath.jpg" alt="Ванна" />
            <p>Натуральные ритуалы ухода за телом</p>
          </div>
        </Slider>
      </section>

      <section className="welcome">
        <h2>В Soma Вас ждут ритуалы, вдохновленные мифами</h2>
        <p>
          Spa-пространство осознанности, вдохновлённое образами древних богинь и
          философией ухода за телом. Здесь каждый ритуал наполнен смыслом,
          прикосновением и заботой.
        </p>
        <p>
          Позвольте себе замедлиться и вернуться к себе — обновлённой,
          наполненной, настоящей.
        </p>
      </section>
    </div>
  );
}

export default Home;
