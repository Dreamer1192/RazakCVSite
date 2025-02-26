using Microsoft.AspNetCore.Mvc;

namespace CVServices.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Abdur Razak Amod");
        }
    }
}
