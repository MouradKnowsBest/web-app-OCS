<template>
  <div class="video-player" id="video" v-if="showVideo">
    <VideoPlayer
      manifestUrl="https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"
    />
  </div>

  <div class="movie-page">
    <router-link to="/"
      ><button
        style="
          color: white;
          background-color: #ff6600;
          font-size: 20pt;
          position: absolute;
          right: 9px;
        "
      >
        ←
      </button></router-link
    >

    <div class="text-block">
      <h1>
        {{ route.title }}
        <h2>{{ route.subtitle }}</h2>
      </h1>

      <p>{{ pitch[0] }}</p>
    </div>

    <div class="img-and-play-btn-container">
      <img
        :src="'https://statics.ocs.fr/' + route.img"
        style="width: 100%"
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
            style="font-size: 180px; color: orange"
          ></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "../components/VideoPlayer.vue";

// const VIDEO_URL = "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"

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
  position: relative;
}

.img-and-play-btn-container {
  position: relative;
}

.img-and-play-btn-container img {
  background-repeat: no-repeat;
  background-size: cover;
}

.img-and-play-btn-container :hover {
  background-color: #000;
  opacity: 0.4;
}
.img-and-play-btn-container:hover .overlay {
  opacity: 0.7;
  background-color: #fff;
}

.btn-play {
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.btn-play :hover {
  background-color: transparent;
}

.play-icon {
  background-color: transparent;

  font-size: 2rem;
  cursor: pointer;
  left: 12%;
  bottom: 35%;
  border: none;
}

h1 {
  color: rgb(17, 218, 124);
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
}

h2 {
  font-family: "Poppins", sans-serif;
  color: #eee;
  font-size: 15px;
  padding: 5px;
  font-size: 2rem;
}

h3 {
  margin: 40px 0 0;
}
p {
  font-family: "Poppins", sans-serif;
  color: #eee;
  display: flex;
  font-size: 1.5rem;

  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;

  margin-left: 550px;
  margin-right: 550px;
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
a:link {
  text-decoration: none;
}

.video-player {
  /* width: auto; */
}
</style>
