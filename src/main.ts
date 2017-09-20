import * as Vue from 'vue';
import App from './components/App.vue';

const vm: Vue = new Vue({
    el: '#app',
    render: (h) => h(App),
});
