import { computed, defineComponent, PropType, ref } from 'vue';
import s from './App.module.scss';
export const App2 = defineComponent({
  setup: (props, context) => {
    const firstName = ref('colin')
    const lastName = ref('Cao')
    const fullName = computed({
      get() {
        console.log('我被缓存了吗？');
        return firstName.value + '-' + lastName.value
      },
      set(newVal) {
        [firstName.value, lastName.value] = newVal.split("-")
      }
    })
    // const fullName = computed(() => firstName.value + '-' + lastName.value)
    const click = () => {
      fullName.value = 'Cao-Colin'
    }
    const changeName = () => {
      console.log('我这里是methods');
      return firstName.value + '-' + lastName.value
    }
    return () => (
      <div class={s.container}>
        <div class={s.inputContainer}>姓<input v-model={firstName.value} type="text" /></div>
        <div class={s.inputContainer}>名<input v-model={lastName.value} type="text" /></div>
        <div class={s.fullName}>全名(computed):{fullName.value}</div>
        <div class={s.fullName}>全名(computed):{fullName.value}</div>
        <div class={s.fullName}>全名(computed):{fullName.value}</div>
        {/* <button onClick={() => click()}>改名了！</button> */}
        <div>methods: {changeName()}</div>
        <div>methods: {changeName()}</div>
        <div>methods: {changeName()}</div>
      </div>
    )
  }
})