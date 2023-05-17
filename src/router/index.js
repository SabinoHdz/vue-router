import {createRouter,createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue'
const router=createRouter({
history:createWebHistory(),
routes:[
    {
        path:'/',name:'home',component:HomeView, alias:['/home','/inicio']
    },
    {
        //path:'/home',redirect:'/',
    },
    {
     path:'/session',component:()=>import('@/views/SessionView.vue'),
     children:[
        {
            path:'',
            name:'session',
            components:{
                default:()=>import('@/views/LoginView.vue'),
                register:()=>import('@/views/RegisterView.vue'),
            }
        }
     ]   
    },
    {
        path:'/about',name:'about',component:()=>import('@/views/AboutView.vue'),
    },
    {
        path:'/chat',name:'chat',component:()=>import('@/views/ChatView.vue'),
        children:[
            {
                path:':chatId',name:'chat-individual',component:()=>import('@/views/ChatIndividualView.vue'),
            }
        ]
    },
   
],
});
export default router;