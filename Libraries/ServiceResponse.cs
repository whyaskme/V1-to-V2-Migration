﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class ServiceResponse
    {
        public ServiceResponse(string responseText)
        {
            ResponseText = responseText;
        }
        public string ResponseText { get; set; }
    }
}