import React, { useState } from "react";
import "./MockTest.css";

const MockTest = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = {
    python: [
      { q: "Which of the following is used to define a function in Python?", options: ["func", "def", "function", "funcdef"], correct: "def" },
      { q: "What is the output of: print(2**3)?", options: ["6", "8", "9", "4"], correct: "8" },
      { q: "Which of these is a Python data type?", options: ["int", "str", "list", "All of these"], correct: "All of these" },
      { q: "What is the output of: type(3.14)?", options: ["int", "float", "str", "None"], correct: "float" },
      { q: "Which library is used for data manipulation in Python?", options: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"], correct: "Pandas" },
    ],
    c: [
      { q: "Which of the following is used to print a message in C?", options: ["printf()", "print()", "echo()", "write()"], correct: "printf()" },
      { q: "Which operator is used for addition in C?", options: ["+", "-", "*", "/"], correct: "+" },
      { q: "Which keyword is used to declare constants in C?", options: ["constant", "const", "define", "final"], correct: "const" },
      { q: "Which header file is required for printf() function?", options: ["<stdio.h>", "<iostream>", "<conio.h>", "<stdlib.h>"], correct: "<stdio.h>" },
      { q: "Which loop is guaranteed to execute at least once in C?", options: ["for", "while", "do-while", "None"], correct: "do-while" },
    ],
    java: [
      { q: "Which keyword is used to declare a class in Java?", options: ["className", "class", "class extends", "define class"], correct: "class" },
      { q: "What is JVM?", options: ["Java Virtual Machine", "Java Virtual Memory", "Java Verification Method", "None"], correct: "Java Virtual Machine" },
      { q: "Which method is the entry point of a Java program?", options: ["start()", "main()", "begin()", "init()"], correct: "main()" },
      { q: "Which of these is not a Java data type?", options: ["int", "float", "double", "real"], correct: "real" },
      { q: "Which access modifier is most restrictive in Java?", options: ["public", "private", "protected", "default"], correct: "private" },
    ],
  };

  const handleLanguageSelect = (language) => {
    const shuffledQuestions = questions[language]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    setSelectedLanguage(language);
    setRandomQuestions(shuffledQuestions);
    setAnswers({});
    setShowResult(false);
    setScore(0);
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
  };

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

      {/* Display Questions */}
      {selectedLanguage && (
        <div className="questions-section">
          <h4>{selectedLanguage.toUpperCase()} Questions</h4>
          {randomQuestions.map((question, index) => (
            <div key={index} className="question-block">
              <p className="question-text">
                {index + 1}. {question.q}
              </p>
              {question.options.map((option, i) => (
                <label key={i} className="option-label">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    checked={answers[index] === option}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}

          {/* Submit Button */}
          <button className="submit-button" onClick={handleSubmit}>
            Submit Test
          </button>
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
