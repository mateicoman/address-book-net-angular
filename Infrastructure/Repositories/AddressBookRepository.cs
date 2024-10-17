using Domain.Entities;
using Infrastructure.Repositories.Interfaces;

namespace Infrastructure.Repositories;

public class AddressBookRepository: IAddressBookRepository
{
    private static List<Person> AddressBookData = 
    [
        new()
        { 
            Id = Guid.Parse("a58d4224-8b00-4f10-baf1-426ee899afed"), 
            FirstName = "Matei", 
            LastName = "Coman",
            PhoneNumber = "473212",              
            Address = new() 
            { 
                Street = "Mosilor",
                StreetNumber = "290",
                Block = "36",
                Apartment = "35",
                Floor = "2",
                Postcode = "020988",
                Town = "Bucharest",
                Country = "Romania"
            }
        },
        new()
        { 
            Id = Guid.Parse("fa861fd5-066a-4e62-969c-f2e93ab5c573"), 
            FirstName = "Andra", 
            LastName = "Semciuc",
            PhoneNumber = "082821",             
            Address = new() 
            { 
                Street = "Corneliu Coposu",
                StreetNumber = "4",
                Block = "5",
                Apartment = "25",
                Floor = "5",
                Postcode = "020988",
                Town = "Bucharest",
                Country = "Romania",                  
            }
        }
    ];

    public async Task<IEnumerable<Person>> GetAllAsync()
    {
        return AddressBookData;
    }

    public async Task<Person?> GetPersonAsync(Guid id)
    {
        return AddressBookData.SingleOrDefault(p => p.Id == id);
    }

    public async Task<Person?> CreatePersonAsync(Person person)
    {
        AddressBookData.Add(person);
        return AddressBookData.SingleOrDefault(p => p.Id == person.Id);
    }
}