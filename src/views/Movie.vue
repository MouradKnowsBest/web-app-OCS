<template>
  <div class="movie-page">
    <div class="video-player" id="video" v-if="showVideo">
      <VideoPlayer
        manifestUrl="https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"
      />
    </div>

    <router-link to="/"
      ><button style="color: white; background-color:red; font-size:20pt">
        BACK HOME
      </button></router-link
    >

    <h1>{{ route.title }}</h1>

    <img
      :src="'https://statics.ocs.fr/' + route.img"
      style="width: 30%"
      alt=""
    />
    <div class="btn-play">
      <button
        href="#"
        class="play-icon"
        title="Video Play"
        v-on:click="clickToSowVideo()"
      >
        <i
          class="fa fa-play-circle"
          style="font-size: 48px; color: orange; background: transparent"
        ></i>
      </button>
    </div>

    <h2>{{ route.subtitle }}</h2>

    <p>{{ pitch[0] }}</p>
  </div>
</template>

<script>
import VideoPlayer from "../components/VideoPlayer.vue";

export default {
  name: "Movie",

  components: { VideoPlayer },

  data() {
    return {
      route: this.$route.query,
      pitch: [],
      showVideo: false,
    };
  },

  methods: {
    getPitchData() {
      fetch(`https://api.ocs.fr/` + this.route.detaillink)
        .then((response) => response.json())
        .then((data) => {
          this.pitch.push(data.contents.pitch);
        });
    },

    clickToSowVideo() {
      console.log(this.showVideo);
      this.showVideo = true;
      console.log(this.showVideo);
    },
  },

  mounted() {
    this.getPitchData();
  },

  props: ["id", "subtitle", "img", "title", "detaillink"],
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

.movie-page {
  background-color: #22254b;
  display: flex;
  flex-direction: column;
}

.search-bar input :focus {
  background-color: #22254b;
  outline: none;
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
  background-color: rgb(57, 45, 109);
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

  margin-left: 550px;
  margin-right: 550px;
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
