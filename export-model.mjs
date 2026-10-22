import fs from 'node:fs/promises';
import * as THREE from './dist/vendor/three.module.js';
import {GLTFExporter} from './dist/vendor/GLTFExporter.js';
import {createBoard} from './dist/model.js';
// GLTFExporter uses the browser FileReader interface only to pack binary data.
globalThis.FileReader=class {readAsArrayBuffer(blob){blob.arrayBuffer().then(buffer=>{this.result=buffer;this.onloadend?.();});}readAsDataURL(blob){blob.arrayBuffer().then(buffer=>{this.result=`data:${blob.type};base64,${Buffer.from(buffer).toString('base64')}`;this.onloadend?.();});}};
const scene=new THREE.Scene();scene.name='Together to the Core — 5 Senses tabletop';
const {group}=createBoard({labels:false});scene.add(group);
const die=new THREE.Mesh(new THREE.IcosahedronGeometry(.48),new THREE.MeshStandardMaterial({color:'#a3b692',roughness:.5,flatShading:true}));die.name='Twenty-sided die';die.position.set(3.8,.25,2.1);scene.add(die);
scene.userData={title:'5 Senses — Together to the Core',units:'conceptual meters',description:'Original geometric tabletop scene inspired by the supplied handmade board and clay figures. Digital model; not prepared as a single watertight print.'};
const data=await new GLTFExporter().parseAsync(scene,{binary:true,onlyVisible:true});await fs.writeFile('dist/five-senses.glb',Buffer.from(data));console.log(`Exported ${data.byteLength} bytes to dist/five-senses.glb`);
