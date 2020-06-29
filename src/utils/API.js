import axios from "axios";

require("dotenv").config();

export default {
  search: function (color) {
    return axios.get(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${color}+flower+macro&image_type=photo&orientation=horizontal&editors_choice=true&safesearch=true&per_page=6`
    );
  },
};
