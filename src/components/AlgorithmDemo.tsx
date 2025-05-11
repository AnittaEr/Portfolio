import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import a11yDark from "./allyDark";
import "../styles/AlgorithmDemo.css";

interface AlgorithmProps {
  title: string;
  description: string;
  pythonCode: string;
  complexity: {
    time: string;
    space: string;
  };
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
}

export const AlgorithmDemo = ({
  title,
  description,
  pythonCode,
  complexity,
  examples,
}: AlgorithmProps) => {
  console.log("SyntaxHighlighter is:", SyntaxHighlighter);

  const [activeTab, setActiveTab] = useState<"code" | "examples">("code");

  return (
    <div className="algorithm-demo">
      <h3 className="algorithm-title">{title}</h3>
      <p className="algorithm-description">{description}</p>

      <div className="complexity-info">
        <div className="complexity-item">
          <span className="complexity-label">Time Complexity:</span>
          <span className="complexity-value">{complexity.time}</span>
        </div>
        <div className="complexity-item">
          <span className="complexity-label">Space Complexity:</span>
          <span className="complexity-value">{complexity.space}</span>
        </div>
      </div>

      <div className="algorithm-tabs">
        <button
          className={`tab-button ${activeTab === "code" ? "active" : ""}`}
          onClick={() => setActiveTab("code")}
          aria-selected={activeTab === "code"}
          role="tab"
        >
          Solution Code
        </button>
        <button
          className={`tab-button ${activeTab === "examples" ? "active" : ""}`}
          onClick={() => setActiveTab("examples")}
          aria-selected={activeTab === "examples"}
          role="tab"
        >
          Examples
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "code" && (
          <div className="code-container">
            <SyntaxHighlighter
              language="python"
              style={
                a11yDark as {
                  [key: string]: React.CSSProperties;
                }
              }
              showLineNumbers={true}
              wrapLines={true}
            >
              {pythonCode}
            </SyntaxHighlighter>
          </div>
        )}

        {activeTab === "examples" && (
          <div className="examples-container">
            {examples.map((example, index) => (
              <div key={index} className="example-item">
                <h4>Example {index + 1}</h4>
                <div className="example-content">
                  <div className="example-input">
                    <h5>Input:</h5>
                    <pre>{example.input}</pre>
                  </div>
                  <div className="example-output">
                    <h5>Output:</h5>
                    <pre>{example.output}</pre>
                  </div>
                  {example.explanation && (
                    <div className="example-explanation">
                      <h5>Explanation:</h5>
                      <p>{example.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgorithmDemo;
