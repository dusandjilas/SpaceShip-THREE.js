import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import { EXRLoader } from './node_modules/three/examples/jsm/loaders/EXRLoader.js';
import { EffectComposer } from './node_modules/three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from './node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from './node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js';




// Scena i kamera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 8, 25);

// Renderovanje
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.physicallyCorrectLights = true;
document.body.appendChild(renderer.domElement);

// Bloom Effect Setup
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.3,  
  0.4,  
  0.85  
);
composer.addPass(bloomPass);

// Bloom layer
const BLOOM_LAYER = 1;
const bloomLayer = new THREE.Layers();
bloomLayer.set(BLOOM_LAYER);

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

// Svetlo
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xfff4e6, 1.5);
sunLight.position.set(20, 15, 10);
scene.add(sunLight);

// Loaders
const loader = new THREE.TextureLoader();
const exrLoader = new EXRLoader();
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

// Pozadina
exrLoader.load('assets/textures/space.exr', (texture) => {
  const envMap = pmremGenerator.fromEquirectangular(texture).texture;
  scene.environment = envMap;
  scene.background = envMap;
  texture.dispose();
  pmremGenerator.dispose();
});

// Kormilo
const BridgeMaterial = new THREE.MeshStandardMaterial({
  map: loader.load('assets/textures/Zlato/Metal048A_2K-JPG_Color.jpg'),
  normalMap: loader.load('assets/textures/Zlato/Metal048A_2K-JPG_NormalGL.jpg'),
  roughnessMap: loader.load('assets/textures/Zlato/Metal048A_2K-JPG_Roughness.jpg'),
  metalnessMap: loader.load('assets/textures/Zlato/Metal048A_2K-JPG_Metalness.jpg'),
  displacementMap: loader.load('assets/textures/Zlato/Metal048A_2K-JPG_Displacement.jpg'),
  displacementScale: 0.03,
  metalness: 2.0,
  roughness: 1.0,
  envMapIntensity: 1.5
});

// Narandzasto 
const narandzastoMaterial = new THREE.MeshStandardMaterial({
  map: loader.load('assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_basecolor.jpg'),
  normalMap: loader.load('assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_normal.jpg'),
  roughnessMap: loader.load('assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_roughness.jpg'),
  metalnessMap: loader.load('assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_metallic.jpg'),
  aoMap: loader.load('assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_ambientOcclusion.jpg'),
  displacementMap: loader.load('assets/textures/Narandzasto/Sci-Fi_Padded_Fabric_004_height.png'),
  displacementScale: 0.08,   
  metalness: 0.2,           
  roughness: 0.75,         
  envMapIntensity: 1.0
});

// Sci-fi Armor 
const armorMaterial = new THREE.MeshStandardMaterial({
  map: loader.load('assets/textures/Sci-fi_Armor/Sci-fi_Armor_001_basecolor.jpg'),
  normalMap: loader.load('assets/textures/Sci-fi_Armor/Sci-fi_Armor_001_normal.jpg'),
  roughnessMap: loader.load('assets/textures/Sci-fi_Armor/Sci-fi_Armor_001_roughness.jpg'),
  aoMap: loader.load('assets/textures/Sci-fi_Armor/Sci-fi_Armor_001_ambientOcclusion.jpg'),
  displacementMap: loader.load('assets/textures/Sci-fi_Armor/Sci-fi_Armor_001_height.png'),
  displacementScale: 0.03,   
  metalness: 0.85,          
  roughness: 0.35,          
  envMapIntensity: 1.6
});

// Metal Plate
const metalPlateMaterial = new THREE.MeshStandardMaterial({
  map: loader.load('assets/textures/Metal_Plate/Metal_Plate_013_basecolor.jpg'),
  normalMap: loader.load('assets/textures/Metal_Plate/Metal_Plate_013_normal.jpg'),
  roughnessMap: loader.load('assets/textures/Metal_Plate/Metal_Plate_013_roughness.jpg'),
  metalnessMap: loader.load('assets/textures/Metal_Plate/Metal_Plate_013_metallic.jpg'),
  aoMap: loader.load('assets/textures/Metal_Plate/Metal_Plate_013_ambientOcclusion.jpg'),
  displacementMap: loader.load('assets/textures/Metal_Plate/Metal_Plate_013_height.png'),
  displacementScale: 0.125,   
  metalness: 1.0,            
  roughness: 0.45,           
  envMapIntensity: 1.4
});

