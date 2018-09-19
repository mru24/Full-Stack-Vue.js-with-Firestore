import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShowPosts from '@/components/showPosts'
import AddPost from '@/components/addPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/showPosts',
      name: 'ShowPosts',
      component: ShowPosts
    },
    {
      path: '/addPost',
      name: 'AddPost',
      component: AddPost
    }
  ]
})
