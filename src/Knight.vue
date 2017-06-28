<template>
  <div class="knight">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="knight" class="content">
      <h2>{{ knight }}</h2>
      <p>{{ fiefs }}</p>
    </div>
  </div>
</template>

<script>
import figaro from './secret/figaro'
import contentful from 'contentful'
import _ from 'lodash'

export default {
  props: ['name'],
  data () {
    return {
      loading: false,
      error: null,
      client: contentful.createClient({
        space: figaro.contentful.space,
        accessToken: figaro.contentful.accessToken
      }),
      params: {
        'include': 2,
        'limit': 1000,
        'fields.owner.sys.contentType.sys.id': 'knight',
        'fields.owner.fields.name': _.capitalize(this.name)
      },
      knight: 'blublu',
      fiefs: null
    }
  },
  created () {
    this.fetchFiefs()
  },
  watch: {
    '$route': 'fetchFiefs'
  },
  methods: {
    fetchFiefs () {
      this.error = this.fiefs = null
      this.loading = true
      this.params.content_type = 'fief'
      let self = this
      this.client.getEntries(this.params).then(function (entries) {
        self.loading = false
        self.fiefs = entries.entries
        console.log(entries)
      }).catch(function (error) {
        self.loading = false
        console.log(error)
        self.error = 'problem with API, contact Alrick'
      })
    }
  }
}
</script>