namespace Domain.Entities;

public class Person
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string AddressId { get; set; } = null!;
    public Address? Address { get; set; }
}
