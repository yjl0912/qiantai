import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import  abc from '../assets/images/abc.gif'

Vue.use(VueLazyload,{
    loading:abc
} )