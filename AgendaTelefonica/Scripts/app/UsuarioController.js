var UsuarioController = function ($scope, $rootScope, $location, $http, DataHttpService, growl) {
    //Traer tipo de documento
    DataHttpService.ITip().then(function (data) {
        debugger;
        $scope.tipodoc = data.data;
    });

    // Insertar Usuario
    $scope.InsertarUsr = function () {
        if ($scope.documento == "" || $scope.documento == undefined) {
            growl.error('Debe Ingresar un documento Valido', { title: 'Atención!' });
            return false;
        }
        var authobj = {};
        authobj.TipoDocumento = $scope.tipodocUpd;
        authobj.NumeroDocumento = $scope.documento;
        authobj.PrimerNombre = $scope.primerNombre;
        authobj.SegundoNombre = $scope.segundoNombre;
        authobj.PrimerApellido = $scope.primerApellido;
        authobj.SegundoApellido = $scope.segundoApellido;
        authobj.Sexo = $scope.sexo; 
        authobj.DireccionRes = $scope.direccionRes;
        authobj.TelefonoCelular = $scope.telefonoCel;
        authobj.Ciudad = $scope.ciudad;

        //Servicio ingresar usuario
        DataHttpService.InsrtUsu(authobj).then(function (resp) {
            growl.success('Usuario con numero ' + authobj.NumeroDocumento + ' se a creado correctamente!!', { title: 'Exito!' })
            setTimeout(function () {
                $scope.tipodocUpd = undefined;
                $scope.documento = undefined;
                $scope.primerNombre = undefined;
                $scope.segundoNombre = undefined;
                $scope.primerApellido = undefined;
                $scope.segundoApellido = undefined;
                $scope.sexo = undefined;
                $scope.direccionRes = undefined;
                $scope.telefonoCel = undefined;
                $scope.ciudad = undefined;
            }, 2000);
            //$.scope.tipoCategoria = undefined;
        }, function (err) {
            $scope.novalido = err;
        });
    }
}
UsuarioController.$inject = ['$scope', '$rootScope', '$location', '$http', 'DataHttpService','growl'];