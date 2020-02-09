function creatcubeplayer(x,z) {
        var geometry = new THREE.SphereGeometry(9, 30, 30);
        var texture = new THREE.TextureLoader().load( "source/head.png" );
        var material = new THREE.MeshLambertMaterial({map:texture});
        mesh = new THREE.Mesh( geometry,material );
        mesh.position.set(x,106,z);
        mesh.rotation.y =  Math.PI / 2;

        geometry = new THREE.SphereGeometry(11.5, 30, 30, 0, Math.PI * 2, 0, Math.PI / 3);
        texture = new THREE.TextureLoader().load( "source/head.png" );
        material = new THREE.MeshLambertMaterial({map:texture});
        mesh3 = new THREE.Mesh( geometry,material );
        mesh3.position.set(x,78,z);
        mesh3.rotation.y =  Math.PI*7 / 10;

        geometry = new THREE.CylinderGeometry(10, 9, 8, 30);
        texture = new THREE.TextureLoader().load( "source/top.png" );
        material = new THREE.MeshLambertMaterial({map:texture});
        mesh1 = new THREE.Mesh(geometry,material );
        mesh1.position.set(x,80,z);
        mesh1.rotation.y = - Math.PI / 4;

        geometry = new THREE.CylinderGeometry(9, 12, 26, 30);
        texture = new THREE.TextureLoader().load( "source/bottom.png" );
        material = new THREE.MeshLambertMaterial({map:texture});
        mesh2 = new THREE.Mesh(geometry,material );
        mesh2.position.set(x,63,z);
        mesh2.rotation.y = - Math.PI / 3;

        group = new THREE.Object3D();
        group.add(mesh,mesh1,mesh2,mesh3);
        scene.add(group);
        return group;
}