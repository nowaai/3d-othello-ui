import {
    Clock,
    PerspectiveCamera,
    Scene,
    GridHelper,
    Color,
    WebGLRenderer,
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { BVHLoader } from 'three/examples/jsm/loaders/BVHLoader.js';

var clock = new Clock();

var camera, controls, scene, renderer;
var mixer, skeletonHelper;

var loader = new BVHLoader();

init()
animate()

function init() {

    camera = new PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set( 0, 200, 400 );

    scene = new Scene();
    scene.background = new Color( 0xeeeeee );

    scene.add( new GridHelper( 400, 10 ) );

    renderer = new WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = 300;
    controls.maxDistance = 700;

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    requestAnimationFrame( animate );
    var delta = clock.getDelta();
    if ( mixer ) mixer.update( delta );
    renderer.render( scene, camera );
}
