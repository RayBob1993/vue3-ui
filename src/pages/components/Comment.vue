<template>
  <layout-documentation>
    <page title="Comments">
      <example
        title="Базовый комментарий"
        anchor="comment-base"
      >
        <template #view>
          <v-comment
            title="Matt"
            date="Today at 5:42PM"
            description="This has been very useful for my research. Thanks as well!"
          />
        </template>
      </example>

      <example
        title="Подзаголовок комментария"
        anchor="comment-subtitle"
      >
        <template #view>
          <v-comment
            title="Matt"
            date="Today at 5:42PM"
            subtitle="Опыт использования: меньше месяца"
            description="This has been very useful for my research. Thanks as well!"
          />
        </template>
      </example>

      <example
        title="Голосование за комментарий"
        anchor="comment-subtitle"
      >
        <template #view>
          <v-comment
            title="Matt"
            date="Today at 5:42PM"
            subtitle="Опыт использования: меньше месяца"
            description="This has been very useful for my research. Thanks as well!"
            voted-up="0"
            voted-down="1"
            show-voted
            @vote="onVote"
          />
        </template>
      </example>

      <example
        title="Ссылка на комментарий"
        anchor="comment-anchor"
      >
        <template #view>
          <v-comment
            title="Matt"
            anchor="comment-1"
            date="Today at 5:42PM"
            subtitle="Опыт использования: меньше месяца"
            description="This has been very useful for my research. Thanks as well!"
          />
        </template>
      </example>

      <example
        title="Ответить на комментарий"
        anchor="comment-reply"
      >
        <template #view>
          <v-comment
            id="1"
            title="Matt"
            date="Today at 5:42PM"
            subtitle="Опыт использования: меньше месяца"
            description="This has been very useful for my research. Thanks as well!"
            show-reply
            @reply="onReply"
          />
        </template>
      </example>

      <example
        title="Удалить комментарий"
        anchor="comment-delete"
      >
        <template #view>
          <v-comment
            id="1"
            title="Matt"
            date="Today at 5:42PM"
            subtitle="Опыт использования: меньше месяца"
            description="This has been very useful for my research. Thanks as well!"
            show-delete
            @delete="onDelete"
          />
        </template>
      </example>

      <example
        title="Дерево комментариев"
        anchor="comment-tree"
      >
        <template #view>
          <v-comment
            id="1"
            anchor="comment-1"
            title="Matt"
            date="Today at 5:42PM"
            subtitle="Опыт использования: меньше месяца"
            description="This has been very useful for my research. Thanks as well!"
            voted-up="0"
            voted-down="1"
            show-reply
            show-voted
            show-delete
            @vote="onVote"
            @reply="onReply"
            @delete="onDelete"
          >
            <v-comment
              id="2"
              anchor="comment-2"
              title="Matt"
              date="Today at 5:42PM"
              subtitle="Опыт использования: меньше месяца"
              description="This has been very useful for my research. Thanks as well!"
              voted-up="0"
              voted-down="1"
              show-reply
              show-voted
              show-delete
              @vote="onVote"
              @reply="onReply"
              @delete="onDelete"
            />

            <v-comment
              id="4"
              anchor="comment-4"
              title="Matt"
              date="Today at 5:42PM"
              subtitle="Опыт использования: меньше месяца"
              description="This has been very useful for my research. Thanks as well!"
              voted-up="0"
              voted-down="1"
              show-reply
              show-voted
              show-delete
              @vote="onVote"
              @reply="onReply"
              @delete="onDelete"
            />
          </v-comment>

          <v-comment
            id="3"
            anchor="comment-3"
            title="Matt"
            date="Today at 5:42PM"
            subtitle="Опыт использования: меньше месяца"
            description="This has been very useful for my research. Thanks as well!"
            voted-up="0"
            voted-down="1"
            show-reply
            show-voted
            show-delete
            @vote="onVote"
            @reply="onReply"
            @delete="onDelete"
          />
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  export default {
    name: 'CommentsPage',
    setup () {
      function onVote ({ id, action }) {
        console.log(id)
        console.log(action)
      }

      function onReply (id) {
        console.log(id)
      }

      function onDelete (id) {
        console.log(id)
      }

      return {
        onVote,
        onReply,
        onDelete
      }
    }
  }
</script>
