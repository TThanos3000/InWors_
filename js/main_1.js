import {ierarh} from './ierarh.js'

import {GLTFExporter} from '../Three/usefile/GLTFExporter.js';

import * as GLFT from '../Three/usefile/GLTFLoader.js';

//import download from './img.js'


var renderer, scene, camera;

var loader = new GLFT.GLTFLoader();
// variables
var loader_js = new THREE.ObjectLoader();

//for lines
var line;
var MAX_POINTS = 1500;
var drawCount;
var splineArray= [];

// for loading file
var reader = new FileReader();

// canvas
var canvas;

//flour
var prohod = 0;
var for_add_flour = 0;
var for_add_flour_box_geom = 0;
var k = 1;

//height
var height_wall;

// Camera controls
var cameraControl;

//plane
var plane;
var planeTexture;
var img_in_plane;

init();


function init() { 
    // Scene
  	scene = new THREE.Scene(); 

    // Canvas
    canvas = document.getElementById('maze');
    //Render
    renderer = new THREE.WebGLRenderer({ canvas: canvas});  
    renderer.setClearColor(0x000000, 1.0); 
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);  
    renderer.shadowMapEnabled = true;  

    //Camera
    var camera = new THREE.OrthographicCamera(canvas.clientWidth / - 2,
        canvas.clientWidth / 2, 
        canvas.clientHeight / 2, 
        canvas.clientHeight / - 2,
        0, 
        1200);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 1200;
    
    camera.lookAt(scene.position);

    //var interaction = new THREE.Interaction(renderer, scene, camera);
    
    //light

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(0, 0 ,500);
    directionalLight.name = 'directional';
    scene.add(directionalLight);  

    var Spot = new THREE.SpotLight(0xffffff, 0.8);
    Spot.position.set(0, 1500,1200);
    Spot.name = 'SpotLight';
    scene.add(Spot); 
    
   var Spot_t = new THREE.SpotLight(0xffffff, 1);
    Spot_t.position.set(0, -1500 ,1200);
    Spot_t.name = 'Spot_tLight';
    scene.add(Spot_t); 
	
// render
  function render() { 
    renderer.render( scene, camera );
  }

/*document.querySelector('#to_off').onclick = function(){
  splineArray = [];
}*/

// lower box geametry
var Geom = new THREE.BoxGeometry(canvas.clientWidth,canvas.clientHeight,15);  
var GeomMaterial = new THREE.MeshPhongMaterial({    
  color: 0x666666, 
  opacity: 1,
  transparent: false,
});  
 
var GeomMesh = new THREE.Mesh(Geom, GeomMaterial);  

GeomMesh.position.set(1,0,266);
scene.add(GeomMesh);

render();




// Drawing line by points 


function onMouseUp(evt) {
  //   document.removeEventListener("mousemove",onMouseMove,false);
}

function onMouseDown(evt) {

  if(evt.which == 3) return;
 
   var rect = canvas.getBoundingClientRect();
   var x = (( event.clientX - rect.left)/ canvas.width ) * 2 - 1;
   var y =  - ( (event.clientY - rect.top)/ canvas.height ) * 2 + 1;
   console.log(x +'  ' +  y +'x y'); 
   //console.log(event.clientX + 'x '+ event.clientY + ' y');
 // do not register if right mouse button is pressed.
 var vNow = new THREE.Vector3(x, y, 0.53);
 console.log(vNow.z +'vNow'); 
 vNow.unproject(camera);

 //console.log(vNow.x + " " + vNow.y+  " " + vNow.z); 
 if (event.clientX <= 1200 && event.clientY  >= 100) { 
   //(vNow +'vNow'); 
   splineArray.push(vNow);
   //console.log(splineArray+'vNdsavaow');
 }    
 //console.log(splineArray.length + 'len');
 document.addEventListener("mouseup",onMouseUp,false);
} 

// Drawing line by points 
var geometry = new THREE.BufferGeometry();

// attributes
var positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

//console.log(positions)
// drawcalls
drawCount = 2; // draw the first 2 points, only
geometry.setDrawRange( 0, drawCount );

