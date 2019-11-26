using _01_Dal.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AgendaTelefonica.Controllers
{
    [RoutePrefix("Persona")]
    public class ActualizaUsuarioController : ApiController
    {
        [HttpPost]
        [Route("UpdUsu")]
        public IHttpActionResult ActualizaUsu (Persona param)
        {
            try
            {
                var resp = new _01_Dal.Dal.Metodos().ActualizarDatosUsuario(param);
                return Ok(resp);

            }
            catch (Exception ex)
            {

                return InternalServerError(ex);
            }

        }

        [HttpGet]
        [Route("FndUsu/{tipDoc:int}/{numDoc}")]
        public IHttpActionResult TraeUsu(int tipDoc, string numDoc)
        {
            try
            {
                var resp = new _01_Dal.Dal.Metodos().FindUsu(tipDoc, numDoc);
                return Ok(resp);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }


    }
}
