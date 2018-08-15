<template>
  <v-layout align-center justify-space-around row fill-height>
    <v-flex xs3>
      <v-icon color="primary" large>{{icon}}</v-icon>
    </v-flex>
    <v-flex class="text-xs-center" xs9>
      {{information}}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    icon: String,
    information: String
  },
  data: () => ({

  })
}
</script>

