using Domain.Entities;
using Infrastructure.Repositories.Interfaces;

namespace Infrastructure.Repositories;

public class AddressBookRepository: IAddressBookRepository
{
    private readonly List<Person> AddressBookData = 
    [
        new()
        { 
            Id = Guid.NewGuid(), 
            FirstName = "Matei", 
            LastName = "Coman", 
            Address = new() 
            { 
                Street = "Mosilor",
                StreetNumber = "290",
                Block = "36",
                Apartment = "35",
                Floor = "2"
            }
        },
        new()
        { 
            Id = Guid.NewGuid(), 
            FirstName = "Andra", 
            LastName = "Semciuc", 
            Address = new() 
            { 
                Street = "Corneliu Coposu",
                StreetNumber = "4",
                Block = "5",
                Apartment = "25",
                Floor = "5"
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
}