import React from 'react';
import Book from '../assets/Book.svg';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import ReadMorePopup from '../components/ReadMore';

function Books() {
  return (
    <>
      <Nav />
      <div className="button-container">
      <Link to="https://www.amazon.com/Stolen-Flame-Seven-Chamber-Book-ebook/dp/B083KCLHD2/ref=sr_1_1?crid=1H1CKGZ0ZHCBV&keywords=dw+marshall&qid=1687169412&sprefix=dw+m%2Caps%2C127&sr=8-1"><button className="buy-button" >Buy Book</button></Link>
      <ReadMorePopup />
      </div>
      <div className="book">
      <img src={Book} alt="Book" />
      </div>
    </>
  );
}

export default Books;