// Vatra
const lavaMaterial = new THREE.MeshStandardMaterial({
  map: loader.load('assets/textures/Vatra/Lava004_2K-JPG_Color.jpg'),
  normalMap: loader.load('assets/textures/Vatra/Lava004_2K-JPG_NormalGL.jpg'),
  roughnessMap: loader.load('assets/textures/Vatra/Lava004_2K-JPG_Roughness.jpg'),
  displacementMap: loader.load('assets/textures/Vatra/Lava004_2K-JPG_Displacement.jpg'),
  emissiveMap: loader.load('assets/textures/Vatra/Lava004_2K-JPG_Emission.jpg'),
  displacementScale: 0.0, 
  emissive: new THREE.Color(0xff5500),
  emissiveIntensity: 2.5,
  roughness: 0,   
  envMapIntensity: 4 
});

// Solarni paneli
const solarMaterial = new THREE.MeshStandardMaterial({
  map: loader.load('assets/textures/solar-panel/Sci-Fi_Wall_008_basecolor.jpg'),
  normalMap: loader.load('assets/textures/solar-panel/Sci-Fi_Wall_008_normal.jpg'),
  roughnessMap: loader.load('assets/textures/solar-panel/Sci-Fi_Wall_008_roughness.jpg'),
  metalnessMap: loader.load('assets/textures/solar-panel/Sci-Fi_Wall_008_metallic.jpg'),
  aoMap: loader.load('assets/textures/solar-panel/Sci-Fi_Wall_008_ambientOcclusion.jpg'),
  displacementMap: loader.load('assets/textures/solar-panel/Sci-Fi_Wall_008_height.png'),
  displacementScale: 0.05,
  metalness: 0.5,
  roughness: 0.6,
  envMapIntensity: 1.2
});

// Antena - Sijalica
const abstractMaterial = new THREE.MeshStandardMaterial({
  map: loader.load('assets/textures/Svetlo/Abstract_001_COLOR.jpg'),
  normalMap: loader.load('assets/textures/Svetlo/Abstract_001_NRM.jpg'),
  roughnessMap: loader.load('assets/textures/Svetlo/Abstract_001_SPEC.jpg'),
  metalnessMap: loader.load('assets/textures/Svetlo/Abstract_001_SPEC.jpg'),
  aoMap: loader.load('assets/textures/Svetlo/Abstract_001_OCC.jpg'),
  displacementMap: loader.load('assets/textures/Svetlo/Abstract_001_DISP.png'),
  displacementScale: 0.02,  
  metalness: 0.5,
  roughness: 0.3,
  envMapIntensity: 1.5,
  emissive: new THREE.Color(0x4488ff),
  emissiveIntensity: 2.0
});

// Helper funkcija
function setUV2(geometry) {
  if (!geometry.attributes.uv2) {
    geometry.attributes.uv2 = geometry.attributes.uv;
  }
}

// Stanica - grupa
const station = new THREE.Group();
scene.add(station);

// Telo - cilindri
const coreModules = [];

function addModule(x, y, z, width, height, rotationX, rotationY, rotationZ, name) {
  const module = new THREE.Mesh(new THREE.CylinderGeometry(width, width, height, 32), metalPlateMaterial);
  module.position.set(x, y, z);
  module.rotation.x = rotationX;
  module.rotation.y = rotationY;
  module.rotation.z = rotationZ;
  setUV2(module.geometry);
  station.add(module);
  coreModules.push({ mesh: module, name });
  return module;
}

// Centralnni deo
addModule(0, 0, 0, 2, 50, Math.PI / 2, 0, 0, "Core");
addModule(0, 0, 25, 3, 2, Math.PI / 2, 0, 0, "Core");

// Krila
addModule(-4, 4, 7.5, 1, 10, 0, 0, Math.PI / 4, "Core");
addModule(4, 4, 7.5, 1, 10, 0, 0, -Math.PI / 4, "Core");

