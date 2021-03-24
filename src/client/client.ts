import * as THREE from '/build/three.module.js';
import { Color } from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls';

const scene: THREE.Scene = new THREE.Scene()

const camera1: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, 1, .1, 1000)

//good for isometric (top view or side view)
const camera2 : THREE.OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, .1, 10);
const camera3 : THREE.OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, .1, 10);
const camera4 : THREE.OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, .1, 10);

//#region Renderer
//the renderer is just a canvas element that you attach to the document
//this is an example of rendering canvas selected directly:
const canvas1 = <HTMLCanvasElement> document.querySelector('#canvas1')
const renderer1: THREE.WebGLRenderer = new THREE.WebGLRenderer({canvas: canvas1})
const canvas2 = <HTMLCanvasElement> document.querySelector('#canvas2')
const renderer2: THREE.WebGLRenderer = new THREE.WebGLRenderer({canvas: canvas2})
const canvas3 = <HTMLCanvasElement> document.querySelector('#canvas3')
const renderer3: THREE.WebGLRenderer = new THREE.WebGLRenderer({canvas: canvas3})
const canvas4 = <HTMLCanvasElement> document.querySelector('#canvas4')
const renderer4: THREE.WebGLRenderer = new THREE.WebGLRenderer({canvas: canvas4})
//alternatively you could append the canvas to another element (like a div):
// const renderer2: THREE.WebGLRenderer = new THREE.WebGLRenderer()
// document.querySelector('#someDiv').appendChild(renderer.domElement)
//setting the size of the canvas (only needed when rendering to another element)
// renderer1.setSize(window.innerWidth, window.innerHeight)
//#endregion

const controls1 = new OrbitControls(camera1, renderer1.domElement)
const controls2 = new OrbitControls(camera2, renderer2.domElement)
const controls3 = new OrbitControls(camera3, renderer3.domElement)
const controls4 = new OrbitControls(camera4, renderer4.domElement)

const geometry: THREE.BoxGeometry = new THREE.BoxGeometry()
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })

const cube: THREE.Mesh = new THREE.Mesh(geometry, material)

scene.add(cube)
scene.background = new Color('#002a57');

//camera
camera1.position.z = 2

//creating top-down view using orthographic camera
camera2.position.y = 2
camera2.lookAt(new THREE.Vector3(0,0,0));

camera3.position.z = 2

//creating right view using orthographic camera
camera4.position.x = 2
camera4.lookAt(new THREE.Vector3(0,0,0));


var animate = function () {

    requestAnimationFrame(animate)

    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls1.update()
    controls2.update()
    controls3.update()
    controls4.update()

    renderer1.render(scene, camera1)
    renderer2.render(scene, camera2)
    renderer3.render(scene, camera3)
    renderer4.render(scene, camera4)
}; 

animate(); 