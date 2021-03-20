<template>
  <layout-documentation>
    <page title="Buttons">
      <v-button label="default"/>
      <v-button
        type="primary"
        label="primary"
        icon="camera"
      />
      <v-button
        type="success"
        label="success"
      />
      <v-button
        type="danger"
        label="danger"
      />
      <v-button
        type="warning"
        label="warning"
      />
      <v-button
        type="info"
        label="info"
      />
      <v-button
        type="link"
        label="link"
      />
      <v-button
        type="secondary"
        label="secondary"
      />

      <hr>

      <v-button
        type="warning"
        label="mini"
        size="mini"
      />

      <v-button
        type="warning"
        label="small"
        size="small"
      />

      <v-button
        type="warning"
        label="default"
      />

      <v-button
        type="warning"
        label="medium"
        size="medium"
      />

      <v-button
        type="warning"
        label="large"
        size="large"
      />

      <hr>

      <v-button
        type="primary"
        label="primary"
        loading
      />
      <v-button
        type="success"
        label="success"
        loading
      />
      <v-button
        type="danger"
        label="danger"
        loading
      />
      <v-button
        type="warning"
        label="warning"
        loading
      />
      <v-button
        type="info"
        label="info"
        loading
      />
      <v-button
        type="link"
        label="link"
        loading
      />
      <v-button
        type="secondary"
        label="secondary"
        loading
      />

      <hr>

      <v-button
        label="default"
        outline
      />
      <v-button
        type="primary"
        label="primary"
        outline
      />
      <v-button
        type="success"
        label="success"
        outline
      />
      <v-button
        type="danger"
        label="danger"
        outline
      />
      <v-button
        type="warning"
        label="warning"
        outline
      />
      <v-button
        type="info"
        label="info"
        outline
      />
      <v-button
        type="link"
        label="link"
        outline
      />
      <v-button
        type="secondary"
        label="secondary"
        outline
      />

      <hr>

      <v-button
        label="primary"
        disabled
      />
      <v-button
        type="primary"
        label="primary"
        disabled
      />
      <v-button
        type="success"
        label="success"
        disabled
      />
      <v-button
        type="danger"
        label="danger"
        disabled
      />
      <v-button
        type="warning"
        label="warning"
        disabled
      />
      <v-button
        type="info"
        label="info"
        disabled
      />
      <v-button
        type="link"
        label="link"
        disabled
      />
      <v-button
        type="secondary"
        label="secondary"
        disabled
      />

      <hr>

      <v-button v-slot="{ isDisabled }">
        <span class="my-span">
          button <b>disabled</b>

          {{ isDisabled }}
        </span>
      </v-button>

      <hr>

      <v-button
        label="1"
        circle
      />
      <v-button
        type="primary"
        label="2"
        circle
      />
      <v-button
        type="success"
        label="3"
        circle
      />
      <v-button
        type="danger"
        label="4"
        circle
      />
      <v-button
        type="warning"
        label="5"
        circle
      />
      <v-button
        type="info"
        label="6"
        circle
      />
      <v-button
        type="link"
        label="7"
        circle
      />
      <v-button
        type="secondary"
        label="8"
        circle
      />

      <hr>

      <v-button
        label="default"
        rounded
      />
      <v-button
        type="primary"
        label="primary"
        rounded
      />
      <v-button
        type="success"
        label="success"
        rounded
      />
      <v-button
        type="danger"
        label="danger"
        rounded
      />
      <v-button
        type="warning"
        label="warning"
        rounded
      />
      <v-button
        type="info"
        label="info"
        rounded
      />
      <v-button
        type="link"
        label="link"
        rounded
      />
      <v-button
        type="secondary"
        label="secondary"
        rounded
      />

      <hr>

      <v-button-group>
        <v-button label="default"/>
        <v-button label="default"/>
        <v-button label="default"/>
      </v-button-group>

      <hr>

      <v-button-group :disabled="true">
        <v-button label="default"/>
        <v-button label="default"/>
        <v-button label="default"/>
      </v-button-group>

      <hr>

      <v-button-group>
        <v-button label="default" type="primary"/>
        <v-button label="default" :disabled="true"/>
        <v-button label="default" type="warning"/>
      </v-button-group>

      <hr>

      <v-button-group fluid>
        <v-button label="default"/>
        <v-button label="default"/>
        <v-button label="default"/>
        <v-button label="default"/>
        <v-button label="default"/>
        <v-button label="default"/>
      </v-button-group>

      <hr>

      <v-button-group direction="vertical">
        <v-button label="default"/>
        <v-button label="default"/>
        <v-button label="default"/>
      </v-button-group>
    </page>
  </layout-documentation>
</template>

<script>
  export default {
    name: 'Buttons'
  }
</script>
