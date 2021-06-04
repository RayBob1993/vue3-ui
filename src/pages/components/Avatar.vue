<template>
  <layout-documentation>
    <page title="Avatars">
      <example>
        <template #view>
          <v-avatar
            src="https://i.pravatar.cc/300"
            size="lg"
            name="HS"
          />

          <v-avatar
            src="https://i.pravatar.cc/300"
            size="md"
            name="HS"
          />

          <v-avatar
            src="https://i.pravatar.cc/300"
            name="HS"
          />

          <v-avatar
            src="https://i.pravatar.cc/300"
            name="HS"
            size="sm"
          />

          <v-avatar
            src="https://i.pravatar.cc/300"
            name="HS"
            size="xs"
          />
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  export default {
    name: 'AvatarPage',
    setup () {

    }
  };
</script>
