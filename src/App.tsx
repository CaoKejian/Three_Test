import { defineComponent, PropType, reactive, ref } from 'vue';
import s from './App.module.scss'
import { Son } from './share/son';
export const App = defineComponent({
  setup: (props, context) => {
    const refVisible = ref(true)
    const refText = ref("Colin")
    return () => (<>
      <div class={s.father}>我是父组件App.tsx</div>
      <div>refVisible:{JSON.stringify(refVisible.value)}</div>
      <div>refText:{refText.value}</div>
      <button onClick={() => refVisible.value = !refVisible.value}>开启/关闭</button>
      <Son v-model:refText={refText.value} v-model:refVisible={refVisible.value} onUpdate:refVisible={() => console.log(1)} />
    </>
    )
  }
})