﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using MongoDB;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Volusion.Data.Models
{
    public class ContactInfo
    {
        public ContactInfo()
        {
            Address = new AddressModel();
            Email = new Email();
            Phone = new Phone();
        }

        public AddressModel Address { get; set; }
        public Email Email { get; set; }
        public Phone Phone { get; set; }
    }
}