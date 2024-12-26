import {createRouter, createWebHashHistory} from "vue-router";

const files:any = import.meta.glob('/src/pages/*/*.vue', {eager: true})
const routes = Object.keys(files).map((path: any) => {
  let splitPath = path.split('/')
  const fileName = splitPath[splitPath.length - 2] + "/" + splitPath[splitPath.length - 1].replace(/\.vue$/, '')
  return {
    path: `/${fileName}`,
    name: fileName,
    component: () => import(path)
  }
  
})

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
 });