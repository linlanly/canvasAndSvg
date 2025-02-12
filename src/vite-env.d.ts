/// <reference types="vite/client" />

declare module '*.ts';
declare module "vue";
declare module "vue-router";
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}