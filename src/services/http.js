import axios from "axios";

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie",
  timeout: 1000,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmMzMmExNWMxODU3YzU4MWMzYTRhNGVlMDdmNmYyZSIsInN1YiI6IjVmY2E0ZWY4YTU3NDNkMDA0MDA0MDAzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPSLPQTp5akyBbLIKEge6ln8Y8sFFUwghrEgcBqxMlg"
  }
});

export default client;
