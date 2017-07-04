<template>
  <div id="app">
    <md-toolbar class="md-accent" style="position: fixed; top: 0; width: 100%; z-index: 1;">
      <h2 class="md-title" style="flex: 1">DevOps Nutzwertanalyse</h2>
    </md-toolbar>

    <div style="padding: 60px 30px;">
      <div v-show="!showResult">
        <h1 class="md-display-1">Ausschlusskriterien</h1>
        <div v-for="item in basic" v-bind:key="item.ref">
          <h1 class="md-title">
            {{ item.ref }}: {{ item.question }}
            <sup style="cursor: pointer">
              <md-icon v-if="item.info">info</md-icon>
              <md-tooltip md-direction="bottom">{{ item.info }}</md-tooltip>
            </sup>
          </h1>
          <md-button-toggle class="md-primary" md-single>
            <md-button v-on:click="item.value = 1">Ja</md-button>
            <md-button v-on:click="item.value = 0">Nein</md-button>
          </md-button-toggle>
        </div>
                
        <div v-show="allBasicYes">
          <h1 class="md-display-1">Detailkriterien</h1>
          <div v-for="item in detail" v-bind:key="item.ref">
            <h1 class="md-title">
              {{ item.ref }}: {{ item.question }}
              <sup style="cursor: pointer">
                <md-icon v-if="item.info">info</md-icon>
                <md-tooltip md-direction="bottom">{{ item.info }}</md-tooltip>
              </sup>
            </h1>
            <md-button-toggle class="optionGroup md-primary" md-single>
              <md-button
                class="option"
                v-bind:class="{ mdToggle: item.value == option.value }"
                v-on:click="item.value = option.value"
                v-for="option in item.options"
                v-bind:key="option.label">
                {{ option.label }}
              </md-button>
            </md-button-toggle>
          </div>
        </div>
      </div>
    </div>

    <div style="width: 100%; text-align: center;" v-show="showResult">
        <h1 class="md-display-4"> {{ score }}% </h1>
        <h1 class="md-headline">NUTZWERT</h1>
    </div>


    <md-button class="md-fab" v-if="allDetailClicked" v-on:click="showResult = !showResult" style="position: fixed; bottom: 20px; right: 20px;">
      <md-icon v-if="!showResult">check</md-icon>
      <md-icon v-if="showResult">close</md-icon>
    </md-button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      allBasicYes(){
        return this.$data.basic.filter(b => b.value == 1).length == 3
      },
      allDetailClicked(){
        return this.$data.detail.filter(d => d.value == null).length == 0
      },

      score(){
        return Math.round((this.$data.detail.reduce((a,b) => a = a + (b.value || 0) , 0) / 45)*100)
      }
    },
    data() {
      return {
        showResult: false,
        basic: [
          { 
            ref: 'A1',
            question: 'Wird Software entwickelt?',
            value: null,
          },
          { 
            ref: 'A2',
            question: 'Soll diese Software agil entwickelt werden?',
            value: null,
          },
          { 
            ref: 'A3',
            question: 'Darf DevOps verwendet werden?',
            info: 'Z.B. dürfen Entwicklung und Betrieb ihr Wissen und ihre Arbeitsumgebungen teilen?',
            value: null,
          },
        ],
        detail: [
          { 
            ref: 'W1',
            question: 'Wie lang ist die Projektphase?',
            info: 'Phase vor GoLive',
            value: null,
            options: [
              { value: 1, label: '< 3 Monate' },
              { value: 3, label: '> 3 Monate' },
              { value: 5, label: '> 6 Monate' }              
            ]
          },
          { 
            ref: 'W2',
            question: 'Wie lang ist der Anwendungslebenszyklus?',
            info: 'Phase in der auch weiterentwickelt wird',
            value: null,
            options: [
              { value: 1, label: '0' },
              { value: 3, label: '< 1 Jahr' },
              { value: 5, label: '>= 1 Jahr' }
            ]
          },
          { 
            ref: 'W3',
            question: 'Welche Lieferzyklen sind angedacht?',
            value: null,
            options: [
              { value: 6, label: '< 2 Wochen' },
              { value: 4, label: '< 4 Wochen' },
              { value: 2, label: '> 4 Wochen' }
            ]
          },
          { 
            ref: 'W4',
            question: 'Von welchen Kunden sind Feedbacks gewünscht?',
            info: null,
            value: null,
            options: [
              { value: 1, label: 'von keinem' },
              { value: 3, label: 'vom Businesskunden' },
              { value: 5, label: 'auch vom Endkunden' }
            ]
          },
          { 
            ref: 'W5',
            question: 'Welche Korrekturzeit wird bei Fehlern erwartet?',
            info: null,
            value: null,
            options: [
              { value: 2, label: '> 1 Tag' },
              { value: 4, label: '< 1 Tag' },
              { value: 6, label: 'wenige Stunden (AC1)' }
            ]
          },
          { 
            ref: 'W6',
            question: 'Bedarf es eines Monitorings?',
            info: null,
            value: null,
            options: [
              { value: 1, label: 'Nein' },
              { value: 2, label: 'der Applikation (AC1, AC2)' },
              { value: 3, label: 'Applikation und des Nutzerverhaltens' }
            ]
          },
          { 
            ref: 'W7',
            question: 'Bedarf es einer Versionskontrolle?',
            info: null,
            value: null,
            options: [
              { value: 1, label: 'Nein' },
              { value: 2, label: 'in der Entwicklung' },
              { value: 3, label: 'In der Entwicklung und in der Applikation' }
            ]
          },
          { 
            ref: 'W8',
            question: 'Welche Verfügbarkeit wird erwartet?',
            info: null,
            value: null,
            options: [
              { value: 2, label: 'n/a' },
              { value: 4, label: 'zu den Geschäftszeiten (AC2)' },
              { value: 6, label: '24/7 (AC1)' }
            ]
          },
          { 
            ref: 'W9',
            question: 'Wie wird die Anwendung hinsichtlich der Sicherheitsrichtlinien eingestuft?',
            info: null,
            value: null,
            options: [
              { value: 1, label: 'niedrig (AC3, DC4)' },
              { value: 3, label: 'mittel (AC2, DC3)' },
              { value: 5, label: 'hoch (AC1, DC1, DC2)' }
            ]
          },
          { 
            ref: 'W10',
            question: 'Welche Wiederbereitschaftszeit wird erwartet?',
            info: null,
            value: null,
            options: [
              { value: 6, label: '< 2 Stunden' },
              { value: 4, label: '< 4 Stunden' },
              { value: 2, label: '> 4 Stunden' }
            ]
          }
        ]
      }
    }
  }
</script>

<style>
  body {
    overflow-y: scroll;
  }

  @media (max-width: 600px) {
    .optionGroup { display: inline !important; }
    .option { min-width: 100% !important; }
  }
</style>
