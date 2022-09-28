import axios from "axios";

// JsonPlaceholder /users endpoint has 10 users
const RandNumMax10 = Math.floor(Math.random() * 10) + 1;
const API_URL = `https://jsonplaceholder.typicode.com/users/${RandNumMax10}`;

const fetchUser = () => {
  return axios
    .get(API_URL)
    .then((response) => {
      if (!response) {
        return new Error("No response from API server");
      }

      if (response.status !== 200) {
        return new Error(`Server returned status code ${response.status}`);
      }

      if (!response.data) {
        return new Error('Server response OK, but no "data" key found');
      }

      return response.data;
    })
    .catch((err) => console.log(err));
};

export default fetchUser;
