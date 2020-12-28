using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using MongoDB;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Volusion.Data.Models
{
    public class Name
    {
        public Name()
        {
            _id = ObjectId.GenerateNewId();
            _t = "Name";
            Value = string.Empty;
        }
        public ObjectId _id { get; set; }
        public string _t { get; set; }
        public string Value { get; set; }
    }
}