<template>
  <v-flex xs12>
    <v-card
      class='card'
      :href="bgmUrl"
      target="_blank"
      rel="noopener"
    >
      <v-layout row>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ subject.name }}</div>
            </div>
          </v-card-title>
        </v-flex>
        <v-flex xs5>
          <v-img
            :src="`https://${subject.image}`"
            height="125px"
            contain
          ></v-img>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
        <v-spacer></v-spacer>
        <v-icon
          v-for="i in bold"
          v-bind:key="`bold${i}`"
        >star</v-icon>
        <v-icon
          v-for="i in border"
          v-bind:key="`border${i}`"
        >star_border</v-icon>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Subject',
  props: {
    subject: {
      type: Object,
      default: () => ({ id: 0, name: 'default name', image: 'lain.bgm.tv/img/no_icon_subject.png', score: 1.1 })
    }
  },
  created () {
    console.log('created')
  },
  computed: {
    bgmUrl: function () {
      return `https://bgm.tv/subject/${this.subject.id}`
    },
    border: function () {
      return 10 - Math.round(this.subject.score)
    },
    bold: function () {
      return Math.round(this.subject.score)
    }

  }
}
</script>

<style scoped>
.card {
  border-bottom: 20px;
}
</style>
