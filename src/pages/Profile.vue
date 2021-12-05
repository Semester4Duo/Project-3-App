<template>
  <q-page>
    <div class="top_content">
      <div class="row">
        <div class="col flex flex-center" style="flex-direction:column">
          <q-img src="icons/parrot_color.svg" loading="lazy" spinner-color="white" height="130px"
            style="max-width: 130px; margin-top:20px" />
          <p class="text-dark" style="font-size:20px; margin-bottom:5px; margin-top:-5px">Username</p>
        </div>
      </div>
      <div class="row justify-center text-center">
        <div class="col-3 " style="flex-direction:column">
          <p class="color_cgray" style="margin:unset">7</p>
          <p class="color_cgray" style="margin-bottom:20px">Courses</p>
        </div>
        <div class="col-3 " style="flex-direction:column">
          <p class="color_cgray" style="margin:unset">14</p>
          <p class="color_cgray" style="margin-bottom:20px">Quizzes</p>
        </div>
      </div>
    </div>
    <div class="bottom_content">
      <q-tabs v-model="tab" no-caps class="bg_light_gray text-dark">
        <q-tab name="stats" label="Stats" selected />
        <q-tab name="answers" label="Answers" />
        <q-tab name="questions" label="Questions" />
      </q-tabs>
      <div class="profile_items_holder">
        <div class="stats_container">
          <p class="padding-left">
            Stats
          </p>
          <div class="row">
            <div class="col">
              <span>7</span>
              <span class="color_cgray">Courses</span>
            </div>
            <div class="col">
              <span>14</span>
              <span class="color_cgray">Quizzes</span>
            </div>
            <div class="col">
              <span>0</span>
              <span class="color_cgray">Answers</span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <span>2</span>
              <span class="color_cgray">Comments</span>
            </div>
            <div class="col">
              <span>4</span>
              <span class="color_cgray">Upvotes</span>
            </div>
            <div class="col"></div>
          </div>
        </div>
        <div class="achievements_container">
          <div class="row">
            <div class="col">Achievements</div>
            <div class="col">
              <q-img v-model="visible" src="icons/down-chevron.svg" height="20px" width="20px"
                :style="visible? 'transform:rotateX(180deg); transition: all 0.3s;':'transition: all 0.3s;'"
                @click="visible= !visible"
                 />
            </div>
          </div>
          <div class="row achievements">
            <div class="col">
              <q-img src="icons/achievements/147-atom-2.svg" height="43px" />
              <span class="color_cgray">Lorem Ipsum</span>
            </div>
            <div class="col">
              <q-img src="icons/achievements/133-chemical.svg" height="43px" />
              <span class="color_cgray">Lorem Ipsum</span>
            </div>
            <div class="col">
              <q-img src="icons/achievements/039-rocket-1.svg" height="43px" />
              <span class="color_cgray">Lorem Ipsum</span>
            </div>
            <div class="col">
              <q-img src="icons/achievements/156-android.svg" height="43px" />
              <span class="color_cgray">Lorem Ipsum</span>
            </div>
            <div class="col">
              <q-img src="icons/achievements/128-science.svg" height="43px" />
              <span class="color_cgray">Lorem Ipsum</span>
            </div>
          </div>
          <q-slide-transition>
            <div v-show="visible">
              <div class="row achievements locked_achievements">
                <div class="col">
                  <q-img src="icons/achievements/147-atom-2.svg" height="43px" />
                  <span class="color_cgray">Lorem Ipsum</span>
                </div>
                <div class="col">
                  <q-img src="icons/achievements/133-chemical.svg" height="43px" />
                  <span class="color_cgray">Lorem Ipsum</span>
                </div>
                <div class="col">
                  <q-img src="icons/achievements/039-rocket-1.svg" height="43px" />
                  <span class="color_cgray">Lorem Ipsum</span>
                </div>
                <div class="col">
                  <q-img src="icons/achievements/156-android.svg" height="43px" />
                  <span class="color_cgray">Lorem Ipsum</span>
                </div>
                <div class="col">
                  <q-img src="icons/achievements/128-science.svg" height="43px" />
                  <span class="color_cgray">Lorem Ipsum</span>
                </div>
              </div>
              <div class="row achievements locked_achievements">
                <div class="col">
                  <q-img src="icons/achievements/147-atom-2.svg" height="43px" />
                  <span class="color_cgray">Lorem Ipsum</span>
                </div>
                <div class="col">
                  <q-img src="icons/achievements/133-chemical.svg" height="43px" />
                  <span class="color_cgray">Lorem Ipsum</span>
                </div>
                <div class="col">
                  <q-img src="icons/achievements/039-rocket-1.svg" height="43px" />
                  <span class="color_cgray">Lorem Ipsum</span>
                </div>
                <div class="col">
                  <q-img src="icons/achievements/156-android.svg" height="43px" />
                  <span class="color_cgray">Lorem Ipsum</span>
                </div>
                <div class="col">
                  <q-img src="icons/achievements/128-science.svg" height="43px" />
                  <span class="color_cgray">Lorem Ipsum</span>
                </div>
              </div>
            </div>
          </q-slide-transition>
        </div>
         <div class="courses_container">
          <p class="padding-left">
            Courses
          </p> 
        </div>
         <div class="quizzes_container">
          <p class="padding-left">
              Quizzes
          </p> 
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import {
    ref
  } from 'vue'
  export default {
    setup() {
      return {
        tab: ref('stats'),
      }
    },
    data() {
      return {
        visible: ref(false)
      }
    }
  };

</script>
<style>
  .top_content {
    background: url('~assets/chemistry_bg.png');
    background-color: #F5F5F5;
  }

  .profile_items_holder {
    padding: 15px;
  }

  .stats_container .col {
    text-align: center;
    display: inline-flex;
    flex-direction: column;
  }

  .stats_container .col span:first-child, .courses_container p, .quizzes_container p {
    font-weight: bold;
  }

  .stats_container .row:last-child {
    padding-top: 10px;
  }

  .stats_container p,
  .achievements_container .row:first-child .col:first-child {
    font-weight: 500;
  }

  .achievements_container .row:first-child {
    margin-top: 15px;
    margin-bottom: 16px;
  }

  .achievements_container > .row:first-child .col:last-child {
    text-align: right;
    margin-right: 20px;
  }

  .achievements img {
    width: auto;
    height: 40px;
  }

  .achievements {
    text-align: center;
  }

  .achievements col {
    display: inline-flex;
    flex-direction: column;
  }

  .achievements span {
    font-size: 8px;
  }

  .locked_achievements {
    filter: grayscale();
  }
  .courses_container p, .quizzes_container p{
    margin-top: 15px;
  }

</style>
