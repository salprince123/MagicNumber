using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using MagicNumber.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace MagicNumber.Controllers
{
	public class NumberController : ApiController
	{
		// GET: Number
		public HttpResponseMessage Get()
		{
			string sql = " SELECT * FROM number  ";
			MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();
			IList<Number> _numbers = new List<Number>();
			while (reader.Read())
			{

				_numbers.Add(new Number
				{
					NumberID = reader.GetString("numberID"),
					Title = reader.GetString("title"),
					Detail = reader.GetString("detail")
				});
			}
			con.Close();
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, _numbers);
		}
		
		public int CalculateNumber(String num)
        {
			int number = 0;
			for (int i = 0; i < num.Length; i++)
			{
				number += Int16.Parse(num[i].ToString());
			}
			while(number>9)
            {
				int temp = 0;
				string tempNum = number.ToString();
				for (int i = 0; i < tempNum.Length; i++)
				{
					temp += Int16.Parse(tempNum[i].ToString());
				}
				number = temp;
			}
			return number;
        }
		
		[System.Web.Http.Route("api/Number/SubmitForm")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage SubmitForm(String date)
		{
			DateTime temp= DateTime.ParseExact(date, "dd/MM/yyyy", CultureInfo.InvariantCulture);
			int number = CalculateNumber($"{temp.Day.ToString()}{temp.Month.ToString()}{temp.Year.ToString()}");
			string sql = $" SELECT * FROM number where NumberID='CD0{number}'";
			MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
			MySqlCommand cmd = new MySqlCommand(sql, con);
			con.Open();

			MySqlDataReader reader = cmd.ExecuteReader();
			IList<Number> _numbers = new List<Number>();
			while (reader.Read())
			{

				_numbers.Add(new Number
				{
					NumberID = reader.GetString("numberID"),
					Title = reader.GetString("title"),
					Detail = reader.GetString("detail")
				});
			}
			con.Close();

			return Request.CreateResponse(System.Net.HttpStatusCode.OK, _numbers);
		}
		public string Post(Number num)
        {
			try
            {
				string sql = $" Insert into number values('{num.NumberID}','{num.Title}','{num.Detail}')  ";
				MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
				MySqlCommand cmd = new MySqlCommand(sql, con);
				con.Open();
				cmd.ExecuteNonQuery();
				return "Add successfully!";
			}
			catch(Exception)
			{
				return "Fail to add";
			}
        }
		public string Put(Number num)
		{			
			try
			{
				string sql = $" update number set Title='{num.Title}', Detail='{num.Detail}' where numberID='{num.NumberID}'";
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
		public string Delete(string id)
		{
			try
			{
				string sql = $" delete from number where NumberID='{id}'";
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