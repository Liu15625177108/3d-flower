	var m1,m2,st1,st_disk1;
	
	function MyLoad(){
		Concurrent.Thread.create(function(){
			loader.load('meshes/petal_proto2.obj', function(obj) {//第一个表示模型路径，第二个表示完成导入后的回调函数，一般我们需要在这个回调函数中将导入的模型添加到场景中
						var texture = THREE.ImageUtils.loadTexture('textures/petal1_5.jpg');
						var mat = new THREE.MeshPhongMaterial();
						mat.map = texture;//材质的Map属性用于添加纹理
						mat.side= THREE.DoubleSide;

				   obj.traverse(function(child) {
                        if (child instanceof THREE.Mesh) {
                           child.material = mat;
                        }
                    });
					m1=obj;
					});
	    loader.load('meshes/petal_proto5.obj', function(obj) {//第一个表示模型路径，第二个表示完成导入后的回调函数，一般我们需要在这个回调函数中将导入的模型添加到场景中
						var texture = THREE.ImageUtils.loadTexture('textures/petal1_5.jpg');
						var mat = new THREE.MeshPhongMaterial();
						mat.map = texture;//材质的Map属性用于添加纹理
						mat.side= THREE.DoubleSide;

				   obj.traverse(function(child) {
                        if (child instanceof THREE.Mesh) {
                           child.material = mat;
                        }
                    });
					m2=obj
				});
			   
		loader.load('meshes/stem1.obj', function(obj) {//第一个表示模型路径，第二个表示完成导入后的回调函数，一般我们需要在这个回调函数中将导入的模型添加到场景中
						var texture = THREE.ImageUtils.loadTexture('textures/green.jpg');
						var mat = new THREE.MeshPhongMaterial();
						mat.map = texture;//材质的Map属性用于添加纹理
						mat.side= THREE.DoubleSide;

				   obj.traverse(function(child) {
                        if (child instanceof THREE.Mesh) {
                           child.material = mat;
                        }
                    });
					st1=obj
				});
		loader.load('meshes/stamendisk_proto_v1.obj', function(obj) {//第一个表示模型路径，第二个表示完成导入后的回调函数，一般我们需要在这个回调函数中将导入的模型添加到场景中
						var texture = THREE.ImageUtils.loadTexture('textures/petal1_5.jpg');
						var mat = new THREE.MeshPhongMaterial();
						mat.map = texture;//材质的Map属性用于添加纹理
						mat.side= THREE.DoubleSide;

				   obj.traverse(function(child) {
                        if (child instanceof THREE.Mesh) {
                           child.material = mat;
                        }
                    });
					st_disk1=obj
				});
		});
	}