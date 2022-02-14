<template>


  <div ref="videoContainer" class="shadow-lg mx-auto max-w-full size">

    <video
      id="video"
      ref="videoPlayer"
      class="video"
      :poster="posterUrl"
      autoplay
      preload="metadata"
    ></video>

  </div>


</template>

<script>
export default {
  props: {
    manifestUrl: {
      type: String,
      required: true,
    },
    licenseServer: {
      type: String,
      required: false,
    },
    posterUrl: {
      type: String,
      required: false,
      default: "",
    },
  },
  mounted() {
    const shaka = require("shaka-player/dist/shaka-player.ui.js");
    const player = new shaka.Player(this.$refs.videoPlayer);
    const ui = new shaka.ui.Overlay(
      player,
      this.$refs.videoContainer,
      this.$refs.videoPlayer
    );
    ui.getControls();

    console.log(Object.keys(shaka.ui));

    player.configure({
      drm: {
        servers: { "com.widevine.alpha": this.licenseServer },
      },
    });

    player
      .load(this.manifestUrl)
      .then(() => {
        console.log("The video has now been loaded!");
      })
      .catch(this.onError);
  },

  methods: {
    onError(error) {
      console.error("Error code", error.code, "object", error);
    },
  },
};
</script>

<style>
@import "../../node_modules/shaka-player/dist/controls.css";

.videoContainer{
  margin-right: 98vw;
  margin-left: 98vh;

   /* max-height: 100%;
  min-width: 100%; */
}


.video {
  display: flex;
    border: solid 1.5px rgba(5, 5, 5, 0.2); 
  box-shadow: 0 10px 15px rgba(199, 122, 7, 0.2);


}


</style>
