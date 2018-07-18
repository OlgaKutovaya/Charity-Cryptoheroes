import "bootstrap-css-only";
import { h, render } from "preact";
import Carousel from "nuka-carousel";
import XemCounter from "./XemCounter";
import "../styles/main.sass";
import ch1 from "../img/children-1.jpg";
import ch2 from "../img/children-2.jpg";
import ch3 from "../img/children-3.jpg";
import ch4 from "../img/children-4.jpg";
import logo from "../img/logo.png";
import youtube from "../img/icons/youtube.svg";
import twitter from "../img/icons/twitter.svg";
import instagram from "../img/icons/instagram.svg";
import fb from "../img/icons/fb.svg";

render(
  <div>
    <header className="container-fluid header">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-1">
          <a href="index.html">
            <img className="logo-img d-block" src={logo} alt="logo" />
          </a>
        </div>
        <div className="col-md-6">
          <h1 className="heading header-heading text-uppercase">
            <span className="text-orange">CRYPTO</span>
            <span className="text-blue">HEROES</span>
          </h1>
        </div>
        <div className="col-md-2" />
      </div>
    </header>
    <main>
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-xl-3 main-description-wrapper">
            <h2 className="main-heading heading text-uppercase">
              проект <span className="text-orange">CRYPTO</span>
              <span className="text-blue">HEROES</span>
            </h2>
            <p>Первый благотворительный проект на блокчейне!</p>
            <p>
              <b>Crypto Heroes</b> - первое решение в Украине и за её пределами,
              обеспечивающее прозрачность к социальному финансированию с помощью
              технологии blockchain!
            </p>
            <p>
              Инициаторами проекта выступает ряд украинских организаций из
              разных сфер, их объединяют стремление к инновациям и желание
              доказать, что в нашей стране есть честность, прозрачность и
              технологический потенциал.
            </p>
            <p>
              <b>Стань героем в криптомире!</b>
            </p>
          </div>
          <div className="col-md-1" />
          <div className="col-xl-4">
            <div className="wrapper m-auto">
              <XemCounter />
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </section>
      <section className="container-fluid mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="carousel-wrapper">
              <div className="carousel-inner">
                <Carousel>
                  <div>
                    <img
                      className="d-block w-100"
                      src={ch1}
                      alt="First slide"
                    />
                  </div>
                  <div>
                    <img
                      className="d-block w-100"
                      src={ch2}
                      alt="Second slide"
                    />
                  </div>
                  <div>
                    <img
                      className="d-block w-100"
                      src={ch3}
                      alt="Third slide"
                    />
                  </div>
                  <div>
                    <img
                      className="d-block w-100"
                      src={ch4}
                      alt="Third slide"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-xl-2" />
          <div className="col-xl-4 m-auto text-justify">
            <p>
              Проект{" "}
              <span className="text-orange">
                <b>Crypto</b>
              </span>
              <span className="text-blue">
                <b>Heroes</b>
              </span>{" "}
              предназначен для помощи талантливым детям, которые представляют
              собой незащищенные слои населения и не имеют возможности получить
              качественное и современное образование.
            </p>
            <p>
              Цель проекта - дать им возможность получить знания и реализовать
              их в сфере ИТ.
            </p>
            <p>
              Мы осуществим комплексное{" "}
              <span className="text-green">
                <b>обучение детей 10-15 лет</b>
              </span>{" "}
              и покажем, что с помощью IT и новых технологий{" "}
              <span className="text-green">
                <b>ребята могут выстроить себе желанное, крутое будущее</b>
              </span>{" "}
              для себя и окружающих.
            </p>
            <p>
              Мы предоставим огромные возможности, которые откроются для детей,
              чьи родители и опекуны просто не в силах оплачивать им достойное
              обучение!
            </p>
            <p>
              Мы докажем жизнеспособность новой модели благотворительности, с
              максимальным использованием технологий blockchain и возможностей
              платформы NEM.
            </p>
          </div>
          <div className="col-xl-4">
            <div className="img-1-wrapper m-auto">
              <img className="img-1" src={ch3} alt="" />
            </div>
          </div>
          <div className="col-lg-2" />
        </div>
      </section>
      <section className="container-fluid mt-5">
        <div className="row d-flex f-col">
          <div className="col-sm-2" />
          <div className="col-xl-4 mt-5 m-auto">
            <div className="img-2-wrapper">
              <img className="img-2" src={ch4} alt="" />
            </div>
          </div>
          <div className="col-xl-4 text-justify m-auto">
            <h3 className="text-uppercase text-center">
              <span className="text-orange">CRYPTO</span>
              <span className="text-blue">HEROES</span>
              <span className="text-green">- как это работает ?</span>
            </h3>
            <p className="text-center mt-4 mb-3">Проект предполагает:</p>
            <ul className="project-promotion-list">
              <li>новую эффективную модель сбора средств (в криптовалютах)</li>
              <li>защищённость хранения собранных средств</li>
              <li>прозрачность в принятии решений распределения средств</li>
              <li>открытость и подотчётность использования средств</li>
              <li>удобную обратную связь для донора от проекта</li>
              <li>новую модель поощрения учеников.</li>
            </ul>
          </div>
          <div className="col-sm-2" />
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-md-8 m-auto text-justify">
            <p className="mt-5">
              Мы уверены, что таким проектом стимулируем, в дальнейшем,
              общественные организации (благотворительные организации, НПО,
              социальные предприятия) к прозрачной реализации проектов!
            </p>
            <p>
              С помощью технологий blockchain мы сделаем этот проект более
              эффективным, и
              <span className="text-green">
                <b>решим важную проблему профориентации</b>
              </span>{" "}
              для{" "}
              <span className="text-green">
                <b>социально незащищенной группы детей</b>
              </span>!
            </p>
            <h2 className="text-uppercase text-center text-blue font-weight-bold mt-4 mb-4">
              наши партнёры
            </h2>
            <p>
              Наш партнер -{" "}
              <span className="text-green">
                <b>DITS - IT школа</b>
              </span>{" "}
              нового уровня
            </p>
            <p>
              Предоставляет современные знания, опыт на реальных проектах и
              <span className="text-green">
                <b>помогаем получить работу IT в</b>
              </span>
              <span className="text-green">
                <b>Украине, </b>
              </span>
              <span className="text-green">
                <b>Германии, и</b>
              </span>
              <span className="text-green">
                <b>Европе !</b>
              </span>
            </p>
            <p>
              Школа будет так же{" "}
              <span className="text-green">
                <b>организовывать встречи и мотивирующие лекции</b>
              </span>{" "}
              с успешными представителями IT сферы
            </p>
            <p>
              А, также, общение с соучредителями школы из Германии и Украины и
              <span className="text-green">
                <b>обучение английскому и немецкому языках!</b>
              </span>
            </p>
            <p>
              Мы{" "}
              <span className="text-green">
                <b>обучим детей</b>
              </span>{" "}
              и
              <span className="text-green">
                <b>откроем им новый мир!</b>
              </span>
            </p>
          </div>
          <div className="col-lg-2" />
        </div>
      </section>
      <section className="container-fluid wrapper-main-partners d-flex justify-content-between">
        <div className="partner-info-wrapper">
          <div className="partner-img-wrapper" />
          <h4 className="text-center mt-4 text-green">NEM Foundation</h4>
          <p className="partner-description">
            NEM Foundation - организация со штаб-квартирой в Сингапуре, которая
            проводит некоммерческую деятельность по обучению, распространению
            знаний о технологии NEM блокчейн, а также всесторонне содействует
            созданию решений основанных на блокчейн-платформе NEM в глобальном
            масштабе, во всех отраслях и институциях
          </p>
          <p className="partner-description text-center">
            <b>Антон Босенко NEM Ukraine Leader</b>
          </p>
          <p className="partner-description text-center">
            <a href="https://www.facebook.com/anton.bsnko">
              Facebook (Антон Босенко)
            </a>
          </p>
          <p className="partner-description text-center">
            <a href="https://nem.io">Официальный сайт NEM</a>
          </p>
          <p className="partner-description text-center">
            <a href="https://www.facebook.com/NEMUkraine/">Facebook (NEM)</a>
          </p>
        </div>
        <div className="partner-info-wrapper">
          <div className="partner-img-wrapper" />
          <h4 className="text-center mt-4 text-green">NEM Foundation</h4>
          <p className="partner-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
            accusamus aliquid beatae dolore dolorem ex fugiat iusto magnam
            maxime minus nesciunt nulla optio perspiciatis quasi, quibusdam quis
            reiciendis, rem repellat temporibus vel veniam, voluptatem
            voluptatum? Animi aut delectus deserunt, eaque eligendi error est ex
            excepturi incidunt, laudantium nulla, numquam odit omnis praesentium
            quasi quod repudiandae totam veniam? Consequatur delectus error est
            nam odit optio, possimus provident quaerat quam quo repellat, saepe
            tempora voluptates. Accusamus aliquam animi commodi corporis cum
            dolor illo, impedit, magnam modi neque nisi, odio possimus quas
            ratione reprehenderit sapiente voluptatem. Blanditiis cum ea et
            provident sint.
          </p>
        </div>
        <div className="partner-info-wrapper">
          <div className="partner-img-wrapper" />
          <h4 className="text-center mt-4 text-green">NEM Foundation</h4>
          <p className="partner-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
            accusamus aliquid beatae dolore dolorem ex fugiat iusto magnam
            maxime minus nesciunt nulla optio perspiciatis quasi, quibusdam quis
            reiciendis, rem repellat temporibus vel veniam, voluptatem
            voluptatum? Animi aut delectus deserunt, eaque eligendi error est ex
            excepturi incidunt, laudantium nulla, numquam odit omnis praesentium
            quasi quod repudiandae totam veniam? Consequatur delectus error est
            nam odit optio, possimus provident quaerat quam quo repellat, saepe
            tempora voluptates. Accusamus aliquam animi commodi corporis cum
            dolor illo, impedit, magnam modi neque nisi, odio possimus quas
            ratione reprehenderit sapiente voluptatem. Blanditiis cum ea et
            provident sint.
          </p>
        </div>
      </section>
      <section className="container-fluid wrapper-main-partners d-flex justify-content-between">
        <div className="partner-info-wrapper">
          <div className="partner-img-wrapper" />
          <h4 className="text-center mt-4 text-green">NEM Foundation</h4>
          <p className="partner-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
            accusamus aliquid beatae dolore dolorem ex fugiat iusto magnam
            maxime minus nesciunt nulla optio perspiciatis quasi, quibusdam quis
            reiciendis, rem repellat temporibus vel veniam, voluptatem
            voluptatum? Animi aut delectus deserunt, eaque eligendi error est ex
            excepturi incidunt, laudantium nulla, numquam odit omnis praesentium
            quasi quod repudiandae totam veniam? Consequatur delectus error est
            nam odit optio, possimus provident quaerat quam quo repellat, saepe
            tempora voluptates. Accusamus aliquam animi commodi corporis cum
            dolor illo, impedit, magnam modi neque nisi, odio possimus quas
            ratione reprehenderit sapiente voluptatem. Blanditiis cum ea et
            provident sint.
          </p>
        </div>
        <div className="partner-info-wrapper">
          <div className="partner-img-wrapper" />
          <h4 className="text-center mt-4 text-green">NEM Foundation</h4>
          <p className="partner-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
            accusamus aliquid beatae dolore dolorem ex fugiat iusto magnam
            maxime minus nesciunt nulla optio perspiciatis quasi, quibusdam quis
            reiciendis, rem repellat temporibus vel veniam, voluptatem
            voluptatum? Animi aut delectus deserunt, eaque eligendi error est ex
            excepturi incidunt, laudantium nulla, numquam odit omnis praesentium
            quasi quod repudiandae totam veniam? Consequatur delectus error est
            nam odit optio, possimus provident quaerat quam quo repellat, saepe
            tempora voluptates. Accusamus aliquam animi commodi corporis cum
            dolor illo, impedit, magnam modi neque nisi, odio possimus quas
            ratione reprehenderit sapiente voluptatem. Blanditiis cum ea et
            provident sint.
          </p>
        </div>
        <div className="partner-info-wrapper">
          <div className="partner-img-wrapper" />
          <h4 className="text-center mt-4 text-green">NEM Foundation</h4>
          <p className="partner-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
            accusamus aliquid beatae dolore dolorem ex fugiat iusto magnam
            maxime minus nesciunt nulla optio perspiciatis quasi, quibusdam quis
            reiciendis, rem repellat temporibus vel veniam, voluptatem
            voluptatum? Animi aut delectus deserunt, eaque eligendi error est ex
            excepturi incidunt, laudantium nulla, numquam odit omnis praesentium
            quasi quod repudiandae totam veniam? Consequatur delectus error est
            nam odit optio, possimus provident quaerat quam quo repellat, saepe
            tempora voluptates. Accusamus aliquam animi commodi corporis cum
            dolor illo, impedit, magnam modi neque nisi, odio possimus quas
            ratione reprehenderit sapiente voluptatem. Blanditiis cum ea et
            provident sint.
          </p>
        </div>
      </section>
    </main>
    <footer className="d-flex footer-wrapper">
      <div className="nav-copyright-wrapper fs-20 d-flex">
        <img className="logo-footer-img" src={logo} alt="logo" />
        <h2 className="text-uppercase mt-2 ml-3 footer-header">
          <span className="text-orange">CRYPTO</span>
          <span className="text-blue">HEROES</span>
        </h2>
      </div>
      <nav className="social-networks-icons d-flex">
        <a className="nav-link" href="#">
          <img src={fb} alt="" className="footer-items" />
        </a>
        <a className="nav-link" href="#">
          <img src={instagram} alt="" className="footer-items" />
        </a>
        <a className="nav-link" href="#">
          <img src={twitter} alt="" className="footer-items" />
        </a>
        <a className="nav-link" href="#">
          <img src={youtube} alt="" className="footer-items" />
        </a>
      </nav>
    </footer>
  </div>,
  document.body,
);
