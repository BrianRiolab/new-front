import { createWebHistory, createRouter } from "vue-router";
//import Login from "@/views/session/Login.vue";
//import About from "@/views/About.vue";
//import Dashboard from "@/views/dashboard/Layout.vue";



const routes = [
  /*
  {
    path: "/login",
    component: () => import('@/views/session/Index.vue'),
  },
  */
   /*
  {
    path: "/register",
    component: () => import('@/views/session/Register.vue'),
  },
  
  {
    path: "/verification",
    component: () => import('@/views/session/Verification.vue'),
  },  
  */
  {
    path: "/",
    component: () => import('@/views/dashboard/Index.vue'),
  },
  
  {
    path: "/session",
    component: () => import('@/views/session/Index.vue'),
    children: [
       { path: "/session/login"  , component: () => import('@/views/session/Login.vue') },
       { path: "/session/register"  , component: () => import('@/views/session/Register.vue') },
       { path: "/session/verification"  , component: () => import('@/views/session/Verification.vue') },
       { path: "/session/recover"  , component: () => import('@/views/session/Recover.vue') },
    ]
  },
  
  {
    path: "/startup",
    component: () => import('@/views/startup/Index.vue'),
    children: [
       { path: "/startup/welcome"  , component: () => import('@/views/startup/Welcome.vue') },
       { path: "/startup/step1"  , component: () => import('@/views/startup/Step1_Interests.vue') },
       { path: "/startup/step2"  , component: () => import('@/views/startup/Step2_Business.vue') },
       { path: "/startup/step3"  , component: () => import('@/views/startup/Step3_Contact.vue') },
       { path: "/startup/step4"  , component: () => import('@/views/startup/Step4_Map.vue') },
       { path: "/startup/step5"  , component: () => import('@/views/startup/Step5_Products.vue') },
       { path: "/startup/step6"  , component: () => import('@/views/startup/Step6_Welcome.vue') },
    ]
  },   
  
  {
    path: "/dashboard",
    component: () => import('@/views/dashboard/Index.vue'),
    
    children: [
      { path: '/dashboard/vitrina_view', component: () => import('@/views/dashboard/vitrina/VitrinaView.vue') },
      { path: '/dashboard/vitrina_form', component: () => import('@/views/dashboard/vitrina/VitrinaForm.vue') },
        
      { path: '/dashboard/contact_view', component: () => import('@/views/dashboard/vitrina/ContactView.vue') },
      { path: '/dashboard/contact_form', component: () => import('@/views/dashboard/vitrina/VitrinaForm.vue') },

      { path: '/dashboard/vitrina_location_view', component: () => import('@/views/dashboard/vitrina/VitrinaView.vue') },
      { path: '/dashboard/vitrina_location_form', component: () => import('@/views/dashboard/vitrina/VitrinaForm.vue') },

        //{ path: '/dashboard/home_index', component: () => import('@/views/dashboard/home/Index.vue') },
        //{ path: '/dashboard/vitrinalist_index', component: () => import('@/views/dashboard/vitrinalist/Index.vue') },
        { path: '/dashboard/product_list', component: () => import('@/views/dashboard/product/ProductList.vue') },     
        { path: '/dashboard/product_form', component: () => import('@/views/dashboard/product/ProductForm.vue') },
        
        { path: '/dashboard/approver_vitrina_list', component: () => import('@/views/dashboard/approver/VitrinaList.vue') },
        
        { path: '/dashboard/current_user', component: () => import('@/views/dashboard/currentuser/Index.vue') },
        
        { path: '/dashboard/training', component: () => import('@/views/dashboard/training/TrainingList.vue') },
    ]
    
  },
  
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/components/RDxPageNotFound.vue"),
  },
  
  
];




const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

