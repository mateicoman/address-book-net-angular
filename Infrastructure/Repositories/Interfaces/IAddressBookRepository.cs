using Domain.Entities;

namespace Infrastructure.Repositories.Interfaces;

public interface IAddressBookRepository
{
    Task<IEnumerable<Person>> GetAllAsync();
    Task<Person?> GetPersonAsync(Guid id);
    Task<Person?> CreatePersonAsync(Person person);
}
