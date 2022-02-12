<template>

<!-- 

  <div class="container">
    <ul>
      <li
        class="movie-card"
        v-for="(movie, index) in movies"
        :key="index"
      >
         <MovieCard
            :item="item"
            :pitchData="pitchData"
            :index="index"
            :results="results"
            :movieData="movieData"
          /> 

        USER INPUT : {{movie}}
      </li>
    </ul>
  </div> -->

    <div class="movies-list">
    <ul>
      <li
        class="movie-card"
        v-for="movie in movies"
        :key="movie.id"
      >
        <!-- <MovieCard
            :item="item"
            :pitchData="pitchData"
            :index="index"
            :results="results"
            :movieData="movieData"
          /> -->
        <div class="movie-info">

          <h1>  {{movie.title[0].value}} </h1>
          <img 
              :src="'https://statics.ocs.fr/' + movie.fullscreenimageurl"
              style="width: 75%"
              alt=""
              />
               <h1>  {{movie.subtitle}} </h1>
         
        </div>

      </li>
    </ul>

        <!-- MOVIES : {{movies}} -->


  </div>


</template>

<script>
// import axios from "axios";

export default {
  name: "getData",
//   props: ["userInput"],

  mounted() {
      console.log("get data loaded !!!!")

    // mounted(userInput) {
   
    // this.getData(userInput);
    // this.getMovieData(userInput);
  },

//   data() {
//     return {
//       // isHidden : true,
//       results: { movieData: [] },
//     //   userInput: '',
//     };
//   },

  
//   props: {
//   movies: Object,
// },

//   methods: {
//     // async getData(userInput) {
//     //   await this.getMovieData(userInput);
//     //   console.log(userInput);

//     // //   this.getPitchData();
//     // },

//     async getMovieData(searchTerm) {
//         console.log(searchTerm)
//       return axios
//         .get(`https://api.ocs.fr/apps/v2/contents?search=title%${searchTerm}`)
//         .then((response) => {
//           this.results.movieData = response.data.contents;
//           console.log(response.data.contents);
//         })
//         .catch((error) => console.log(error));
//     },
//   },


};
</script>
