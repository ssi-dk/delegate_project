using System;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using DG.SAP.TBRIntegration.Models;
using DG.SAP.TBRIntegration.Options;

namespace DG.SAP.TBRIntegration.Repositories
{
    public class IsolateRepository : IIsolateRepository
    {
        private readonly string _connectionString;

        public IsolateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IsolateRepository(DatabaseOptions options) : this(
            new SqlConnectionStringBuilder
            {
                DataSource = options.DataSource,
                UserID = options.UserId,
                Password = options.Password,
                InitialCatalog = options.Database
            }.ConnectionString
        )
        {
        }

        public async Task<bool> UpdateIsolate(IsolateUpdate isolateUpdate)
        {
            await using var connection = new SqlConnection(_connectionString);
            try
            {
                await connection.ExecuteAsync(
                    "FVST_DTU.UpdateIsolate", 
                    isolateUpdate, 
                    commandType: CommandType.StoredProcedure
                );
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<Isolate> GetIsolate(string isolateId)
        {
            await using var connection = new SqlConnection(_connectionString);
            var isolate = await connection.QueryAsync<Isolate>(
                "FVST_DTU.GetIsolate", 
                new {Isolatnr = isolateId},
                commandType: CommandType.StoredProcedure
            );
            return isolate.SingleOrDefault();
        }
    }
}