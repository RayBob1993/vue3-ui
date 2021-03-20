<template>
  <layout-documentation>
    <page title="Badges">
      <v-badge :value="10" type="primary" dot>
        <v-button label="Кнопка"/>
      </v-badge>

      <hr>

      <v-badge value="10" type="success" position="top-left">
        <v-button label="Кнопка"/>
      </v-badge>

      <hr>

      <v-badge value="10" type="danger" position="bottom-right">
        <v-button label="Кнопка"/>
      </v-badge>

      <hr>

      <v-badge value="10" type="warning" position="bottom-left">
        <v-button label="Кнопка"/>
      </v-badge>

      <hr>

      <v-badge value="new" type="info">
        <v-button label="hover"/>
      </v-badge>

      <hr>

      <v-badge value="10" hover>
        <v-button label="hover"/>
      </v-badge>
    </page>
  </layout-documentation>
</template>

<script>
  export default {
    name: 'Badge',
    setup () {

    }
  }
</script>
