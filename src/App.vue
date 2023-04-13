<template>
  <div id="root">
    <FirstVue />
    <RefConf />
    <!--给组件传参； :age 不加：传入数据都为字符串，加：为动态绑定v-bind  内容为js表达式结果-->
    <PropsConf name="张三" :age="18" sex="男" />
    <CustomEventMain/>
    <SubscribeAndPublishMain/>
    <HttpRequest/>
    <CaseMain/>
    <SlotMain/>
    <RouterMain/>
    <ElementUi/>
  </div>
</template>

<script>
import FirstVue from "./components/props&ref/FirstVue";
import RefConf from "./components/props&ref/RefConf";
import PropsConf from "./components/props&ref/PropsConf";
import CustomEventMain from "./components/customEvent&eventBus/Main";
import SubscribeAndPublishMain from "./components/subscribeAndPublish/Main"
import HttpRequest from "./components/httpRequest/HttpTest"
import CaseMain from "./components/githubCase/Main"
import SlotMain from "./components/slot/Main"
import RouterMain from "./pages/Main"
import ElementUi from "./components/elementUi/ElementUI"

// mixin局部注册，可以在main.js中全局注册
import { hunhe, hunhe2 } from "./mixin";

export default {
  name: "App",
  components: {
    FirstVue,
    RefConf,
    PropsConf,
    CustomEventMain,
    SubscribeAndPublishMain,
    HttpRequest,
    CaseMain,
    SlotMain,
    RouterMain,
    ElementUi
  },
  // 如有相同属性，组件中的生效；钩子都会生效,mixin中先执行
  mixins: [hunhe, hunhe2],
};
</script>


<style>
#root {
  padding: 10px;
  width: 99%;
  height: 900px;
  border: 3px solid;
  border-color: red;
}
</style>
