// mixin（混合）组件相同部分功能，可以抽离出来复用
export const hunhe = {
    
    // 生命周期钩子，vm挂载前
    beforeMount(){
        // console.log("mixin 混合功能 组件相同功能抽离出来复用@beforMounted");
    }
}

export const hunhe2 = {
    
    // 生命周期钩子，vm挂载完毕
    mounted(){
        // console.log("mixin 混合功能 组件相同功能抽离出来复用@mounted");
    }
}