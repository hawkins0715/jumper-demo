    function creatcube(x,z) {

        var color_list = [0xFF00FF,0x800000,0x808000,0x008000,0x800080,0x008080,0x000080,0x00FFFF,0xFFFF00,0x00FF00];

        var color = color_list[Math.floor(Math.random()*color_list.length)];

		// 绘制纹理
        var canvas = document.createElement('canvas');
        canvas.width=100;
        canvas.height=50;
        var ctx = canvas.getContext('2d');
        ctx.rect(0,0,100,50);
        ctx.fillStyle="#e86014";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(40,25,18,0,2*Math.PI);
        ctx.fillStyle="#ffffff";
        ctx.fill();           
        ctx.beginPath();
        ctx.arc(45,20,6,0,2*Math.PI);
        ctx.fillStyle="#e86014";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(65,10,6,0,2*Math.PI);
        ctx.fillStyle="#ffffff";
        ctx.fill();
        var texture = new THREE.Texture(canvas);


// 0xe86014
        group = canvasOneFace(x,z,texture,color);
        return group;
    }

	// 创建一个纯色盒子，将纹理贴在平面上覆盖在盒子一面
	function canvasOneFace(x,z,texture,color) {
		// 创建纯色盒子，高50，长宽100
        var geometry = new THREE.CubeGeometry( 100, 50, 100);
        var material = new THREE.MeshLambertMaterial( { color:color} );
        mesh = new THREE.Mesh( geometry,material);
		mesh.position.set(x,25,z); // 默认中心在(0,0,0)向上抬25，使盒子在地面上
		
		// 创建100*50的平面，和盒子侧面一样大，材料使用刚绘制的画布作纹理，而不是颜色
		var geometry = new THREE.PlaneGeometry( 100,50 );
        var material = new THREE.MeshLambertMaterial({map:texture});
        texture.needsUpdate = true;
		mesh1 = new THREE.Mesh( geometry,material);
		// 使平面和盒子侧面基本重合，差了0.01的距离，纹理能遮盖住盒子本身颜色
        mesh1.rotation.y =  Math.PI / 2;
		mesh1.position.set(x+50.01,25,z);
		
		// 创建阴影
        Shadow =  makeShadow();
		Shadow.position.set( x-30 , 0 , z+8 );
		
		// 组合起来方便使用
        group = new THREE.Object3D();
        // group.add(mesh,mesh1,Shadow); //with texture
        group.add(mesh,Shadow);
        scene.add(group);
        return group;
	}
	
	// 创建阴影
	function makeShadow(x,z){
		// 创建平面，贴上图片作为纹理
		var geometry = new THREE.PlaneGeometry( 116, 160, 1, 1 );
		// 加载图片作为纹理
        var texture = new THREE.TextureLoader().load( "source/shadow.png" );
        var material = new THREE.MeshBasicMaterial({map:texture});
        material.transparent = true; // 材质透明
		meshShadow = new THREE.Mesh( geometry,material);
		// 调整阴影位置
        meshShadow.rotation.x =  -Math.PI / 2;
        meshShadow.rotation.z =  Math.PI / 2 ;
        meshShadow.position.set( x-30 , 0 , z+6 );
        return meshShadow;
    }