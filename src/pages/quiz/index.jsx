import { useState, useEffect } from "react";
import { transferedObjUzbek, transferedObjRus } from "../../objects";
import { Link } from "react-router-dom";
import { uzbekObj, rusObj } from "../../languageObj";
import "./styles.css";

const Quiz = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedOperator, setSelectedOperator] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [answObj, setAnswObj] = useState([])
  const [dataUser, setDataUser] = useState({}) // // all submited data goes here then we can send to the server
  const lang = localStorage.getItem('lang')
  const [langState] = useState(lang)
  const transferedObj = langState ? transferedObjRus : transferedObjUzbek

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    const initialDataUser = storedUsers ? { [storedUsers]: [answObj] } : {};
    setDataUser(initialDataUser);
    console.log(dataUser)
  }, [answObj, dataUser]);

  const handleOperatorChange = (event) => {
    setSelectedOperator(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], [value]: checked },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if at least one option is selected for each question
    const isEveryQuestionAnswered = transferedObj.every((item, index) => {
      const selectedVariants = selectedOptions[`question-${index}`] || {};
      return Object.values(selectedVariants).some((value) => value === true);
    });

    if (!isEveryQuestionAnswered) {
      if(langState) {
        setErrorMessage(rusObj.quizAlartQuest)
      }else {
        setErrorMessage(uzbekObj.quizAlartQuest)
      }
      return;
    }
    if (!selectedOperator) {
      if(langState) {
        setErrorMessage(rusObj.quizAlartOper);
      }else {
        setErrorMessage(uzbekObj.quizAlartOper)
      }
      
      return;
    }

    const answerObject = transferedObj.map((item) => {
      const selectedVariants = selectedOptions[`question-${transferedObj.indexOf(item)}`] || {};
      const answer = {};
      answer[item.question] = item.variants.reduce((acc, variant) => {
        acc[variant] = selectedVariants[variant] || false;
        return acc;
      }, {});
      return answer;
    });

    answerObject.push({ Operator: selectedOperator });
    setAnswObj([...answerObject])
    localStorage.setItem('users', '+9982323')
  };

  useEffect(() => {
    const errorTimer = setInterval(() => {
      setErrorMessage("");
    }, 2000);

    return () => {
      clearInterval(errorTimer);
    };
  }, []);

  return (
    <div className="quiz-container">
      <form onSubmit={handleSubmit}>
        <div className="quiz-h1">
          <h1>{langState ? rusObj.h1 : uzbekObj.h1}</h1>
        </div>
        {transferedObj.map((item, index) => (
          <div className="quiz-inner-container" key={index}>
            <div className="quiz-questions">
              <h3>{item.question}</h3>
            </div>
            {item.variants.map((variant, i) => (
              <div key={i} className="quiz-variants-div">
                <input
                  className="quiz-variants-input"
                  type="checkbox"
                  name={`question-${index}`}
                  value={variant}
                  checked={selectedOptions[`question-${index}`]?.[variant] || false}
                  onChange={handleCheckboxChange}
                />
                <label className="quiz-variants-label">{variant}</label>
              </div>
            ))}
          </div>
        ))}
        <select onChange={handleOperatorChange} name="selection" id="select" className="select" required>
          <option value="operatorni tanlang" key="0" hidden>{langState ? rusObj.operator : uzbekObj.operator}</option>
          <option value="Azamat" key="1">Azamat</option>
          <option value="Shahnoza" key="2">Shahnoza</option>
          <option value="Madina" key="3">Madina</option>
        </select>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <Link to='/thank-you'>
        <button type="submit" className="submit-button">
          {langState ? rusObj.submit : uzbekObj.submit}
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Quiz;