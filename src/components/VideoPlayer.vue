<template>
  <div ref="videoContainer" class="shadow-lg mx-auto max-w-full size">
    <video
      id="video"
      ref="videoPlayer"
      class="video"
      width="window.width"
      :poster="posterUrl"
      autoplay
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
@import "../../node_modules/shaka-player/dist/controls.css"; /* Shaka player CSS import */

.video {
  display: flex;
}

.size {
  width: auto;
  height: 800px;
}
</style>
