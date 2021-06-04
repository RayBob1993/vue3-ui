<template>
  <header class="header">
    <v-container fluid>
      <v-row align="center">
        <v-col>
          <logo/>
        </v-col>

        <v-col size="auto">
          <app-header-menu/>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader'
  };
</script>
