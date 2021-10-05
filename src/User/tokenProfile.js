import Cookies from "universal-cookie/es6";

const TokenProfile = (function () {
  let user_token = "";

  const cookies = new Cookies();
  const getToken = function () {
    user_token = cookies.get("user_token");
    return user_token;
  };

  const setToken = function (token) {
    user_token = token;
    cookies.set("user_token", token, { sameSite: true });
  };

  const removeToken = function () {
    cookies.remove("user_token");
  };

  return {
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken,
  };
})();

export default TokenProfile;
