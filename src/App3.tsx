import { defineComponent, onMounted, PropType, ref } from 'vue';
import s from './App.module.scss';
import * as THREE from 'three';
export const App3 = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const container = ref<HTMLElement | null>(null)
    // 创建文字纹理
    const createTextTexture = (text: string, color: number) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      context.fillStyle = '#' + color.toString(16);
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = 'Bold 40px Arial';
      context.fillStyle = '#000000';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;

      return texture;
    };
    onMounted(() => {
      // 创建场景
      const scene = new THREE.Scene();
      // 创建相机
      const camera = new THREE.PerspectiveCamera(
        25,
        window.innerWidth / window.innerHeight,
        0.5,
        1000
      );
      camera.position.z = 5;

      // 创建渲染器
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xedeff3); // 白色背景
      // 添加渲染器的输出到DOM
      container.value?.appendChild(renderer.domElement);

      // 创建一个立方体
      const geometry = new THREE.BoxGeometry();
      const material = [
        new THREE.MeshBasicMaterial({ map: createTextTexture('Hello Three', 0x64a2e6) }), // 前面
        new THREE.MeshBasicMaterial({ map: createTextTexture('Hello Three', 0x64a2e6) }), // 后面
        new THREE.MeshBasicMaterial({ map: createTextTexture('Hello Three', 0x64a2e6) }), // 前面
        new THREE.MeshBasicMaterial({ map: createTextTexture('Hello Three', 0x64a2e6) }), // 后面
        new THREE.MeshBasicMaterial({ map: createTextTexture('Hello Three', 0x64a2e6) }), // 前面
        new THREE.MeshBasicMaterial({ map: createTextTexture('Hello Three', 0x64a2e6) }), // 后面
      ];
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      // 渲染场景
      const animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();
    })
    return () => (
      <div ref={container}>
      </div>
    )
  }
})