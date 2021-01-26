import Vue from 'vue'
import firebase from 'firebase';
import App from './App.vue'
import router from './router';
import Toasted from 'vue-toasted';

Vue.config.productionTip = false

Vue.use(Toasted)
let app = '';
const firebaseConfig = {
  apiKey: "AIzaSyCUZSToWdRzdUNwiy82bmORPOeKTI0vOtw",
  authDomain: "userauth-13356.firebaseapp.com",
  projectId: "userauth-13356",
  storageBucket: "userauth-13356.appspot.com",
  messagingSenderId: "899298952047",
  appId: "1:899298952047:web:ef833afc20605c186c1e9a",
  measurementId: "G-0LN299YSC4"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
});