import { useState } from "react";
import "./styles.css";

const object = [
  {
    question: "How many planet in the solar system ?",
    variants: ["8", "9", "10"],
  },
  {
    question: "How many years old our universe ?",
    variants: ["140000 years old", "15000 years old", "both", "none of them"],
  },
  {
    question: "which animal the fastest animal in the world ?",
    variants: ["it is liopard", "turtois", "rabbit", "monkey", "me :)"],
  },
  {
    question: "second time which animal the fastest animal in the world ?",
    variants: [
      "second time it is liopard",
      "second time turtois",
      "second time rabbit",
      "second time monkey",
      "me :)",
    ],
  },
  { question: "aspof kpasd ofasd asd", variants: ["asdfjpaosfj", "safjoiasjf", "aosidjoiasd", "asmdoiams"] },
];

const Quiz = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
  
    const handleCheckboxChange = (event) => {
      const { name, value, checked } = event.target;
      setSelectedOptions((prevState) => ({
        ...prevState,
        [name]: { ...prevState[name], [value]: checked },
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const answerObject = object.map((item) => {
        const selectedVariants = selectedOptions[`question-${object.indexOf(item)}`] || {};
        const answer = {};
        answer[item.question] = item.variants.reduce((acc, variant) => {
          acc[variant] = selectedVariants[variant] || false;
          return acc;
        }, {});
        return answer;
      });
      console.log(answerObject);
    };
  
    return (
      <div className="quiz-container">
        <form onSubmit={handleSubmit}>
          <div className="quiz-h1">
            <h1>Rahmat sizga shuni to'ldirganiz uchun </h1>
          </div>
          {object.map((item, index) => (
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
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default Quiz;