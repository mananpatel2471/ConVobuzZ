const errorState = {
  code: 200,
  error: "An Error",
  description: "desc",
  trace: []
};


const userState = {
  email: "",
  name: "",
  mobile: -1,
  token: ""
}

export function setErrorState(code, error, description, trace) {
  errorState.code = code;
  errorState.error = error;
  errorState.description = description;
  errorState.trace = trace;
}

export function getErrorState() {
  return {...errorState};
}

export function getUser() {
  return {...userState};
}

export function setUser(email, name, mobile, token) {
  userState.email = email;
  userState.name = name;
  userState.token = token;
  userState.mobile = mobile;
}