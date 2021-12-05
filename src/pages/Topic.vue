<template>
  <q-page class="topic-page">
    <section class="topic-top-content">
      <q-input borderless class="bg_light_gray searchBar" label="Browse posts or topics">
        <template #append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-tabs v-model="tab" no-caps class="text-dark">
        <q-tab name="subscribed" label="Subscribed" selected />
        <q-tab name="popular" label="Popular" />
        <q-tab name="featured" label="Featured" />
      </q-tabs>
    </section>
    <section class="topic-bottom-content">
      <q-tab-panels v-model="tab" animated>
         <q-tab-panel name="subscribed">
      <div class="row topicsRow">
        <div class="col" :style="subscriptions.includes(topic.id) ? 'background:'+topic.color+'' : ''" 
        v-for="topic in topicList" :key="topic.id"
         @click="subscriptions.includes(topic.id) ? subscriptions = subscriptions.filter(e => e !== topic.id): subscriptions.push(topic.id)">
          <q-img :src="'icons/topics/'+topic.icon" height="43px" width="43px" />
          <span class="color_black">{{topic.name}}</span>
        </div>
      </div>
      <div class="subscribeToText" :style="subscriptions.length == 0 ? '' : 'display:none;'">
        Subscribe to a topic
     </div>
      <div class="article bg_light_gray" :style="subscriptions.includes(article.topicId) ? '' : 'display:none;'" v-for="(article, n) in articleData" :key="n"  @click="dialog = true">
        <section>
          <div :style="'background:'+getTopic(article.topicId)[0].color+';'">
            <q-img :src="'icons/topics/'+getTopic(article.topicId)[0].icon" height="20px" width="20px" />
          </div>
          <div>
            <span>{{getTopic(article.topicId)[0].name}}</span>
            <span>{{article.date}}</span>
          </div>
        </section>
        <section>
          <div class="article-title">{{article.title}}</div>
          <div class="article-content">{{article.content}}</div>
        </section>
      </div>
      </q-tab-panel>
      <q-tab-panel name="popular">
            <div class="article bg_light_gray" v-for="(article, n) in articleData" :key="n"  @click="dialog = true">
        <section>
          <div :style="'background:'+getTopic(article.topicId)[0].color+';'">
            <q-img :src="'icons/topics/'+getTopic(article.topicId)[0].icon" height="20px" width="20px" />
          </div>
          <div>
            <span>{{getTopic(article.topicId)[0].name}}</span>
            <span>{{article.date}}</span>
          </div>
        </section>
        <section>
          <div class="article-title">{{article.title}}</div>
          <div class="article-content">{{article.content}}</div>
        </section>
      </div>
      </q-tab-panel>

          <q-tab-panel name="featured">
            <div class="article bg_light_gray" v-for="(article, n) in articleData" :key="n"  @click="dialog = true">
        <section>
          <div :style="'background:'+getTopic(article.topicId)[0].color+';'">
            <q-img :src="'icons/topics/'+getTopic(article.topicId)[0].icon" height="20px" width="20px" />
          </div>
          <div>
            <span>{{getTopic(article.topicId)[0].name}}</span>
            <span>{{article.date}}</span>
          </div>
        </section>
        <section>
          <div class="article-title">{{article.title}}</div>
          <div class="article-content">{{article.content}}</div>
        </section>
      </div>
          </q-tab-panel>
      </q-tab-panels>
    </section>

    <q-dialog
    v-model="dialog"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <div class="dialog topic-article-dialog bg-white q-pa-md">
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

      <!-- <img
        :src="course.image"
        style="
          width: 100%;
          padding-left: 40%;
          padding-right: 40%;
          padding-top: 5%;
          padding-bottom: 0;
        "
      /> -->
      <div  class="text-h6 text-black">Growing carbon footprint for plastics</div>
      <div class="text-black">
        <p>Research into the global environmental impact of plastics has also focused primarily on the disposal phase. There are few studies into the production of plastics, which also affects the climate and air quality. In-depth analysis, however, requires detailed information on supply chains and processes in order to trace the relevant material and energy flows.</p>
        <p class="article-subheader text-black">Assessing the global footprint of plastics</p>
        <p>"So far, the simplistic assumption has been that the production of plastic requires roughly the same amount of fossil fuel as is contained in the raw materials in plastic -- above all petroleum," says Livia Cabernard, a doctoral student at the Institute of Science, Technology and Policy (ISTP) at ETH Zurich. The problem here, however, is that the relative significance of production versus disposal has been significantly underestimated.</p>
        <p class="article-subheader text-black">Underestimated plastic production</p>
        <p>In contrast to earlier estimates, which assumed equal amounts of fuel and raw material for the production of plastics, the ETH researchers have now proven that twice as much fossil energy is burned for plastic production as is contained as a raw material in plastic.</p>
        <p class="article-subheader text-black">Insights thanks to new methodology</p>
        <p>There had previously only been one publication that examined the global carbon footprint of plastics production. "This underestimated the greenhouse gas emissions, however, because it did not take into account the increasing dependence on coal due to the outsourcing of production processes to coal-based countries," Cabernard explains.</p>
      </div>
    </div>
  </q-dialog>
  </q-page>
