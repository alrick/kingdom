<template>
  <table>
    <tr v-for="fief in fiefs">
      <td>{{ fief }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'fiefs',
  props: ['fiefs'],
  data () {
    return {
      
    }
  }
}
</script>