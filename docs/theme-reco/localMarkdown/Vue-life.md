### Vue生命周期

![img](/vue_lifeImg/life01.png)

- **beforeCreated**：在实例初始化之后，数据观测和event/watcher事件配置之前被调用。
- **created**：实例已经创建完成之后被调用，在这一步，实例已完成以下的配置：数据观测（data observe）属性和方法的运算，watch/event事件回调。然而，挂在阶段还没开始，$el属性目前不可见。
- **beforeMount**：在挂载之前被调用：相关的render函数首次被调用
- **mounted**：el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子。如果root实例挂载了一个文档内元素，当mounted被调用时vm.$el也在文档内。
- **beforeUpdate**：数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前，你可以在这个钩子中进一步更改状态，这不会触发附加的重渲染过程。
- **updated**：由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件DOM已经更新，所以你现在可以执行依赖于DOM的操作。

## 组件间通信