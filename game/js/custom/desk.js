function creatdesk(x, z) {

    color1 = color_list[Math.floor(Math.random()*color_list.length)];
    color2 = color_list[Math.floor(Math.random()*color_list.length)];

    var geometry = new THREE.CylinderGeometry(50, 50, 6, 30);
    var material = new THREE.MeshLambertMaterial({
        color: color1
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, 47, z);
    var geometry = new THREE.CylinderGeometry(10, 30, 49, 30);
    var material = new THREE.MeshLambertMaterial({
        color: color2
    });
    mesh1 = new THREE.Mesh(geometry, material);
    mesh1.position.set(x, 25, z);
    Shadow = makeShadow_desk(x, z);
    group = new THREE.Object3D();
    group.add(mesh, mesh1, Shadow);
    scene.add(group);
    return group;
}

function makeShadow_desk(x, z) {
    var geometry = new THREE.PlaneGeometry(90, 140, 1, 1);
    var texture = new THREE.TextureLoader().load("source/desk_shadow.png");
    var material = new THREE.MeshBasicMaterial({
        map: texture
    });
    material.transparent = true;
    meshShadow = new THREE.Mesh(geometry, material);
    meshShadow.rotation.x = -Math.PI / 2;
    meshShadow.rotation.z = Math.PI / 2;
    meshShadow.position.set(x - 45, 0, z + 5);
    return meshShadow;
}