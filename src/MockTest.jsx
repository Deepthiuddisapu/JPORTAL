import React, { useState, useEffect } from 'react';
import './MockTest.css';

const MockTest = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(300); // 5 minutes timer
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const questions = {
    python: [
      { q: "Which of the following is used to define a function in Python?", options: ["func", "def", "function", "funcdef"], correct: "def" },
      { q: "What is the output of: print(2**3)?", options: ["6", "8", "9", "4"], correct: "8" },
      { q: "Which of these is a Python data type?", options: ["int", "str", "list", "All of these"], correct: "All of these" },
      { q: "What is the output of: type(3.14)?", options: ["int", "float", "str", "None"], correct: "float" },
      { q: "Which library is used for data manipulation in Python?", options: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"], correct: "Pandas" },
      { q: "Which keyword is used to create a class in Python?", options: ["class", "def", "object", "function"], correct: "class" },
      { q: "What does 'self' represent in Python?", options: ["A variable", "A function", "An instance of the class", "None"], correct: "An instance of the class" },
      { q: "What is the correct syntax to output 'Hello World' in Python?", options: ["echo 'Hello World'", "print('Hello World')", "print[Hello World]", "echo[Hello World]"], correct: "print('Hello World')" },
      { q: "Which of the following is not a valid Python data type?", options: ["int", "float", "list", "char"], correct: "char" },
      { q: "What is the output of: print(5 % 2)?", options: ["1", "2", "0", "3"], correct: "1" }
    ],
    c: [
      { q: "Which of the following is used to print a message in C?", options: ["printf()", "print()", "echo()", "write()"], correct: "printf()" },
      { q: "What does 'C' stand for in programming?", options: ["Code", "Character", "Language C", "None"], correct: "None" },
      { q: "Which operator is used for assignment in C?", options: ["=", "==", "+=", "*="], correct: "=" },
      { q: "What is the size of an int in C?", options: ["4 bytes", "2 bytes", "1 byte", "8 bytes"], correct: "4 bytes" },
      { q: "Which function is used to dynamically allocate memory in C?", options: ["malloc()", "calloc()", "free()", "alloc()"], correct: "malloc()" },
      { q: "Which of these is a loop in C?", options: ["while", "for", "do-while", "All of these"], correct: "All of these" },
      { q: "What does '&&' operator do in C?", options: ["Logical AND", "Logical OR", "Bitwise AND", "Bitwise OR"], correct: "Logical AND" },
      { q: "Which header file is required for input/output in C?", options: ["stdio.h", "stdlib.h", "math.h", "string.h"], correct: "stdio.h" },
      { q: "How do you declare a variable in C?", options: ["var int x;", "int x;", "int x = 0;", "declare x;"], correct: "int x;" },
      { q: "What is the default value of an uninitialized local variable in C?", options: ["0", "null", "undefined", "garbage value"], correct: "garbage value" }
    ],
    java: [
      { q: "Which of these is used to define a class in Java?", options: ["class", "object", "def", "new"], correct: "class" },
      { q: "Which method is the entry point of a Java program?", options: ["main()", "start()", "init()", "run()"], correct: "main()" },
      { q: "Which of these is not a valid data type in Java?", options: ["int", "float", "char", "string"], correct: "string" },
      { q: "Which of these is used for multi-threading in Java?", options: ["Thread", "Runnable", "Executor", "All of these"], correct: "All of these" },
      { q: "Which keyword is used to inherit a class in Java?", options: ["extends", "implements", "inherits", "super"], correct: "extends" },
      { q: "What is the size of a float in Java?", options: ["4 bytes", "8 bytes", "16 bytes", "2 bytes"], correct: "4 bytes" },
      { q: "Which of the following is the default value of a boolean variable in Java?", options: ["true", "false", "null", "undefined"], correct: "false" },
      { q: "Which collection class is part of the Java Collections Framework?", options: ["ArrayList", "LinkedList", "HashMap", "All of these"], correct: "All of these" },
      { q: "What is the default value of an integer in Java?", options: ["0", "1", "null", "undefined"], correct: "0" },
      { q: "Which method is used to compare two strings in Java?", options: ["equals()", "compare()", "==", "compareTo()"], correct: "equals()" }
    ],
    sql: [
      { q: "Which SQL statement is used to extract data from a database?", options: ["SELECT", "GET", "EXTRACT", "FETCH"], correct: "SELECT" },
      { q: "What is the correct syntax to update data in a table in SQL?", options: ["UPDATE table SET column = value", "MODIFY table SET column = value", "INSERT INTO table SET column = value", "ALTER table SET column = value"], correct: "UPDATE table SET column = value" },
      { q: "Which SQL clause is used to filter records?", options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"], correct: "WHERE" },
      { q: "Which SQL keyword is used to sort the result set?", options: ["ORDER BY", "SORT", "GROUP BY", "FILTER"], correct: "ORDER BY" },
      { q: "Which of the following is used to delete a record from a table?", options: ["DELETE", "REMOVE", "DROP", "CLEAR"], correct: "DELETE" },
      { q: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Structured Question Language", "None of these"], correct: "Structured Query Language" },
      { q: "What is the default sorting order in SQL?", options: ["ASC", "DESC", "None", "Auto"], correct: "ASC" },
      { q: "Which SQL statement is used to create a table?", options: ["CREATE TABLE", "NEW TABLE", "MAKE TABLE", "BUILD TABLE"], correct: "CREATE TABLE" },
      { q: "Which SQL statement is used to return the highest value of a column?", options: ["MAX()", "HIGHEST()", "LARGEST()", "TOP()"], correct: "MAX()" },
      { q: "Which SQL clause is used to group rows that have the same values?", options: ["GROUP BY", "ORDER BY", "HAVING", "WHERE"], correct: "GROUP BY" }
    ]
  };

  const handleLanguageSelect = (language) => {
    const shuffledQuestions = questions[language].sort(() => 0.5 - Math.random()).slice(0, 10);
    setSelectedLanguage(language);
    setRandomQuestions(shuffledQuestions);
    setAnswers({});
    setShowResult(false);
    setScore(0);
    setTimer(300); // Reset timer
    setIsTimerRunning(true);
  };

  const handleAnswerChange = (index, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: answer,
    }));
  };

  const handleSubmit = () => {
    let totalScore = 0;

    randomQuestions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        totalScore += 10;
      }
    });

    setScore(totalScore);
    setShowResult(true);
    setIsTimerRunning(false); // Stop timer after submission
  };

  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      handleSubmit(); // Auto submit when time runs out
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  return (
    <div className="mock-test-container">
      <h1>Mock Programming Test</h1>

      {/* Language Selection */}
      <div className="language-selection">
        {Object.keys(questions).map((language) => (
          <button
            key={language}
            className="language-button"
            onClick={() => handleLanguageSelect(language)}
          >
            {language.charAt(0).toUpperCase() + language.slice(1)}
          </button>
        ))}
      </div>

      {/* Timer */}
      {isTimerRunning && <div className="timer">Time Left: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</div>}

      {/* Display Questions */}
      {selectedLanguage && (
        <div className="questions-section">
          <h4>{selectedLanguage.toUpperCase()} Questions</h4>
          <form>
            {randomQuestions.map((question, index) => (
              <div key={index} className="question-block">
                <p className="question-text">{index + 1}. {question.q}</p>
                {question.options.map((option, i) => (
                  <div
                    key={i}
                    className={`option-label ${answers[index] === option ? (option === question.correct ? 'correct' : 'incorrect') : ''}`}
                  >
                    <input
                      type="radio"
                      value={option}
                      name={`question-${index}`}
                      onChange={() => handleAnswerChange(index, option)}
                      checked={answers[index] === option}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            ))}
            <button type="button" className="submit-button" onClick={handleSubmit}>
              Submit Test
            </button>
          </form>
        </div>
      )}

      {/* Display Result */}
      {showResult && (
        <div className="result-section">
          <h4>Your Score: {score}/{randomQuestions.length * 10}</h4>
        </div>
      )}
    </div>
  );
};

export default MockTest;
