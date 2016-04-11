/*
Transforming integer values to their written Persian/Farsi text.
Example: 585242 => پانصد و هشتاد و پنج هزار و دویست و چهل و دو

Author: Sadegh Dalvandi
Date: 08/04/2016
www.dalvandi.com
*/
function intToFarsiText(p)
{
	p = parseInt(p);
	
	var ireg = ["","یازده","دوازده","سیزده","چهارده","پانزده","شانزده","هفده","هجده","نوزده"];
	var ones = ["صفر","یک","دو","سه","چهار","پنج","شش","هفت","هشت","نه"];
	var tens = ["","ده","بیست","سی","چهل","پنجاه","شصت","هفتاد","هشتاد","نود"];
	var hundreds = ["","صد","دویست","سیصد","چهارصد","پانصد","ششصد","هفتصد","هشتصد","نه صد"];
	var text = "";
	
	if(p <= 9999999)
	{
		if(p>=1000000){
			var milion = Math.floor(p / 1000000);
			p = p % 1000000;
			text = ones[milion] + " " + "میلیون";
			var r = intToFarsiText(p);
			if(r != "")
				text = text + " و " +  r;
		}
		else if(p>=100000)
		{
			var hundredthousand = Math.floor(p / 100000);
			p = p % 100000;
			text = hundreds[hundredthousand];
			if(p<1000)
				text = text + " " + "هزار";			
			var r = intToFarsiText(p);
			if(r != "")
				text = text + " و " +  r;
		}
		else if(p>=10000)
		{
			if(p>10000 && p<20000){
				tenthousand = Math.floor(((p / 10000)*10)-10);
				text = ireg[tenthousand];
				p = p % 1000;
				text = text + " " + "هزار";
				var r = intToFarsiText(p);
				if(r != "")
					text = text + " و " +  r;	
			}
			else{
				var tenthousand = Math.floor(p / 10000);
				text = tens[tenthousand];
				p = p % 10000;
				if(p<1000)
					text = text + " " + "هزار";
				var r = intToFarsiText(p);
				if(r != "")
					text = text + " و " +  r;	
			}
		}
		else if(p>=1000)
		{
			var thousand = Math.floor(p / 1000);
			p = p % 1000;
			text = ones[thousand];
			text = text + " " + "هزار";
			var r = intToFarsiText(p);
			if(r != "")
				text = text + " و " +  r;
		}
		else if(p>=100)
		{
			var hundred = Math.floor(p / 100);
			p = p % 100;
			text = hundreds[hundred];
			text = text + " ";
			var r = intToFarsiText(p);
			if(r != "")
				text = text + " و " +  r;
		}
		else if(p>=10)
		{
			if(p>10 && p<20){
				text = ireg[p-10];
			}
			else{
				var ten = Math.floor(p / 10);
				p = p % 10;
				text = tens[ten];
				text = text + " ";
				var r = intToFarsiText(p);
				if(r != "")
					text = text + " و " +  r;
			}
		}
		else if(p>0)
		{
			text = ones[p];
			text = text + " ";
		}
		
		return text;
	}
	return "عدد وارد شده از مقدار مجاز بزرگتر است.";
}
