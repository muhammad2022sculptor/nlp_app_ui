import React, { useState, useEffect } from "react";

const MainPage = () => {
  const [docName, setDocName] = useState(""); // State to store the selected document name
  const [question, setQuestion] = useState(""); // State to store the entered question
  const [answer, setAnswer] = useState(""); // State to store the retrieved answer
  const [docOptions, setDocOptions] = useState([]); // State to store the document options

  useEffect(() => {
    const fetchDocumentNames = async () => {
      const response = await fetch("http://localhost:5000/unique_doc_names");
      const data = await response.json();
      setDocName(data.doc_names[0])
      setDocOptions(data.doc_names); // Update the document options state with the retrieved document names
    };

    fetchDocumentNames();
  }, []);

  // Function to handle sending the question as a request
  const handleQuestionSubmit = async () => {
    setAnswer("Loading...");  // Set the answer state to "Loading..." when the question is submitted
    const response = await fetch("http://localhost:5000/answer_question", {
      method: "POST",
      body: JSON.stringify({ doc_name: docName, question: question }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data)
    setAnswer(data.answers.join(", ")); // Update the answer state with the retrieved answer
  };

  return (
    <div>
      <div>
        <label>Select Document Name:</label>
        <select value={docName} onChange={(e) => setDocName(e.target.value)}>
          {docOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Enter Your Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <button onClick={handleQuestionSubmit}>Ask Question</button>
      <div>
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default MainPage;
