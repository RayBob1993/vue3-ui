<template>
  <layout-documentation>
    <page title="Images">
      <example>
        <template #view>
          <v-image
            src="https://static.toiimg.com/photo/7297555.cm"
            alt="Картинка"
            lazy
          />

          <v-image
            src="https://picsum.photos/id/1062/1600/900"
            width="300"
            height="300"
            srcset="https://picsum.photos/id/1062/400/225 400w, https://picsum.photos/id/1062/800/450 800w, https://picsum.photos/id/1062/1600/900 1600w"
            alt="Картинка"
            lazy
          />
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  export default {
    name: 'Images'
  };
</script>
