<template>
  <v-app>
    <v-navigation-drawer app clipped-right right hide-overlay floating stateless :value="menu" style="z-index: 3;" class="white pt-5">
      <v-layout column class="pt-5">
        <v-btn round flat class="pink--text" v-scroll-to="{el:'#step1'}">
          <b class="gradient-text">Selfie</b>
          <v-spacer></v-spacer>
          <v-icon class="gradient-text">add_a_photo</v-icon>
        </v-btn>
        <v-btn round flat class="pink--text" v-scroll-to="{el:'#step2'}">
          <b class="gradient-text">Measurements</b>
          <v-spacer></v-spacer>
          <v-icon class="gradient-text">import_export</v-icon>
        </v-btn>
        <v-btn round flat class="pink--text" v-scroll-to="{el:'#step3'}">
          <b class="gradient-text">Clothing</b>
          <v-spacer></v-spacer>
          <v-icon class="gradient-text">shopping_cart</v-icon>
        </v-btn>
        <v-btn round flat class="pink--text" v-scroll-to="{el:'#step4'}">
          <b class="gradient-text">Enly Tech</b>
          <v-spacer></v-spacer>
          <v-icon class="gradient-text">build</v-icon>
        </v-btn>
        <v-btn round flat class="pink--text" v-scroll-to="{el:'#step5'}">
          <b class="gradient-text">Try on</b>
          <v-spacer></v-spacer>
          <v-icon class="gradient-text">accessibility</v-icon>
        </v-btn>
        <v-btn round flat class="pink--text" v-scroll-to="{el:'#team'}">
          <b class="gradient-text">Founders</b>
          <v-spacer></v-spacer>
          <v-icon class="gradient-text">group</v-icon>
        </v-btn>
        <v-btn round flat class="pink--text" v-scroll-to="{el:'#signup'}">
          <b class="gradient-text">Sign up</b>
          <v-spacer></v-spacer>
          <v-icon class="gradient-text">email</v-icon>
        </v-btn>
      </v-layout>
    </v-navigation-drawer>

    <v-toolbar clipped-right app flat fixed scroll-off-screen class="z2" style="max-width:100vw;">
      <img height="48" v-scroll-to="'#home'" src="./assets/logo.png" class="fadeInLeft" style="filter: drop-shadow(0 0 1px #222)"/>
      <v-spacer></v-spacer>
      <v-btn class="pink--text" fixed style="top:0; right:1em;" large dark icon flat @click.stop="menu = !menu"> <v-icon class="gradient-text">{{ menu ? 'close' : 'menu' }}</v-icon> </v-btn>
    </v-toolbar>

    <!-- <v-layout column class="hidden-sm-and-down" style="position:fixed;right:0.5em;top:0.5em;z-index:10;">
      <v-btn round flat class="gradient hidden-sm-and-down white--text bounceInDown"> <b>Sign Up</b> </v-btn>
      <v-btn fab flat large dark class="mx-auto orange--text bounceInDown" style="animation-delay: 0.1s ;" v-scroll-to="{el:'#step1'}"><v-icon class="gradient-text">add_a_photo</v-icon></v-btn>
      <v-btn fab flat large dark class="mx-auto orange--text bounceInDown" style="animation-delay: 0.2s ;" v-scroll-to="{el:'#step2'}"><v-icon class="gradient-text">import_export</v-icon></v-btn>
      <v-btn fab flat large dark class="mx-auto orange--text bounceInDown" style="animation-delay: 0.3s ;" v-scroll-to="{el:'#step3'}"><v-icon class="gradient-text">shopping_cart</v-icon></v-btn>
      <v-btn fab flat large dark class="mx-auto orange--text bounceInDown" style="animation-delay: 0.4s ;" v-scroll-to="{el:'#step4'}"><v-icon class="gradient-text">build</v-icon></v-btn>
      <v-btn fab flat large dark class="mx-auto orange--text bounceInDown" style="animation-delay: 0.5s ;" v-scroll-to="{el:'#step5'}"><v-icon class="gradient-text">accessibility</v-icon></v-btn>
    </v-layout> -->

    <v-container fluid class="pa-0">
      <v-layout column>
        <v-flex id="home" class="height white text-xs-center">
          <v-flex xs12 md6 lg4 class="my-auto mx-auto" style="position: sticky; top: 50vh; transform: translateY(-50%)">
            <h1 class="mx-auto gradient-text text-pop-up-top" style="width:100px;">Enly</h1><br><p class="text-pop-up-top">Bringing the world of high-end fashion to your fingertips</p>
            <v-btn round flat class="gradient white--text" v-scroll-to="{el:'#signup'}"> <b>Sign Up</b> </v-btn><br><br>
          </v-flex>
          <v-btn large flat fab class="mx-auto gradient white--text bounceInUp" style="position: absolute; top: calc(100vh - 100px);" v-scroll-to="{el:'#nav', offset: 10}"><v-icon large>keyboard_arrow_down</v-icon></v-btn>
        </v-flex>
        <v-flex id="nav" class="gradient text-xs-center">
          <!-- <h2 class="mt-5 pl-5 white--tex" style="text-decoration: underline;">How it works</h2> -->
          <v-flex md10 offset-md1 lg8 offset-lg2 class="hidden-sm-and-down">
            <v-layout row wrap class="my-5 pb-4 white--text">
              <v-layout column style="width: 100px;" class="mx-auto">
                <v-btn fab flat large dark class="mx-auto" v-scroll-to="{el:'#step1'}"><v-icon>add_a_photo</v-icon></v-btn>
                <span>Take a selfie</span>
              </v-layout>
              <v-icon dark class="mt-4 pt-2">add</v-icon>
              <v-layout column style="width: 100px;" class="mx-auto">
                <v-btn fab flat large dark class="mx-auto" v-scroll-to="{el:'#step2'}"><v-icon>import_export</v-icon></v-btn>
                <span>Input Measurements</span>
              </v-layout>
              <v-icon dark class="mt-4 pt-2">add</v-icon>
              <v-layout column style="width: 100px;" class="mx-auto">
                <v-btn fab flat large dark class="mx-auto" v-scroll-to="{el:'#step3'}"><v-icon>shopping_cart</v-icon></v-btn>
                <span>Choose Clothing</span>
              </v-layout>
              <v-icon dark class="mt-4 pt-2">add</v-icon>
              <v-layout column style="width: 100px;" class="mx-auto">
                <v-btn fab flat large dark class="mx-auto" v-scroll-to="{el:'#step4'}"><v-icon>build</v-icon></v-btn>
                <span>Enly Tech</span>
              </v-layout>
              <v-icon dark class="mt-4 pt-2">drag_handle</v-icon>
              <v-layout column style="width: 100px;" class="mx-auto">
                <v-btn fab flat large dark class="mx-auto" v-scroll-to="{el:'#step5'}"><v-icon>accessibility</v-icon></v-btn>
                <span>Virtually try on</span>
              </v-layout>
            </v-layout>
          </v-flex>
        </v-flex>
        <v-flex id="about" class="text-xs-center ">
          <v-flex xs12 sm10 offset-sm1 md8 offset-md2 lg6 offset-lg3 class="py-5 px-3 white z1">
            <v-flex xs12 md8 offset-md2 class="my-5 pb-5">
              <v-img data-aos="zoom-in-up" src="">
                <v-layout column style="height: 100%;">
                  <h1 class="gradient-text mx-auto my-auto">About</h1>
                </v-layout>
              </v-img>
            </v-flex>
            <p data-aos="zoom-in-up" style="text-align:left ">Savvy Tech LLC is a fashion-tech company bringing the runway experience to your mobile device. Founded in 2017, we’ve spent the past two years developing ENLY, an application that allows users to try on and purchase designer clothing through an online marketplace. Using AR/VR technology and computer vision we can generate a personal avatar for you to try on clothing and see the fit. Our mission is to bridge the gap between the designer and the fashionable shopper.</p>
          </v-flex>
        </v-flex>
        <v-flex id="step1" class="height white py-4 px-4">
          <v-layout row wrap class="height">
            <v-flex xs12 md5 offset-md1 class="my-auto" style="">
              <v-flex md8 class="mx-auto">
                <h1 class="gradient-text mb-3 text-xs-center text-md-left">Selfie <v-icon large class="gradient-text pb-2">add_a_photo</v-icon></h1>
                <p>Using technology provided by VisionLabs we generate a 3-dimensional model of a user’s face from a single selfie. This face object is output in an animation-ready format through the implementation of machine learning, computer vision and computational geometry. Next, we attach the face model to a body object generated by our algorithm to provide the user with a personalized shopping experience.</p>
              </v-flex>
            </v-flex>
            <v-flex xs12 md5 class="my-auto" style="background: url(untitled.png) center no-repeat; background-size: cover;">
              <v-img data-aos="fade-up-left" style="max-height: 80vh;" contain src="step1.png"></v-img>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex id="step2" class="height white py-4 px-4">
          <v-layout row wrap class="height">
            <v-flex xs12 md5 offset-md1 class="my-auto hidden-sm-and-down" style="background: url(untitled.png) center no-repeat; background-size: cover;">
              <v-img data-aos="fade-up-right" style="max-height: 80vh;" contain src="step2.png"></v-img>
            </v-flex>
            <v-flex xs12 md5 class="my-auto" style="">
              <v-flex md8 class="mx-auto">
                <h1 class="gradient-text mb-3 text-xs-center text-md-left">Measurements <v-icon large class="gradient-text pb-2">import_export</v-icon></h1>
                <p>By collecting basic measurements from our users and running them through our Enly algorithms, we can use statistical modeling and machine learning to render accurate full-body avatars. We also allow users to input more detailed information for increased precision. In doing so, users can have 3D models that are real-to-life and perfect for finding a custom fit.</p>
              </v-flex>
            </v-flex>
            <v-flex xs12 md5 offset-md1 class="my-auto hidden-md-and-up" style="background: url(untitled.png) center no-repeat; background-size: cover;">
              <v-img data-aos="fade-up-right" style="max-height: 80vh;" contain src="step2.png"></v-img>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex id="step3" class="height white py-4 px-4">
          <v-layout row wrap class="height">
            <v-flex xs12 md5 offset-md1 class="my-auto" style="">
              <v-flex md8 class="mx-auto">
                <h1 class="gradient-text mb-3 text-xs-center text-md-left">Clothing <v-icon large class="gradient-text pb-2">shopping_cart</v-icon></h1>
                <p>Using a variety of 2D to 3D conversion techniques we are able to take images and patterns of real-life clothing created by our network of designers and convert them to 3D assets. These assets can then be tried on the user’s personal model to compare and contrast fits. We are able convert a range of clothing, from t-shirts to intricate dresses.</p>
              </v-flex>
            </v-flex>
            <v-flex xs12 md5 class="my-auto" style="background: url(untitled.png) center no-repeat; background-size: cover;">
              <v-img data-aos="fade-up-left" style="max-height: 80vh;" contain src="step3.png"></v-img>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex id="step4" class="height white py-4 px-4">
          <v-layout row wrap class="height">
            <v-flex xs12 md5 offset-md1 class="my-auto hidden-sm-and-down" style="background: url(untitled.png) center no-repeat; background-size: cover;">
              <v-img data-aos="fade-up-right" style="max-height: 80vh;" contain src="step4.png"></v-img>
            </v-flex>
            <v-flex xs12 md5 class="my-auto" style="">
              <v-flex md8 class="mx-auto">
                <h1 class="gradient-text mb-3 text-xs-center text-md-left">Enly Tech <v-icon large class="gradient-text pb-2">build</v-icon></h1>
                <p>Using cutting-edge anthropometric modeling we can provide our users with precise and accurate estimates of their own body proportions. The user is then encouraged to make any adjustments they see fit – whether they’re planning for the future, looking for a looser fit, or interested in re-sizing their model. Every user adjustment helps to improve our machine learning algorithm.</p>
              </v-flex>
            </v-flex>
            <v-flex xs12 md5 offset-md1 class="my-auto hidden-md-and-up" style="background: url(untitled.png) center no-repeat; background-size: cover;">
              <v-img data-aos="fade-up-right" style="max-height: 80vh;" contain src="step4.png"></v-img>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex id="step5" class="height white py-4 px-4">
          <v-layout row wrap class="height">
            <v-flex xs12 md5 offset-md1 class="my-auto" style="">
              <v-flex md8 class="mx-auto">
                <h1 class="gradient-text mb-3 text-xs-center text-md-left">Try On <v-icon large class="gradient-text pb-2">accessibility</v-icon></h1>
                <p>Finally, after all the setup is complete the user can try on clothing available from their favorite designers. Any designer with a fully functioning website is eligible to be in our gallery. Users can try on clothing, check out different accessories, and then share their outfits with their friends. No need to go to the store, the runway is in your pocket.</p>
              </v-flex>
            </v-flex>
            <v-flex xs12 md5 class="my-auto" style="background: url(untitled.png) center no-repeat; background-size: cover;">
              <!-- <v-flex data-aos="fade-up-left"  class="corner-wrapper hidden-xs-only" style="box-shadow: 0 0 15em -5.5em #E91E63; height: 70vh; width: 70%; margin-left: 15%;">
                <iframe src="https://enly-app.firebaseapp.com/" style="height: 100%; width: 100%;" frameborder="0"></iframe>
              </v-flex> -->
              <v-img data-aos="fade-up-left" style="max-height: 80vh;" contain src="step5.png"></v-img>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex id="team" class="text-xs-center height white z1">
          <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg8 offset-lg2 class="py-5 px-3 white z1">
            <v-flex xs12 md6 offset-md3 class="my-5 pb-5">
              <v-img data-aos="zoom-in-up" src="">
                <v-layout column style="height: 100%;">
                  <h1 class="gradient-text mx-auto my-auto">Founders</h1>
                </v-layout>
              </v-img>
            </v-flex>
            <v-layout row wrap class="pt-5 mt-5 mb-5">
              <v-flex v-for="m in members.slice(0, 2)" :key="m.name" class="ma-2">
                <v-card data-aos="zoom-in" class="ma-2 pt-5 grey lighten-4 elevation-0" style="border-radius: 1em !important; height: 27em;">
                  <v-img width="200" class="mx-auto" style="border-radius: 50%;" :src="m.img"></v-img>
                  <v-card-text>
                    <h3>{{ m.name }}</h3>
                    <span>{{ m.title }}</span>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn round flat color="pink" class="mx-auto" :href="m.linkedin">LinkedIn <v-icon>keyboard_arrow_right</v-icon></v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            <br>
            <v-layout row wrap>
            <v-hover data-aos="zoom-in-up" v-for="m in members.slice(2,17)" :key="m.name" class="hidden-sm-and-down" style="cursor: pointer;">
              <v-card slot-scope="{ hover }" class="my-3 mx-auto px-2 elevation-0" style="height: 12em; width:12em;">
                <v-img class="slave grey lighten-2" :aspect-ratio="1/1" :src="m.img" >
                  <v-expand-transition>
                    <div v-if="hover" class="d-flex white v-card v-card--reveal" style="height: 100%;" >
                      <v-layout column class="pt-5">
                        <b class="pink--text">{{ m.name }}</b>
                        <span>{{ m.title }}</span>
                        <v-btn v-if="m.linkedin" icon flat color="pink" class="mx-auto" :href="m.linkedin"><v-icon>link</v-icon></v-btn>
                      </v-layout>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
            <v-card data-aos="zoom-in-up" v-for="m in members.slice(3,17)" :key="m.name + 'e'" class="hidden-md-and-up grey lighten-4 mx-auto my-2 elevation-0" style="cursor: pointer; height: 11em; width: 11em;">
                <div class="py-3" style="height: 100%;" >
                  <v-layout column>
                    <v-avatar class="mx-auto" size="50">
                      <img :src="m.img" alt="alt">
                    </v-avatar>
                    <b class="pink--text">{{ m.name }}</b>
                    <span>{{ m.title }}</span>
                    <v-btn v-if="m.linkedin" icon flat color="pink" class="mx-auto" :href="m.linkedin"><v-icon>link</v-icon></v-btn>
                  </v-layout>
                </div>
            </v-card>
            </v-layout>
          </v-flex>
        </v-flex>
        <v-flex id="signup" class="height text-xs-center white z1" style="padding-bottom: 150px;">
          <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg8 offset-lg2 class="py-5 px-3 white z1">
            <v-flex xs12 md6 offset-md3 class="mb-5 pb-5">
              <v-img data-aos="zoom-in-up" src="">
                <v-layout column style="height: 100%;">
                  <h1 class="gradient-text mx-auto my-auto">Sign Up</h1>
                </v-layout>
              </v-img>
            </v-flex>
            <p v-if="!sent" style="text-align: justify; " class="mx-auto px-3 grey--text">
            We want to hear from you! Fill out the form below to let us know what you’re thinking.
            </p>
            <v-flex v-if="sent" class="text-xs-center px-3 grey--text" style="position: absolute; left: 50%; bottom: calc(50vh - 150px); transform: translate(-50%, -50%);">
              <h2 style="text-align: justify; " class="gradient-text">
              Thank you for signing up, we'll stay in contact!
              </h2>
              <br>
              <v-btn round depressed dark class="gradient" @click="first = '', last = '', email = '', company = '', more = '', sent = false"> <v-icon left>replay</v-icon> <b>Sign Up Again</b> </v-btn>
            </v-flex>
            <form v-if="!sent">
              <v-layout row wrap class="mb-5">
                <v-flex xs12 sm6 md6 class="px-3">
                  <v-text-field  label="First Name" name="First Name" v-model="first" box></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6 class="px-3">
                  <v-text-field  label="Last Name" name="Last Name" v-model="last" box></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6 class="px-3">
                  <v-text-field  label="Company Name" name="Company Name" v-model="company" prepend-inner-icon="group" box></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6 class="px-3">
                  <v-text-field  label="Email" name="Email" type="email" required v-model="email" prepend-inner-icon="email" box></v-text-field>
                </v-flex>
                <!-- <v-flex xs12 class="px-3">
                  <v-select box name="Subject"
                    :items="['Enly', 'Software Dev Inquiries']"
                    label="Why are you reaching out?"
                  ></v-select>
                </v-flex> -->
                <v-flex xs12 class="px-3">
                  <v-textarea box label="Tell us more:" name="More" v-model="more"></v-textarea>
                </v-flex>
                <v-btn @click.prevent="signUp(), sent = true" :disabled="!first || !last || !email" round depressed dark large class="mx-auto" color="gradient" v-if="!sent">Send</v-btn>
              </v-layout>
            </form>
            <v-flex class="mx-auto" style="position: absolute; bottom: 2em; left: 50%; transform: translateX(-50%);">
              <v-divider></v-divider>
              <h2 class="grey--text my-4">Contact Info</h2>
              <v-btn large depressed round class="px-3 grey white--text">
                <v-icon left>phone</v-icon>
                <span>(301)-351-6063</span>
              </v-btn>
              <v-btn large depressed round class="px-3 grey white--text" style="text-transform: lowercase !important;">
                <v-icon left>email</v-icon>
                <span>tsavransky@savvytechcompany.com</span>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      first: '',
      last: '',
      company: '',
      email: '',
      more: '',
      menu: false,
      sent: false,
      group1: false,
      group2: false,
      group3: false,
      members: [
        { name: 'Thomas Savransky', title: 'CEO / Co-Founder', linkedin: 'https://www.linkedin.com/in/thomas-savransky/', img: 'Tom.png' },
        // { name: 'Jacob Nelson', title: 'Co-Founder / Adviser', linkedin: 'link', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Igor Savchenko', title: 'CTO', linkedin: 'https://www.linkedin.com/in/igor-savchenko-43427b126/', img: 'Igor.png' },
        // { name: 'Nikita Krupin', title: 'Web Developer', linkedin: 'https://nikita-krupin.firebaseapp.com', img: 'https://nikita-krupin.firebaseapp.com/static/img/me.854c609.jpg' },
        // { name: 'Richard McHorgh', title: 'App Developer', linkedin: 'https://www.linkedin.com/in/richard-mchorgh-37360b125/', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        // { name: 'Valentyn Bolotin', title: '3D Developer', linkedin: '', img: 'https://scontent-sjc3-1.cdninstagram.com/vp/1d8bbc099d5eb29ce38526d33ec04505/5D164059/t51.2885-19/s150x150/50055471_619994218422235_7211194968373723136_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com' },
        // { name: 'Hayden', title: '3D Development', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        // { name: 'Matt', title: '3D Development', linkedin: 'https://www.linkedin.com/in/matthew-wong-48598b13a/', img: 'https://media.licdn.com/dms/image/C4D03AQGUoQH3LVgG7Q/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=F8OAgLYuvlTuUUXHQS-2W-dJQKrMA-OzzYieeSDIeis' },
        // { name: 'Roman', title: '3D Development', linkedin: 'https://www.linkedin.com/in/roman-grigoryev-60901b152/', img: 'https://media.licdn.com/dms/image/C5603AQEbmm0tTprCJw/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=oJ8xWUkMmgqkXur67iiMHfT-6704g8yrP_Jr_LaNk-I' },
        // { name: 'Kirill', title: '3D Development', linkedin: 'https://www.linkedin.com/in/kirill-stakhovsky-102a6a157/', img: 'https://media.licdn.com/dms/image/C4D03AQFLaH-u6NEBiA/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=HYE7ODNqap1BEjzkFW4l_PVcBgsnWu_WLqYs6ZKc6so' },
        // { name: 'Arthur', title: 'Business Development', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        // { name: 'Daniel Z', title: 'Business Development', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        // { name: 'Joseph', title: 'Business Development', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        // { name: 'Jason Horbourt', title: 'Research', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        // { name: 'Daniel Alborta', title: 'Research', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        // { name: 'Nameer', title: 'Research', linkedin: 'https://www.linkedin.com/in/nameer-qureshi-13b2b393/', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        // { name: 'Faraz Daneshpour', title: 'Research', linkedin: 'https://www.linkedin.com/in/faraz-daneshpour-21739793/', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        // { name: 'Wei Song', title: 'Visual Arts', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' }
      ],
      onboarding: 0
    }
  },
  methods: {
    signUp (){
      this.$store.dispatch('signUp', {first: this.first,last: this.last,company: this.company,email: this.email,more: this.more})
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
@import url('https://fonts.googleapis.com/css?family=Space+Mono');
*{
  font-family: 'Roboto Mono', sans-serif;
}
#app{
  background: white;
}
html, body{
  overflow-x: hidden;
}
#home {
  position: relative;
}
#home::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: url('https://images.unsplash.com/photo-1522897355400-c4fdec73d979?ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80') 0% 0% no-repeat; background-size: cover;
  filter: blur(4px) hue-rotate(0deg) grayscale(0%) brightness(80%);
}
.corner-wrapper {
  display: block;
  overflow: hidden;
  border-radius: 2em;
  transform: translateZ(0px);
  border: 1em solid #fff;
}
.gradient{
  background: rgb(233,30,99);
  background: linear-gradient(120deg, rgba(233,30,99,1) 0%, rgba(255,162,0,1) 100%);
}
.gradient-text{
  background: linear-gradient(120deg, rgba(233,30,99,1) 0%, rgba(255,162,0,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.shadow{
  text-shadow: 0 0 1em #222, 0 0 0.2em #222;
}
.v-list{
  border-radius: 2em !important;
}
.v-list__tile{
  border-radius: 2em !important;
}
.v-list__group{
  border-radius: 2em !important;
}
.v-card{
  border-radius: 50% !important;
}
.v-card--reveal {
  align-items: center;
  opacity: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  border-radius: 0 !important;
  transition-property: none;
}
.v-card--reveal:hover{
  opacity: 0.8;
}
.slave{
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-property: all;
}
.slave:hover{
  box-shadow: 0 0 5em -0.5em #E91E63;
  transform: scale(1.2);
}
table.v-table{
  border-radius: 2em !important;
  font-size: 1.5em;
}
.v-toolbar__content {
  padding-left: 5px;
}
@media only screen and (min-width: 960px) {
  p{
    font-size: 1.5em;
  }
  h1{
    font-size: 3em;
  }
  .z2{
    background: transparent !important;
  }
}
@media only screen and (max-width: 960px) {
  p{
    font-size: 1em;
  }
  h1{
    font-size: 2.5em;
  }
  .z2{
    background: white!important;
  }
}
.round{
  border-radius: 2em !important;
}
.height {
  min-height: 100vh !important;
}

::-webkit-scrollbar{
  width: 0;
}
::selection{
  background:transparent;
  color:#eee;
}
.member {
  transition-duration: .5s;
  transition-timing-function: ease-in-out;
}
.member:hover{
  box-shadow: 0 0 8em -1em #bbb;
}
.link {
  text-decoration: none;
  position: relative;
}
/* Kukuri */
.link--kukuri {
  text-transform: uppercase;
  font-weight: 900;
  overflow: hidden;
  line-height: 0.75;
}

.link--kukuri:hover {
  color: #E91E63 !important;
}

.link--kukuri::after {
  content: '';
  position: absolute;
  height: 6px;
  width: 100%;
  top: 50%;
  margin-top: -4px;
  right: 0;
  background: #E91E63 !important;
  border-radius:1em;
  -webkit-transform: translate3d(-111%,0,0);
  transform: translate3d(-111%,0,0);
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform .3s;
  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  transition-timing-function: cubic-bezier(0.7,0,0.3,1);
}

.link--kukuri:hover::after {
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}
.link--kukuri:hover::before {
  width: 100%;
}
.text-pop-up-top{-webkit-animation:tracking-in-expand .7s 1s both;animation:tracking-in-expand .7s 1s both}
@keyframes tracking-in-expand{0%{letter-spacing:-.5em;opacity:0}40%{opacity:.6}100%{opacity:1}}@keyframes tracking-in-expand{0%{letter-spacing:-.5em;opacity:0}40%{opacity:.6}100%{opacity:1}}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
            transform: none;
  }
}

.fadeInLeft {
  opacity: 0;
  animation: fadeInLeft 1s ease 1 forwards;
}
@keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
            transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
            transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
            transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
            transform: translate3d(0, 5px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
            transform: none;
  }
}

.bounceInDown{
  opacity: 0;
  animation: bounceInDown 1s ease 1 forwards;
}
@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
            transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-50%, -20px, 0);
            transform: translate3d(-50%, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(-50%, 10px, 0);
            transform: translate3d(-50%, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(-50%, -5px, 0);
            transform: translate3d(-50%, -5px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
            transform: translate3d(-50%, 0, 0);
  }
}
.bounceInUp {
  opacity: 0;
  animation: bounceInUp 1s 1.5s ease 1 forwards;
}
</style>
