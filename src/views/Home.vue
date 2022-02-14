<template>
  <div>
    <router-link to="/" href="/"
      ><img class="logo-img" alt="App logo" src="../assets/logo.png"
    /></router-link>

    <form class="search-bar" @submit.prevent="SearchMovies()">
      <input
        type="text"
        placeholder="Effectuez une recherche"
        v-model="search"
      />
      <i class="el-icon-search"></i>

      <button type="submit" class="search-input">CHERCHER</button>
    </form>

    <div class="movies-list">
      <ul>
        <li class="movie-card" v-for="movie in movies" :key="movie.id">
          <div class="movie-info">
            <router-link
              :to="{
                name: 'Movie',
                params: { id: movie.id },
                query: {
                  subtitle: movie.subtitle,
                  title: movie.title[0].value,
                  img: movie.fullscreenimageurl,
                  detaillink: movie.detaillink,
                },
              }"
              class="movie-link"
              target="_blank"
            >
              <h1>{{ movie.title[0].value }}</h1>
            </router-link>

            <img
              :src="'https://statics.ocs.fr/' + movie.fullscreenimageurl"
              style="width: 75%"
              alt=""
            />
            <h2>{{ movie.subtitle }}</h2>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",

  setup() {
    const search = ref("");
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value != "") {
        console.log(search.value);
        fetch(
          `https://api.ocs.fr//apps/v2/contents?search=title=${search.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.contents;
            search.value = "";
          });

        console.log(movies);
      }
    };
    return {
      search,
      movies,
      SearchMovies,
    };
  },

  methods: {
    async getUserInput() {
      this.$emit("userInput", this.userInput);
    },
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

.app {
  background-color: rgb(57, 45, 109);
}

.app .container {
  display: flex;
  padding: 10px;
}
.logo-img {
  margin-bottom: 150px;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgb(57, 45, 109); */
  /* background-color: #D5D8F9; */
  padding: 10px;
}

.search-bar input {
  font-family: "Poppins", sans-serif;

  width: 800px;
  height: 50px;

  /* background-color: rgb(57, 45, 109); */

  /* color: #eee; */
  color: black;

  margin-right: 60px;
  border: 1px solid #22254b;
  justify-content: space-between;
  font-size: 25px;
  text-align: center;
}

.search-bar input :focus {
  background-color: #22254b;
  outline: none;
}

.search-bar button {
  font-family: "Poppins", sans-serif;
  height: 53px;
  width: 200px;
  border: none;
  font-size: 25px;

  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  /* color: rgb(57, 45, 109); */
  background-color: #eee;
  opacity: 0.8;
  padding: 10px;
}

::placeholder {
  /* Internet Explorer 10-11 */
  color: black;
  opacity: 0.35; /* Firefox */
}

.movie-info {
  /* background-color: #EDEFFE; */
  /* background-color:rgb(61, 66, 65); */
  background-color: white;
  opacity: 0.99;
  border: solid 1.5px rgba(5, 5, 5, 0.2);

  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  margin: 1rem;

  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding: 1px;
  border-radius: 12px 12px 0 0;
  border: solid 1px rgba(255, 255, 255, 0.2); */
  height: 350px;
  width: 380px;
  margin-bottom: 20px;
}

.movie-card {
  /* display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* padding: 1px;

  border-radius: 12px 12px 0 0;
  border: solid 1px rgba(255, 255, 255, 0.2);
  height: 400px;
  width: 380px;

  margin-bottom: 20px; */
}

.movie-info img {
  width: 500px;

  border-radius: 12px;
  box-shadow: 0 8px 10px rgba(160, 24, 24, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.2);
}

.movies-list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* background-color: rgb(57, 45, 109); */
  /* background-color: #D5D8F9; */
}

ul {
  list-style-type: none;
}

li {
  flex: 1 0 0 19%;
  color: white;
  margin-top: 20px;
  display: inline-block;
}

.play-icon {
  background-color: transparent;

  font-size: 2rem;
  cursor: pointer;
  left: 12%;
  bottom: 35%;
  border: none;
}

.overlay {
  height: 100%;
  width: 100%;
  opacity: 0.3;
  transition: 0.3s ease;
  background-color: transparent;
}

.container:hover .overlay {
  opacity: 0.7;
}

button {
  color: rgb(43, 19, 129);
  font-family: "Poppins", sans-serif;
}

h1 {
  /* color: rgb(17, 218, 124); */

  /* color: #3C4164; */
  color: black;

  font-size: 1vw;
  font-family: "Poppins", sans-serif;
  margin: 5px;
  margin-bottom: 10px;
}

h2 {
  font-family: "Poppins", sans-serif;
  color: orange;

  font-size: 18px;
  padding: 5px;
}

h3 {
  margin: 40px 0 0;
}

p {
  font-family: "Poppins", sans-serif;
  color: #eee;
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
}

a:link {
  text-decoration: none;
}

a {
  color: orange;
}
</style>