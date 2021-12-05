<template>
  <q-card
    style="width: 30vw; height: auto; border-radius: 0"
    @click="dialog = true"
  >
    <div
      class="color-bar"
      :style="{
        'background-color': course.color,
        'border-radius': '0px 0px 100px 100px',
      }"
    ></div>
    <img :src="course.image" class="q-pa-lg" style="padding-bottom: 5px" />
    <q-card-section class="q-pa-md" style="padding-left: 10px">
      <div
        v-if="course.title.split(' ')[0] != null"
        class="text-h7"
        style="font-size: 11px"
      >
        {{ course.title.split(" ")[0] }}
      </div>
      <div
        v-if="course.title.split(' ')[1] != null"
        class="text-h7"
        style="font-size: 11px"
      >
        {{ course.title.split(" ")[1] }}
      </div>
      <Progress
        :progress="course.progress"
        :steps="course.steps"
        :color="course.color"
      />
    </q-card-section>
  </q-card>

  <q-dialog
    v-model="dialog"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <div class="dialog bg-white q-pa-md">
      <div class="course-overview-top">
      <div style="display: flex; justify-content: none">
        <div
          class="text-h6 text-black"
          style="
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
            position: absolute;
          "
        >
          {{ course.title }}
        </div>
        <q-btn
          v-close-popup
          class="text-black q-pa-none q-ma-none"
          dense
          flat
          style="align-self: center; height: 32px"
          icon="r_arrow_back"
        >
        </q-btn>
      </div>

      <img
        :src="course.image"
        style="
          width: 100%;
          padding-left: 40%;
          padding-right: 40%;
          padding-top: 5%;
          padding-bottom: 0;
        "
      />

      <img
        src="images/course-overview.svg"
        style="
          width: 100%;
          padding: 10px;
          margin-bottom:0px;
        "
      />
    </div>
    
    <div class="course-overview-bottom">
      <p class="color_cgray">A framework for understanding the world around us, from sports to science.</p>
      <div class="continue-course-btn"  @click="dialogCourse = true">
        <span>CONTINUE COURSE</span>
      </div>
      <p class="color_cgray" style="font-size:12px">Lorem ipsum dolor sit amet, consectetur. Faucibus A mattis dapibus fermentum amet justo quisque dictum.
        <br><br>Blandit senim euismod viverra amet vel est. adipiscing arcu pellentesque viverra gravida egestas fermentum, rhoncus.</p>
      <div class="row interactive">
        <div class="col">
          <span>15</span>
          <span class="color_cgray">Interactive quizzes</span>
        </div>
        <div class="col">
          <span>60+</span>
          <span class="color_cgray">Concepts and Ecercises</span>
        </div>
      </div>
    </div>
  </div>
  </q-dialog>
   <q-dialog
    v-model="dialogCourse"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
  <div class="courseDialog">
    <section>
