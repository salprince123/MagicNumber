using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MagicNumber.Models
{
    public class Article
    {
        public string ArticleID { get; set; }
        public string Title { get; set; }
        public string ImageLink { get; set; }
        public string Detail { get; set; }
        public string Upvote { get; set; }
        public string Slug { get; set; }
        public string AuthorID { get; set; }
        public string ArticleTypeID { get; set; }
        public Article()
        {
            this.AuthorID = "admin";
            this.ArticleTypeID = "type1";
        }


    }
}