</template>

<script>
  import {
    ref
  } from 'vue'
  import json from '../json/article-data.json';
  export default {
    setup() {
      return {
        tab: ref('subscribed'),
        dialog: ref(false),
      }
    },
    data() {
      return {
        topicList: [{
            id: 1,
            name: "Atomic Structure",
            color: "#a4a4ff",
            icon: "003-structure.svg"
          },
          {
            id: 2,
            name: "Electrochemistry",
            color: "#a46bff",
            icon: "043-magnet.svg"
          },
          {
            id: 3,
            name: "Measurements",
            color: "#ff7070",
            icon: "030-microscope.svg"
          },
          {
            id: 4,
            name: "Thermochemistry",
            color: "#7fff7f",
            icon: "018-flask.svg"
          }, {
            id: 5,
            name: "Chemical Bonding",
            color: "#ffff6c",
            icon: "051-biochemical.svg"
          }, {
            id: 6,
            name: "Stoichiometry",
            color: "#ffbf4b",
            icon: "057-injection.svg"
          }, {
            id: 7,
            name: "Mixtures",
            color: "#bdbdbd",
            icon: "007-atom.svg"
          }
        ],
        articleData: json,
        subscriptions: []
      }
    },
     watch: {
      subscriptions: {
        handler(newSub) {
          localStorage.subscriptions = JSON.stringify(newSub);
          this.orderTopics()
        },
        deep: true
      }
    },
    mounted() {
      if (localStorage.subscriptions) {
        this.subscriptions = JSON.parse(localStorage.subscriptions)
      } 
    },
    methods:{
      orderTopics(){
        if(this.topicList != undefined && this.subscriptions != undefined && this.subscriptions != null && this.subscriptions.length >0){
         for(var i = 0; i<this.topicList.length; i++){
           if(this.subscriptions.includes(this.topicList[i].id)){
             var moveToFront = this.topicList[i]
             this.topicList.splice(i, 1)
             this.topicList.unshift(moveToFront)
           }
         }
         console.log(this.topicList)
        }
      },
      getTopic(topicId){
       var topic = this.topicList.filter(topic => topic.id == topicId)
       return topic;
      }
    }

  }

</script>
<style>
  .topic-top-content {
    background: url('~assets/chemistry_bg.png');
    background-color: #F5F5F5;
    padding: 15px;
  }

  .topic-top-content .searchBar {
    padding: 0 10px;
    border-radius: 6px;
  }

  .topic-bottom-content {
    padding: 7px 15px;
  }
  .topic-bottom-content .q-tab-panel{
    padding: unset !important;
  }
  .topic-bottom-content .scroll{
    overflow:hidden;
  }

  .topic-bottom-content .topicsRow {
    flex-wrap: unset !important;
    overflow: auto;
    width: calc(100% + 15px);
  }

  .topic-bottom-content .topicsRow .col {
    display: flex;
    flex-direction: column;
    min-width: 25%;
    text-align: center;
    align-items: center;
    margin-right: 10px;
    padding: 10px 0;
    border-radius: 10px;
  }

  .topic-bottom-content .topicsRow .col span {
    font-size: 10px;
  }

  .topic-bottom-content .article {
    padding: 15px;
    border-radius: 5px;
    margin-top: 10px;
  }
  .topic-bottom-content .article section:first-child {
    display: flex;
    margin-bottom: 4px;
  }
  .topic-bottom-content .article section:first-child > div:first-child{
    padding: 5px;
    border-radius: 100px;
    margin-right: 10px;
    height: 100%;
  }
  .topic-bottom-content .article section:first-child > div:last-child{
    display: flex;
    flex-direction: column;
  }
  .topic-bottom-content .article section:first-child > div:last-child span:first-child{
    font-weight: 500;
  }
  .topic-bottom-content .article section:first-child > div:last-child span:last-child{
    font-size: 10px;
    margin-top: -4px;
    color: #222222;
  }
  .article-title{
    font-weight: 600;
    font-size: 15px;
  }
  .article-content{
    font-size: 13px;
    color: #2c2c2c;
  }
  .subscribed{
    background: green;
  }
  .subscribeToText{
    text-align:center;
    margin-top:40px;
    font-size: 20px;
    font-weight:600;
    color: gray;
  }
 div div.topic-article-dialog{
    position: absolute;
    max-height:unset !important;
    height:100%;
    width:100%;
    padding: 15px !important;
  }
  .article-subheader{
    font-weight:500;
    font-size:15px
  }

</style>
