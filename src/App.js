import React from "react";
import { TruncateContent } from "./components/truncate/content/TruncateContent";
import { TruncateLine } from "./components/truncate/line/TruncateLine";
import { useLoremIpsum } from "./hooks/useLoremIpsum";
import "./styles.css";

export default function App() {
  const l1 = useLoremIpsum();
  const l2 = useLoremIpsum(3);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <TruncateContent lines={3} lineHeight={24}>
          <div>
            <span>{l2}</span>
            <a href="http://google.com">
              Extremely long link that should be truncated by default
            </a>
          </div>
        </TruncateContent>
        <div>
          <TruncateLine content={l1} maxWidth="500px" />
        </div>
        <div>
          <TruncateLine content={l1} maxWidth="500px" />
        </div>
      </div>
    </div>
  );
}
