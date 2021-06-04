<template>
  <article
    class="v-comment"
    :class="{
      'v-comment--removable': showDelete
    }"
  >
    <div class="v-comment__inner">
      <div class="v-comment__avatar"/>

      <div class="v-comment__content">
        <button
          v-if="showDelete"
          class="v-comment__delete"
          aria-label="Удалить комментарий"
          @click="onDelete"
        >
          <v-icon name="close"/>
        </button>

        <header class="v-comment__header">
          <div class="v-comment__header-top">
            <div
              v-if="title"
              class="v-comment__title"
            >
              {{ title }}
            </div>

            <time
              v-if="date"
              class="v-comment__date"
            >
              {{ date }}
            </time>
          </div>

          <div
            v-if="subtitle"
            class="v-comment__subtitle"
          >
            {{ subtitle }}
          </div>

          <slot name="commentHeader"/>
        </header>

        <div class="v-comment__body">
          <div
            v-if="description"
            class="v-comment__text"
            v-html="description"
          />

          <slot name="commentDescription"/>
        </div>

        <footer
          v-if="isVisibleFooter"
          class="v-comment__footer"
        >
          <div class="v-comment__footer-top">
            <div
              v-if="showVoted"
              class="v-comment__voted"
            >
              <div
                class="v-comment__voted-action"
                @click="onVote('up')"
              >
                <v-icon name="thumb-up"/>

                <div
                  v-if="votedUp"
                  class="v-comment__voted-action__value"
                >
                  {{ votedUp }}
                </div>
              </div>

              <div
                class="v-comment__voted-action"
                @click="onVote('down')"
              >
                <v-icon name="thumb-down"/>

                <div
                  v-if="votedDown"
                  class="v-comment__voted-action__value"
                >
                  {{ votedDown }}
                </div>
              </div>
            </div>

            <div
              v-if="showReply"
              class="v-comment__footer-button"
              @click="onReply"
            >
              Ответить
            </div>

            <a
              v-if="anchor"
              :href="`${$route.path}#${anchor}`"
              class="v-comment__footer-button"
            >
              Поделиться
            </a>
          </div>

          <slot name="commentFooter"/>
        </footer>
      </div>
    </div>

    <slot/>
  </article>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: 'VComment',
    props: {
      title: String,
      anchor: String,
      id: [String, Number],
      titleUrl: [String, Object],
      date: String,
      subtitle: String,
      votedUp: [String, Number],
      votedDown: [String, Number],
      description: String,
      showReply: Boolean,
      showVoted: Boolean,
      showDelete: Boolean
    },
    emits: [
      'reply',
      'vote',
      'delete'
    ],
    setup (props, { emit, slots }) {
      const isVisibleFooter = computed(() => {
        return props.showReply ||
          props.showVoted ||
          props.anchor ||
          slots.commentFooter;
      });

      function onReply () {
        if (props.showReply) {
          emit('reply', props.id);
        }
      }

      function onVote (action) {
        if (props.showVoted) {
          emit('vote', {
            id: props.id,
            action
          });
        }
      }

      function onDelete () {
        if (props.showDelete) {
          emit('delete', props.id);
        }
      }

      return {
        isVisibleFooter,
        onReply,
        onDelete,
        onVote
      };
    }
  };
</script>
