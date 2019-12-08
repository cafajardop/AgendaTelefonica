var UsuarioController = function ($scope, $rootScope, $location, $http, DataHttpService, growl) {
    //Traer tipo de documento
    DataHttpService.ITip().then(function (data) {
        debugger;
        $scope.tipodoc = data.data;
    });

    DataHttpService.ITip().then(function (data) {
        $scope.tipodocUpd = data.data;
    });

    // Insertar Usuario
    $scope.InsertarUsr = function () {
        if ($scope.documento == "" || $scope.documento == undefined) {
            growl.error('Debe Ingresar un documento Valido', { title: 'Atención!' });
            return false;
        }
        var authobj = {};
        authobj.TipoDocumento = $scope.tipodocGet;
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
                $scope.tipodocGet = undefined;
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

    $scope.UpdateUserController = function () {

        if ($scope.PrimerNombre == "") {
            growl.error('Debe ingresar un dato valido en primer nombre', { title: 'Atención!' });
            return false;
        }
        if ($scope.SegundoNombre == "") {
            growl.error('Debe ingresar un dato valido en segundo nombre', { title: 'Atención!' });
            return false;
        }

        var authobjUpdateUsers = {};
        authobjUpdateUsers.TipoDocumento = $scope.tipodocUpdGet
        authobjUpdateUsers.NumeroDocumento = $scope.UpdDocumento;
        authobjUpdateUsers.PrimerNombre = $scope.authobjupd.PrimerNombre;
        authobjUpdateUsers.SegundoNombre = $scope.authobjupd.SegundoNombre;


        DataHttpService.UpdateUser(authobjUpdateUsers).then(function (resp) {
            growl.success('Usuario Actualizado Correctamente!', { title: 'Exito!' });
            setTimeout(function () { location.reload(); }, 2000);
        }, function (err) {
            $scope.novalido = err;
        });
    }

    $scope.GetUsu = function () {
        if ($scope.tipodocUpdGet == "" || $scope.tipodocUpdGet == undefined) {
            growl.error('Debe Ingresar un Tipo de documento Valido', { title: 'Atención!' });
            return false;
        }
        if ($scope.UpdDocumento == "" || $scope.UpdDocumento == undefined) {
            growl.error('Debe Ingresar un Numero de documento Valido', { title: 'Atención!' });
            return false;
        }

        DataHttpService.FindPerson($scope.tipodocUpdGet, $scope.UpdDocumento).then(function (resp) {
            debugger;
            if (resp.data[0] == null) {
                growl.warning('Usuario No existe', { title: 'Atención!' });
                setTimeout(function () { $scope.tipodocUpdGet = undefined; $scope.UpdDocumento = undefined; }, 2000);
                return false;
            }
            else {
                $scope.authobjupd = resp.data[0];
                $scope.ButtonUpdate = true;
            }
        }, function (err) {
            $scope.novalido = err;
        });
    }
}
UsuarioController.$inject = ['$scope', '$rootScope', '$location', '$http', 'DataHttpService', 'growl'];