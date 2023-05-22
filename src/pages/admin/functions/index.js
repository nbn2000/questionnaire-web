import React, { useState } from 'react';

export const Ozbek = () => {
  const [uzbekObject, setUzbekObject] = useState([]) // all submited data goes here then we can send to the server
  const [containers, setContainers] = useState([{
    id: 1,
    inputs: [''],
    textarea: ''
  }]);  

  const handleAddInput = (containerId) => {
    setContainers(containers.map(container => {
      if (container.id === containerId) {
        return {
          ...container,
          inputs: [...container.inputs, '']
        }
      }
      return container;
    }));
  };

  const handleRemoveInput = (containerId, inputIndex) => {
    setContainers(containers.map(container => {
      if (container.id === containerId) {
        return {
          ...container,
          inputs: container.inputs.filter((_, index) => index !== inputIndex)
        }
      }
      return container;
    }));
  };

  const handleAddContainer = () => {
    const newContainerId = containers[containers.length - 1].id + 1;
    setContainers([...containers, { id: newContainerId, inputs: [''], textarea: '' }]);
  };

  const handleRemoveContainer = (containerId) => {
    if (containers.length > 1) {
      setContainers(containers.filter(container => container.id !== containerId));
    }
  };

  const handleTextareaChange = (containerId, e) => {
    setContainers(containers.map(container => {
      if (container.id === containerId) {
        return {
          ...container,
          textarea: e.target.value
        }
      }
      return container;
    }));
  };

  const handleInputChange = (containerId, inputIndex, e) => {
    setContainers(containers.map(container => {
      if (container.id === containerId) {
        return {
          ...container,
          inputs: container.inputs.map((value, index) => {
            if (index === inputIndex) {
              return e.target.value;
            }
            return value;
          })
        }
      }
      return container;
    }));
  };

  const handleSubmit = () => {
    const objectUz = containers.map(container => {
      return {
        question: container.textarea,
        variants: container.inputs.filter(input => input !== '') 
      }
    });
    setUzbekObject([...objectUz]);
    setContainers([{
      id: 1,
      inputs: [''],
      textarea: ''
    }])
    alert('Ozbek tili savollar saqlandi!')
  }


  return (
    <div className="quiz-container">
      <div className="quiz-h1">
          <h1>O'zbek tili</h1>
        </div>
      {containers.map(container => (
        <div className="quiz-inner-container" key={container.id}>
          <div className="quiz-questions">
          <textarea value={container.textarea} placeholder="savolar..." onChange={(e) => handleTextareaChange(container.id, e)} />
          </div>
          {container.inputs.map((value, index) => (
            <div className="quiz-variants-div" key={index}>
              <ul>
                <li>
              <input  placeholder="variantlar..."  type="text" value={value} onChange={(e) => handleInputChange(container.id, index, e)} /> <button className="input-button" onClick={() => handleRemoveInput(container.id, index)}>variantlar -</button>
              </li>
              </ul>
            </div>
          ))}
          <button className="input-button" onClick={() => handleAddInput(container.id)}>variantlar +</button>
          <button className="submit-button btn-plus" onClick={() => handleRemoveContainer(container.id)}>savolar -</button>
        </div>
      ))}
      <button className="submit-button btn-plus" onClick={handleAddContainer}>savolar +</button>
      <button className="submit-button btn-plus" onClick={handleSubmit}>Saqlash</button>

    </div>
  );
}



export const Rus = () => {
  const [rusObject, setRusObject] = useState([]) // all submited data goes here then we can send to the server

    const [containers, setContainers] = useState([{
      id: 1,
      inputs: [''],
      textarea: ''
    }]);  
  
    const handleAddInput = (containerId) => {
      setContainers(containers.map(container => {
        if (container.id === containerId) {
          return {
            ...container,
            inputs: [...container.inputs, '']
          }
        }
        return container;
      }));
    };
  
    const handleRemoveInput = (containerId, inputIndex) => {
      setContainers(containers.map(container => {
        if (container.id === containerId) {
          return {
            ...container,
            inputs: container.inputs.filter((_, index) => index !== inputIndex)
          }
        }
        return container;
      }));
    };
  
    const handleAddContainer = () => {
      const newContainerId = containers[containers.length - 1].id + 1;
      setContainers([...containers, { id: newContainerId, inputs: [''], textarea: '' }]);
    };
  
    const handleRemoveContainer = (containerId) => {
      if (containers.length > 1) {
        setContainers(containers.filter(container => container.id !== containerId));
      }
    };
  
    const handleTextareaChange = (containerId, e) => {
      setContainers(containers.map(container => {
        if (container.id === containerId) {
          return {
            ...container,
            textarea: e.target.value
          }
        }
        return container;
      }));
    };
  
    const handleInputChange = (containerId, inputIndex, e) => {
      setContainers(containers.map(container => {
        if (container.id === containerId) {
          return {
            ...container,
            inputs: container.inputs.map((value, index) => {
              if (index === inputIndex) {
                return e.target.value;
              }
              return value;
            })
          }
        }
        return container;
      }));
    };

    const handleSubmit = () => {
      const objectRu = containers.map(container => {
        return {
          question: container.textarea,
          variants: container.inputs.filter(input => input !== '') 
        }
        
      });
      setRusObject([...objectRu]);
      setContainers([{
        id: 1,
        inputs: [''],
        textarea: ''
      }])
      alert('Русский язычный вопросы сохранено!')
    }
  
    return (
      <div className="quiz-container">
        <div className="quiz-h1">
            <h1>Русский язык</h1>
          </div>
        {containers.map(container => (
          <div className="quiz-inner-container" key={container.id}>
            <div className="quiz-questions">
            <textarea value={container.textarea} placeholder="вопросы..." onChange={(e) => handleTextareaChange(container.id, e)} />
            </div>
            {container.inputs.map((value, index) => (
              <div className="quiz-variants-div" key={index}>
                <ul>
                  <li>
                <input  placeholder="варианты..."  type="text" value={value} onChange={(e) => handleInputChange(container.id, index, e)} /> <button className="input-button" onClick={() => handleRemoveInput(container.id, index)}>варианты -</button>
                </li>
                </ul>
              </div>
            ))}
            <button className="input-button" onClick={() => handleAddInput(container.id)}>варианты +</button>
            <button className="submit-button btn-plus" onClick={() => handleRemoveContainer(container.id)}>вопросы -</button>
          </div>
        ))}
        <button className="submit-button btn-plus" onClick={handleAddContainer}>вопросы +</button>
        <button className="submit-button btn-plus" onClick={handleSubmit}>Сохранить</button>
      </div>
    );
  }