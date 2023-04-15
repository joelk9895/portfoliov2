import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Threeasy from "threeasy";

const app = new Threeasy(THREE, { alpha: true });

var loader = new GLTFLoader();

/* You must download your own .gltf model and reference it below.
   If you do not see it, the model may be too small, try to adjust
   the scale values below. */
let modelUrl = "./retro.glb";

loader.load(
  modelUrl,

  function (gltf) {
    console.log(gltf.scene);
    gltf.scene.scale.x = 0.08;
    gltf.scene.scale.y = 0.08;
    gltf.scene.scale.z = 0.08;
    var xpos = 0;
    var rotateX = 0;
    var rotatey = 0;
    var scrollY = 0;
    if (window.innerWidth < 600) {
      xpos = 1.1;
      gltf.scene.position.x = xpos;
      gltf.scene.rotation.y = -0.1;
    } else {
      xpos = window.innerWidth * 0.001;
      gltf.scene.rotation.y = -0.9;
      gltf.scene.position.x = xpos;
    }

    gltf.scene.rotation.x = 0;
    gltf.scene.rotation.z = 0;
    app.scene.add(gltf.scene);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouseMove, false);

    // Track initial mouse position
    var mouseX = 0,
      mouseY = 0;

    function onMouseMove(event) {
      // Calculate movement distance
      var moveX = (event.clientX / window.innerWidth) * 2 - 1 - mouseX;
      var moveY = -(event.clientY / window.innerHeight) * 2 + 1 - mouseY;
      console.log(scrollY);

      // Move the element in the desired direction
      if (scrollY * 0.0001 < 0.06) {
        if (window.innerWidth < 600) {
        } else {
          rotateX = 0.9 - moveX * 0.04;
          rotatey = -moveY * 0.04;
          gltf.scene.rotation.x = rotatey;
          gltf.scene.rotation.y = -rotateX;
        }
      }
    }

    function onScroll() {
      scrollY = window.scrollY;
      const rotationSpeed = 0.0001;
      if (window.innerWidth < 600) {
        xpos = 1.1;
        gltf.scene.rotation.y = -0.1;
        gltf.scene.position.x = xpos;
        gltf.scene.rotation.x = scrollY * 0.00004;
        gltf.scene.rotation.z = -scrollY * rotationSpeed;
      } else {
        xpos = window.innerWidth * 0.001;
        gltf.scene.position.x = xpos;
        gltf.scene.rotation.y = -0.9;
        gltf.scene.rotation.x = -scrollY * 0.000034;
        gltf.scene.rotation.z = -scrollY * rotationSpeed;
      }
    }
  },
  undefined,
  function (e) {
    console.error(e);
  }
);

const light = new THREE.AmbientLight(0xa0e9ff); // soft white light
light.intensity = 1;
const light2 = new THREE.DirectionalLight(0xa162e8, 1);
light2.position.set(0, 0, 2);
const light3 = new THREE.DirectionalLight(0xf093b0, 1);
light3.position.set(1, 0, 0);

const light4 = new THREE.DirectionalLight(0xedca85, 1);
light4.position.set(0, 0, 4);

app.scene.add(light, light2, light3, light4);

let offset = 1.2;
window.addEventListener("scroll", (e) => {
  const scrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  const currentScrollY = scrollTop;
  const isDownScroll = oldScrollY >= currentScrollY;
  let diff = Math.floor(oldScrollY - currentScrollY) * offset;
  let direction = 90;

  if (isDownScroll) {
    diff *= -1;
    direction *= -1;
  }
  applyRgbShader(diff, direction);
});
const applyRgbShader = (value, direction = 90) => {
  planeGeometries.map((card) => {
    const material = card.material;
    material.uniforms.amount.value = value / 300.0;
    material.uniforms.angle.value = direction * (Math.PI / 180);
  });
};
//#a162e8 50%,#f093b0 70%,#edca85