// material
var material = new THREE.LineBasicMaterial( { color: 0xff0000, linewidth: 4 } );

// line
line = new THREE.Line( geometry,  material );
scene.add( line );

// update positions
updatePositions();
 


// update positions
function updatePositions() {

var positions = line.geometry.attributes.position.array;

var index = 0;

 for ( var i = 0; i < splineArray.length;  i ++ ) {

    positions[ index ++ ] = splineArray[i].x;
    positions[ index ++ ] = splineArray[i].y;
    positions[ index ++ ] = splineArray[i].z;


 }
}

function animate() {
  requestAnimationFrame( animate );
  drawCount = splineArray.length;
  line.geometry.setDrawRange( 0, drawCount );
  updatePositions();
  // console.log(drawCount);
  //console.log(positions);

  line.geometry.attributes.position.needsUpdate = true; // required after the first render
  render();      
//console.log(znach_img);
//console.log(positions);
}
animate();     

cameraControl = new THREE.OrbitControls(camera, renderer.domElement); // Контроль камеры 
render(cameraControl);
cameraControl.enableRotate = false;
cameraControl.enableZoom = true;



// creating plane
document.querySelector('#to_2d').onclick = function() {
  
  var planeGeometry = new THREE.PlaneGeometry(canvas.width, canvas.height);  // create geometry
  var planeMaterial = new THREE.MeshBasicMaterial(
    {
      color: 0xcccccc,
      opacity: 1
    }
    );    // create material
  function createCloudMaterial(img_in_plane) {                            // create material
    planeTexture = THREE.ImageUtils.loadTexture(img_in_plane);  
    var planeMaterial = new THREE.MeshBasicMaterial({opacity: 1});   
    planeMaterial.map = planeTexture;   
    planeMaterial.transparent = false;   
    return planeMaterial;
  }

  plane = new THREE.Mesh(planeGeometry, createCloudMaterial(img_in_plane)); // create Mesh plane
  plane.receiveShadow = true;
  plane.position.x = 1;
  plane.position.y = 0;
  plane.position.z = 273.8000199980002 + for_add_flour;    // + flour(quantity)

  plane.rotation.x = 0;
  //console.log(planeTexture);
  scene.add(plane);   //add on Scene
}

