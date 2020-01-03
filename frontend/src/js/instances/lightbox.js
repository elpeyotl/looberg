import Vue from "vue";
import Lightbox from "vue-easy-lightbox";

if (document.getElementById('lightbox')) {
    new Vue({
      el: "#lightbox",
      components: {
        lightbox: Lightbox
      },
      data() {
        return {
          visible: false,
          index: 0,
          viewport: null
        };
      },
      methods: {
        handleHide() {
          this.visible = false;
        },
        checkViewport() {
          const width = Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
          );
          this.viewport = width;
        },

        init() {
          window.addEventListener("resize", this.checkViewport);
          this.checkViewport();
        }
      },
      watch: {
        visible(value) {
          if (value) {
            if (this.viewport < 780 ) {
              this.visible = false
            }
          }
        }
      },
      mounted() {
        this.init();
        console.log("test");
      }
    });
}