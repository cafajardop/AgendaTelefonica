using _01_Dal.Entidades;
using Dapper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_Dal.Dal
{
    public class Metodos
    {
        public IEnumerable<TipoDocumento> ConsultaTipoDocumento()
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["ConCC"].ToString());
            try
            {
                using (IDbConnection db = conn)
                {
                    return conn.Query<TipoDocumento>("spTipDocumentoAgenda", new { }, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Persona> InsertarUsu(Persona ObjUser)
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["ConCC"].ToString());
            try
            {
                using (IDbConnection db = conn)
                {
                    var p = new DynamicParameters();

                    p.Add("@TipoDocumento", ObjUser.TipoDocumento, dbType: DbType.Int16, direction: ParameterDirection.Input);
                    p.Add("@NumeroDocumento", ObjUser.NumeroDocumento, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add("@PrimerNombre", ObjUser.PrimerNombre, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add("@SegundoNombre", ObjUser.SegundoNombre, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add("@PrimerApellido", ObjUser.PrimerApellido, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add("@SegundoApellido", ObjUser.SegundoApellido, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add("@Sexo", ObjUser.Sexo, dbType: DbType.Int16, direction: ParameterDirection.Input);
                    p.Add("@DireccionRes", ObjUser.DireccionRes, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add("@TelefonoCelular", ObjUser.TelefonoCelular, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add("@Ciudad", ObjUser.Ciudad, dbType: DbType.Int16, direction: ParameterDirection.Input);


                    return db.Query<Persona>("InsertarUsuarioAgenda ", p, commandType: CommandType.StoredProcedure).AsList();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
