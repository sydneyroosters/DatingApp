using System;

namespace Dating.API.Dtos
{
    public class MessageForCreationDto
    {
        public int RecipientId { get; set; }
        public int SenderId { get; set; }
        public DateTime MessageSent { get; set; }
        public string Content {get;set;}
        public MessageForCreationDto()
        {
            MessageSent = DateTime.Now;
        }
    }
}