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
        logger.LogInformation("Retriving all items");        
        var result = await addressBookRepository.GetAllAsync() ??
                    throw new KeyNotFoundException($"No data found");

        IEnumerable<PersonDto> list = mapper.Map<IEnumerable<PersonDto>>(result);

        logger.LogInformation("All items retrived succesfully");  
        return list;
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

    public async Task<PersonDto> CreatePersonAsync()
    {
        PersonDto initPerson = new()
        {
            Id = Guid.NewGuid(),
            FirstName = RandomString(4),
            LastName = RandomString(6),
            PhoneNumber = RandomNumber(6),
            Address = new()
            {
                Street = RandomString(5),
                StreetNumber = RandomNumber(1),
                Block = RandomNumber(2),
                Apartment = RandomNumber(2),
                Floor = RandomNumber(1),
                Postcode = RandomNumber(6),
                Town = RandomString(5),
                Country = RandomString(8),
            }
        }; 
        logger.LogInformation("Creating new person with {id}", initPerson.Id);
        Person personEntity = mapper.Map<Person>(initPerson);        
        Person result = await addressBookRepository.CreatePersonAsync(personEntity) ?? 
                    throw new KeyNotFoundException($"The person with id {initPerson.Id} was not created");



        logger.LogInformation("Person with Id {@Id} created with success.", initPerson.Id);
        
        return initPerson;
    }

    private static string RandomString(int length)
    {
        Random random = new();
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[random.Next(s.Length)]).ToArray());
    }

        private static string RandomNumber(int length)
    {
        Random random = new();
        const string chars = "0123456789";
        return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[random.Next(s.Length)]).ToArray());
    }
}
