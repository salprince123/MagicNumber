using MagicNumber.Models;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace MagicNumber.Controllers
{
    public class ArticleController : ApiController
    {
		// GET: Article
		public HttpResponseMessage Get(string id)
		{
			string sql = $" SELECT * FROM article where articleID='{id}'  ";
			MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();
			Article temp = new Article();
			while (reader.Read())
			{
				temp.ArticleID = reader.GetString("ArticleID");
				temp.Detail= reader.GetString("Detail");
				temp.Title= reader.GetString("Title");
				temp.Upvote= reader.GetString("Upvote");
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}
		public string Post(Article article)
		{
			try
			{
				string sql = $" Insert into article values('{article.ArticleID}','{article.Title}','{article.Detail}','{article.Upvote}','{article.AuthorID}','{article.ArticleTypeID}')  ";
				MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return "Add successfully!";
			}
			catch (Exception)
			{
				return "Fail to add";
			}
		}
	}
}