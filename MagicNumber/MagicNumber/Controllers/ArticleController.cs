using MagicNumber.GetData;
using MagicNumber.Models;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using MagicNumber.Controllers;

namespace MagicNumber.Controllers
{
    public class ArticleController : ApiController
    {
		public class CommentTemplate
        {
			public string Slug { get; set; }
			public string UserID { get; set; }
			public string Detail { get; set; }
		}
		private Article loadFromTable(MySqlDataReader reader)
        {
			Article temp1 = new Article();
			User author = new User();
			temp1.ArticleID = reader.GetString("ArticleID");
			temp1.Detail = reader.GetString("Detail");
			temp1.Title = reader.GetString("Title");
			temp1.ImageLink = reader.GetString("ImageLink");
			temp1.Upvote = reader.GetString("Upvote");
			temp1.Slug = reader.GetString("Slug");
			temp1.ArticleTypeID = reader.GetString("ArticleTypeID");
			author.Name = reader.GetString("Name");
			author.Avatar = reader.GetString("avatar");
			temp1.Author = author;
			return temp1;
		}

		[System.Web.Http.Route("api/Article/GetAll")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetAll()
		{
			string sql = $" SELECT ArticleID, Detail, Title, ArticleTypeID,ImageLink, Upvote, slug, AuthorID, user.Name, user.avatar FROM article join user on article.AuthorID= user.UserID  ";
			MySqlConnection con = new MyConnection().GetConnection();
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();
			MySqlDataReader reader = cmd.ExecuteReader();			
			List<Article> temp = new List<Article>();
			while (reader.Read())
			{
				temp.Add(loadFromTable(reader));
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}
		// GET: Article
		[System.Web.Http.Route("api/Article/GetBySlug/{slug}")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetByID(string slug)
		{
			string sql = $" SELECT ArticleID, Detail, Title, ArticleTypeID,ImageLink, Upvote, slug, AuthorID, user.Name, user.avatar FROM article join user on article.AuthorID= user.UserID where slug='{slug}'  ";
			MySqlConnection con = new MyConnection().GetConnection();
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();
			List<Article> temp = new List<Article>();
			while (reader.Read())
			{
				temp.Add(loadFromTable(reader));
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}

		[System.Web.Http.Route("api/Article/GetByType")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetByType(string typeId)
		{
			string sql = $" SELECT ArticleID, Detail, Title, ArticleTypeID,ImageLink, Upvote, slug, AuthorID, user.Name, user.avatar FROM article join user on article.AuthorID= user.UserID where articleTypeID='{typeId}'  ";
			MySqlConnection con = new MyConnection().GetConnection();
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();
			List<Article> temp = new List<Article>();
			while (reader.Read())
			{
				temp.Add(loadFromTable(reader));
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}

		[System.Web.Http.Route("api/Article/GetRandomPost")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetRandomPost()
		{
			string sql = $" SELECT ArticleID, Detail, Title, ArticleTypeID,ImageLink, Upvote, slug, AuthorID, user.Name, user.avatar FROM article join user on article.AuthorID= user.UserID limit 5 ";
			MySqlConnection con = new MyConnection().GetConnection();
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();

			List<Article> temp = new List<Article>();
			while (reader.Read())
			{
				temp.Add(loadFromTable(reader));
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}

		[System.Web.Http.Route("api/Article/GetTop")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetTop( string top)
		{
			string sql = $" SELECT ArticleID, Detail, Title, ArticleTypeID,ImageLink, Upvote, slug, AuthorID, user.Name, user.avatar FROM article join user on article.AuthorID= user.UserID limit {top} ";
			MySqlConnection con = new MyConnection().GetConnection();
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();

			List<Article> temp = new List<Article>();
			while (reader.Read())
			{
				temp.Add(loadFromTable(reader));
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}
		[System.Web.Http.Route("api/Article/Add")]
		[System.Web.Http.HttpPost]
		public HttpResponseMessage Add(Article article)
		{
			try
			{
				string alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
				string small_alphabets = "abcdefghijklmnopqrstuvwxyz";
				string numbers = "1234567890";
				string characters = small_alphabets;
				string id = "";
				for (int i = 0; i < 5; i++)
				{
					string character = string.Empty;
					do
					{
						int index = new Random().Next(0, characters.Length);
						character = characters.ToCharArray()[index].ToString();
					} while (id.IndexOf(character) != -1);
					id += character;
				}
				article.ArticleID = $"Art{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Millisecond}{id}";

				article.Slug = "";
				string[] temp = article.Title.Split(' ');
				foreach (string t in temp)
				{
					article.Slug += $"-{FormatString.HandleName(t)}";
				}
				article.Slug += id;
				string sql = $" Insert into article values('{article.ArticleID}','{article.Title}','{article.ImageLink}','{article.Detail}','0','{article.Slug}','{article.AuthorID}','{article.ArticleTypeID}')  ";
				MySqlConnection con = new MyConnection().GetConnection();
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return Request.CreateResponse(System.Net.HttpStatusCode.OK, article.Slug);
			}
			catch (Exception e)
			{
				return Request.CreateResponse(System.Net.HttpStatusCode.OK, "");
			}
		}

		[System.Web.Http.Route("api/Article/Edit")]
		[System.Web.Http.HttpPut]
		public string Edit(Article article)
		{
			try
			{
				string sql = $" update article set Title='{article.Title}', Detail='{article.Detail}', Upvote='{article.Upvote}',ArticleTypeID= '{article.ArticleTypeID}'  where ArticleID='{article.ArticleID}'";
				MySqlConnection con = new MyConnection().GetConnection();
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

		[System.Web.Http.Route("api/Article/Upvote")]
		[System.Web.Http.HttpPut]
		public string Upvote(String slug)
		{
			try
			{
				string sql = $" update article set Upvote= Upvote +1 where slug='{slug}'";
				MySqlConnection con = new MyConnection().GetConnection();
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return "Upvote successfully!";
			}
			catch (Exception e)
			{

				return $"Fail to Upvote {e.Message}";

			}
		}
		[System.Web.Http.Route("api/Article/Delete")]
		[System.Web.Http.HttpDelete]
		public string Delete(string slug)
		{
			try
			{
				string sql = $" delete from Article where slug='{slug}'";
				MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return $"Delete successfully!";
			}
			catch (Exception)
			{
				return "Fail ";
			}
		}
		[System.Web.Http.Route("api/Article/AddComment")]
		[System.Web.Http.HttpPost]

		public string AddComment(CommentTemplate com)
		{
			try
			{
				string sql = $"INSERT INTO comment(UserID,ArticleID,Detail, Time) VALUES('{com.UserID}', " +
							$" (SELECT ArticleID FROM article where slug='{com.Slug}'), " +
							$" '{com.Detail}','{DateTime.Now.ToString()}'); ";
				MySqlConnection con = new MyConnection().GetConnection();
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return "Add Comment successfully!";
			}
			catch (Exception e)
			{

				return $"Fail to Add Comment {e.Message}";

			}
		}
		[System.Web.Http.Route("api/Article/GetComment")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetComment(string slug)
		{
			string sql = $" select c.UserID, c.Detail, c.Time, u.Name, u.avatar from comment c join article a on a.ArticleID=c.ArticleID join user u on u.UserID=c.UserID where a.slug='{slug}' ";
			MySqlConnection con = new MyConnection().GetConnection();
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();

			List<Comment> temp = new List<Comment>();
			while (reader.Read())
			{
				Comment temp1 = new Comment();
				temp1.UserID = reader.GetString("UserId");
				temp1.Time = reader.GetString("Time");
				temp1.Detail = reader.GetString("Detail");
				temp1.UserName = reader.GetString("Name");
				temp1.UserAvatar = reader.GetString("avatar");
				temp.Add(temp1);
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}

		[System.Web.Http.Route("api/Article/DeleteComment")]
		[System.Web.Http.HttpDelete]
		public string DeleteComment(string slug, string userid)
		{
			try
			{
				string sql = $" delete from Article where slug='{slug}'";
				MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return $"Delete successfully!";
			}
			catch (Exception)
			{
				return "Fail ";
			}
		}
	}
}