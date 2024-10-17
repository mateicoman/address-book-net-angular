using AutoMapper;
using Domain.Dtos;
using Domain.Entities;
using Infrastructure.Repositories.Interfaces;
using Infrastructure.Services.Interfaces;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Services;

public class AddressBookService(IAddressBookRepository addressBookRepository, 
                                IMapper mapper, 
                                ILogger<AddressBookService> logger) : IAddressBookService
{
    public async Task<IEnumerable<PersonDto>> GetAllAsync()
    {
        var result = await addressBookRepository.GetAllAsync();

        return mapper.Map<IEnumerable<PersonDto>>(result);
    }

    public async Task<PersonDto> GetPersonAsync(Guid id)
    {
        logger.LogInformation("Retriving person by Id {@Id}", id);
        
        Person result = await addressBookRepository.GetPersonAsync(id) ?? 
                    throw new KeyNotFoundException($"The person with id {id} was not found");

        PersonDto personDto = mapper.Map<PersonDto>(result);

        logger.LogInformation("Person with Id {@Id} retrieved with success.", id);
        
        return personDto;
    }
}
