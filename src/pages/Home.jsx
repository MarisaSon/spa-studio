import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Hero from "../components/Hero";

function Home() {
  const settings = {
    dots: true,
    arrows: false,
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
            <img src="/img/slider/room.jpg" alt="Интерьер" />
            <p>Пространство тишины, света и прикосновений</p>
          </div>
          <div>
            <img src="/img/slider/spa_interior.jpg" alt="Интерьер" />
            <p>Погрузитесь в мир расслабления</p>
          </div>
          <div>
            <img src="/img/slider/massage-room.png" alt="Комната массажа" />
            <p>Натуральные ритуалы ухода и красоты</p>
          </div>
          <div>
            <img src="/img/slider/massage_room.jpg" alt="Комната массажа" />
            <p>Погрузитесь в мягкую заботу о теле и душе</p>
          </div>
          <div>
            <img src="/img/slider/bath.jpg" alt="Ванна" />
            <p>Погружение в ароматные воды и древние ритуалы очищения</p>
          </div>

          <div>
            <img src="/img/slider/spa_.png" alt="Спа-атрибуты" />
            <p>Натуральные масла, тёплый свет и сила прикосновения</p>
          </div>
          <div>
            <img src="/img/slider/spa.jpg" alt="Спа-атрибуты" />
            <p>Каждая деталь — часть заботливого ритуала</p>
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
          Мы верим, что истинная красота рождается из состояния покоя и
          внутренней наполненности. Поэтому в Soma всё устроено так, чтобы вы
          могли почувствовать: вы — центр этого мира.
        </p>
        <p>
          Здесь нет спешки, нет шаблонов. Только вы, тёплый свет, ароматы и
          тишина, в которой рождается внутренний покой. Это не просто спа — это
          обряд возвращения к себе.
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
