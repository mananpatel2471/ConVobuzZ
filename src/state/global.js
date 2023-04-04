const errorState = {
  code: 200,
  error: "An Error",
  description: "desc",
  trace: []
};


export function setErrorState(code, error, description, trace) {
  errorState.code = code;
  errorState.error = error;
  errorState.description = description;
  errorState.trace = trace;
}

export function getErrorState() {
  return {...errorState};
}