// Delovi broda
addModule(0, 0, 15, 5, 1, 0, 0, 0, "Habitat - Pozadi");
addModule(0, 0, 0, 5, 1, 0, 0, 0, "Habitat - Sredina");
addModule(0, 0, -15, 5, 1, 0, 0, 0, "Habitat - Napred");

// Elipsoid
function addEllipsoid(x, y, z, scaleX, scaleY, scaleZ, rotX, rotY, rotZ) {
  const ellipsoid = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), narandzastoMaterial);
  ellipsoid.position.set(x, y, z);
  ellipsoid.scale.set(scaleX, scaleY, scaleZ);
  ellipsoid.rotation.set(rotX, rotY, rotZ);
  setUV2(ellipsoid.geometry);
  station.add(ellipsoid);
  return ellipsoid;
}

// Levi
addEllipsoid(-7.5, 7.5, 7.5, 2.8, 2, 8.5, 0, 0, Math.PI / 4);

// Desni
addEllipsoid(7.5, 7.5, 7.5, 2.8, 2, 8.5, 0, 0, -Math.PI / 4);

// Kormilo - lopta (sa bloom efektom)
const spheresWithBloom = [];

function addSphere(x, y, z, radius, width, height) {
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, width, height), BridgeMaterial.clone());
  sphere.position.set(x, y, z);
  sphere.material.emissive = new THREE.Color(0xffaa00);
  sphere.material.emissiveIntensity = 1.5;
  sphere.layers.enable(BLOOM_LAYER);
  setUV2(sphere.geometry);
  station.add(sphere);
  spheresWithBloom.push(sphere);
  return sphere;
}

addSphere(0, 0, -24.5, 1.9, 16, 16);

// Drske - kutije
function addBox(x, y, z, width, height, depth, name) {
  const box = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), armorMaterial);
  box.position.set(x, y, z);
  setUV2(box.geometry);
  station.add(box);
  return box;
}

//Sredina - napred
addBox(0, 0, 15, 34, 0.3, 0.3, "Connector - Napred");
//Sredina - sredina
addBox(0, 0, 0, 34, 0.3, 0.3, "Connector - Sredina");
//Sredina - pozadi
addBox(0, 0, -15, 34, 0.3, 0.3, "Connector - Pozadi");

// Solarni paneli - box
const solarPanels = []; 

function addSolarPanel(x, y, z, width, height, depth) {
  const panel = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), solarMaterial);
  panel.position.set(x, y, z);
  setUV2(panel.geometry);
  station.add(panel);
  solarPanels.push(panel); 
  return panel;
}

// Sredina
addSolarPanel(-32, 0, 0, 30, 0.1, 6);
addSolarPanel(32, 0, 0, 30, 0.1, 6);

// Napred
addSolarPanel(-32, 0, 15, 30, 0.1, 6);
addSolarPanel(32, 0, 15, 30, 0.1, 6);

// Pozadi
addSolarPanel(-32, 0, -15, 30, 0.1, 6);
addSolarPanel(32, 0, -15, 30, 0.1, 6);

// Antena - cilindar
const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 1, 2.3, 16), armorMaterial);
antenna.position.set(0, 2, -2);
setUV2(antenna.geometry);
station.add(antenna);

const antennaConnector = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1, 12), armorMaterial);
antennaConnector.position.set(antenna.position.x, antenna.position.y + 1.5, antenna.position.z);
setUV2(antennaConnector.geometry);
station.add(antennaConnector);

// Antena svetlo - lopta (sa bloom efektom)
const antennaSphere = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), abstractMaterial);
antennaSphere.position.set(antennaConnector.position.x, antennaConnector.position.y + 0.5, antennaConnector.position.z);
antennaSphere.layers.enable(BLOOM_LAYER);
setUV2(antennaSphere.geometry);
station.add(antennaSphere);
spheresWithBloom.push(antennaSphere);

// Potisnik - cilindar i konus
function addThruster(x, y, z, radius, length) {
  const thruster = new THREE.Group();

  // Telo potisnika 
  const body = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, 24), armorMaterial);
  body.rotation.x = Math.PI / 2; 
  setUV2(body.geometry);

