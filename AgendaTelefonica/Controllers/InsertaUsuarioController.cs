using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using _01_Dal.Entidades;

namespace AgendaTelefonica.Controllers
{
    [RoutePrefix("Persona")]
    public class InsertaUsuarioController:ApiController
    {
        [HttpPost]
        [Route("IUsu")]
        public IHttpActionResult InsertaFactura(Persona usr)
        {
            try
            {
                var resp = new _01_Dal.Dal.Metodos().InsertarUsu(usr);
                return Ok(resp);
            }

            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

    }
}