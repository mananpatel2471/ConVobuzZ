import React from 'react';
import '../../styles/error.css'; // import styles
import {getErrorState} from "../../state/global";

function ErrorPage() {
  const error = getErrorState();
  return (
    <div className="error-container">
      <h1 className="error-code">Error {error.code}</h1>
      <p className="error-message">{error.error}</p>
      <p className="error-description">
        <pre>{JSON.stringify(error.description)}</pre>
      </p>
      <pre className="stack-trace">{error.trace.map((e, i) => {
        return <div key={i}>
          {<p>{e}</p>}
        </div>
      })}</pre>
    </div>
  );
}

export default ErrorPage;