// Vatra 
  const nozzle = new THREE.Mesh(new THREE.ConeGeometry(radius, radius), lavaMaterial);
  nozzle.position.z = length;
  nozzle.rotation.x = Math.PI / 2;
  nozzle.layers.enable(BLOOM_LAYER); // Bloom effect za vatru
  setUV2(nozzle.geometry);

  thruster.add(body);
  thruster.add(nozzle);

  thruster.position.set(x, y, z);
  station.add(thruster);

  return thruster;
}

const thrusterZ = 26;

// Centar
addThruster(0, 0, thrusterZ, 0.8, 1);

// Pored - horizontalno
addThruster(1.8, 0, thrusterZ, 0.6, 1);
addThruster(-1.8, 0, thrusterZ, 0.6, 1);

// Pored - Vertikalno
addThruster(0, 1.6, thrusterZ, 0.5, 1);
addThruster(0, -1.6, thrusterZ, 0.5, 1);

// Animacije
const rotationSpeed = 0.0005;
function animateStation() {
  station.rotation.y += rotationSpeed;
}

// Rotacija solarnih panela
const maxPanelAngle = THREE.MathUtils.degToRad(45);
const panelSpeed = 0.3; 

function animateSolarPanels(time) {
  const angle = Math.sin(time * panelSpeed) * maxPanelAngle;
  solarPanels.forEach(panel => {
    panel.rotation.x = angle;
  });
}

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 10;
controls.maxDistance = 100;

// Camera Tour System
const tourPoints = [
  { position: new THREE.Vector3(0, 8, 25), lookAt: new THREE.Vector3(0, 0, 0), name: "Pregled" },
  { position: new THREE.Vector3(0, 0, -35), lookAt: new THREE.Vector3(0, 0, -24.5), name: "Kormilo" },
  { position: new THREE.Vector3(40, 5, 0), lookAt: new THREE.Vector3(0, 0, 0), name: "Solarni Paneli - Desno" },
  { position: new THREE.Vector3(-40, 5, 0), lookAt: new THREE.Vector3(0, 0, 0), name: "Solarni Paneli - Levo" },
  { position: new THREE.Vector3(0, 15, 0), lookAt: new THREE.Vector3(0, 0, 0), name: "Pogled Odozgo" },
  { position: new THREE.Vector3(0, 5, 35), lookAt: new THREE.Vector3(0, 0, 25), name: "Potisnici" },
  { position: new THREE.Vector3(10, 10, 10), lookAt: new THREE.Vector3(7.5, 7.5, 7.5), name: "Desno Krilo" },
  { position: new THREE.Vector3(-10, 10, 10), lookAt: new THREE.Vector3(-7.5, 7.5, 7.5), name: "Levo Krilo" }
];

let currentTourPoint = 0;
let isTourActive = false;
let tourProgress = 0;
const tourDuration = 3; 

let startPosition = new THREE.Vector3();
let endPosition = new THREE.Vector3();
let startLookAt = new THREE.Vector3();
let endLookAt = new THREE.Vector3();

function startTour() {
  isTourActive = true;
  tourProgress = 0;
  startPosition.copy(camera.position);
  endPosition.copy(tourPoints[currentTourPoint].position);
  startLookAt.copy(controls.target);
  endLookAt.copy(tourPoints[currentTourPoint].lookAt);
  controls.enabled = false;
}

function stopTour() {
  isTourActive = false;
  controls.enabled = true;
}

function nextTourPoint() {
  currentTourPoint = (currentTourPoint + 1) % tourPoints.length;
  startTour();
}

function previousTourPoint() {
  currentTourPoint = (currentTourPoint - 1 + tourPoints.length) % tourPoints.length;
  startTour();
}

