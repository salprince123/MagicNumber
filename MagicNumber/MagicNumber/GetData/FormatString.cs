﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MagicNumber.GetData
{
    public class FormatString
    {
		public static string[] VietNamChar = new string[]
		{
			"aAeEoOuUiIdDyY",
			"áàạảãâấầậẩẫăắằặẳẵ",
			"ÁÀẠẢÃÂẤẦẬẨẪĂẮẰẶẲẴ",
			"éèẹẻẽêếềệểễ",
			"ÉÈẸẺẼÊẾỀỆỂỄ",
			"óòọỏõôốồộổỗơớờợởỡ",
			"ÓÒỌỎÕÔỐỒỘỔỖƠỚỜỢỞỠ",
			"úùụủũưứừựửữ",
			"ÚÙỤỦŨƯỨỪỰỬỮ",
			"íìịỉĩ",
			"ÍÌỊỈĨ",
			"đ",
			"Đ",
			"ýỳỵỷỹ",
			"ÝỲỴỶỸ"
		};
		public static string HandleName(string str)
		{
			//Thay thế và lọc dấu từng char      
			for (int i = 1; i < VietNamChar.Length; i++)
			{
				for (int j = 0; j < VietNamChar[i].Length; j++)
					str = str.Replace(VietNamChar[i][j], VietNamChar[0][i - 1]);
			}
			str.ToLower();
			return str;
		}
	}
}