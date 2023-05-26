import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchedData } from "../../objects";
import "./styles.css";


const ListUser = () => {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    const checkOperator = (data) => {
      const operators = {};
      for (const key in data) {
        const arrayName = data[key];
        const operator = arrayName[arrayName.length - 1]["Operator"];

        if (!operators[operator]) {
          operators[operator] = [];
        }
        operators[operator].push(key);
      }
      setOperators(operators);
    };

    checkOperator(fetchedData);
  }, []);

  const renderRows = () => {
    const operatorNames = Object.keys(operators);
    const maxLength = Math.max(...operatorNames.map((operator) => operators[operator].length));

    const rows = [];
    for (let i = 0; i < maxLength; i++) {
      console.log(i)
      rows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          {operatorNames.map((operator) => (
            <td key={operator}><Link to={`/user-info/${operators[operator][i] || ""}`}>{operators[operator][i] || ""}</Link></td>
          ))}
        </tr>
      );
    }

    return rows;
  };

  return (
    <div className="list-user-container">
      <div className="h1-div">
        <h1>Agentlar Tabeli</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            {Object.keys(operators).map((operator) => (
              <th key={operator}>{operator}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default ListUser;