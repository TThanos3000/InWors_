var renderer;
var scene;
var camera;
function init() {    // Three.js initialization code
     // Three.js initialization code
    scene = new THREE.Scene();   
    canvas = document.getElementById('maze');
    renderer = new THREE.WebGLRenderer({ canvas: canvas});  
    renderer.setClearColor(0x000000, 1.0); 
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);  
    renderer.shadowMapEnabled = true;  

    camera = new THREE.PerspectiveCamera(
      95,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      350
    );
    camera.position.x = 20;
    camera.position.y = 36;
    camera.position.z = 33;
    
    camera.lookAt(scene.position);
    // add controls
    cameraControl = new THREE.OrbitControls(camera, renderer.domElement);

    document.body.appendChild(renderer.domElement);    
     
    // камера ортогон 
   
    /*var maze = new Maze(document, 'maze');
    maze.generate();
    maze.draw();*/
    var cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff55ff});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);
    cube.position.z = 4;


    var planeGeometry = new THREE.PlaneGeometry(100, 100);
    var planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.y = 0;

    // add the plane to the scene
    scene.add(plane);

    
    /*raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2()
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousedown', onMouseDown, false);


    function onDocumentMouseMove(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) ;
        mouse.y = -(event.clientY / window.innerHeight);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function manageRaycasterIntersections(scene, camera) {
        camera.updateMatrixWorld();
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {

        } 
        else {

        }
    }

    function onMouseDown(event){
      console.log("mouse position: (" + mouse.x + ", "+ mouse.y + ")");
    } */
    
    function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  canvas.addEventListener('mousedown', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    drawLine(mousePos.x,mousePos.y,2,2);
    console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
  }, false);

    drawLine = function(x1, y1, x2, y2) {
        let znach = document.querySelector('._A1').value;
        console.log(znach)
        var lengthY ;
        if(znach == '_A1_1') lengthY = 1;
        if(znach == '_A1_2') lengthY = 2; 
        if(znach == '_A1_3') lengthY = 3; 

        let znach_h = document.querySelector('._A2').value;
        console.log(znach_h)
        var height_wall ;
        if(znach_h == '_A2_1') height_wall = 1;
        if(znach_h == '_A2_2') height_wall = 2; 
        if(znach_h == '_A2_3') height_wall = 3;

        var lengthX = Math.abs(x1 - x2) / 100; 
        /*var lengthY = Math.abs(y1 - y2) / 100;  */
        
        console.log('lenghtX = ' + lengthX + ' lenghtY = ' + lengthY);
        // since only 90 degrees angles, so one of these is always 0  
        // to add a certain thickness to the wall, set to 0.5  
        if (lengthX === 0) lengthX = 0.5; 
        if (lengthY === 0) lengthY = 0.5;  
         // create a cube to represent the wall segment  
        var wallGeom = new THREE.BoxGeometry(lengthX, height_wall, lengthY);  
        var wallMaterial = new THREE.MeshPhongMaterial({    
          color: 0xff0000, 
          opacity: 0.8,
          transparent: true 
        });  
        
       // and create the complete wall segment  
       var wallMesh = new THREE.Mesh(wallGeom, wallMaterial);  
       // finally position it correctly  
       /*wallMesh.position = new THREE.Vector3(x1 - ((x1 - x2) / 2) - (self.height / 2),wallGeom.height / 2, y1 - ((y1 - y2)) / 2 - (self.width / 2));  
       self.elements.push(wallMesh);  */
       wallMesh.position.set(y1/10,0,(x1/10)*(-1));
       scene.add(wallMesh);
    }
   
    var spot1 = new THREE.SpotLight(0xffffff);
    spot1.position.set(10, 100, -50);
    scene.add(spot1);

   /*/*var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(15, 20, 20);
    spotLight.castShadow = true;
    scene.add(spotLight);*/

    /*var control = {  
      rotationSpeed: 0.005, 
      opacity: 0.6,
      color: sphereMaterial.color,    
    };*/
    /*var gui = new dat.GUI(); 
    gui.add(control, 'rotationSpeed').min(-4).max(4).step(0.01);  
    gui.add(control, 'opacity' , -0.01, 4, 0.01); 
    gui.addColor(control, 'color', -0.01, 4, 0.01);*/
    render();
  }
  window.onload = init;
  function render() {      
         // render using requestAnimationFrame   
        
        /*scene.getObjectByName('earth').material.opacity =  control.opacity;
        scene.getObjectByName('earth').position.x +=  control.rotationSpeed;
        scene.getObjectByName('earth').material.color =  new THREE.Color(control.color);*/
        cameraControl.update();
        renderer.render(scene, camera);
        /*var ee = 2;
        let posx = new Array();
        let posy = new Array();
        while(ee > 0){
            

            posx.push(mouse.x);
            posy.push(mouse.y);

            ee -= 1
        }
        var x1 = posx[0];
        var x2 = posx[1];
        var y1 = posy[0];
        var y2 = posy[1];
        if(x1 < 0){ x1 = Math.abs(mouse.x);}
        if(y1 < 0){ y1 = Math.abs(mouse.y);}
        drawLine(x1,y1,x2,y2);*/
        requestAnimationFrame(render);
  }
// Смотри , идея сейчас такая, сделай 2д сцену и запихай three.js в канву, и размеры ориентируй по ней
// Передавай  в функцию дравлине значение с мышки ьл  
// текстуру как план тц в 2д плоскость 
// кнопка перехода из 2д в 3д , сделай сферу и backside фон поставь (менять положение камеры по кнопке)
// должно работать Петя -> Пете из 2022 