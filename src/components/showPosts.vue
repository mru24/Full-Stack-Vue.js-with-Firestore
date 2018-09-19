<template>
  <div>
    <b-container>

      <router-link :to="'./addPost'">
        <b-button class="my-2">Add Post</b-button>
      </router-link>

      <article v-for="(post, index) in posts" :key="index">
        <b-card header-tag="header"
                footer-tag="footer">
            <h4 slot="header">
              {{ post.title }}
            </h4>
            <p class="card-text">
              {{ post.body }}
            </p>
            <p slot="footer" class="text-right">
              <small>
                Created by: {{ post.name }} / {{ post.email }}
              </small>
            </p>
        </b-card>
        <b-button type="button" variant="danger" @click="deletePost(post.id)" class="my-2 d-block ml-auto">Delete</b-button>
      </article>
    </b-container>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  data () {
    return {
      posts: []
    }
  },
  firestore () {
    return {
      posts: db.collection('posts').orderBy('time', 'desc')
    }
  },
  methods: {
    deletePost (id) {
      db.collection('posts').doc(id).delete()
    }
  }
}
</script>

<style lang="sass">
</style>
