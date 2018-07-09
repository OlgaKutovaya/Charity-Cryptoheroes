import "bootstrap-css-only";
import "../styles/main.css";
import "../styles/main.sass";
import { h, render } from "preact";
import Carousel from "nuka-carousel";
import ch1 from "../img/children-1.jpg";
import ch2 from "../img/children-2.jpg";
import ch3 from "../img/children-3.jpg";
import ch4 from "../img/children-4.jpg";
import logo from "../img/logo.png";

render(
  <div>
    <header className="container-fluid header">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-2">
          <a href="index.html">
            <img className="logo-img d-block" src={logo} alt="logo-image" />
          </a>
        </div>
        <div className="col-md-6 text-center">
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
              Crypto Heroes - первое решение в Украине и за её пределами,
              обеспечивающее прозрачность к социальному финансированию с помощью
              технологии blockchain!
            </p>
            <p>
              Инициаторами проекта выступает ряд украинских организаций из
              разных сфер, их объединяют стремление к инновациям и желание
              доказать, что в нашей стране есть честность, прозрачность и
              технологический потенциал.
            </p>
            <p>Стань героем в криптомире!</p>
          </div>
          <div className="col-md-1" />
          <div className="col-xl-4">
            <div className="counter-wrapper m-auto">
              <div className="counter">
                <p className="text-counter text-center">1 000 000</p>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-charity d-block"
                id="btnPay"
              >
                ПОЖЕРТВОВАТЬ
              </button>
              <a
                className="text-uppercase d-block m-auto text-center link-last-charity"
                href="recent-contributions.html"
                target="_blank"
              >
                <b>последние взносы</b>
              </a>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </section>
      <section className="container-fluid">
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
          <div className="col-lg-2" />
          <div className="col-md-8 m-auto text-justify">
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
          <div className="col-lg-2" />
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-md-8 text-justify m-auto">
            <h2 className="text-uppercase text-center mt-4">
              <span className="text-orange">CRYPTO</span>
              <span className="text-blue">HEROES</span>
              <span className="text-green">- как это работает ?</span>
            </h2>
            <p className="text-center mt-4 mb-4">Проект предполагает:</p>
            <ul className="project-promotion-list">
              <li>новую эффективную модель сбора средств (в криптовалютах)</li>
              <li>защищённость хранения собранных средств</li>
              <li>прозрачность в принятии решений распределения средств</li>
              <li>открытость и подотчётность использования средств</li>
              <li>удобную обратную связь для донора от проекта</li>
              <li>новую модель поощрения учеников.</li>
            </ul>
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
          </div>
          <div className="col-lg-2" />
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-md-8 m-auto text-justify">
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
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-md-4 text-justify m-auto pt-5">
            <div className="circle-img m-auto" />
            <h3 className="text-center pt-3">
              <span className="text-warning">NEM Foundation</span>
            </h3>
            <p className="text-center pt-2 w-75 m-auto">description</p>
          </div>
          <div className="col-md-4 text-justify m-auto pt-5">
            <div className="circle-img m-auto" />
            <h3 className="text-center pt-3">
              <span className="text-success">Name</span>
            </h3>
            <p className="text-center pt-2 w-75 m-auto">description</p>
          </div>
          <div className="col-lg-2" />
        </div>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-md-4 text-justify m-auto pt-5">
            <div className="circle-img m-auto" />
            <h3 className="text-center pt-3">
              <span className="text-success">Name</span>
            </h3>
            <p className="text-center pt-2 w-75 m-auto">description</p>
          </div>
          <div className="col-md-4 text-justify m-auto pt-5">
            <div className="circle-img m-auto" />
            <h3 className="text-center pt-3">
              <span className="text-warning">Name</span>
            </h3>
            <p className="text-center pt-2 w-75 m-auto">description</p>
          </div>
          <div className="col-lg-2" />
        </div>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-md-4 text-justify m-auto pt-5">
            <div className="circle-img m-auto" />
            <h3 className="text-center pt-3">
              <span className="text-warning">Name</span>
            </h3>
            <p className="text-center pt-2 w-75 m-auto">description</p>
          </div>
          <div className="col-md-4 text-justify m-auto pt-5">
            <div className="circle-img m-auto" />
            <h3 className="text-center pt-3">
              <span className="text-success">Name</span>
            </h3>
            <p className="text-center pt-2 w-75 m-auto">description</p>
          </div>
          <div className="col-lg-2" />
        </div>
      </section>
    </main>
    <footer className="d-flex footer-wrapper">
      <div className="nav-copyright-wrapper fs-20 d-flex">
        <img className="logo-footer-img" src={logo} alt="logo-image" />
        <h2 className="text-uppercase mt-2 ml-3 footer-header">
          <span className="text-orange">CRYPTO</span>
          <span className="text-blue">HEROES</span>
        </h2>
      </div>
      <nav className="social-networks-icons d-flex">
        <a className="nav-link" href="#">
          <i className="fab fa-facebook-f footer-items" />
        </a>
        <a className="nav-link" href="#">
          <i className="fab fa-youtube footer-items" />
        </a>
        <a className="nav-link" href="#">
          <i className="fab fa-twitter footer-items" />
        </a>
        <a className="nav-link" href="#">
          <i className="fab fa-instagram footer-items" />
        </a>
      </nav>
    </footer>
    <div className="modal" tabindex="-1" role="dialog" id="modalPay">
      <div className="pay-wrapper">
        <legend className="border-r-26">
          <h2 className="d-inline-block modal-heading">
            <span className="text-orange">CRYPTO</span>
            <span className="text-blue">HEROES</span>
          </h2>
          <a href="#" className="pull-right" id="btnClose">
            <i className="fa fa-fw fa-times" />
          </a>
        </legend>
        <div className="form-group">
          <label for="">Благотворительность, 1.00000000 XEM</label>
          <div className="input-group">
            <input
              type="number"
              size="2"
              step="any"
              min="0.01"
              className="form-control"
            />
            <div className="input-group-addon w6">
              1.00 x 1.00000000 = 1.00000000 XEM
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for="">Валюта платежа</label>
          <div>
            <div className="custom-select">
              <div className="custom-select-select">
                <div className="select-main-section">
                  <span className="select-main-selected">
                    Выбор криптовалюты
                  </span>
                  <i
                    aria-hidden="true"
                    className="fa pull-right fa-caret-down"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for="email">
            Email
            <span className="text-danger" />
          </label>
          <div>
            <input
              type="email"
              placeholder="my@email.address"
              name="email"
              required="required"
              className="form-control border-r-26"
              id="email"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="name">
            Имя
            <span className="text-danger" />
          </label>
          <div>
            <input
              name="name"
              pattern=".{null}"
              type="text"
              className="form-control border-r-26"
              id="name"
            />
            <span className="text-muted pull-right">----> ----></span>
            <div className="clearfix" />
          </div>
        </div>
        <div className="form-group">
          <label for="phone">
            Телефон
            <span className="text-danger" />
          </label>
          <div>
            <input
              name="phone"
              pattern=".{null}"
              type="text"
              className="form-control border-r-26"
              id="phone"
            />
            <span className="text-muted pull-right" />
            <div className="clearfix" />
          </div>
        </div>
        <div className="form-group">
          <label for="comment">Комментарий</label>
          <div>
            <input
              name="comment"
              pattern=".{null}"
              type="text"
              className="form-control border-r-26"
              id="comment"
            />
            <span className="text-muted pull-right" />
            <div className="clearfix" />
          </div>
        </div>
        <button className="btn-primary btn-lg text-center d-block m-auto">
          ОПЛАТИТЬ
        </button>
      </div>
    </div>
  </div>,
  document.body,
);
