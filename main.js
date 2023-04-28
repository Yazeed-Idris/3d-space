import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";
import {TextureLoader} from "three";

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x8ebbd3)
const renderer = new THREE.WebGLRenderer({
    antialias: true,
})
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
const stats = new Stats()
document.body.appendChild(stats.domElement)

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshBasicMaterial({

})
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('/assets/textures/uv-test-bw.png',)
boxMaterial.map = texture

const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box)

function animate() {
    requestAnimationFrame(animate)
    renderer.setSize(window.innerWidth, window.innerHeight)
    controls.update()
    stats.update()
    renderer.render(scene, camera)
}
animate()
