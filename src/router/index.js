import {createRouter,createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue'
const router=createRouter({
history:createWebHistory(),
routes:[
    {
        path:'/',
        name:'home',
        component:HomeView,
        alias:['/home','/inicio'],
        meta:{
            requiresAuth:false
        }
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
        path:'/chat',
        name:'chat',
        component:()=>import('@/views/ChatView.vue'),
        meta:{
            requiresAuth:true,
            roles:['admin'],
        },
        children:[
            {
                path:':chatId',
                name:'chat-individual',
                component:()=>import('@/views/ChatIndividualView.vue'),
                props:(route)=>{
                    return{
                        chatId:route.params.chatId
                    }
                }
                //props:true
                //props:{
                //    chatId:'3'
                //}
            }
        ]
    },
   
],
});
//guardas de navegaciopm
//sistema de permisos
//sistemas de sesiones
router.beforeEach((to,from)=>{
    console.log("to",to);
    console.log("from",from)
    if(to.meta?.requiresAuth && to.meta?.roles.includes('admin')){
        console.log(to.path, ' requires auth')
        return {name:'session'}
    }

    if(to.path==='/'){
        //return '/about'
        return {name:'about'}
    }
})
export default router;