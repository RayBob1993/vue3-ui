<template>
  <layout-documentation>
    <page title="Images">
      <v-image
        src="https://static.toiimg.com/photo/7297555.cms"
        alt="Картинка"
      />

      <v-image
        src="https://picsum.photos/id/1062/1600/900"
        width="300"
        height="300"
        srcset="https://picsum.photos/id/1062/400/225 400w, https://picsum.photos/id/1062/800/450 800w, https://picsum.photos/id/1062/1600/900 1600w"
        alt="Картинка"
      />
    </page>
  </layout-documentation>
</template>

<script>
  export default {
    name: 'Images'
  }
</script>
