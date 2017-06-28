<template>
  <div id="app">
    <h1>Chevalier</h1>
  </div>
</template>

<script>
import figaro from './secret/figaro'
import contentful from 'contentful'
import _ from 'lodash'
import Fiefs from './Fiefs.vue'

let client = contentful.createClient({
  space: figaro.contentful.space,
  accessToken: figaro.contentful.accessToken
})
client.getEntries({ include: 2, limit: 1000 }).then(function (entries) {
  let items = _.filter(entries.items, ['fields.owner.fields.name', 'Deoord'])
  console.log(items)
})

export default {
  name: 'app',
  data () {
    return {
      fiefs: ['blublu']
    }
  }
}
</script>

<style lang="scss">

</style>
