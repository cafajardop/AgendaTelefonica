using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_Dal.Entidades
{
    public class Persona
    {
        public int TipoDocumento { get; set; }
        public string NumeroDocumento { get; set; }
        public string PrimerNombre { get; set; }
        public string SegundoNombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public int Sexo { get; set; }
        public string DireccionRes { get; set; }
        public string TelefonoCelular { get; set; }
        public int Ciudad { get; set; }
    }
}
