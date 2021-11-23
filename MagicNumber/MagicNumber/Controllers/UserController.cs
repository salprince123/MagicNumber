using MagicNumber.GetData;
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
    public class UserController : ApiController
	{
		private User loadFromTable(MySqlDataReader reader)
		{
			User temp1 = new User();
			temp1.UserID = reader.GetString("UserID");
			temp1.Password = reader.GetString("Password");
			temp1.Name = reader.GetString("Name");
			temp1.Birthday = reader.GetString("Birthday");
			temp1.Avatar = reader.GetString("Avatar");
			return temp1;
		}

		[System.Web.Http.Route("api/User/GetByID")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage GetByID(string id)
		{
			string sql = $"select * from User where UserID='{id}' ";
			MySqlConnection con = new MyConnection().GetConnection();
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();
			List<User> temp = new List<User>();
			while (reader.Read())
			{
				temp.Add(loadFromTable(reader));
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, temp);
		}

		[System.Web.Http.Route("api/User/Edit")]
		[System.Web.Http.HttpPut]
		public string Edit(User user)
		{
			try
			{
				string sql = $" update User set Name='{user.Name}', Birthday='{user.Birthday}', avatar='{user.Avatar}' where UserID='{user.UserID}'";
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
		[System.Web.Http.Route("api/User/UpdateAvatar")]
		[System.Web.Http.HttpPut]
		public string Edit(string id, string url )
		{
			try
			{
				string sql = $" update User set avatar='{url}' where UserID='{id}'";
				MySqlConnection con = new MyConnection().GetConnection();
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return "Update avatar successfully!";
			}
			catch (Exception e)
			{
				return $"Fail to update avatar {e.Message}";
			}
		}
	}
}