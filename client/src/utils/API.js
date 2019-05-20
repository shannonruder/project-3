import axios from "../../node_modules/axios";

// Export an object containing methods we'll use for accessing the ticketMaster API

export default {
  getIndieArtistEvents: function () {
    return axios.get("http://localhost:3001/api/events/ticketMaster ");
  },


  getIndieArtists: function () {
    return axios.get("http://localhost:3001/api/artists/ticketMaster ");
  },

  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', { username: username, email: email, password: password });
  },
  searchArtist: (name) => {
    return axios.get(`http://localhost:3001/api/events/artist/${name}`);
   },
  addFavorite: (event, id) => {
    return axios.post(`http://localhost:3001/api/users/favorites/${id}`, event)
 
  }
};
