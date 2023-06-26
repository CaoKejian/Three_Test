import { defineComponent, PropType, reactive, ref, toRefs } from 'vue';
import s from './son.module.scss';
export const Son = defineComponent({
  props: {
    refVisible: {
      type: Boolean
    },
    refText: {
      type: String
    }
  },
  emits: ['update:refVisible', 'update:refText'],
  setup: (props, context) => {
    const changeText = (e: Event) => {
      if (e.target instanceof HTMLInputElement) {
        context.emit("update:refText", e.target.value)
      }
    }
    return () => (<>
      {props.refVisible ?
        <div class={s.wrapper}>
          <div class={s.son}>我是子组件son.tsx</div>
          <div>refVisible:{JSON.stringify(props.refVisible)}</div>
          text:<input type="text"
            v-model:refText={props.refText}
            onInput={changeText}
          />
          <button onClick={() => context.emit("update:refVisible", false)}>关闭</button>
        </div> :
        <div></div>
      }
    </>
    )
  }
})