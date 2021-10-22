using MagicNumber.Models;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace MagicNumber.Controllers
{
    public class TypeArticleController : ApiController
	{
		// GET: Article
		[System.Web.Http.Route("api/ArticleType/GetByID")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetByID(string id)
		{
			string sql = $" SELECT * FROM articleType where articleTypeID='{id}'  ";
			MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();
			ArticleType temp = new ArticleType();
			while (reader.Read())
			{
				temp.ArticleTypeID = reader.GetString("ArticleTypeID");
				temp.Detail = reader.GetString("Detail");
				temp.Name = reader.GetString("Name");
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}
		[System.Web.Http.Route("api/ArticleType/GetAll")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetAll()
		{
			string sql = $" SELECT * FROM articleType   ";
			MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();
			List<ArticleType> temp = new List<ArticleType>();
			while (reader.Read())
			{
				ArticleType temp1 = new ArticleType();
				temp1.ArticleTypeID = reader.GetString("ArticleTypeID");
				temp1.Detail = reader.GetString("Detail");
				temp1.Name = reader.GetString("Name");
				temp.Add(temp1);
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}
		[System.Web.Http.Route("api/ArticleType/Post")]
		[System.Web.Http.HttpPost]
		public string Post(ArticleType type)
		{
			try
			{
				string sql = $" Insert into articleType values('{type.ArticleTypeID}','{type.Name}','{type.Detail}')  ";
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
		[System.Web.Http.Route("api/ArticleType/Put")]
		[System.Web.Http.HttpPut]
		public string Put(ArticleType type)
		{
			try
			{
				string sql = $" update articleType set Name='{type.Name}', Detail='{type.Detail}' where ArticleTypeID='{type.ArticleTypeID}'";
				MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return "Edit successfully!";
			}
			catch (Exception)
			{
				return "Fail to edit";
			}
		}
		[System.Web.Http.Route("api/ArticleType/Delete")]
		[System.Web.Http.HttpDelete]
		public string Delete(string id)
		{
			try
			{
				string sql = $" delete from ArticleType where ArticleTypeID='{id}'";
				MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return $"Delete {id} successfully!";
			}
			catch (Exception)
			{
				return "Fail ";
			}
		}
	}
}