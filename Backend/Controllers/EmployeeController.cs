using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDbContext _dbcontext;

        public EmployeeController(EmployeeDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }


        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            var employees = await _dbcontext.Employees.ToListAsync();
            return Ok(employees);
        }


        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetSingleEmployee([FromRoute] Guid id)
        {
            var employee = await _dbcontext.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if(employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
            await _dbcontext.Employees.AddAsync(employeeRequest);
            await _dbcontext.SaveChangesAsync();

            return Ok(employeeRequest);
        }
    }
}
