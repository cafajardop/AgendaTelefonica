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

    this.UpdateUser = function (udusu) {
        var response = $http({
            url: UrlSite + "/Persona/UpdUsu/",
            method: "POST",
            data:udusu
        })
        return response;
    }

    this.FindPerson = function (tipDoc, numDoc) {
        var response = $http({
            url: UrlSite + "/Persona/FndUsu/" + tipDoc +"/"+ numDoc,
            method: "GET",
        })
        return response;
    }
}
DataHttpService.$inject = ['$http'];