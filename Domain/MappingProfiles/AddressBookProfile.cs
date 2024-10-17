using AutoMapper;
using Domain.Dtos;
using Domain.Entities;

namespace Domain.MappingProfiles;

public class AddressBookProfile : Profile
{
	public AddressBookProfile()
	{
        CreateMap<Person, PersonDto>();
        CreateMap<Address, AddressDto>();
    }
}


