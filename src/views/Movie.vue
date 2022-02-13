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
</div>


      <p>{{ pitch[0] }}</p>

<div class="example">


   <div class="img-and-play-btn-container">
      <img
        :src="'https://statics.ocs.fr/' + route.img"
        style="width: 100%"
        alt=""
      />

    </div>


      <div class="fadedbox">

        <div class="title text">
      <h1 style="font-size: 5vw">{{ route.title }}
        <h2 >{{ route.subtitle }}</h2>
        <div>
              <p style="font-size: 1.1vw">{{ pitch[0] }}</p>

          </div>

      </h1>

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


.img-and-play-btn-container :hover{
  background-color: transparent;
  opacity: 1;

}


.img-and-play-btn-container:hover .overlay {
  opacity: 0.7;
  background-color: #fff;
}

.title text .btn-play {

margin-top: 350px;


  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  transition: .5s ease;


  background-color: transparent;
  opacity: 0.4;

}

.title text .btn-play :hover {
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

  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;

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

    .example {
        cursor: pointer;
        height: 98vh;
        position: relative;
        overflow: hidden;
        width: 98vw ;
        text-align: center;
      }
      .example .fadedbox {
        background-color: #666666;
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        -webkit-transition: all 300ms ease-out;
        -moz-transition: all 300ms ease-out;
        -o-transition: all 300ms ease-out;
        -ms-transition: all 300ms ease-out;
        transition: all 300ms ease-out;
        opacity: 0;
        width: 96vw;
        height: 96vh;
        padding: 10px 20px;
      }
      .example:hover .fadedbox {
        opacity: 0.8;
      }
      .example .text {
        -webkit-transition: all 300ms ease-out;
        -moz-transition: all 300ms ease-out;
        -o-transition: all 300ms ease-out;
        -ms-transition: all 300ms ease-out;
        transition: all 300ms ease-out;
        transform: translateY(30px);
        -webkit-transform: translateY(30px);
      }
      .example .title {
        font-size: 2.5em;
        text-transform: uppercase;
        opacity: 0;
        transition-delay: 0.2s;
        transition-duration: 0.3s;

      }
      .example:hover .title,
      .example:focus .title {
        opacity: 1;
        transform: translateY(0px);
        -webkit-transform: translateY(0px);
      }


</style>
