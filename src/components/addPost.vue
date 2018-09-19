<template>
  <div>
    <b-container>
      <h3 class="title my-4 border-bottom">Add Post</h3>
      <b-form @submit="onSubmit(name, email, title, body)" v-if="show">
        <b-form-group label="Name:">
          <b-form-input type="text"
                        v-model="name"
                        required
                        placeholder="Name">
          </b-form-input>
        </b-form-group>
        <b-form-group label="Email:">
          <b-form-input type="email"
                        v-model="email"
                        required
                        placeholder="Email">
          </b-form-input>
        </b-form-group>
        <b-form-group label="Title:">
          <b-form-input type="text"
                        v-model="title"
                        required
                        placeholder="Title">
          </b-form-input>
        </b-form-group>
        <b-form-group label="Post:">
          <b-form-textarea v-model="body"
                          placeholder="Post"
                          :rows="3"
                          :max-rows="6">
          </b-form-textarea>
        </b-form-group>

        <div class="my-2">
          <b-button type="submit" variant="primary">Submit</b-button>
          <router-link :to="'./showPosts'">
            <b-button type="button" variant="danger">Cancel</b-button>
          </router-link>
        </div>

      </b-form>
      <div v-if="!show">
        <b-alert variant="success" show>Post added. Thanks</b-alert>
        <router-link :to="'./showPosts'">
          <b-button class="my-2">Return to Blog</b-button>
        </router-link>
      </div>

    </b-container>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  data () {
    return {
      posts: [],
      name: '',
      email: '',
      title: '',
      body: '',
      show: true
    }
  },
  firestore () {
    return {
      posts: db.collection('posts').orderBy('time')
    }
  },
  methods: {
    onSubmit (name, email, title, body) {
      const time = new Date()
      db.collection('posts').add({ name, email, title, body, time })
      this.show = false
    }
  }
}
</script>

<style lang="sass">

</style>