<div style="position:relative;">
   <q-btn
          v-close-popup
          class="text-black q-pa-none q-ma-none"
          dense
          flat
          style="align-self: center; height: 32px; position: absolute;"
          icon="r_arrow_back"
        >
        </q-btn>
  <div class="dialog bg-white q-pa-md">
 <q-tabs
        v-model="courseTab"
        no-caps
        dense
        class="courseTabBar"
      >
        <q-tab name="1" :style="courseTab > 1 ? 'background:#141414;':''"  />
        <q-tab name="2" :style="courseTab > 2 ? 'background:#141414;':''" />
        <q-tab name="3" :style="courseTab > 3 ? 'background:#141414;':''" />
        <q-tab name="4" :style="courseTab > 4 ? 'background:#141414;':''" />
        <q-tab name="5"  />
      </q-tabs>
      </div>
  </div>
      </section>
     <section class="courseContentContainer">
        <q-tab-panels v-model="courseTab" animated>
          <q-tab-panel name="1">
            <hr style="margin-bottom:15px;" />
             <div style="display:flex;margin-bottom:10px;">
               <div>
                 <img :src="course.image" style="height:44px; margin-right:5px"/>
               </div>
               <div style="display:flex; flex-direction:column; justify-content: center;">
                 <span class="color_cgray" style="font-size:11px; letter-spacing:1px" >CONDITIONAL PROBABILITY</span>
                 <span style="font-weight: 600; color: #343434;">Applied Probability</span>
               </div>
             </div>
              <img
        src="images/course-weather.svg"
        style="
          width: 100%;
          height: 130px;
          padding: 10px;
          margin-bottom:0px;
          margin-top:15px;
        "
      />
      <p>A weather forecast model predicts a 60% chance of rain in a specific area for a certain day. It does not rain in that area during that day. Which of these conclusions about the forecast model is the most reasonable?</p>
          <p><b>A:</b> With a 60% chance of rain, it should have at least rained a little bit.</p>
          <p><b>B:</b> The weather forecast model was flawed, and needs to be corrected for the future.</p>
          <p><b>C:</b> It cannot be concluded from a single day of data whether the forecast model is accurate or not.</p>
          <hr />
          <q-option-group
      :options="course1options"
      type="radio"
      v-model="course1group"
    />
      <div class="course-btn-continue" @click="courseTab='2'">
       <span>Continue</span>
      </div>
      <div class="course-btn-showex"  @click="course1exvisible= !course1exvisible">
       <span>Show explanation</span>
      </div>
      <q-slide-transition>
            <div v-show="course1exvisible">
              <p style="margin-top:15px; font-size:16px; margin-bottom: 4px;"><b>Explanation</b></p>
              <p>Missing a 60% chance is very reasonable, even if the model was accurate. In fact, it should happen 40% of the time (nearly half)! More data would be needed to make a fair assessment of the forecast. If the forecast model made a similar mistake for several days in a row, then it would be worth it to examine the methodology further.</p>
            </div>
     </q-slide-transition>
          </q-tab-panel>
      <q-tab-panel name="2">
             <hr style="margin-bottom:15px;" />
             <div style="display:flex;margin-bottom:10px;">
               <div>
                 <img :src="course.image" style="height:44px; margin-right:5px"/>
               </div>
               <div style="display:flex; flex-direction:column; justify-content: center;">
                 <span class="color_cgray" style="font-size:11px; letter-spacing:1px" >CONDITIONAL PROBABILITY</span>
                 <span style="font-weight: 600; color: #343434;">Applied Probability</span>
               </div>
             </div>
          <p>In WWII, enemies would engage in plane-to-plane aerial combat. Unsurprisingly, many planes were lost to crashes; if a bullet strikes a plane in a sensitive area, it's very hard to make it back to base. For the planes that did come back, the mechanics kept track of the location of bullet holes in the fuselage, so that they could reinforce the planes in the most vulnerable locations.</p>
          <p>For American planes, the bullet holes on returning planes were distributed as follows:</p>
             <img
        src="images/course-bar-chart.svg"
        style="
          width: 100%;
          height: 130px;
          padding: 10px;
          margin-bottom:0px;
          margin-top:15px;
        "
      />
      <p>(Assume all parts are shot at with roughly equal frequency.) Where should the mechanics reinforce planes so that more of them come back safely?</p>
          <hr />
          <q-option-group
      :options="course2options"
      type="radio"
      v-model="course2group"
    />
      <div class="course-btn-continue" @click="courseTab='3'">
       <span>Continue</span>
      </div>
      <div class="course-btn-showex">
       <span>Show explanation</span>
      </div>
    
      </q-tab-panel>
      <q-tab-panel name="3">
          <hr style="margin-bottom:15px;" />
             <div style="display:flex;margin-bottom:10px;">
               <div>
                 <img :src="course.image" style="height:44px; margin-right:5px"/>
               </div>
               <div style="display:flex; flex-direction:column; justify-content: center;">
                 <span class="color_cgray" style="font-size:11px; letter-spacing:1px" >CONDITIONAL PROBABILITY</span>
                 <span style="font-weight: 600; color: #343434;">Applied Probability</span>
               </div>
             </div>
          <img
        src="images/course-tennis.svg"
        style="
          width: 100%;
          height: 130px;
          padding: 10px;
          margin-bottom:0px;
          margin-top:15px;
        "
      />
      <p>In a certain game of tennis, Alex has a 60% probability to win any given point against Blake. The player who gets to 4 points first wins the game, and points cannot end in a tie.</p>
       <p><b>What is Alex's probability to win the game?</b> Try to use your intuition, rather than making a calculation.</p>
             
          <hr />
          <q-option-group
      :options="course3options"
      type="radio"
      v-model="course3group"
    />
      <div class="course-btn-continue" @click="courseTab='4'">
       <span>Continue</span>
      </div>
      <div class="course-btn-showex">
       <span>Show explanation</span>
      </div>
      </q-tab-panel>
      <q-tab-panel name="4">
            <hr style="margin-bottom:15px;" />
             <div style="display:flex; margin-bottom:10px;">
               <div>
                 <img :src="course.image" style="height:44px; margin-right:5px"/>
               </div>
               <div style="display:flex; flex-direction:column; justify-content: center;">
                 <span class="color_cgray" style="font-size:11px; letter-spacing:1px" >CONDITIONAL PROBABILITY</span>
                 <span style="font-weight: 600; color: #343434;">Applied Probability</span>
               </div>
             </div>
      <p>Which of the following statements is the best comparison between the probabilities used in weather forecasting and the probabilities used to describe dice rolls and coin flips?</p>
       <p><b>A: </b>Weather probabilities are completely subjective measures of likelihood, while the probabilities of dice rolls and coin flips are completely objective measurements of likelihood.</p>
         <p><b>B: </b>Weather probabilities, like the probabilities of dice rolls and coin flips, are based on objective methods and measurements. However, the probabilities of dice rolls and coin flips can be tested over many trials of the same controlled experiment, while weather probabilities cannot be tested in the same way.</p>    
         <p><b>C: </b>The outcome of future weather behaves just like the outcome of the roll of a die. There are a set of weather outcomes that are each equally likely, and one of those outcomes is chosen at random.</p>
          <hr />
          <q-option-group
      :options="course4options"
      type="radio"
      v-model="course4group"
    />
      <div class="course-btn-continue" @click="courseTab='5'">
       <span>Continue</span>
      </div>
      <div class="course-btn-showex">
       <span>Show explanation</span>
      </div>
      </q-tab-panel>
      <q-tab-panel name="5">
            <hr style="margin-bottom:15px;" />
             <div style="display:flex; margin-bottom:10px;">
               <div>
                 <img :src="course.image" style="height:44px; margin-right:5px"/>
               </div>
               <div style="display:flex; flex-direction:column; justify-content: center;">
                 <span class="color_cgray" style="font-size:11px; letter-spacing:1px" >CONDITIONAL PROBABILITY</span>
                 <span style="font-weight: 600; color: #343434;">Applied Probability</span>
               </div>
             </div>
      <p>Real life is random, and we often have to make decisions and judgments based on limited information. Probability is one of the best mathematical tools available for navigating our uncertain world.</p>
       <p>Real life is random, and we often have to make decisions and judgments based on limited information. Probability is one of the best mathematical tools available for navigating our uncertain world.</p>
       <hr />
         
      <div v-close-popup class="course-btn-continue">
       <span>Continue</span>
      </div>

      </q-tab-panel>
      </q-tab-panels>
      </section>
  </div>
    </q-dialog>
  
