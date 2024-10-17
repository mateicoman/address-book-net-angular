using Domain.Dtos;

namespace Infrastructure.Services.Interfaces;

public interface IAddressBookService
{
    Task<IEnumerable<PersonDto>> GetAllAsync();
    Task<PersonDto> GetPersonAsync(Guid id);
    Task<PersonDto> CreatePersonAsync();    
}