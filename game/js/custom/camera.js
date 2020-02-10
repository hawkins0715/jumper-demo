function changeCamera() {
    var directionFlog = direction;
    if (directionFlog == 1) {
        playerPosition.z = player.position.z;
        if (mainmesh1 && mainmesh2 && mainmesh3 && mainmesh4 && mainmesh5) {
            // console.log(mainmeshPosition1,mainmeshPosition2,mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
            Option = {
                pz: playerPosition.z,
                ps1: mainmeshPosition1.z,
                ps2: mainmeshPosition2.z,
                ps3: mainmeshPosition3.z,
                ps4: mainmeshPosition4.z,
                ps5: mainmeshPosition5.z
            };
            new TWEEN.Tween(Option)
                .to({
                    pz: playerPosition.z + buildDistance,
                    ps1: mainmeshPosition1.z + buildDistance,
                    ps2: mainmeshPosition2.z + buildDistance,
                    ps3: mainmeshPosition3.z + buildDistance,
                    ps4: mainmeshPosition4.z + buildDistance,
                    ps5: mainmeshPosition5.z + buildDistance,
                }, 400)
                .onUpdate(function() {
                    mainmesh1.position.z = this.ps1;
                    mainmesh2.position.z = this.ps2;
                    mainmesh3.position.z = this.ps3;
                    mainmesh4.position.z = this.ps4;
                    mainmesh5.position.z = this.ps5;
                    player.position.z = this.pz;
                })
                .onComplete(function() {
                    playerPosition.z += buildDistance;
                    mainmeshPosition1.z = mainmeshPosition2.z + buildDistance;
                    mainmeshPosition1.x = mainmeshPosition2.x;
                    mainmeshPosition2.z = mainmeshPosition3.z + buildDistance;
                    mainmeshPosition2.x = mainmeshPosition3.x;
                    mainmeshPosition3.z = mainmeshPosition4.z + buildDistance;
                    mainmeshPosition3.x = mainmeshPosition4.x;
                    mainmeshPosition4.z = mainmeshPosition5.z + buildDistance;
                    mainmeshPosition4.x = mainmeshPosition5.x;
                    deleteGroup(mainmesh1);
                    mainmesh1 = mainmesh2;
                    mainmesh2 = mainmesh3;
                    mainmesh3 = mainmesh4;
                    mainmesh4 = mainmesh5;
                    createBox();
                    // console.log(mainmeshPosition1,mainmeshPosition2,mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
                })
                .start();
        } else if (!mainmesh3) {
            // console.log(mainmeshPosition4,mainmeshPosition5);
            Option = {
                pz: playerPosition.z,
                ps4: mainmeshPosition4.z,
                ps5: mainmeshPosition5.z
            };
            new TWEEN.Tween(Option)
                .to({
                    pz: playerPosition.z + buildDistance,
                    ps4: mainmeshPosition4.z + buildDistance,
                    ps5: mainmeshPosition5.z + buildDistance,
                }, 400)
                .onUpdate(function() {
                    mainmesh4.position.z = this.ps4;
                    mainmesh5.position.z = this.ps5;
                    player.position.z = this.pz;
                })
                .onComplete(function() {
                    playerPosition.z += buildDistance;
                    mainmeshPosition3 = new THREE.Vector3(0, 0, 0);
                    mainmeshPosition3.z = mainmeshPosition4.z + buildDistance;
                    mainmeshPosition3.x = mainmeshPosition4.x;
                    mainmeshPosition4.z = mainmeshPosition5.z + buildDistance;
                    mainmeshPosition4.x = mainmeshPosition5.x;
                    mainmesh3 = mainmesh4;
                    mainmesh4 = mainmesh5;
                    createBox();
                    // console.log(mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
                })
                .start();

        } else if (!mainmesh2) {
            // console.log(mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
            Option = {
                pz: playerPosition.z,
                ps3: mainmeshPosition3.z,
                ps4: mainmeshPosition4.z,
                ps5: mainmeshPosition5.z
            };
            new TWEEN.Tween(Option)
                .to({
                    pz: playerPosition.z + buildDistance,
                    ps3: mainmeshPosition3.z + buildDistance,
                    ps4: mainmeshPosition4.z + buildDistance,
                    ps5: mainmeshPosition5.z + buildDistance,
                }, 400)
                .onUpdate(function() {
                    mainmesh3.position.z = this.ps3;
                    mainmesh4.position.z = this.ps4;
                    mainmesh5.position.z = this.ps5;
                    player.position.z = this.pz;
                })
                .onComplete(function() {
                    playerPosition.z += buildDistance;
                    mainmeshPosition2 = new THREE.Vector3(0, 0, 0);
                    mainmeshPosition2.z = mainmeshPosition3.z + buildDistance;
                    mainmeshPosition2.x = mainmeshPosition3.x;
                    mainmeshPosition3.z = mainmeshPosition4.z + buildDistance;
                    mainmeshPosition3.x = mainmeshPosition4.x;
                    mainmeshPosition4.z = mainmeshPosition5.z + buildDistance;
                    mainmeshPosition4.x = mainmeshPosition5.x;
                    mainmesh2 = mainmesh3;
                    mainmesh3 = mainmesh4;
                    mainmesh4 = mainmesh5;
                    createBox();
                    // console.log(mainmeshPosition2,mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
                })
                .start();
        } else {
            // console.log(mainmeshPosition2,mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
            Option = {
                pz: playerPosition.z,
                ps2: mainmeshPosition2.z,
                ps3: mainmeshPosition3.z,
                ps4: mainmeshPosition4.z,
                ps5: mainmeshPosition5.z
            };
            new TWEEN.Tween(Option)
                .to({
                    pz: playerPosition.z + buildDistance,
                    ps2: mainmeshPosition2.z + buildDistance,
                    ps3: mainmeshPosition3.z + buildDistance,
                    ps4: mainmeshPosition4.z + buildDistance,
                    ps5: mainmeshPosition5.z + buildDistance,
                }, 400)
                .onUpdate(function() {
                    mainmesh2.position.z = this.ps2;
                    mainmesh3.position.z = this.ps3;
                    mainmesh4.position.z = this.ps4;
                    mainmesh5.position.z = this.ps5;
                    player.position.z = this.pz;
                })
                .onComplete(function() {
                    playerPosition.z += buildDistance;
                    mainmeshPosition1 = new THREE.Vector3(0, 0, 0);
                    mainmeshPosition1.z = mainmeshPosition2.z + buildDistance;
                    mainmeshPosition1.x = mainmeshPosition2.x;
                    mainmeshPosition2.z = mainmeshPosition3.z + buildDistance;
                    mainmeshPosition2.x = mainmeshPosition3.x;
                    mainmeshPosition3.z = mainmeshPosition4.z + buildDistance;
                    mainmeshPosition3.x = mainmeshPosition4.x;
                    mainmeshPosition4.z = mainmeshPosition5.z + buildDistance;
                    mainmeshPosition4.x = mainmeshPosition5.x;
                    mainmesh1 = mainmesh2;
                    mainmesh2 = mainmesh3;
                    mainmesh3 = mainmesh4;
                    mainmesh4 = mainmesh5;
                    createBox();
                    // console.log(mainmeshPosition1,mainmeshPosition2,mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
                })
                .start();
        }
    } else {
        playerPosition.x = player.position.x;
        if (mainmesh1 && mainmesh2 && mainmesh3 && mainmesh4 && mainmesh5) {
            // console.log(mainmeshPosition1,mainmeshPosition2,mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
            Option = {
                px: playerPosition.x,
                ps1: mainmeshPosition1.x,
                ps2: mainmeshPosition2.x,
                ps3: mainmeshPosition3.x,
                ps4: mainmeshPosition4.x,
                ps5: mainmeshPosition5.x
            };
            new TWEEN.Tween(Option)
                .to({
                    px: playerPosition.x + buildDistance,
                    ps1: mainmeshPosition1.x + buildDistance,
                    ps2: mainmeshPosition2.x + buildDistance,
                    ps3: mainmeshPosition3.x + buildDistance,
                    ps4: mainmeshPosition4.x + buildDistance,
                    ps5: mainmeshPosition5.x + buildDistance,
                }, 400)
                .onUpdate(function() {
                    mainmesh1.position.x = this.ps1;
                    mainmesh2.position.x = this.ps2;
                    mainmesh3.position.x = this.ps3;
                    mainmesh4.position.x = this.ps4;
                    mainmesh5.position.x = this.ps5;
                    player.position.x = this.px;
                })
                .onComplete(function() {
                    playerPosition.x += buildDistance;
                    mainmeshPosition1.x = mainmeshPosition2.x + buildDistance;
                    mainmeshPosition1.z = mainmeshPosition2.z;
                    mainmeshPosition2.x = mainmeshPosition3.x + buildDistance;
                    mainmeshPosition2.z = mainmeshPosition3.z;
                    mainmeshPosition3.x = mainmeshPosition4.x + buildDistance;
                    mainmeshPosition3.z = mainmeshPosition4.z;
                    mainmeshPosition4.x = mainmeshPosition5.x + buildDistance;
                    mainmeshPosition4.z = mainmeshPosition5.z;
                    deleteGroup(mainmesh1);
                    mainmesh1 = mainmesh2;
                    mainmesh2 = mainmesh3;
                    mainmesh3 = mainmesh4;
                    mainmesh4 = mainmesh5;
                    createBox();
                    // console.log(mainmeshPosition1,mainmeshPosition2,mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
                })
                .start();
        } else if (!mainmesh3) {
            // console.log(mainmeshPosition4,mainmeshPosition5);
            Option = {
                px: playerPosition.x,
                ps4: mainmeshPosition4.x,
                ps5: mainmeshPosition5.x
            };
            new TWEEN.Tween(Option)
                .to({
                    px: playerPosition.x + buildDistance,
                    ps4: mainmeshPosition4.x + buildDistance,
                    ps5: mainmeshPosition5.x + buildDistance,
                }, 400)
                .onUpdate(function() {
                    mainmesh4.position.x = this.ps4;
                    mainmesh5.position.x = this.ps5;
                    player.position.x = this.px;
                })
                .onComplete(function() {
                    playerPosition.x += buildDistance;
                    mainmeshPosition3 = new THREE.Vector3(0, 0, 0);
                    mainmeshPosition3.x = mainmeshPosition4.x + buildDistance;
                    mainmeshPosition3.z = mainmeshPosition4.z;
                    mainmeshPosition4.x = mainmeshPosition5.x + buildDistance;
                    mainmeshPosition4.z = mainmeshPosition5.z;
                    mainmesh3 = mainmesh4;
                    mainmesh4 = mainmesh5;
                    createBox();
                    // console.log(mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
                })
                .start();

        } else if (!mainmesh2) {
            // console.log(mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
            Option = {
                px: playerPosition.x,
                ps3: mainmeshPosition3.x,
                ps4: mainmeshPosition4.x,
                ps5: mainmeshPosition5.x
            };
            new TWEEN.Tween(Option)
                .to({
                    px: playerPosition.x + buildDistance,
                    ps3: mainmeshPosition3.x + buildDistance,
                    ps4: mainmeshPosition4.x + buildDistance,
                    ps5: mainmeshPosition5.x + buildDistance,
                }, 400)
                .onUpdate(function() {
                    mainmesh3.position.x = this.ps3;
                    mainmesh4.position.x = this.ps4;
                    mainmesh5.position.x = this.ps5;
                    player.position.x = this.px;
                })
                .onComplete(function() {
                    playerPosition.x += buildDistance;
                    mainmeshPosition2 = new THREE.Vector3(0, 0, 0);
                    mainmeshPosition2.x = mainmeshPosition3.x + buildDistance;
                    mainmeshPosition2.z = mainmeshPosition3.z;
                    mainmeshPosition3.x = mainmeshPosition4.x + buildDistance;
                    mainmeshPosition3.z = mainmeshPosition4.z;
                    mainmeshPosition4.x = mainmeshPosition5.x + buildDistance;
                    mainmeshPosition4.z = mainmeshPosition5.z;
                    mainmesh2 = mainmesh3;
                    mainmesh3 = mainmesh4;
                    mainmesh4 = mainmesh5;
                    createBox();
                    // console.log(mainmeshPosition2,mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
                })
                .start();
        } else {
            // console.log(mainmeshPosition2,mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
            Option = {
                px: playerPosition.x,
                ps2: mainmeshPosition2.x,
                ps3: mainmeshPosition3.x,
                ps4: mainmeshPosition4.x,
                ps5: mainmeshPosition5.x
            };
            new TWEEN.Tween(Option)
                .to({
                    px: playerPosition.x + buildDistance,
                    ps2: mainmeshPosition2.x + buildDistance,
                    ps3: mainmeshPosition3.x + buildDistance,
                    ps4: mainmeshPosition4.x + buildDistance,
                    ps5: mainmeshPosition5.x + buildDistance,
                }, 400)
                .onUpdate(function() {
                    mainmesh2.position.x = this.ps2;
                    mainmesh3.position.x = this.ps3;
                    mainmesh4.position.x = this.ps4;
                    mainmesh5.position.x = this.ps5;
                    player.position.x = this.px;
                })
                .onComplete(function() {
                    playerPosition.x += buildDistance;
                    mainmeshPosition1 = new THREE.Vector3(0, 0, 0);
                    mainmeshPosition1.x = mainmeshPosition2.x + buildDistance;
                    mainmeshPosition1.z = mainmeshPosition2.z;
                    mainmeshPosition2.x = mainmeshPosition3.x + buildDistance;
                    mainmeshPosition2.z = mainmeshPosition3.z;
                    mainmeshPosition3.x = mainmeshPosition4.x + buildDistance;
                    mainmeshPosition3.z = mainmeshPosition4.z;
                    mainmeshPosition4.x = mainmeshPosition5.x + buildDistance;
                    mainmeshPosition4.z = mainmeshPosition5.z;
                    mainmesh1 = mainmesh2;
                    mainmesh2 = mainmesh3;
                    mainmesh3 = mainmesh4;
                    mainmesh4 = mainmesh5;
                    createBox();
                    // console.log(mainmeshPosition1,mainmeshPosition2,mainmeshPosition3,mainmeshPosition4,mainmeshPosition5);
                })
                .start();
        }
    }
}

function renderSkybox() {
    var imagePrefix = "source/skybox/"
    var directions = ["back","bottom","front","left","right","top"];
    var imageSuffix = ".png";
    var skyGeometry = new THREE.CubeGeometry(1000,1000,1000);
    var materialArr = [];
    for(var i =0 ;i<6;i++) {
        materialArr.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
            side: THREE.BackSide
        }));
    }
    var skyMaterial = new THREE.MeshFaceMaterial(materialArr);
    var skybox = new THREE.Mesh(skyGeometry,skyMaterial);

    return skybox;
}
