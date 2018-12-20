import postList from './components/PostList.vue';
import postInput from './components/PostInput.vue';
import postDetail from './components/PostDetail.vue';

export default [{
    path: '/',
    component: postList
  },
  {
    path: '/input',
    component: postInput
  },
  {
    path: '/post/:id',
    component: postDetail
  },
]
