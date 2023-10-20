import React, { useRef, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import HeaderMenu from './components/header/headerMenu/headerMenu';
import Order from './components/order/order';
import Services from './components/services/services';
import Teaching from './components/teaching/teaching';
import Courses from './components/courses/courses';
import data from './data';
import Testimonials from './components/testimonials/testimonials';
import Carusel from './components/rekl/carusel';
import Footer from './components/footer/footer';

function App() {

  const [order, setOrder] = useState({});

  const menuRef = useRef();
  const serviceRef = useRef();
  const orderRef = useRef();
  const teachRef = useRef();
  const courseRef = useRef();

  function handleBackClick(param) {
    if (param === 0) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (param === 1) {
      serviceRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (param === 2) {
      teachRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (param === 3) {
      courseRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (param === 4) {
      orderRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }

  function ordering(param) {
    console.log(param)
    let section;
    if (param.a === 1) {
      section = { name: 'Послуги', categories: data.cat_pos }
      if (param.b === 1) {
        section = { ...section, category: 'Консультація', positions: data.consult }
      }
      if (param.b === 2) {
        section = { ...section, category: 'ТОВ / ПП', positions: data.tov }
      }
      if (param.b === 3) {
        section = { ...section, category: 'ФОП', positions: data.fop }
      }
      if (param.b === 4) {
        section = { ...section, category: 'Облік / аудит', positions: data.oblik }
      }
    }
    if (param.a === 2) {
      section = { name: 'Навчання', categories: data.cat_nav };
      if (param.b === 1) {
        section = { ...section, category: 'Навчання по веденню бухгалтерії ФОП / ТОВ', positions: data.navved }
      }
      if (param.b === 2) {
        section = { ...section, category: 'Навчання по поданню звітності ФОП / ТОВ', positions: data.navpod }
      }
      if (param.b === 3) {
        section = { ...section, category: 'Фінансово-економічна гра Cash Flow', positions: data.cash }
      }
    }
    if (param.a === 3) {
      section = { name: 'Курси', categories: data.cat_cur };
      if (param.b === 1) {
        section = { ...section, category: 'ФОП. Облік. Податки', positions: data.fopcur }
      }
      if (param.b === 2) {
        section = { ...section, category: 'Пасивний дохід', positions: data.pas }
      }
    }
    setOrder({ name: section.name, categories: section.categories, category: section.category, positions: section.positions });
    orderRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="App" ref={menuRef}>
      <HeaderMenu hd={handleBackClick} />
      <Header />
      <div ref={serviceRef}>
        <Services ordering={ordering} />
      </div>
      <div ref={teachRef}>
        <Teaching ordering={ordering} />
      </div>
      <div ref={courseRef}>
        <Courses ordering={ordering} />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Carusel />
      </div>
      <div ref={orderRef}>
        <Order selSection={order} />
      </div>      
    </div>
  );
}

export default App;
