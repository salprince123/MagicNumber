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
		//template object return 	
		//
		private static int CompareByLength(string x, string y)
		{
			if (x == null)
			{
				if (y == null)
				{
					return 0;
				}
				else
				{
					return -1;
				}
			}
			else
			{

				if (y == null)
				{
					return 1;
				}
				else
				{
					int retval = x.Length.CompareTo(y.Length);

					if (retval != 0)
					{
						return retval;
					}
					else
					{
						return x.CompareTo(y);
					}
				}
			}
		}
			public List<String> arrowList()
        {
			List<String> list = new List<string>();
			list.Add("159");
			list.Add("357");
			list.Add("369");
			list.Add("258");
			list.Add("123");
			list.Add("147");
			list.Add("456");
			list.Add("789");
			return list;
		}
		public class top
        {
			public int number { get; set; }
			public int age { get; set; }
			public String detail { get; set; }
		}
		public class ReturnObjects
		{
			public Number returnNumber { get; set; }
			public List<string> birthdayChart { get; set; }
			public String BirthChartArrow { get; set; }
			public String BirthChartNumber { get; set; }
			public String SoulNumber { get; set; }
			public String OutNumber { get; set; }
			public String BirthdayNumber { get; set; }
			public  List<top> top { get; set; }

		}
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
		public int CalculateOutNumber(String name)
		{
			int number = 0;
			for (int i = 0; i < name.Length; i++)
			{
				switch(name[i])
                {
					case 'j':case 's':
						number += 1;break;
					case 'b':case 'k':case 't':
						number += 2; break;
					case 'c':case 'l':
						number += 3; break;
					case 'd':case 'm':case 'v':
						number += 4; break;
					case 'n':case 'w':
						number += 5; break;
					case 'f':case 'x':
						number += 6; break;
					case 'g':case 'p':
						number += 7; break;
					case 'h':case 'q':case 'z':
						number += 8; break;
					case 'r':
						number += 9; break;
					default: number += 0; break;
				}
			}			
			while (number > 11)
			{
				if (number == 22)
					return number;
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
		public int CalculateSoulNumber(String name)
		{
			int number = 0;
			for (int i = 0; i < name.Length; i++)
			{
				switch (name[i])
				{
					case 'a':
						number += 1; break;
					case 'u':
						number += 3; break;
					case 'e':
						number += 5; break;
					case 'o':
						number += 6; break;
					case 'y':
						number += 7; break;
					case 'i':
						number += 9; break;
					default: number += 0; break;
				}
			}
			while (number > 11)
			{
				if (number == 22)
					return number;
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
		public int ArrowCheck(String num, String Arrow)
        {
			//kiem tra mui ten dac diem
			//neu co thi tra ve 1, k co tra ve -1, co nhung khong day du thi tra ve 0
			int trength = 1, weak =-1;
			for(int i=0; i < Arrow.Length; i++)
            {
				if(num.Contains(Arrow[i]))
                {
					weak = 0;
                }
				else
                {
					trength = 0;
                }
            }
			if (trength == 1)
				return 1;
			else if (weak == -1)
				return -1;
			return 0;
        }
		public int CalculateNumber(String num)
        {
			int number = 0;
			for (int i = 0; i < num.Length; i++)
			{
				number += Int16.Parse(num[i].ToString());
			}
			while(number>11 )
            {
				if (number == 22)
					return number;
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
		public int CalculateDayMonthYear(String num)
		{
			int number = 0;
			for (int i = 0; i < num.Length; i++)
			{
				number += Int16.Parse(num[i].ToString());
			}
			while (number > 9)
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
		public int CalculateTop34(String num)
		{
			int number = 0;
			for (int i = 0; i < num.Length; i++)
			{
				number += Int16.Parse(num[i].ToString());
			}
			while (number > 11)
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
		public List <String> CalculateArrow(String num)
		{
			List<String> arrow = arrowList();
			List<String> result = new List<string>();
			for (int i=0;i < arrow.Count; i++)
            {
				if (ArrowCheck(num, arrow[i]) == 1)
					result.Add($"{arrow[i]}");
				else if(ArrowCheck(num, arrow[i]) == -1)
					result.Add($"{arrow[i]}Missing");
			}
			result.Sort(CompareByLength);
			return result;
		}

		[System.Web.Http.Route("api/Number/SubmitForm")]
		[System.Web.Http.HttpGet]
		public HttpResponseMessage SubmitForm(String date,String name="")
		{
			//DateTime temp= DateTime.ParseExact(date, "dd/MM/yyyy", CultureInfo.InvariantCulture);
			string day = $"{date[0]}{date[1]}";
			string month = $"{date[2]}{date[3]}";
			string year = $"{date[4]}{date[5]}{date[6]}{date[7]}";
			ReturnObjects returnObjects = new ReturnObjects();
			returnObjects.birthdayChart = new List<string>();
			returnObjects.top = new List<top>();
			returnObjects.top.Add(new top());
			returnObjects.top.Add(new top());
			returnObjects.top.Add(new top());
			returnObjects.top.Add(new top());
			int dayNum, dayMonth, dayyear = 0;
			dayNum = CalculateDayMonthYear(day);
			dayMonth = CalculateDayMonthYear(month);
			dayyear = CalculateDayMonthYear(year);
			returnObjects.top[0].number = CalculateDayMonthYear((dayMonth+dayNum).ToString()) ;
			returnObjects.top[1].number = CalculateDayMonthYear((dayyear + dayNum).ToString());
			returnObjects.top[2].number = CalculateTop34((dayMonth + dayNum+ dayNum+dayyear).ToString());
			returnObjects.top[3].number = CalculateTop34((dayMonth + dayyear).ToString());
			List<int> topNumber = new List<int>();
			//insert birtdaychart
			for (int i = 0; i < 10; i++)
				returnObjects.birthdayChart.Add("");
			for (int i = 0; i < date.Length; i++)
			{
				if (date[i].Equals('0')) continue;
				int pos = Int32.Parse(date[i].ToString());
				returnObjects.birthdayChart[pos] += date[i];
			}
			int number = CalculateNumber(date);
			returnObjects.top[0].age = 36 - number;
			returnObjects.top[1].age = returnObjects.top[0].age + 9;
			returnObjects.top[2].age = returnObjects.top[0].age + 18;
			returnObjects.top[3].age = returnObjects.top[0].age + 27;
			int soulNumber=0, outNumber=0;
			if(name!="")
            {
				soulNumber = CalculateSoulNumber(name);
				outNumber = CalculateOutNumber(name);
				
			}
			//int number = CalculateNumber($"{temp.Day.ToString()}{temp.Month.ToString()}{temp.Year.ToString()}");
			//calculate arrow in birthday chart
			List<String> resultArrow = CalculateArrow(date);

			string getArrowDetail = "SELECT * from strengtharrow where id in (";
			if (resultArrow.Count > 0)
			{
				for (int i = 0; i < resultArrow.Count - 1; i++)
				{
					getArrowDetail += $"'{resultArrow[i]}',";
				}
				getArrowDetail += $"'{resultArrow[resultArrow.Count - 1]}')";
			}
			else getArrowDetail = "SELECT * from strengtharrow where id='nothignhere'";
			//get number in birthchart 
			string getNumberBirthChart = "SELECT * from birthchartnumber where id in (";
			for (int i = 0; i < returnObjects.birthdayChart.Count - 1; i++)
			{
				if(returnObjects.birthdayChart[i]!="")
					getNumberBirthChart += $"'{returnObjects.birthdayChart[i]}',";
			}
			getNumberBirthChart += $"'{returnObjects.birthdayChart[returnObjects.birthdayChart.Count - 1]}')";
			//get soul number 
			string getSoulNumber = $" SELECT * FROM number where NumberID='LH0{soulNumber}'";
			if (soulNumber > 9) getSoulNumber = $" SELECT * FROM number where NumberID='LH{soulNumber}'";
			//get out number 
			string getOutNumber = $" SELECT * FROM number where NumberID='TH0{outNumber}'";
			if (outNumber > 9) getOutNumber = $" SELECT * FROM number where NumberID='TH{outNumber}'";

			string sql = $" SELECT * FROM number where NumberID='CD0{number}'";
			if(number>9) sql = $" SELECT * FROM number where NumberID='CD{number}'";
			MySqlConnection con = new MySqlConnection("host=localhost;user=root;password='';database=numberum;");
			MySqlCommand cmd = new MySqlCommand(sql, con);
			MySqlCommand cmdGetArrow = new MySqlCommand(getArrowDetail, con);
			MySqlCommand cmdGetNumberBirthChart = new MySqlCommand(getNumberBirthChart, con);
			MySqlCommand cmdGetSoulNum = new MySqlCommand(getSoulNumber, con);
			MySqlCommand cmdGetOutNum = new MySqlCommand(getOutNumber, con);
			//returnObjects.SoulNumber = getSoulNumber;
			//returnObjects.OutNumber = getOutNumber;
			con.Open();
			MySqlDataReader reader = cmd.ExecuteReader();
			List<ReturnObjects> list = new List<ReturnObjects>();
			while (reader.Read())
			{
				returnObjects.returnNumber = (new Number
				{
					NumberID = reader.GetString("numberID"),
					Title = reader.GetString("title"),
					Detail = reader.GetString("detail")
				});
			}
			con.Close();

			//read arrow 
			con.Open();			
			reader = cmdGetArrow.ExecuteReader();
			while (reader.Read())
			{
				if(reader.GetString("id").Contains("Missing"))
					returnObjects.BirthChartArrow += $"Mũi tên trống {reader.GetString("id").Substring(0,3)}: {reader.GetString("Detail")}\n\n\n";
				else 
					returnObjects.BirthChartArrow += $"Mũi tên {reader.GetString("id").Substring(0, 3)}: {reader.GetString("Detail")}\n\n\n";

			}
			con.Close();

			//read the number in birthchart
			con.Open();
			reader = cmdGetNumberBirthChart.ExecuteReader();
			while (reader.Read())
			{
				returnObjects.BirthChartNumber += $"Bạn có {reader.GetString("id").Length} số {reader.GetString("id")[0]} \n {reader.GetString("Detail")}\n\n\n";
			}
			con.Close();
			//read the soul number 
			con.Open();
			reader = cmdGetSoulNum.ExecuteReader();
			while (reader.Read())
			{
				returnObjects.SoulNumber += $"Con số linh hồn của bạn là {soulNumber} \n {reader.GetString("Detail")}\n";
			}
			con.Close();
			//read the soul number 
			con.Open();
			reader = cmdGetOutNum.ExecuteReader();
			while (reader.Read())
			{
				returnObjects.OutNumber += $"Con số biểu hiện của bạn là {outNumber} \n {reader.GetString("Detail")}\n";
			}
			con.Close();
			for (int i=0; i <4; i++)
            {
				string mysql = $" SELECT * FROM number where NumberID='TOP{returnObjects.top[i].number}'";
				MySqlCommand mycmd = new MySqlCommand(mysql, con);
				con.Open();
				reader = mycmd.ExecuteReader();
				while (reader.Read())
				{
					returnObjects.top[i].detail += $"{reader.GetString("Detail")}\n\n";
				}
				con.Close();
			}
			list.Add(returnObjects);
			return Request.CreateResponse(System.Net.HttpStatusCode.OK, list);
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