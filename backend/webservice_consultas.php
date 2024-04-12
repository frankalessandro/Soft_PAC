<?php
header("Access-Control-Allow-Origin *");
header('Content-Type: text/html; charset=utf-8');
$hostname_localhost ="localhost";
$database_localhost ="_pac";
$username_localhost ="root";
$password_localhost ="";
$case=$_GET["case"];
$json=array();

		
		$conexion = mysqli_connect($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
        mysqli_set_charset($conexion, "utf8mb4");
	    
	   if(mysqli_connect_errno()){
            $result["rp"]="Sin Conexion";
            $json['rpta'][]=$result;
        }else{
            
    switch ($case) {

       case 1:
           
           $rol=$_GET["idRol"];
           $area=$_GET["idArea"];
           if($rol==1){
                 $consulta="SELECT u.*, c.centro, a.area,r.rol FROM usuarios u join centro c JOIN area a JOIN rol r on u.idCentro=c.id AND u.idArea=a.id AND u.idRol=r.id";
           }
           
           if($rol==2){
                 $consulta="SELECT u.*, c.centro, a.area,r.rol FROM usuarios u join centro c JOIN area a JOIN rol r on u.idCentro=c.id AND u.idArea=a.id AND u.idRol=r.id and a.id=1";
           }
           
          
    		$resul=mysqli_query($conexion,$consulta);
    		while($registro=mysqli_fetch_array($resul)){
    		    $result['rp']='si';
    		    $result['id']=$registro['id'];
    			$result['nombre']=$registro['nombre'];
    			$result['documento']=$registro['documento'];
    			$result['telefono']=$registro['telefono'];
    			$result['correo']=$registro['correo'];
    			$result['empresa']=$registro['empresa'];
    			$result['contrasena']=$registro['contrasena'];
    			$result['idCentro']=$registro['idCentro'];
    			$result['idArea']=$registro['idArea'];
    			$result['idRol']=$registro['idRol'];
    			$result['rol']=$registro['rol'];
    			$result['centro']=$registro['centro'];
    			$result['area']=$registro['area'];
    			$json['rpta'][]=$result;
    		}
        break;
        
        case 2:
          $rol=$_GET["idRol"];
          $area=$_GET["idArea"];
          $id=$_GET["idUsuario"];
      
          if($rol==1){// ver todos los proyectos
            $consulta="SELECT p.id as idProyecto, p.nombre as nproyecto, p.descripcion,p.objetivo,p.personasImpactadas,c.centro,c.siglas, a.area,e.id as idEstado, e.estado, p.urlFormulario,u.* FROM proyectos p JOIN area a JOIN estado e JOIN centro c JOIN usuarios u ON p.idArea=a.id AND p.idEstado=e.id AND a.idEstado=c.id AND p.idUsuario=u.id";
          
          }
          
          if($rol==2){// ver proyectos associados al area
            $consulta="SELECT p.id as idProyecto , p.nombre as nproyecto, p.descripcion,p.objetivo,p.personasImpactadas,c.centro,c.siglas, a.area,e.id as idEstado, e.estado, p.urlFormulario,u.* FROM proyectos p JOIN area a JOIN estado e JOIN centro c JOIN usuarios u ON p.idArea=a.id AND p.idEstado=e.id AND a.idEstado=c.id AND p.idUsuario=u.id AND p.idArea='{$area}'";
          }
          
          if($rol==4){// ver proyectos presentados
            $consulta="SELECT p.id as idProyecto, p.nombre as nproyecto, p.descripcion,p.objetivo,p.personasImpactadas,c.centro,c.siglas, a.area,e.id as idEstado, e.estado, p.urlFormulario,u.*  FROM proyectos p JOIN area a JOIN estado e JOIN centro c JOIN usuarios u ON p.idArea=a.id AND p.idEstado=e.id AND a.idEstado=c.id AND p.idUsuario=u.id AND p.idUsuario='{$id}'";
          }

// echo $consulta;

    		$resul=mysqli_query($conexion,$consulta);
    		while($registro=mysqli_fetch_array($resul)){
    		    $result['rp']='si';
    		    $result['idProyecto']=$registro['idProyecto'];
    			$result['nproyecto']=$registro['nproyecto'];
    			$result['descripcion']=$registro['descripcion'];
    			$result['objetivo']=$registro['objetivo'];
    			$result['personasImpactadas']=$registro['personasImpactadas'];
    			$result['centro']=$registro['centro'];
    			$result['siglas']=$registro['siglas'];
    			$result['area']=$registro['area'];
    			$result['idEstado']=$registro['idEstado'];
    			$result['estado']=$registro['estado'];
    			$result['nombre']=$registro['nombre'];
    			$result['telefono']=$registro['telefono'];
    			$result['correo']=$registro['correo'];
    			$result['empresa']=$registro['empresa'];

    			$json['rpta'][]=$result;
    		}
        break;
        
        case 3:
           
        $consulta="SELECT u.*, c.centro, a.area FROM usuarios u join centro c JOIN area a on u.idCentro=c.id AND u.idArea=a.id AND u.idRol=4;";
          
    		$resul=mysqli_query($conexion,$consulta);
    		while($registro=mysqli_fetch_array($resul)){
    		    $result['rp']='si';
    		    $result['id']=$registro['id'];
    			$result['nombre']=$registro['nombre'];
    			$result['documento']=$registro['documento'];
    			$result['telefono']=$registro['telefono'];
    			$result['correo']=$registro['correo'];
    			$result['empresa']=$registro['empresa'];
    			$result['contrasena']=$registro['contrasena'];
    			$result['idCentro']=$registro['idCentro'];
    			$result['idArea']=$registro['idArea'];
    			$result['idRol']=$registro['idRol'];
    			$result['centro']=$registro['centro'];
    			$result['area']=$registro['area'];
    			$json['rpta'][]=$result;
    		}
        break;
        
        case 4:
      
            $consulta="SELECT * FROM `area` ";
        
    		$resul=mysqli_query($conexion,$consulta);
    		while($registro=mysqli_fetch_array($resul)){
    		    $result['rp']='si';
    		    $result['id']=$registro['id'];
    			$result['area']=$registro['area'];
    			$json['rpta'][]=$result;
    		}
        break;
        
        case 5:
      
            $consulta="SELECT * FROM `estado` WHERE `tipo`=2";
    		$resul=mysqli_query($conexion,$consulta);
    		while($registro=mysqli_fetch_array($resul)){
    		    $result['rp']='si';
    		    $result['id']=$registro['id'];
    			$result['estado']=$registro['estado'];
    			$result['tipo']=$registro['tipo'];
    			$json['rpta'][]=$result;
    		}
        break;
        
            
       
            
    
}
        }       

		mysqli_close($conexion);

		echo json_encode($json, JSON_UNESCAPED_UNICODE);



		
?>

