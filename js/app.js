import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Threeasy from "threeasy";

const app = new Threeasy(THREE, { alpha: true });

var loader = new GLTFLoader();

/* You must download your own .gltf model and reference it below.
   If you do not see it, the model may be too small, try to adjust
   the scale values below. */
let modelUrl = "./model.glb";

loader.load(
  modelUrl,
  function (gltf) {
    console.log(gltf.scene);
    gltf.scene.scale.x = 0.009;
    gltf.scene.scale.y = 0.009;
    gltf.scene.scale.z = 0.009;

    gltf.scene.rotation.x = 0;
    gltf.scene.rotation.y = 0;
    gltf.scene.rotation.z = 0;

    app.scene.add(gltf.scene);

    window.addEventListener("scroll", onScroll);

    function onScroll() {
      const scrollY = window.scrollY;
      const rotationSpeed = 0.001;
      gltf.scene.rotation.x = scrollY * 0.0034;
      gltf.scene.rotation.y = scrollY * rotationSpeed;
    }
  },
  undefined,
  function (e) {
    console.error(e);
  }
);

const light = new THREE.AmbientLight(0xffffff); // soft white light
light.intensity = 500;
const light2 = new THREE.DirectionalLight(0xffffff, 10);
light2.position.set(0, 10, 0);
const light3 = new THREE.DirectionalLight(0xffffff, 10);
light2.position.set(10, 0, 0);

const light4 = new THREE.DirectionalLight(0xffffff, 10);
light2.position.set(0, 0, 40);

app.scene.add(light, light2, light3, light4);
