import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color(0xBA7979)
scene.fog = new THREE.Fog( 'black', 1, 15 );
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );

let cameraTarget = new THREE.Vector3( 0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, 700);

document.getElementsByClassName("sym")[0].appendChild( renderer.domElement );



const stlLoader = new STLLoader();

stlLoader.load( './assets/models/Mouthpiece-alt.STL', function (geometry) {

	const material = new THREE.MeshPhongMaterial( { color: 0xFBD596, specular: 0x494949, shininess: 100 } );
	const mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( 0, -30, 0 );
	mesh.rotation.set( - Math.PI / 2, 0, 0);
	mesh.scale.set( 1, 1, 1 );
	// mesh.castShadow = true;
	// mesh.receiveShadow = true;

	scene.add( mesh );
} );



function animate() {

	const timer = Date.now() * 0.0005;

	camera.position.x = Math.cos( timer ) * 100;
	camera.position.z = Math.sin( timer ) * 100;
	// camera.position.z = 100

	camera.lookAt( cameraTarget );

	renderer.render( scene, camera );

}
renderer.setAnimationLoop( animate );


