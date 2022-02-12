<template>

  <!-- <div class="search-bar">
     <input type="text" v-model="search" placeholder="Votre recherche" />
     <input type="text" placeholder="Votre recherche" /> 

     <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="What are you looking for?" v-model="search" />
      <input type="submit" value="Search" />
    </form> 
     <input type="submit" value="Search" />
    <div class="button">
      <button @click="getUserInput">CHERCHER</button>
    </div>
    <br />
    <br />
  </div> -->

    <form @submit.prevent="SearchMovies()" class="search-bar">
      <input type="text" placeholder="Votre recherche" v-model="search" />
      <input type="submit" value="CHERCHER" />
    </form>

    <div class="movies-list">
    <ul>
      <li
        class="movie-card"
        v-for="movie in movies"
        :key="movie.id"
      >

      <div class="movie-info">
      <router-link
        :to="{
          name: `/MoviePage/${movie.id - 1}`,
          path: `/MoviePage/${movie.id - 1}`,
          query: {
            results: results,
            item: item,
            index: index,
            pitchData: pitchData,
            movieData: movieData
          }
        }"
        target="_blank"
      >
          <h1>  {{movie.title[0].value}} </h1>
      </router-link>
          <img 
              :src="'https://statics.ocs.fr/' + movie.fullscreenimageurl"
              style="width: 75%"
              alt=""
              />
               <h2>  {{movie.subtitle}} </h2>
         
        </div>

      </li>
    </ul>

  </div>

</template>

<script>
import { ref } from 'vue';

export default {

  name: "getUserInput",

//   props: {
//    movies: Object
//  },
  // props: ['movies'],

 setup () {
    const search = ref("");
    const movies = ref([]);

    const SearchMovies = () => {

      
      if (search.value != "") {

        console.log(search.value)
        fetch(`https://api.ocs.fr//apps/v2/contents?search=title=${search.value}`)

        // fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(data => {

            movies.value = data.contents;
            search.value = "";
          });

          console.log(movies)


      }



    }
    return {
      search,
      movies,
      SearchMovies
    }
  },


  methods: {
    async getUserInput() {
      // const searchTerm = '3DGame' //this.search
      // const userInput = this.search;

      this.$emit('userInput', this.userInput)
      // console.log(userInput)
      // return userInput;

      // await this.getMovieData(searchTerm)
      // this.getPitchData()
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

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(57, 45, 109);
  padding: 10px;
}

.search-bar input {
  width: 500px;
  height: 35px;
  margin-right: 10px;
  background-color: transparent;
  border: 1px solid #22254b;
}

::placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(255, 255, 255);
  opacity: 0.35; /* Firefox */
}

.search-bar input {
  color: #ffffff;
  justify-content: space-between;
  font-size: 25px;
  text-align: center;
}

.search-bar input :focus {
  background-color: #22254b;
  outline: none;
}

.search-bar button {
  width: 100px;
  height: 41px;
}

.app .container {
  display: flex;
  padding: 10px;
}

.movie-card {
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1px;

  border-radius: 12px 12px 0 0;
  border: solid 1px rgba(255, 255, 255, 0.2);

  width: 480px;

  margin-bottom: 10px;
}

.movie-img {
  width: 500px;
}

.movies-list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color:  rgb(57, 45, 109);
}

ul {
  list-style-type: none;
}

li {
  flex: 1 1 0 19%;
  color: white;
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
  color: rgb(17, 218, 124);
  font-size: 20px;
  font-family: "Poppins", sans-serif;
}

h2 {
  font-family: "Poppins", sans-serif;
  color: #eee;
  font-size: 15px;
  padding: 5px;
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

.video-player {
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: orange;
}


</style>
