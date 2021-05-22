import axios from "axios";
import * as CONSTS from "../utils/consts";

const authService = axios.create({
  baseURL: `${CONSTS.SERVER_URL}/auth`,
});

export function SIGNUP(body) {
  return authSeervice.post("/signup", body);
}

export function LOGIN(body) {
  return authService.post("/login", body);
}

export function LOGOUT(token) {
  return authService.delete("/logout", {
    headers: {
      authorization: token,
    },
  });
}

export function GET_ME(token) {
  return authService.get("/me", {
    headers: {
      authorization: token,
    },
  });
}
