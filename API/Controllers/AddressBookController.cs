using Domain.Dtos;
using Infrastructure.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/address-book")]
    public class AddressBookController(IAddressBookService addressBookService) : ControllerBase
    {
        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<PersonDto>))]
        public async Task<ActionResult<IEnumerable<PersonDto>>> GetAllAsync()
            => Ok(await addressBookService.GetAllAsync());

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(PersonDto))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PersonDto>> GetPersonAsync(Guid id)
            => Ok(await addressBookService.GetPersonAsync(id));                         
    }
}