const errorState = {
  code: undefined,
  error: undefined,
  description: undefined,
  trace: undefined
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
  if (!userState.token) {
    readUserData();
  }
  return {...userState};
}

export function setUser(email, name, mobile, token) {
  userState.email = email;
  userState.name = name;
  userState.token = token;
  userState.mobile = mobile;
  writeUserData(email, name, mobile, token)
}

export function readUserData() {
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const mobile = localStorage.getItem("mobile");

  setUser(email, name, mobile, token);
}

export function writeUserData(email, name, mobile, token) {
  localStorage.setItem("email", email);
  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
  localStorage.setItem("mobile", mobile);
}