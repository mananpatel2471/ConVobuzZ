import React from 'react';
import '../../styles/error.css'; // import styles
import {getErrorState} from "../../state/global";

function ErrorPage() {
  const error = getErrorState();
  console.log(error)
  return (
    <div className="error-container">
      <h1 className="error-code">Error {error.code}</h1>
      <p className="error-message">{error.error}</p>
      <p className="error-description">{error.description}</p>
      <pre className="stack-trace">{error.trace.map((e, i) => {
        return <div key={i}>
          {e}
        </div>
      })}</pre>
    </div>
  );
}

export default ErrorPage;
