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
		[System.Web.Http.Route("api/Article/GetAll")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetAll()
		{
			string sql = $" SELECT * FROM article  ";
			MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();
			
			List<Article> temp = new List<Article>();
			while (reader.Read())
			{
				Article temp1 = new Article();
				temp1.ArticleID = reader.GetString("ArticleID");
				temp1.Detail = reader.GetString("Detail");
				temp1.Title = reader.GetString("Title");
				temp1.Upvote = reader.GetString("Upvote");
				temp1.ArticleTypeID = reader.GetString("ArticleTypeID");
				temp.Add(temp1);
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}
		// GET: Article
		[System.Web.Http.Route("api/Article/GetByID")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetByID(string id)
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
				temp.ArticleTypeID = reader.GetString("ArticleTypeID");
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}

		[System.Web.Http.Route("api/Article/GetByType")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetByType(string typeId)
		{
			string sql = $" SELECT * FROM article where articleTypeID='{typeId}'  ";
			MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();
			List<Article> temp = new List<Article>();
			while (reader.Read())
			{
				Article temp1 = new Article();
				temp1.ArticleID = reader.GetString("ArticleID");
				temp1.Detail = reader.GetString("Detail");
				temp1.Title = reader.GetString("Title");
				temp1.Upvote = reader.GetString("Upvote");
				temp1.ArticleTypeID = reader.GetString("ArticleTypeID");
				temp.Add(temp1);
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}
		[System.Web.Http.Route("api/Article/Add")]
		[System.Web.Http.HttpPost]
		public string Add(Article article)
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

		[System.Web.Http.Route("api/Article/Edit")]
		[System.Web.Http.HttpPut]
		public string Edit(Article article)
		{
			try
			{
				string sql = $" update article set Title='{article.Title}', Detail='{article.Detail}', Upvote='{article.Upvote}',ArticleTypeID= '{article.ArticleTypeID}'  where ArticleID='{article.ArticleID}'";
				MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return "Edit successfully!";
			}
			catch (Exception e)
			{
				
				return $"Fail to edit {e.Message}";

			}
		}
	}
}