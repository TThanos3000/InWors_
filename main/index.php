<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/InWorS/css/mains.css">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <div id="root">
      
    </div>
    <div class="canva_">
        <canvas id="maze" width='1100' height="650"></canvas>
    </div>
    <script type="module">
        import * as THREE from '/InWorS/Three/three.module.js';
    </script>
    <script type = 'module' scr = '/InWorS/Three/three.js-master/package.json'></script>
    <script type="module" src = '/InWorS/Three/three.js-master/examples/js/postprocessing/EffectComposer.js'></script>
    <script type="module" src = '/InWorS/Three/three.js-master/examples/js/postprocessing/RenderPass.js'></script>
    <script type="module" src = '/InWorS/Three/CopyShader.js'></script>
    <script type="module" src = '/InWorS/Three/three.js-master/examples/js/postprocessing/ShaderPass.js'></script>
    <script type="module" src = '/InWorS/Three/three.js-master/examples/js/postprocessing/MaskPass.js'></script>
    <script src = '/InWorS/Three/three.js'></script>
    <script type = 'module' src= " /InWorS/Three/OrbitControls.js"></script>
    <script type = 'module' src='/InWorS/Three/three.js-master/examples/jsm/controls/TrackballControls.js'></script>
    <script type = 'module' src='/InWorS/Three/three.js-master/examples/jsm/exporters/GLTFExporter.js'></script>
    <script type = 'module' src='/InWorS/Three/three.js-master/examples/jsm/loaders/GLTFLoader.js'></script>
   
    <script src="/InWorS/js/file.js"></script>
    <header>     
        <div class = 'menu'>   
            <!--p><p>Толщина стенки</p>
            <div class = 'sel'>
                <select name="widht" id="_A1" class= '_A1' >
                    <option value="_A1_1">1</option>
                    <option value="_A1_2">2</option>
                    <option value="_A1_3">3</option>
                </select>
            </div><p-->
            <!--p> <p>Высота стен</p>
            <div class = 'sel'>
                <select name="height" id="_A1" class= '_A2'>
                    <option value="_A2_1">1</option>
                    <option value="_A2_2">2</option>
                    <option value="_A2_3">3</option>
                </select>
            </div></p-->
            <!--p>><p>Количество этажей</p>
            <div class = 'sel'>
                <select name="height" id="_A1" class = '_A3' >
                    <option value="_A3_1">1</option>
                    <option value="_A3_2">2</option>
                    <option value="_A3_3">3</option>
                </select>
            </div><p-->
            <div class="_all_upload_file">
                <div class = 'upload_file_ '>
                    <label class="img_downl btn btn-primary">
                        Загрузить план
                        <input id = 'upload_f' class = 'up_f' type="file">
                    </label>
                </div>
                <div class = '_2d _2dS'>
                    <button id = 'to_2d' class = 'btn_ '></button>
                </div>
                <div class = '_2d _2dS'>
                    <button id = 'to_2d' class = 'btn_  load_scene'></button>
                </div>
            </div>  
            <!--p><div class = '_2d'>
                <button  id = 'to_draw' class = 'btn_draw'>рисование</button>
            </div></p-->
            <div class ='all_in_drawing_block border border-primary'>
                <div class = '_drawing_'>
                    <div class = '_Check'>
                        <label>Чертить</label>
                        <input type="checkbox" id = "check_input" class = 'check_input_' title="Включиить функцию черчения">  
                        <label  class = 'checkbox_lbl'></label>
                    </div>
                    <!--p><div class = 'sel'>
                        <button id = 'to_off' class = 'btn_'>off</button>
                    </div></p-->
                    <div class = '_2d'>
                        <label>Назад</label>
                        <button id = 'to_BACK' class = 'btn_' title="На шаг назад от чертежа"></button>
                    </div>
                    <div class = '_2d'>
                        <label>Удалить</label>
                        <button id = 'to_REMOVE' class = 'btn_' title="Удалить чертеж"></button>
                    </div>       
                    <div class = '_2d'>
                        <label>Стена + Т + Ц</label>
                        <div class = 'height_and_type_build'>
                            <button id = 'to_3d' class = 'btn_MOVE'  title="Построить стенку"></button>
                            <input type = 'text' class="height_pipe" placeholder="0м" id = 'height_wall'>
                            <input type = 'color' class="height_pipe" placeholder="0м" id = 'color_wall'>
                        </div>
                    </div>
                    <div class = '_2d'>
                        <label>Труба + В + Т + Ц</label>
                        <div class = 'height_and_type_build'>
                            <button id = 'to_3d_tube' class = 'btn_MOVE'  title="Построить трубы"></button>
                            <input type = 'text' class="height_pipe" placeholder="0м" id = 'height_pipe'>
                            <input type = 'text' class="height_pipe" placeholder="0м" id = 'width_pipe'>
                            <input type = 'color' class="height_pipe" placeholder="0м" id = 'color_pipe'>
                        </div>
                    </div>
                    <div class = '_2d'>
                        <label>Провод + В + Ц</label>
                        <div class = 'height_and_type_build'>
                            <button id = 'to_3d_provoda' class = 'btn_MOVE'  title="Построить трубы"></button> 
                            <input type = 'text' class="height_pipe" placeholder="0м" id = 'height_wire'>      
                            <input type = 'color' class="height_pipe" placeholder="0м" id = 'color_wire'>             
                        </div>
                    </div> 
                </div>
            </div>
            <!--p><div class = '_2d'>
                <button id = 'to_Areapoint' class = 'btn_'>+</button>
            </div></p-->
            
        </div>

        <div class = 'add_propertis'>
            <button class = 'btn btn-outline-primary' id = 'add_pr' title="Добавить информацию о павилионе">+ локация</button>
        </div> 
        <div class = 'finally'>
            <button class = 'btn btn-primary' id = 'final_'>3D</button>
        </div> 
        <div class = '_to_2D_camera'>
            <button class = 'btn btn-primary' id = 'Camera_2d_'>2D</button>
        </div> 
    </header>
    <div class = 'ierarh' id = 'ierarh'>
        
    </div>
    
    <div class = 'INFO'>
        <form action = 'auth.php' method="post" target="blank">
            <input type = "textarea" class = 'text_scene_sending' id = 'send' name = 'send_scene' value=""></input>
            <button class = 'INFO_btn btn btn-primary' id = 'INFO_' title="Сохранить" type = 'submit'>Сохранить</button>
        </form>
        <form action = '' method="post" target="blank">
            <button class = 'INFO_btn btn btn-primary' id = 'LOAD_' title="Загрузить" type = 'submit'>Загрузить</button>
        </form>
    </div> 
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@mui/material@latest/umd/material-ui.development.js" crossorigin="anonymous" ></script>
    
    <!-- Загрузка нашего компонента React. -->
    <script type="text/babel" src="/InWorS/js/like_button.js"></script>
    
    <div id = 'popup' class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <form action="/" method="POST" id="form" name="MyForm">
                    <div id="like_button_container">

                    </div>
         
                </form>
                <div class = 'button_save_reset'>
                    <div>
                        <button id = 'to_SAVE' class = 'btn_ btn btn-primary' >Сохранить</button>
                    </div>
                    <div>
                        <button id = 'to_RESET_FORM' class = 'btn_ btn btn-primary  ' >Очистить</button>
                    </div>
                    <div>
                        <button id = 'to_REMOVE_FORM' class = 'btn_ btn btn-primary  ' >Закрыть</button>
                    </div>
                </div>    
            </div>
        </div>
    </div>
    <div id = 'popup' class="popup2">
        <div class="popup__body">
            <div class="popup__content">
                    <div class="name Area">
                        <label>
                            Расположение:
                        </label>
                    </div>
                    <div class="name NAMES">
                        <label>
                            Наименование арендатора:
                        </label>
                    </div>
                    <div class="name FIO">
                        <label>
                            ФИО контактного лица:
                        </label>
                    </div>
                    <div class="name Subject">
                        <label>
                            Субъект предпринимательской деятельности:
                        </label>
                    </div>
                    <div class="name Phone">
                        <label>
                            Телефон:
                        </label>
                    </div>
                    <div class="name Cost">
                        <label>
                            Стоимость:
                        </label>
                    </div>
                    <div class="name Nalog">
                        <label>
                            Форма налогооблажения:
                        </label>
                    </div>
                    <div class="name _Email_">
                        <label>
                            Email:
                        </label>
                    </div>
                    <div class="name Pay_pay">
                        <label>
                            Переодичность оплаты:
                        </label>
                    </div>
                    <div class="name">
                        <button id = 'to_BACK_INFO' class = 'btn_ reset_form' >Закрыть</button>
                    </div>   
            </div>
        </div>
    </div>

    <script  id = 'mmm' type = 'module' src = '/InWorS/js/main_1.js'></script> 
    <script type = 'module' src="/InWorS/js/ierarh.js"></script>
</body>
</html>