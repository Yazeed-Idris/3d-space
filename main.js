import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x8ebbd3)

const light = new THREE.AmbientLight(0xffffff)
scene.add(light)

const renderer = new THREE.WebGLRenderer({
    antialias: true,
})
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
const stats = new Stats()
document.body.appendChild(stats.domElement)

const boxGeometry = new THREE.BoxGeometry()
const boxMaterial = new THREE.MeshStandardMaterial({
    // color:0xf800d3
})
const textureLoader = new THREE.TextureLoader()
const bwTexture = textureLoader.load('/assets/textures/uv-test-bw.png',)
const colTexture = textureLoader.load('/assets/textures/uv-test-col.png')
boxMaterial.alphaMap = bwTexture
boxMaterial.transparent = true
// boxMaterial.aoMap = colTexture
// boxMaterial.displacementMap = bwTexture
// boxMaterial.map = bwTexture


const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box)

function animate() {
    requestAnimationFrame(animate)
    renderer.setSize(window.innerWidth, window.innerHeight)
    controls.update()
    stats.update()
    renderer.render(scene, camera)
}
    console.log('textures:', bwTexture, colTexture)
animate()
