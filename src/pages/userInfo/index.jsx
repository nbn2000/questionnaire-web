import "./styles.css";
import { Link, useLocation  } from "react-router-dom";
import { useState } from "react";
import { uzbekObj, rusObj } from "../../languageObj";
import { fetchedData } from "../../objects";

const UserInfo = () => {
  const location = useLocation()
  const user = location.pathname.replace('/user-info/', '')
  const chosenUserData = fetchedData[user];
  const questionsAndOptions = chosenUserData[0];
  const operatorInfo = chosenUserData[1];
  const lang = localStorage.getItem('lang')
  const [langState] = useState(lang)
 
  if (!chosenUserData || chosenUserData.length !== 2) {
    return <div>User data not found</div>;
  }

  return (
    <div className="quiz-container">
      <Link className="link-back" to='/list-user'>← {langState ? rusObj.back : uzbekObj.back}</Link>
      <div className="quiz-h1">
        <h1>{user}</h1>
      </div>
      <div className="quiz-h1">
        <h3>{operatorInfo.Operator}</h3>
      </div>
      {Object.keys(questionsAndOptions).map((question, index) => (
        <div key={index} className="quiz-inner-container">
          <div className="quiz-questions">
            <h3>{question}</h3>
          </div>
          {Object.entries(questionsAndOptions[question]).map(([variant, isCorrect], variantIndex) => (
            <div key={variantIndex} className="quiz-variants-div">
              <span className={isCorrect ? 'quiz-variants-span true' : 'quiz-variants-span false'}>
                {isCorrect === true ? 'O' : 'X'}
              </span>
              <label className="quiz-variants-label">{variant}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
