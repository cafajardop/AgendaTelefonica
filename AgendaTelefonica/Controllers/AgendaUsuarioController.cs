using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using _01_Dal.Entidades;

namespace AgendaTelefonica.Controllers
{
    [RoutePrefix("TipoDocumento")]
    public class AgendaUsuarioController:ApiController
    {
        [HttpGet]
        [Route("ITip")]
        public IHttpActionResult TipoDocu()
        {
            try
            {
                var resp = new _01_Dal.Dal.Metodos().ConsultaTipoDocumento();
                return Ok(resp);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}