var DataHttpService = function ($http) {
    /*******************************************/
    /*Conexion Modulos
    /*******************************************/
    var UrlSite = "";
    this.ITip = function () {
        var response = $http({
            url: UrlSite + "/TipoDocumento/ITip",
            method: "GET"
        });
        return response;
    };

    this.InsrtUsu = function (idop) {
        var response = $http({
            url: UrlSite + "/Persona/IUsu/",
            method: "POST",
            data: idop
        });
        return response;
    };
}

DataHttpService.$inject = ['$http'];