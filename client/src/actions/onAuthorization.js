import Cookies from "js-cookie";
import apiService from "../services/api/apiService";

const onAuthorization = async data => {
  await apiService()({
    method: "post",
    url: "/customers/login",
    data,
  })
    .then(res => {
      if (!Cookies.get("token"))
        Cookies.set("token", res.data.token, { expires: 1 });

      console.log("Authorization successful!", res.data.token);
    })
    .catch(err => console.log(err));
};
export default onAuthorization;
