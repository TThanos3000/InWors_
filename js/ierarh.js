
export let ierarh = (Save_value_user,Array_metok,renderer,k,camera,scene) => {
    var popups = document.querySelector('.popup');
    var popups_2 = document.querySelector('.popup2');
    var IerarhArray= [];
   // var Array_metok = [];
   // var Save_value_user = [];
    var alpha = 0x000002
    var for_add_flour_box_geom_in_ier = 0;
    var canvas = document.getElementById('maze');

    //popops

    var Area_1 = document.querySelector('#outlined-basic');
    var organization_1 = document.querySelector('#outlined-basic-1');
    var FIO_1 = document.querySelector('#outlined-basic-2');
    var subject_1 = document.querySelector('#outlined-basic-3');
    var phone_1 = document.querySelector('#outlined-basic-4');
    var cost_1 = document.querySelector('#outlined-basic-5');
    var Email_1 = document.querySelector('#outlined-basic-7');
    var nalog_1 = document.querySelector('#outlined-basic-6');
    var pay_1 = document.querySelector('#outlined-basic-8');

    //popup2
    var Area = document.querySelector('.Area');
    var Area_in = document.createElement('label');

    var name_name = document.querySelector('.NAMES');
    var name_name_in = document.createElement('label');

    var FIO = document.querySelector('.FIO');
    var FIO_in = document.createElement('label');

    var Subject = document.querySelector('.Subject');
    var Subject_in = document.createElement('label');

    var Phone = document.querySelector('.Phone');
    var Phone_in = document.createElement('label');

    var Cost = document.querySelector('.Cost');
    var Cost_in = document.createElement('label');

    var Nalog = document.querySelector('.Nalog');
    var Nalog_in = document.createElement('label');

    var _Email_ = document.querySelector('._Email_');
    var _Email__in = document.createElement('label');

    var Pay = document.querySelector('.Pay_pay');
    var Pay_in = document.createElement('label');
    ///
    let where = document.querySelector('.ierarh');
    let conteimer_ier = document.createElement('div');
    let ier_input = document.createElement('input');
   // let btns = document.createElement('div');
    let btn_in = document.createElement('button');
    let btn_in_vision = document.createElement('button');
    let btn_in_edit = document.createElement('button');
    let btn_in_delete = document.createElement('button');
   // let F_input = document.createElement('input');

    ier_input.className = 'ierarh_znach';
    ier_input.id = 'ierarh_znach' + k;
    ier_input.type = 'text';
    ier_input.name = 'Title';
    ier_input.placeholder= "название"
    //ier_input.innerHTML = k + 'этаж';

    conteimer_ier.className = 'conteiner_i'
    conteimer_ier.id = 'conteiner_id_'+k
    
    btn_in.className = 'btn_ad_in btn btn-outline-primary';
    btn_in.innerHTML = '+';
    btn_in.id = 'to_add_first_'+ k;
    btn_in.onclick = 'func()';
   // F_input.className = 'file_input';
   // F_input.type = 'file';
   // F_input.id = 'to_add_'+ k; 

    btn_in_vision.className = 'btn_ad_in btn_INFO_ btn btn-outline-primary';
    btn_in_vision.id = 'INFORMATION' + k;

    btn_in_edit.className = 'btn_ad_in btn_EDIT_ btn btn-outline-primary';
    btn_in_edit.id = 'EDIT' + k;

    btn_in_delete.className = 'btn_ad_in btn_DEl_ btn btn-outline-primary';
    btn_in_delete.id = 'Delete' + k;
    //btns.className = 'btns_'

    ///////console.log(ier_input);
    
    where.append(conteimer_ier);
    conteimer_ier.append(ier_input);
    conteimer_ier.append(btn_in);
    //conteimer_ier.append(F_input);    
    conteimer_ier.append(btn_in_vision);
    conteimer_ier.append(btn_in_edit);
    conteimer_ier.append(btn_in_delete);
   // where.append(btns);

    //ier_input.append(btns);
   // ier_input.append(btns);
    console.log(k + ' = k');
    /*if(k == 1){
        k = '1';
        for_add_flour_box_geom_in_ier += 0;
    }else if(k == 2){
        k = '2';
        for_add_flour_box_geom_in_ier = 100;
        alpha = 0x888444;
    }else if(k == 3){
        k = '3';
        for_add_flour_box_geom_in_ier = 200;
        alpha = 0x888844;
    }else if(k == 4){
        k = '4';
        for_add_flour_box_geom_in_ier = 300;
        alpha = 0x008844;
    }else if(k == 5){
        k = '5';
        for_add_flour_box_geom_in_ier = 400;
        alpha = 0x008800;
    }else if(k == 6){
        k = '6';
        for_add_flour_box_geom_in_ier = 500;
        alpha = 0x993344;
    }else if(k == 7){
        k = '7';
        for_add_flour_box_geom_in_ier = 600;
        alpha = 0x990044;
    }else if(k == 8){
        k = '8';
        for_add_flour_box_geom_in_ier = 700;
        alpha = 0x990904;
    }else if(k == 9){
        k = '9';
        for_add_flour_box_geom_in_ier = 800;
        alpha = 0x909990;
    }*/
    document.querySelector('#to_add_first_' + k).onclick = function(){
        console.log('YES'); 
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
            var vNow = new THREE.Vector3(x, y,0);
            //console.log(vNow +'vNow'); 
            vNow.unproject(camera);
           //console.log(vNow.x + " " + vNow.y+  " " + vNow.z); 
            if (event.clientX <= 1200 && event.clientY  >= 100) { 
             //(vNow +'vNow'); 
             IerarhArray.push(vNow);
             //console.log(splineArray+'vNdsavaow');
            }    
           //console.log(splineArray.length + 'len');
            document.addEventListener("mouseup",onMouseUp,false);
            var metka = new THREE.BoxGeometry(15,15,15);  
            var metka_material = new THREE.MeshPhongMaterial({    
              color: alpha, 
              opacity: 1,
              transparent: true,
            });  
            
            var metkaMesh = new THREE.Mesh(metka, metka_material);  
            metkaMesh.position.set(x*550,y*325, 273 /*+ for_add_flour_box_geom_in_ier*/);
            scene.add(metkaMesh);     
            console.log(IerarhArray + 'SS');
            console.log(metkaMesh.id-23);
            
            Array_metok.push(metkaMesh);

            popups.classList.add('open')
            document.querySelector('#to_SAVE').onclick = function(){
                console.log('Save');
                //сохраняем данные 
                //var form = document.getElementById('form');

               // var fields = document.querySelectorAll('[class="input_"], "[id = "outlined-basic"]" , [class="select_f"] , [name="pay"], [class = "ierarh_znach"]');
                var fields = document.querySelectorAll('[id = "outlined-basic"], [id = "outlined-basic-1"], [id = "outlined-basic-2"], [id = "outlined-basic-3"], [id = "outlined-basic-4"], [id = "outlined-basic-5"], [id = "outlined-basic-6"], [id = "outlined-basic-7"], [id = "outlined-basic-8"] ');
                var values = {};

                fields.forEach(field => {
    
                    var {name, value} = field;

                    values[name] = value;

                })
                
                console.log(values);
                
                Save_value_user.push(values);
                popups.classList.remove('open');

                console.log(Save_value_user);
                console.log(Array_metok + 'arr');
                document.MyForm.reset();
            }
            document.querySelector('#to_RESET_FORM').onclick = function(){
                document.MyForm.reset();
            }
            document.querySelector('#to_REMOVE_FORM').onclick = function(){
                popups.classList.remove('open');
            }
        } 
        
        document.addEventListener('mousedown', onMouseDown, {'once': true});
        //console.log(metka)    
    } 

    document.querySelector('#INFORMATION' + k).onclick = function(){   
        console.log(k + ' = k to information');
        console.log(Array_metok[k-1] + 'arr');
        //console.log(Save_value_user)
        popups_2.classList.add('open');
        //console.log(Math.floor(k/10)-1 + 'k')
        /*if(k == 11){*/
            //console.log(Save_value_user[k-1]['Title'])

            //Area
            Area_in.innerHTML = Save_value_user[k/*Math.floor(k/10)-1*/-1]['Area']
            Area_in.id = 'popup2_1'
            Area.append(Area_in);

            //name org
            name_name_in.innerHTML = Save_value_user[k/*Math.floor(k/10)-1*/-1]['organization']
            name_name_in.id = 'popup2_1'
            name_name.append(name_name_in);

            //FIO
            FIO_in.innerHTML = Save_value_user[k/*Math.floor(k/10)-1*/-1]['FIO']
            FIO_in.id = 'popup2_1'
            FIO.append(FIO_in);

            //Subject
            Subject_in.innerHTML = Save_value_user[k/*Math.floor(k/10)-1*/-1]['Subject_predprinim']
            Subject_in.id = 'popup2_1'
            Subject.append(Subject_in);

            //Phone
            Phone_in.innerHTML = Save_value_user[k/*Math.floor(k/10)-1*/-1]['phone_number'] 
            Phone_in.id = 'popup2_1'
            Phone.append(Phone_in);

            //Cost
            Cost_in.innerHTML = Save_value_user[k/*Math.floor(k/10)-1*/-1]['Cost']
            Cost_in.id = 'popup2_1'
            Cost.append(Cost_in);

            //Nalog
            if(Save_value_user[k/*Math.floor(k/10)-1*/-1]['nalog'] == 'first')  Nalog_in.innerHTML = 'Упрощенная';
            if(Save_value_user[k/*Math.floor(k/10)-1*/-1]['nalog'] == 'second')  Nalog_in.innerHTML = 'традиционное';
            if(Save_value_user[k/*Math.floor(k/10)-1*/-1]['nalog'] == 'third')  Nalog_in.innerHTML = 'налог на профессиональную деятельность';
            Nalog_in.id = 'popup2_1'
            Nalog.append(Nalog_in); 

            //_Email_
            _Email__in.innerHTML = Save_value_user[k/*Math.floor(k/10)-1*/-1]['email_'];
            _Email__in.id = 'popup2_1'
            _Email_.append(_Email__in);

            //Pay
            if( Save_value_user[k/*Math.floor(k/10)-1*/-1]['pay'] == 'Mouth')  Pay_in.innerHTML = '1М';
            if( Save_value_user[k/*Math.floor(k/10)-1*/-1]['pay'] == 'half_year')  Pay_in.innerHTML = '6М';
            if( Save_value_user[k/*Math.floor(k/10)-1*/-1]['pay'] == 'year')  Pay_in.innerHTML = '12М';
            Pay_in.id = 'popup2_1';
            Pay.append(Pay_in); 
            
        /*}*//*else{
            console.log(Save_value_user[Math.floor(k/10)])
        }*/     
    }

    //edit values
    document.querySelector('#EDIT' + k).onclick = function(){
        popups.classList.add('open');
        
        Area_1.value = Save_value_user[k/*Math.floor(k/10)-1*/-1]['Area'];  
        organization_1.value = Save_value_user[k/*Math.floor(k/10)-1*/-1]['organization']; 
        FIO_1.value = Save_value_user[k/*Math.floor(k/10)-1*/-1]['FIO']; 
        subject_1.value = Save_value_user[k/*Math.floor(k/10)-1*/-1]['Subject_predprinim']; 
        phone_1.value = Save_value_user[k/*Math.floor(k/10)-1*/-1]['phone_number']; 
        cost_1.value = Save_value_user[k/*Math.floor(k/10)-1*/-1]['Cost']; 
        Email_1.value = Save_value_user[k/*Math.floor(k/10)-1*/-1]['email_']; 
        if(Save_value_user[k/*Math.floor(k/10)-1*/-1]['nalog'] == 'first')  nalog_1.value = 'first';
        if(Save_value_user[k/*Math.floor(k/10)-1*/-1]['nalog'] == 'second')  nalog_1.value = 'second';
        if(Save_value_user[k/*Math.floor(k/10)-1*/-1]['nalog'] == 'third')  nalog_1.value = 'third';

        if( Save_value_user[k/*Math.floor(k/10)-1*/-1]['pay'] == 'Mouth')  pay_1.value = 'Mouth';
        if( Save_value_user[k/*Math.floor(k/10)-1*/-1]['pay'] == 'half_year')  pay_1.value = 'half_year';
        if( Save_value_user[k/*Math.floor(k/10)-1*/-1]['pay'] == 'year')  pay_1.value = 'year';

        document.querySelector('#to_SAVE').onclick = function(){
            console.log('Save');
            //сохраняем данные 
            //var form = document.getElementById('form');

            var fields = document.querySelectorAll('[id = "outlined-basic"], [id = "outlined-basic-1"], [id = "outlined-basic-2"], [id = "outlined-basic-3"], [id = "outlined-basic-4"], [id = "outlined-basic-5"], [id = "outlined-basic-7"], [id = "outlined-basic-8"], [id = "outlined-basic-6"] ');
            var values = {};

            fields.forEach(field => {
    
                var {name, value} = field;

                values[name] = value;

            })
            
            console.log(values);
            
            Save_value_user[k/*Math.floor(k/10)-1*/-1] = values;
            popups.classList.remove('open');

            console.log(Save_value_user)
            document.MyForm.reset();
        }
        document.querySelector('#to_RESET_FORM').onclick = function(){
            document.MyForm.reset();
        }
        
    }

    
    document.querySelector('#Delete' + k).onclick = function(){
        let string_cont_delet = '#conteiner_id_' + String(k/*Math.floor(k/10)-1*/ );
        console.log(string_cont_delet + 'nomer del');
        console.log(k + ' = k DEL');
        var delete_element = document.querySelector(string_cont_delet);
        console.log(delete_element);
        delete_element.remove();

        //delete cube

        scene.remove(Array_metok[k-1]);
        Array_metok[k-1].geometry.dispose();
        Array_metok[k-1].material.dispose();
        Array_metok[k-1] = undefined;
    }

    document.querySelector('#to_BACK_INFO').onclick = function(){
        var all_id_popup2_1 = document.querySelectorAll('#popup2_1')
        all_id_popup2_1.forEach(del =>{
            console.log(del);
            var id = del;
            id.remove();
        })
        console.log(all_id_popup2_1);
        popups_2.classList.remove('open');
        //document.body.removeChild() 
       //x   Pay_in.remove();
    }
    //k += 1; 
}