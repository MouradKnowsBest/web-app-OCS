<template>



<a href="/" ><h1 style="color: orange">Home</h1></a>


  <div class="movie-page">

    <div class="video-player" id="video" v-if="showVideo">
      <VideoPlayer
        manifestUrl="https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"
      />
   </div>


  <div class="example">

    <div class="img-and-play-btn-container">  
        <img
          :src="'https://statics.ocs.fr/' + route.img"
          alt=""
        />
    </div>

    <div class="fadedbox">

          <div class="title text">

            <h1 style="font-size: 5vw">{{ route.title }}
            <h2 >{{ route.subtitle }}</h2>
            <p style="font-size: 1.1vw">{{ pitch[0] }}</p>
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



        if (data.contents.pitch ) {
                    this.pitch.push(data.contents.pitch);

      }
      else{
                    this.pitch.push(data.contents.seasons[0].pitch);

      }

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
  margin-right: 42px;
  margin-left: 42px;
  margin-bottom: 180px;
  margin-top: 250px;


  position: relative;

  display: flex;
  flex-direction: column;
  border-radius: 12px;

  border: solid 1.5px rgba(5, 5, 5, 0.2); 
  box-shadow: 0 10px 15px rgba(199, 122, 7, 0.2);

  align-items: center;
  justify-content: center
}

.img-and-play-btn-container {
  position: relative;
}


.img-and-play-btn-container :hover{
  background-color: transparent;
  opacity: 1;
  border-radius: 12px;
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

  padding: 1rem 3rem 1rem 1rem;
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
  position: absolute;
   z-index: 9;
  margin-right: 180px;
  margin-left: 160px;
/* 
   max-height: 100%;
  min-width: 100%; */

}

.example {
        cursor: pointer;
        height: 94vh;
        position: relative;
        overflow: hidden;
        width: 96vw ;
        text-align: center;
        border-radius: 12px;

      }

.example .fadedbox {
        background-color: #666666;
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
 
        transition: all 300ms ease-out;
        opacity: 0;
        width: 95vw;
        height: 96vh;

        border-radius: 12px;
 }

 .example .img-and-play-btn-container img {
     border-radius: 12px;
    height: 94vh;
    width: 96vw;

 }

.example:hover .fadedbox {
        opacity: 0.8;
        width: 98vw;
        height:98vh;

            /* margin-left: 40px;
            margin-top:40px; */

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
