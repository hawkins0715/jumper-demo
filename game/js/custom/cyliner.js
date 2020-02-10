function creatcylinder(x, z) {

    // var color_list = [0xFF00FF,0x800000,0x808000,0x008000,0x800080,0x008080,0x000080,0x00FFFF,0xFFFF00,0x00FF00];

    color1 = color_list[Math.floor(Math.random()*color_list.length)];


    var color_list_str = ["#FF00FF","#800000","#808000","#008000","#800080","#008080","#000080","#00FFFF","#FFFF00","#00FF00"];

    color1_str = color_list_str[Math.floor(Math.random()*color_list_str.length)];
    color2_str = color_list_str[Math.floor(Math.random()*color_list_str.length)];

    group = creatcylinder_canvas(x, z, color1_str,color2_str, color1, color1);
    return group;
}

function creatcylinder_canvas(x, z, colorTop, colorTop2, color, color2) {
    var geometry = new THREE.CylinderGeometry(40, 40, 44, 30, 3, true);
    var material = new THREE.MeshLambertMaterial({
        color: color2
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, 22, z);
    var geometry = new THREE.CylinderGeometry(40, 40, 6, 30, 3, true);
    var material = new THREE.MeshLambertMaterial({
        color: color
    });
    mesh1 = new THREE.Mesh(geometry, material);
    mesh1.position.set(x, 47, z);
    var geometry = new THREE.CircleGeometry(40, 30);
    var canvas = document.createElement('canvas');
    canvas.width = 80;
    canvas.height = 80;
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(40, 40, 42, 0, 2 * Math.PI);
    ctx.fillStyle = colorTop;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(42, 42, 30, 0, 2 * Math.PI);
    ctx.fillStyle = colorTop2;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(42, 42, 20, 0, 2 * Math.PI);
    ctx.fillStyle = colorTop;
    ctx.fill();
    var texture = new THREE.Texture(canvas);
    var material = new THREE.MeshBasicMaterial({
        map: texture
    });
    texture.needsUpdate = true;
    var mesh2 = new THREE.Mesh(geometry, material);
    mesh2.position.set(x, 50, z);
    mesh2.rotation.x = -Math.PI / 2;
    Shadow = makeShadow_cylinder(x, z);
    group = new THREE.Object3D();
    group.add(mesh, mesh1, mesh2, Shadow);
    scene.add(group);
    return group;
}


function makeShadow_cylinder(x, z) {
    var geometry = new THREE.PlaneGeometry(90, 130, 1, 1);
    var texture = new THREE.TextureLoader().load("source/cylinder_shadow.png");
    var material = new THREE.MeshBasicMaterial({
        map: texture
    });
    material.transparent = true;
    meshShadow = new THREE.Mesh(geometry, material);
    meshShadow.rotation.x = -Math.PI / 2;
    meshShadow.rotation.z = Math.PI / 2;
    meshShadow.position.set(x - 30, 0, z + 8);
    return meshShadow;
}