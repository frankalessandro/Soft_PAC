<?php
header("Access-Control-Allow-Origin *");
$hostname_localhost ="localhost";
$database_localhost ="_pac";
$username_localhost ="root";
$password_localhost ="";
$case=$_POST["case"];
$json=array();

		
		$conexion = mysqli_connect($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);

	    
	   if(mysqli_connect_errno()){
            $result["rp"]="Sin Conexion";
            $json['rpta'][]=$result;
        }else{
            
    switch ($case) {

    case 1:
      
        $nombre=$_POST["nombreUsuario"];
        $docu=$_POST["documentoUsuario"];
        $tel=$_POST["telefonoUsuario"];
        $correo=$_POST["correoUsuario"];
        $empresa=$_POST["empresaUsuario"];
        $contra=$_POST["password"];
        $idCentro=$_POST["idCentro"];
        $idArea=$_POST["idArea"];
        $idRol=$_POST["idRol"];
        
            $sql="INSERT INTO `usuarios`( 
                `nombre`, 
                `documento`, 
                `telefono`, 
                `correo`, 
                `empresa`, 
                `contrasena`, 
                `idCentro`, 
                `idArea`, 
                `idRol`) VALUES (
                    '{$nombre}',
                    '{$docu}',
                    '{$tel}',
                    '{$correo}',
                    '{$empresa}',
                    '{$contra}',
                    '{$idCentro}',
                    '{$idArea}',
                    '{$idRol}')";
                    

    		$resul=mysqli_query($conexion,$sql);
    		if($resul>0){
    		    $result['rp']='ok';
    			$json['rpta'][]=$result;
    		}else{
    		    $result['rp']='no';
    			$json['rpta'][]=$result;  
    		}
    		
        break;
            
       case 2:
            
            $usu=$_POST["usu"];
            $consulta="SELECT u.*, c.centro, a.area,r.rol FROM usuarios u join centro c JOIN area a JOIN rol r on u.correo='{$usu}' AND u.idCentro=c.id AND u.idArea=a.id AND u.idRol=r.id;";
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
    			$result['rol']=$registro['rol'];
    			$json['rpta'][]=$result;
    		}
        break;
            
        case 3:
            
            $nombreProyecto=$_POST["nombreProyecto"];
            $descripcion=$_POST["descripcion"];
            $objetivo=$_POST["objetivo"];
            $personasImpactadas=$_POST["personasImpactadas"];
            $idUsuario=$_POST["idUsuario"];
            $idArea=$_POST["idArea"];
            $idEstado='3';
            $urlFormulario='';
            
        
            $sql="INSERT INTO `proyectos`( 
                `nombre`, 
                `descripcion`, 
                `objetivo`, 
                `personasImpactadas`, 
                `idUsuario`, 
                `idArea`, 
                `idEstado`, 
                `urlFormulario`) VALUES (
                    '{$nombreProyecto}',
                    '{$descripcion}',
                    '{$objetivo}',
                    '{$personasImpactadas}',
                    '{$idUsuario}',
                    '{$idArea}',
                    '{$idEstado}',
                    '{$urlFormulario}')";
                    


    		$resul=mysqli_query($conexion,$sql);
    		if($resul>0){
    		    $result['rp']='ok';
    			$json['rpta'][]=$result;
    		}else{
    		    $result['rp']='no';
    			$json['rpta'][]=$result;  
    		}
            
            
        break;
        
        case 4:
          
          $nombreProyecto=$_POST["nombreProyecto"];
            $descripcion=$_POST["descripcion"];
            $objetivo=$_POST["objetivo"];
            $personasImpactadas=$_POST["personasImpactadas"];
            $idUsuario=$_POST["idUsuario"];
            $idArea=$_POST["idArea"];
            $idEstado='3';
            $urlFormulario='';
            
        
            $sql="INSERT INTO `proyectos`( 
                `nombre`, 
                `descripcion`, 
                `objetivo`, 
                `personasImpactadas`, 
                `idUsuario`, 
                `idArea`, 
                `idEstado`, 
                `urlFormulario`) VALUES (
                    '{$nombreProyecto}',
                    '{$descripcion}',
                    '{$objetivo}',
                    '{$personasImpactadas}',
                    '{$idUsuario}',
                    '{$idArea}',
                    '{$idEstado}',
                    '{$urlFormulario}')";
                    


    		$resul=mysqli_query($conexion,$sql);
    		if($resul>0){
    		    $result['rp']='ok';
    			$json['rpta'][]=$result;
    		}else{
    		    $result['rp']='no';
    			$json['rpta'][]=$result;  
    		}
            
          
        break;
        
        case 5:
          
        $idEstado=$_POST["idEstado"];
        $idProyecto=$_POST["idProyecto"];
    
        $sql="UPDATE `proyectos` SET `idEstado`='{$idEstado}' WHERE `id`='{$idProyecto}'";
        
        // echo $sql;

    		$resul=mysqli_query($conexion,$sql);
    		if($resul>0){
    		    $result['rp']='ok';
    			$json['rpta'][]=$result;
    		}else{
    		    $result['rp']='no';
    			$json['rpta'][]=$result;  
    		}
            
          
        break; 
    
}
        }       

		mysqli_close($conexion);

		echo json_encode($json, JSON_UNESCAPED_UNICODE);



		
?>

