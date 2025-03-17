import * as THREE from "three";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FatLinesBatch } from "./JSSim/FatLinesBatch";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x999999);
const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let cameraTarget = new THREE.Vector3(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(1280, 700);

document.getElementsByClassName("sym")[0].appendChild(renderer.domElement);

const light1 = new THREE.DirectionalLight(0xffffff, 4);
// light.position.setScalar(30);
// light1.position.set( 8, -30, 10);
light1.position.set(0, 0, -10);
scene.add(light1);

const light2 = new THREE.DirectionalLight(0xffffff, 4);
// light.position.setScalar(30);
light2.position.set(0, 0, 10);
scene.add(light2);

// camera.add( new THREE.PointLight( 0xffffff, 200 ) );

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", render);
controls.update();

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}

function render() {
  renderer.render(scene, camera);
}

const stlLoader = new STLLoader();

stlLoader.load("./assets/models/Mouthpiece-alt.STL", function (geometry) {
  const material = new THREE.MeshPhongMaterial({
    color: 0xba7979,
    specular: 0xba7979,
    shininess: 10,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, -40, 0);
  mesh.rotation.set(-Math.PI / 2, 0, 0);
  mesh.scale.set(1, 1, 1);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  scene.add(mesh);
});

function animate() {
  const timer = Date.now() * 0.0005;

  camera.position.x = Math.cos(timer) * 100;
  camera.position.z = Math.sin(timer) * 100;
  // camera.position.z = 100

  camera.lookAt(cameraTarget);

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
