import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xff0000, 5, 100);
light.position.set(0, 0, 10);
scene.add(light);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ffba8 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const animate = () => {

  requestAnimationFrame(animate);
  cube.rotation.x += 0.5;
  cube.rotation.y += 0.5;
  renderer.render(scene, camera);
};

animate();