document.querySelector('#final_').onclick = function() {
 
  //plane.position.z += 10000;  // убираем план
  camera = new THREE.PerspectiveCamera(         // подключаем перспективную камеру
      95,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      2000
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 578;
  camera.rotation.x = THREE.Math.degToRad(90);   // поворот для понимания, что контроль включился 


  //console.log(scene);   
  //console.log(camera);
  //scene.add(camera); 
  cameraControl = new THREE.OrbitControls(camera, renderer.domElement);  // подключаем контроль 
  render(cameraControl);
  
}

document.querySelector('#Camera_2d_').onclick = function() {
    camera = new THREE.OrthographicCamera(canvas.clientWidth / - 2,
          canvas.clientWidth / 2, 
          canvas.clientHeight / 2, 
          canvas.clientHeight / - 2,
          0, 
          1200);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 1200;   // поворот для понимания, что контроль включился 


    //console.log(scene);   
    //console.log(camera);
    cameraControl = new THREE.OrbitControls(camera, renderer.domElement);  // подключаем контроль 
    cameraControl.enableRotate = false;
    cameraControl.enableZoom = true;
    render(cameraControl);
  
}



// loading file 
document.querySelector('#upload_f').onchange = function(){
  var file =  document.querySelector('#upload_f').files[0];  // Загружаем файл из HTML файла
  reader = new FileReader();                                  // подрубаем чтение файла
  reader.readAsDataURL(file)                                  // берем URL
  reader.onload = function() {
      img_in_plane = reader.result;                           // результатом является 267 строка
      console.log(img_in_plane);
  }
}


// Clear draw line
document.querySelector('#to_REMOVE').onclick = function() {
  //alert('Стереть все?')
  splineArray = [];         //обнуляем массив с точками , по которым рисуются линии  (чтобы при ошибки в чертеже, можно было все стереть)
} 

//BACK one step draw line
document.querySelector('#to_BACK').onclick = function() {
 // alert('Отменить последнюю нарисованную линию?')
  if(splineArray.length == 1){}
  splineArray.pop(splineArray.length - 1);                //обнуляем массив с точками , по которым рисуются линии  (чтобы при ошибки в чертеже, можно было стереть только последнюю точку)
} 


//Add point
var Save_value_user = [];
var Array_metok = [];
document.querySelector('#add_pr').onclick = function() {    
        //scene.remove(plane);                          //удаляем предыдущий план(с прошлого этажа)
        img_in_plane = reader.result;               //берем последний загруженный файл 
        /*planeTexture.currentSrc = img_in_plane;*/
        ierarh(Save_value_user,Array_metok,renderer,k,camera,scene,splineArray);       //подключаем иерархию js файл 
        k += 1;                                   //отслеживание количества этажей
        splineArray = [];
          
        // изменение изображения

        /*camera.position.x = 0;

        camera.position.y = 0;
        camera.position.z = 578;
        camera.rotation.x = 0;
        camera.rotation.y = 0;
        camera.rotation.z = 0;*/


        /*var Geom = new THREE.BoxGeometry(canvas.clientWidth,canvas.clientHeight,5);   //создаем box на высоте
        var GeomMaterial = new THREE.MeshPhongMaterial({    
          color: 0x666666, 
          opacity: 1,
          transparent: true,
        });  

        var GeomMesh = new THREE.Mesh(Geom, GeomMaterial);  

        GeomMesh.position.set(1,0,266 + 100*prohod);
        scene.add(GeomMesh);*/

     /* if(prohod > 0){       // если этаж больше чем 1 , то поднимаем все, и создаем новый план на новом этаже
        var planeGeometry = new THREE.PlaneGeometry(canvas.width, canvas.height);
        var planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
        function createCloudMaterial(img_in_plane) {    
          planeTexture = THREE.ImageUtils.loadTexture(img_in_plane);  
          var planeMaterial = new THREE.MeshBasicMaterial({opacity: 1});   
          planeMaterial.map = planeTexture;   
          planeMaterial.transparent = true;   
          return planeMaterial;
        }

        plane = new THREE.Mesh(planeGeometry, createCloudMaterial(img_in_plane));
        plane.receiveShadow = true;
        plane.position.x = 1;
        plane.position.y = 0;
        plane.position.z = 273.8000199980002 + 100*prohod;

        plane.rotation.x = 0;
        console.log(planeTexture);
          // rotate and position the plane
        
          // add the plane to the scene
       
        //plane.position.z += 100;
        scene.add(plane);
        for_add_flour_box_geom += 100;      // для 3d объектов (смотри EXTRUDE)
        //document.removeEventListener('mousedown', onMouseDown, false);
        console.log( plane.position.z)
        console.log(GeomMesh.position.z);
      } 
      prohod += 1; // прибавляем этаж  */                                                    
}            


// Drawing
document.querySelector('#check_input').onclick = function(){
  var value_draw = document.querySelector('.check_input_'); // считываем  положение check box (T or F)
  console.log(value_draw.checked + 'val')   
  //alert('Начать чертить?')
  if(value_draw.checked == false){            
    document.removeEventListener('mousedown', onMouseDown, false) // заканчиваем постоянное считывание кликов 
  }else{
    document.addEventListener('mousedown', onMouseDown, false)// начинаем считывание кликов (рисуем)
  }
}


// EXTRUDE 
document.querySelector('#to_3d').onclick = function(){
        callback_drawline()  // вызываем функцию, отрисовки в 3d
         
        

        function callback_drawline(){
          let i = 0;
          
          while (i < (splineArray.length-1)){  // проходим все значения массива точек с чертежа
            //console.log('check');
            drawLine(splineArray[i].x , splineArray[i].y , splineArray[i+1].x, splineArray[i+1].y); // вызываем отрисовку, по координатам линий
            i++;
          }
          console.log(splineArray + 'after 3d'); 
          splineArray = []; //Чистим массив точек после отрисовки 
          // стоит добавить новый массив, куда закидывать все точки , а только потом чистить массив
          
        }
        function drawLine(x1, y1, x2, y2){   // координаты точек 
          //let znach = document.querySelector('._A1').value;   // толщина стен (пока не реализовано)
          //console.log(znach)
          var lengthY = 1;
         // if(znach == '_A1_1') lengthY = 1; // толщина стен (пока не реализовано)
          //if(znach == '_A1_2') lengthY = 2; // толщина стен (пока не реализовано)
         // if(znach == '_A1_3') lengthY = 3; // толщина стен (пока не реализовано)

          /*let znach_h = document.querySelector('._A2').value; // высота стенок (при многоэтажности, работает только первой значение)
          console.log(znach_h)
          
          if(znach_h == '_A2_1') height_wall = 50-40;
          if(znach_h == '_A2_2') height_wall = 75; 
          if(znach_h == '_A2_3') height_wall = 100;*/

          var width_wall = document.getElementById('height_wall');
          var width_wall_value = width_wall.value;

          var color_wall = document.getElementById('color_wall');
          var color_wall_value = color_wall.value;

          if(width_wall_value == false){width_wall_value = 1}

          console.log(color_pipe.value + '   color')
          var lengthX = Math.sqrt(Math.pow((Math.max(x1,x2) - Math.min(x1,x2)),2) + Math.pow((Math.max(y1,y2) - Math.min(y1,y2)),2)); /// 100; // Длина стены 
          
          // угол между прямыми(не используется 404 строчка)
          //var angle = Math.cos(((Math.max(x1,x2)*1500 + Math.min(x1,x2)*1500)/2) / Math.sqrt(Math.pow(((Math.max(x1,x2)*1500 + Math.min(x1,x2)*1500)/2),2) + Math.pow(((Math.max(y1,y2)*1500 + Math.min(y1,y2)*1500)/2),2)));
          console.log('length = ', lengthX );
          /*var lengthY = Math.abs(y1 - y2) / 100;  */
          
          //console.log('lenghtX = ' + lengthX + ' lenghtY = ' + lengthY);
          // since only 90 degrees angles, so one of these is always 0  
          // to add a certain thickness to the wall, set to 0.5  
          if (lengthX == 0) lengthX = 0.5; 
          if (lengthY == 0) lengthY = 0.5;  
          // create a cube to represent the wall segment  
          var wallGeom = new THREE.BoxGeometry(lengthX+parseInt(width_wall_value, 10)+1/**1500*/,parseInt(width_wall_value, 10)*4, 50);  // рисуем линию
          var wallMaterial = new THREE.MeshPhongMaterial({    
            color: color_wall_value, 
            opacity: 1,
            transparent: false,
          });  
          
        // and create the complete wall segment  
          var wallMesh = new THREE.Mesh(wallGeom, wallMaterial);  
          wallMesh.position.set((Math.max(x1,x2)/**1500*/ + Math.min(x1,x2)/**1500*/)/2, (Math.max(y1,y2)/**1500*/ + Math.min(y1,y2)/**1500*/)/2,305+for_add_flour_box_geom); // отрисовываем по середине по x и y
        //console.log(y1 * 1500 + ' y1' , Math.max(x1,x2)*1500 + Math.min(x1,x2)*1500 + ' x1', x1*1500 + '  x1', x2*1500 + '  x2');

          angle_1(x2,x1,y2,y1);  // вызываем расчет угла

        //wallMesh.rotation.z = THREE.Math.degToRad(angle_1(x1,x2,y1,y2));

         wallMesh.rotation.z = THREE.Math.degToRad(angle_1(x1,y1,x2,y2)); // поворачиваем по z

        //console.log(angle_1(y2,y1,x2,x1) + 45 + 'an')
        //console.log(wallMesh.position.x + 'x ' + wallMesh.position.y + 'y ' + wallMesh.position.z + 'z ')

          function angle_1(cx, cy, ex, ey) { 
          var dy = ey*1500 - cy*1500; 
          var dx = ex*1500 - cx*1500;
          var theta = Math.atan2(dy, dx); // range (-PI, PI]
          theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
          if (theta < 0) theta = 360 + theta; // range [0, 360)
          if (theta > 180) theta = theta-180;
          return theta; // возвращает угол
          }
          scene.add(wallMesh); // добавляем на сцену стенку
          console.log(x1,x2,y1,y2);
        }
      
      
      function render() {
        cameraControl.update();  // обновляем контроль 

        renderer.render( scene, camera );
      }
      
}

document.querySelector('#to_3d_tube').onclick = function(){
  callback_drawline()  // вызываем функцию, отрисовки в 3d
  console.log('труба');
  function callback_drawline(){
    let i = 0;
    
    while (i < (splineArray.length-1)){  // проходим все значения массива точек с чертежа
      //console.log('check');
      drawLine(splineArray[i].x , splineArray[i].y , splineArray[i+1].x, splineArray[i+1].y); // вызываем отрисовку, по координатам линий
      i++;
    }
    console.log(splineArray + 'after 3d'); 
    splineArray = []; //Чистим массив точек после отрисовки 
    // стоит добавить новый массив, куда закидывать все точки , а только потом чистить массив
    
  }
  function drawLine(x1, y1, x2, y2){   // координаты точек 
    //let znach = document.querySelector('._A1').value;   // толщина стен (пока не реализовано)
    //console.log(znach)
    var lengthY = 1;
   // if(znach == '_A1_1') lengthY = 1; // толщина стен (пока не реализовано)
    //if(znach == '_A1_2') lengthY = 2; // толщина стен (пока не реализовано)
   // if(znach == '_A1_3') lengthY = 3; // толщина стен (пока не реализовано)

    /*let znach_h = document.querySelector('._A2').value; // высота стенок (при многоэтажности, работает только первой значение)
    console.log(znach_h)
    
    if(znach_h == '_A2_1') height_wall = 50-40;
    if(znach_h == '_A2_2') height_wall = 75; 
    if(znach_h == '_A2_3') height_wall = 100;*/

    
    var lengthX = Math.sqrt(Math.pow((Math.max(x1,x2) - Math.min(x1,x2)),2) + Math.pow((Math.max(y1,y2) - Math.min(y1,y2)),2)); /// 100; // Длина стены 
    var height_pipe = document.getElementById('height_pipe');
    var height_pipe_value = height_pipe.value;

    var color_pipe = document.getElementById('color_pipe');
    var color_pipe_value = color_pipe.value;
    console.log(color_pipe.value + '   color')

    var width_pipe = document.getElementById('width_pipe');
    var width_pipe_value = width_pipe.value;


    if(height_pipe_value == false){height_pipe_value = 0}
    if(width_pipe_value == false){width_pipe_value = 1}


    console.log(height_pipe.value + '    111');
    // угол между прямыми(не используется 404 строчка)
    //var angle = Math.cos(((Math.max(x1,x2)*1500 + Math.min(x1,x2)*1500)/2) / Math.sqrt(Math.pow(((Math.max(x1,x2)*1500 + Math.min(x1,x2)*1500)/2),2) + Math.pow(((Math.max(y1,y2)*1500 + Math.min(y1,y2)*1500)/2),2)));
    console.log('length = ', lengthX );
    /*var lengthY = Math.abs(y1 - y2) / 100;  */
    
    //console.log('lenghtX = ' + lengthX + ' lenghtY = ' + lengthY);
    // since only 90 degrees angles, so one of these is always 0  
    // to add a certain thickness to the wall, set to 0.5  
    if (lengthX == 0) lengthX = 0.5; 
    if (lengthY == 0) lengthY = 0.5;  
    // create a cube to represent the wall segment  
    var geometry = new THREE.CylinderGeometry( parseInt(width_pipe_value, 10), parseInt(width_pipe_value, 10), lengthX+parseInt(width_pipe_value)+1, 64 , 1, false );
    var material = new THREE.MeshBasicMaterial( 
      {
        color: color_pipe_value, 
        opacity: 1,
        transparent: true,
      } );
    var cylinder = new THREE.Mesh( geometry, material );
    
  // and create the complete wall segment  
    cylinder.position.set((Math.max(x1,x2)/**1500*/ + Math.min(x1,x2)/**1500*/)/2, (Math.max(y1,y2)/**1500*/ + Math.min(y1,y2)/**1500*/)/2,275+parseInt(height_pipe_value, 10)); // отрисовываем по середине по x и y
    //console.log(y1 * 1500 + ' y1' , Math.max(x1,x2)*1500 + Math.min(x1,x2)*1500 + ' x1', x1*1500 + '  x1', x2*1500 + '  x2');
    console.log(cylinder.position.z + '  234567890');
    angle_1(x2,x1,y2,y1);  // вызываем расчет угла
    
      
  //wallMesh.rotation.z = THREE.Math.degToRad(angle_1(x1,x2,y1,y2));

   cylinder.rotation.z = THREE.Math.degToRad(angle_1(x1,y1,x2,y2)+90); // поворачиваем по z

  //console.log(angle_1(y2,y1,x2,x1) + 45 + 'an')
  //console.log(wallMesh.position.x + 'x ' + wallMesh.position.y + 'y ' + wallMesh.position.z + 'z ')

    function angle_1(cx, cy, ex, ey) { 
    var dy = ey*1500 - cy*1500; 
    var dx = ex*1500 - cx*1500;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    if (theta > 180) theta = theta-180;
    return theta; // возвращает угол
    }
    scene.add(cylinder); // добавляем на сцену стенку
    console.log(x1,x2,y1,y2);
  }


function render() {
  cameraControl.update();  // обновляем контроль 

  renderer.render( scene, camera );
}

}
//add area point
/*document.querySelector('#to_Areapoint').onclick = function(){

}*/

//Сохранение сцены
document.querySelector('#INFO_').onclick = function(){
    let send_input = document.getElementById('send'); // буфер сцены
    console.log(send_input);
    send_input.value = '';
    send_input.value = JSON.stringify(scene.toJSON());

    download();
    function download(){
      const exporter = new GLTFExporter();
      exporter.parse(
          scene,
          function (result) {
              saveArrayBuffer(result, 'ThreejsScene.glb'); 
          },
          { 
              binary: true
          }
      );
    } 

    function saveArrayBuffer(buffer, filename) {
      save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
    }
    const link = document.createElement('a');
    document.body.appendChild(link);

    function save(blob, filename) {
      link.href = URL.createObjectURL(blob);    
      link.download = filename;
      link.click(); // This step makes sure your glb file gets downloaded
      sendFileToBackend(blob, filename)
    }

    function sendFileToBackend(blob, filename){
      const endpoint = 'url';
      let formData = new FormData();

      let sceneFile = new File([blob], "ThreejsScene.glb");
      console.log(sceneFile)
      formData.append("file", sceneFile);
     /* let sss = document.createElement('textArea');
      let where = document.querySelector('.INFO')
      where.append(sss);*/
      const options = {
          method:'POST',
          mode: 'no-cors',
          body: formData,
      }
      
    /*let response = fetch(endpoint,options)
    if (response.ok) { 
      let json = response.JSON();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
    fetch(endpoint,options)
        .then(response => console.log((response)))
        .catch(error => console.error('Error:', error))*/
    }
    
}

//Загрузка сцены
document.querySelector('.load_scene').onclick = function(){
  /*loader.load(img_in_plane,function(glb){
    console.log(glb)
    const root = glb.scene;
    scene.add(root);
  }, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + '% loaded')
  },function(error){
    console.log('ERROR no today, bro')
  })*/


  
  loader_js.load(
    // resource URL
    "./s.json",
    // onLoad callback
    // Here the loaded data is assumed to be an object
    function ( obj ) {
      // Add the loaded object to the scene
      scene.add( obj );
    },

    // onProgress callback
    function ( xhr ) {
      console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },

    // onError callback
    function ( err ) {
      console.error( 'An error happened' );
    }
  );
}






}
/*
Идеи на будущее:
  1) GLFT или OBJ loader: загружаем модели устанавливаем их ширину и высоту, чтобы понимать, что вместится
  2) Делать указание: владелец павлиона и тп и тд+
  3) Многоэтажность пока не делать  +
  window.addEventListener('resize', onWindowResize, false);


  4) сделать выбор материала - соответственно отрисовка стены идет по этому материалу
  5) отфиксить баги с приближением
  6) доделать INFO
  

*/ 