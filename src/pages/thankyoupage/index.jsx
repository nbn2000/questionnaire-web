import { useState } from "react";
import "./styles.css";

const ThankYou = () => {
    const lang = localStorage.getItem('lang')
    const [langState] = useState(lang)

  return (
    <div className="quiz-container1">
        {langState ? 
        <div><h1>Спасибо Вам Большая</h1>
        <h3>Зато что тратили время для нас</h3></div> :
        <div><h1>Katta raxmat Sizga</h1>
        <h3>Biz uchun vaqtingizni ishlatganiz uchun</h3></div>}
    </div>
  );
};

export default ThankYou;