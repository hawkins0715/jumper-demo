function creatcubeplayer(x, z) {
    var geometry = new THREE.SphereGeometry(9, 30, 30);
    var texture = new THREE.TextureLoader().load("source/head.png");
    var material = new THREE.MeshLambertMaterial({
        map: texture
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, 106, z);
    mesh.rotation.y = Math.PI / 2;

    geometry = new THREE.SphereGeometry(11.5, 30, 30, 0, Math.PI * 2, 0, Math.PI / 3);
    texture = new THREE.TextureLoader().load("source/head.png");
    material = new THREE.MeshLambertMaterial({
        map: texture
    });
    mesh3 = new THREE.Mesh(geometry, material);
    mesh3.position.set(x, 78, z);
    mesh3.rotation.y = Math.PI * 7 / 10;

    geometry = new THREE.CylinderGeometry(10, 9, 8, 30);
    texture = new THREE.TextureLoader().load("source/top.png");
    material = new THREE.MeshLambertMaterial({
        map: texture
    });
    mesh1 = new THREE.Mesh(geometry, material);
    mesh1.position.set(x, 80, z);
    mesh1.rotation.y = -Math.PI / 4;

    geometry = new THREE.CylinderGeometry(9, 12, 26, 30);
    texture = new THREE.TextureLoader().load("source/bottom.png");
    material = new THREE.MeshLambertMaterial({
        map: texture
    });
    mesh2 = new THREE.Mesh(geometry, material);
    mesh2.position.set(x, 63, z);
    mesh2.rotation.y = -Math.PI / 3;

    group = new THREE.Object3D();
    group.add(mesh, mesh1, mesh2, mesh3);
    scene.add(group);
    return group;
}

function beStronger() {
    Option = {
        py: player.children[0].position.y,
        sy: player.children[1].scale.y,
        sx: player.children[1].scale.x,
        sz: player.children[1].scale.z,
    };

    downtween = new TWEEN.Tween(Option)
        .to({
            py: 100,
            sy: 0.5,
            sx: 1.5,
            sz: 1.5,
        }, 1050)
        .onUpdate(function() {
            player.children[0].position.y = this.py;
            player.children[1].scale.y = this.sy;
            player.children[1].scale.x = this.sx;
            player.children[1].scale.z = this.sz;
        })
        .interpolation(TWEEN.Interpolation.Bezier)
        .start();

    return downtween
}

function jump(playerMoveLen) {
    console.log(jumpDistance, buildDistance, playerPosition, player.position);
    if (direction == 1) {
        Option = {
            hpy: player.children[0].position.y,
            hsy: player.children[1].scale.y,
            hsx: player.children[1].scale.x,
            hsz: player.children[1].scale.z
        };
        jumpr1 = new TWEEN.Tween(Option)
            .to({
                hpy: 106,
                hsy: 1,
                hsx: 1,
                hsz: 1,
            }, 50)
            .onUpdate(function() {
                player.children[0].position.y = this.hpy;
                player.children[1].scale.y = this.hsy;
                player.children[1].scale.x = this.hsx;
                player.children[1].scale.z = this.hsz;
            })

        Option = {
            px: playerPosition.x,
            py: 0,
            pz: playerPosition.z
        };
        jumpr2 = new TWEEN.Tween(Option)
            .to({
                px: [playerPosition.x * 0.5, 0],
                py: [150, 0],
                pz: [playerPosition.z - playerMoveLen * 0.5, playerPosition.z - playerMoveLen],
                // rz: [Math.PI, 0],
            }, 400)
            .onUpdate(function() {
                player.position.x = this.px;
                player.position.y = this.py;
                player.position.z = this.pz;
            })
            .onComplete(function() {


                playerPosition.x = 0;
                playerPosition.z = playerPosition.z - playerMoveLen;
                if (-playerPosition.z - buildDistance <= 50 && -playerPosition.z - buildDistance >= -50) {
 
                    pointGet();
                    changeCamera();

        

                } else if (-playerPosition.z <= 50) {

            

                } else if (-playerPosition.z > 50 && -playerPosition.z < 62) {
             
                    gameOver(11);
         
                } else if (-playerPosition.z - buildDistance < 62 && -playerPosition.z - buildDistance > 50) {
      
                    gameOver(22);
         
                } else if (-playerPosition.z - buildDistance > -38 && -playerPosition.z - buildDistance < -50) {
                
                    gameOver(21);
                   
                } else {
                
                    gameOver(0);
                    
                }
                console.log(playerPosition, player.position);

            })
            .interpolation(TWEEN.Interpolation.Bezier)
        jumpr1.chain(jumpr2);
        jumpr1.start();
    } else {
        Option = {
            hpy: player.children[0].position.y,
            hsy: player.children[1].scale.y,
            hsx: player.children[1].scale.x,
            hsz: player.children[1].scale.z
        };
        jumpr1 = new TWEEN.Tween(Option)
            .to({
                hpy: 106,
                hsy: 1,
                hsx: 1,
                hsz: 1,
            }, 50)
            .onUpdate(function() {
                player.children[0].position.y = this.hpy;
                player.children[1].scale.y = this.hsy;
                player.children[1].scale.x = this.hsx;
                player.children[1].scale.z = this.hsz;
            })

        Option = {
            py: 0,
            px: playerPosition.x,
            pz: playerPosition.z
        };
        jumpr2 = new TWEEN.Tween(Option)
            .to({
                py: [150, 0],
                px: [playerPosition.x - playerMoveLen * 0.5, playerPosition.x - playerMoveLen],
                pz: [playerPosition.z * 0.5, 0],
                // rz: [Math.PI, 0],
            }, 400)
            .onUpdate(function() {
                player.position.y = this.py;
                player.position.x = this.px;
                player.position.z = this.pz;

            })
            .onComplete(function() {
                playerPosition.z = 0;
                playerPosition.x = playerPosition.x - playerMoveLen;
                if (-playerPosition.x - buildDistance <= 50 && -playerPosition.x - buildDistance >= -50) {
                    
                    pointGet();
                    changeCamera();

                    

                } else if (-playerPosition.x <= 50) {
                    

                    

                } else if (-playerPosition.x > 50 && -playerPosition.x < 62) {
                    
                    gameOver(11);
                    
                } else if (-playerPosition.x - buildDistance < 62 && -playerPosition.x - buildDistance > 50) {
                    
                    gameOver(22);
                    
                } else if (-playerPosition.x - buildDistance > -38 && -playerPosition.x - buildDistance < -50) {
                    
                    gameOver(21);
                    
                } else {
                    
                    gameOver(0);
                    
                }

            })
            .interpolation(TWEEN.Interpolation.Bezier)
        jumpr1.chain(jumpr2);
        jumpr1.start();
    }

}