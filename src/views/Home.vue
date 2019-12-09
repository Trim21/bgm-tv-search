<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <vue-tags-input
          v-model="tag"
          :tags="tags"
          @tags-changed="newTags => tags = newTags"
        />
        <br>
        <hr>
        <br>
        <Subject
          v-for="(subject, index) in subjects"
          :key="index"
          :subject="subject"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Subject from '@/components/Subject.vue'
import VueTagsInput from '@johmun/vue-tags-input'
import qs from 'qs'

export default {
  name: 'home',
  components: {
    Subject,
    VueTagsInput
  },
  watch: {
    tags (newValue, oldValue) {
      if (newValue.length) {
        this.$http.get('/bgm.tv/api.v1/subjects', {
          params: {
            tag: this.tags.map(x => x.text)
          },
          paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
          }
        }).then(res => {
          this.subjects = res.data.subjects
        })
      }
    }
  },
  data () {
    return {
      tag: '',
      subjects: [],
      tags: []
    }
  }
}
</script>