</template>

<script>
import Progress from "src/components/Progress.vue";
import {
    ref
  } from 'vue'
const exampleCourse = {
  title: "Applied Probability",
  color: "#E0ABF9",
  image: "assets/chemistry/003-structure.svg",
  steps: 6,
  progress: 5,
};
export default {
   setup() {
      return {
        dialogCourse: ref(false),
        courseTab: ref('1'),
        course1group: ref(null),
        course1options: [
        { label: 'A', value: 'A', color: 'red'},
        { label: 'B', value: 'B', color: 'red' },
        { label: 'C', value: 'C', color: 'green' }
      ],
       course2group: ref(null),
        course2options: [
        { label: 'The engine', value: 'A', color: 'green'},
        { label: 'The Tail', value: 'B', color: 'red' },
        { label: 'The wing', value: 'C', color: 'red' },
        { label: 'The cockpit', value: 'D', color: 'red' }
      ],
       course3group: ref(null),
        course3options: [
        { label: 'Exactly 60%', value: 'A', color: 'red'},
        { label: 'Less than 60%', value: 'B', color: 'red' },
        { label: 'Greater than 60%', value: 'C', color: 'green' }
      ],
       course4group: ref(null),
        course4options: [
        { label: 'A', value: 'A', color: 'red'},
        { label: 'B', value: 'B', color: 'green' },
        { label: 'C', value: 'C', color: 'red' }
      ]
      }
    },
  components: {
    Progress,
  },
  props: {
    course: {
      type: Object,
      required: true,
    },
    hasDialogOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: this.hasDialogOpen,
      course1exvisible: ref(false),
    };
  },
};
</script>

<style lang="scss">
div.color-bar {
  width: 100%;
  height: 15px;
}

div.dialog {
  max-height: none !important;
  width: 100%;
  height: 100%;
  padding: unset !important;
}

.q-dialog__inner {
  width: 100%;
  height: 100%;
  padding: 0;
}
.course-overview-top{
  background: url('~assets/chemistry_bg.png');
    background-color: #F5F5F5;
    padding:15px
}
.course-overview-bottom{
  padding:15px
}
.continue-course-btn{
    background: #fe7058;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    border-radius: 5px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 16px;
}
.course-overview-bottom .interactive{
  width:88%;
  margin:auto;
  margin-top:20px
}
.course-overview-bottom .interactive .col{
  display:flex;
  flex-direction:column;
  text-align:center;
}
.course-overview-bottom .interactive .col span:first-child{
  font-weight:500
}
.course-overview-bottom .interactive .col span:last-child{
  font-size:12px
}
.courseDialog{
  width:100%;
  height:100%;
  max-height: unset !important;
  background:white;
  padding: 15px;
}
.courseTabBar{
  width: 280px;
  margin-left: 40px;
  position: absolute;
  margin-top: 10px;
}
.courseTabBar .q-tabs__content{
  width: 280px;
  display:flex;
  overflow: unset;
}
.courseTabBar .q-tab{
  min-height: unset !important;
    height: 8px;
    max-width: 19%;
    margin-right: 1%;
    background: gray;
}
.courseTabBar .q-tab--active{
  height: 15px;
  margin-top: -3px;
}
.courseTabBar .q-tab__indicator{
  height: 100%;
  background: #FE7058;
}
.courseContentContainer{
  margin-top: 40px;
}
.courseContentContainer .q-tab-panel{
  padding: 0;
}
.course-btn-continue{
  background: #FE7058;
  display:flex;
  justify-content:center;
  align-items:center;
  height:40px;
  font-weight:500;
  border-radius: 5px;
}
.course-btn-showex{
  color: black;
  background:#dddddd;
  display:flex;
  justify-content:center;
  align-items:center;
  height:40px;
  font-weight:500;
  border-radius: 5px;
  margin-top:8px;
}
</style>
