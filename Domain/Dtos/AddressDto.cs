namespace Domain.Dtos;

public class AddressDto
{
    public string Street { get; set; } = null!;
    public string StreetNumber { get; set; } = null!;
    public string Block { get; set; } = null!;
    public string Apartment { get; set; } = null!;
    public string Floor { get; set; } = null!;
    public string Town { get; set; } = null!;
    public string Country { get; set; } = null!;
    public string Postcode { get; set; } = null!;
    public string PhoneNumber { get; set; } = null!;
}