import Vue from 'vue'
import Slider from '../components/slider/slider'

if (document.getElementById('slider')) {
    new Vue({
      el: "#slider",
      components: {
        "slider": Slider
      }
    });
}