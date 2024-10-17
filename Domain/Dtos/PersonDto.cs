namespace Domain.Dtos;

public class PersonDto
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public AddressDto? Address { get; set; }
    public string PhoneNumber { get; set; } = null!;
}