function updateTour(deltaTime) {
  if (!isTourActive) return;

  tourProgress += deltaTime / tourDuration;

  if (tourProgress >= 1) {
    tourProgress = 1;
    camera.position.copy(endPosition);
    controls.target.copy(endLookAt);
    isTourActive = false;
    controls.enabled = true;
  } else {
    const t = easeInOutCubic(tourProgress);
    camera.position.lerpVectors(startPosition, endPosition, t);
    controls.target.lerpVectors(startLookAt, endLookAt, t);
  }

  controls.update();
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// UI 
const uiContainer = document.createElement('div');
uiContainer.style.position = 'absolute';
uiContainer.style.top = '20px';
uiContainer.style.left = '20px';
uiContainer.style.background = 'rgba(0, 0, 0, 0.7)';
uiContainer.style.padding = '15px';
uiContainer.style.borderRadius = '8px';
uiContainer.style.color = 'white';
uiContainer.style.fontFamily = 'Arial, sans-serif';
uiContainer.style.zIndex = '1000';
document.body.appendChild(uiContainer);

const title = document.createElement('h3');
title.textContent = 'Virtuelna Tura';
title.style.margin = '0 0 10px 0';
uiContainer.appendChild(title);

const pointName = document.createElement('div');
pointName.textContent = `Tačka: ${tourPoints[currentTourPoint].name}`;
pointName.style.marginBottom = '10px';
uiContainer.appendChild(pointName);

const btnContainer = document.createElement('div');
btnContainer.style.display = 'flex';
btnContainer.style.gap = '10px';
btnContainer.style.marginBottom = '10px';
uiContainer.appendChild(btnContainer);

const prevBtn = document.createElement('button');
prevBtn.textContent = '◄ Prethodna';
prevBtn.style.padding = '8px 12px';
prevBtn.style.cursor = 'pointer';
prevBtn.style.background = '#4CAF50';
prevBtn.style.border = 'none';
prevBtn.style.borderRadius = '4px';
prevBtn.style.color = 'white';
prevBtn.onclick = () => {
  previousTourPoint();
  pointName.textContent = `Tačka: ${tourPoints[currentTourPoint].name}`;
};
btnContainer.appendChild(prevBtn);

const nextBtn = document.createElement('button');
nextBtn.textContent = 'Sledeća ►';
nextBtn.style.padding = '8px 12px';
nextBtn.style.cursor = 'pointer';
nextBtn.style.background = '#2196F3';
nextBtn.style.border = 'none';
nextBtn.style.borderRadius = '4px';
nextBtn.style.color = 'white';
nextBtn.onclick = () => {
  nextTourPoint();
  pointName.textContent = `Tačka: ${tourPoints[currentTourPoint].name}`;
};
btnContainer.appendChild(nextBtn);

const freeBtn = document.createElement('button');
freeBtn.textContent = 'Slobodan Pregled';
freeBtn.style.padding = '8px 12px';
freeBtn.style.cursor = 'pointer';
freeBtn.style.background = '#FF9800';
freeBtn.style.border = 'none';
freeBtn.style.borderRadius = '4px';
freeBtn.style.color = 'white';
freeBtn.style.width = '100%';
freeBtn.onclick = () => {
  stopTour();
};
uiContainer.appendChild(freeBtn);

const instructions = document.createElement('div');
instructions.innerHTML = `
  <div style="margin-top: 10px; font-size: 12px; line-height: 1.5;">
    <strong>Kontrole:</strong><br>
    • Levi klik + povuci: Rotacija<br>
    • Desni klik + povuci: Pomeranje<br>
    • Scroll: Zoom<br>
    • Brojevi 1-8: Brzi pristup tačkama
  </div>
`;
uiContainer.appendChild(instructions);

// Shortcuts
window.addEventListener('keydown', (e) => {
  const key = parseInt(e.key);
  if (key >= 1 && key <= 8) {
    currentTourPoint = key - 1;
    startTour();
    pointName.textContent = `Tačka: ${tourPoints[currentTourPoint].name}`;
  } else if (e.key === 'ArrowRight') {
    nextTourPoint();
    pointName.textContent = `Tačka: ${tourPoints[currentTourPoint].name}`;
  } else if (e.key === 'ArrowLeft') {
    previousTourPoint();
    pointName.textContent = `Tačka: ${tourPoints[currentTourPoint].name}`;
  } else if (e.key === ' ') {
    stopTour();
  }
});

// Glavni loop
let lastTime = 0;

function animate(time = 0) {
  requestAnimationFrame(animate);

  const deltaTime = (time - lastTime) / 1000;
  lastTime = time;

  animateStation();
  animateSolarPanels(time * 0.001);
  updateTour(deltaTime);

  if (!isTourActive) {
    controls.update();
  }

  composer.render();
}

animate();