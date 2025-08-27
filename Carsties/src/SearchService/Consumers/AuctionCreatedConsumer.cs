using AutoMapper;
using Contracts;
using MassTransit;
using MongoDB.Entities;
using SearchService.Models;

namespace SearchService.Consumers;

public class AuctionCreatedConsumer : IConsumer<AuctionCreated>
{
    private readonly IMapper _mapper;

    public AuctionCreatedConsumer(IMapper mapper)
    {
        _mapper = mapper;
    }

    public async Task Consume(ConsumeContext<AuctionCreated> context)
    {
        Console.WriteLine("-->Starting consume");
        
        var item = _mapper.Map<Item>(context.Message);
        Console.WriteLine($"-->Mapped item model: {item.Model}");

        if (item.Model.ToLower() == "foo")
        {
            Console.WriteLine("-->Found Foo - throwing error");
            throw new ArgumentException("Cannot sell cars with name of Foo");
        }

        Console.WriteLine("-->Saving item");
        await item.SaveAsync();
    }
}
