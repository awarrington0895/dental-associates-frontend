    function CreateTableFromJSON() {
		
		if (document.getElementById("decider").innerHTML == "Patients")
			{
           var myTable = [{"PtNum":"1","FirstName":"Edgardo","LastName":"Bertouloume","PreferredName":"Edgardo Bertouloume","Address":"6 Warner Crossing","City":"Athens","State":"GA","Zip":"30610","PrimPhone":"706-275-9030","SecPhone":null,"Email":"ebertouloume0@homestead.com","Allergies":null,"InsName":"FirstQuoteHealth","InsNumber":"6293237"},{"PtNum":"2","FirstName":"Jeannie","LastName":"Lavery","PreferredName":"Jeannie Lavery","Address":"771 Waxwing Road","City":"Schaumburg","State":"IL","Zip":"60193","PrimPhone":"708-120-4357","SecPhone":null,"Email":"jlavery1@eepurl.com","Allergies":"CYNANCHUM VINCETOXICUM ROOT and SULFUR","InsName":"Delta Dental","InsNumber":"9373291"},{"PtNum":"3","FirstName":"Tonnie","LastName":"Sprosson","PreferredName":"Tonnie Sprosson","Address":"4500 Vahlen Hill","City":"Homestead","State":"FL","Zip":"33034","PrimPhone":"786-972-4759","SecPhone":null,"Email":"tsprosson2@cafepress.com","Allergies":null,"InsName":"Ameritas","InsNumber":"7818395"},{"PtNum":"4","FirstName":"Davita","LastName":"Wheowall","PreferredName":"Davita Wheowall","Address":"74271 Stone Corner Alley","City":"Des Moines","State":"IA","Zip":"50305","PrimPhone":"515-387-0446","SecPhone":null,"Email":"dwheowall3@cocolog-nifty.com","Allergies":"Bisacodyl","InsName":"eHealth","InsNumber":"9557356"},{"PtNum":"5","FirstName":"Gerick","LastName":"Sheircliffe","PreferredName":"Gerick Sheircliffe","Address":"3 Lindbergh Hill","City":"Chicago","State":"IL","Zip":"60663","PrimPhone":"312-686-8334","SecPhone":null,"Email":"gsheircliffe4@dyndns.org","Allergies":null,"InsName":"Delta Dental","InsNumber":"4561626"},{"PtNum":"6","FirstName":"Eddy","LastName":"Brehaut","PreferredName":null,"Address":"31371 Lunder Terrace","City":"Torrance","State":"CA","Zip":"90505","PrimPhone":"310-600-7130","SecPhone":"530-127-1500","Email":"pbrehaut5@cnbc.com","Allergies":null,"InsName":null,"InsNumber":null},{"PtNum":"7","FirstName":"Rozele","LastName":"Zumbusch","PreferredName":"Rozele Zumbusch","Address":"11394 Kinsman Drive","City":"Canton","State":"OH","Zip":"44710","PrimPhone":"330-671-4512","SecPhone":"843-583-7333","Email":"rzumbusch6@kickstarter.com","Allergies":null,"InsName":"eHealth","InsNumber":"3732215"},{"PtNum":"8","FirstName":"Abran","LastName":"Congreave","PreferredName":"Abran Congreave","Address":"478 Oneill Way","City":"Baton Rouge","State":"LA","Zip":"70815","PrimPhone":"225-557-0372","SecPhone":null,"Email":"acongreave7@dedecms.com","Allergies":null,"InsName":"Ameritas","InsNumber":"8601178"},{"PtNum":"9","FirstName":"Allin","LastName":"Pawel","PreferredName":"Allin Pawel","Address":"45 Orin Circle","City":"Berkeley","State":"CA","Zip":"94705","PrimPhone":"510-879-6045","SecPhone":null,"Email":"apawel8@ted.com","Allergies":null,"InsName":"Ameritas","InsNumber":"1697276"},{"PtNum":"10","FirstName":"Valery","LastName":"Teers","PreferredName":"Valery Teers","Address":"4 Oxford Court","City":"Flushing","State":"NY","Zip":"11355","PrimPhone":"917-519-4102","SecPhone":null,"Email":"vteers9@google.co.uk","Allergies":null,"InsName":"Guardian","InsNumber":"3082066"},{"PtNum":"11","FirstName":"Serge","LastName":"Bushaway","PreferredName":"Serge Bushaway","Address":"0 Dottie Drive","City":"Reno","State":"NV","Zip":"89550","PrimPhone":"775-230-4537","SecPhone":"502-943-8676","Email":"sbushawaya@clickbank.net","Allergies":"Amoxicillin and Clavulanate Potassium","InsName":"CIGNA Dental","InsNumber":"6356930"},{"PtNum":"12","FirstName":"Adel","LastName":"Reap","PreferredName":null,"Address":"55061 Mayer Parkway","City":"Phoenix","State":"AZ","Zip":"85040","PrimPhone":"480-397-7649","SecPhone":null,"Email":"mreapb@npr.org","Allergies":"Dog Flea","InsName":"Careington","InsNumber":"4375465"},{"PtNum":"13","FirstName":"Anabal","LastName":"Bethune","PreferredName":"Anabal Bethune","Address":"79463 Hansons Drive","City":"Cedar Rapids","State":"IA","Zip":"52410","PrimPhone":"319-309-4107","SecPhone":null,"Email":"abethunec@nba.com","Allergies":"LIDOCAINE","InsName":"FirstQuoteHealth","InsNumber":"3914233"},{"PtNum":"14","FirstName":"Orlando","LastName":"Godball","PreferredName":"Orlando Godball","Address":"4 Gateway Plaza","City":"Baton Rouge","State":"LA","Zip":"70894","PrimPhone":"225-794-9359","SecPhone":"202-529-9164","Email":"ogodballd@mit.edu","Allergies":null,"InsName":"Delta Dental","InsNumber":"6358732"},{"PtNum":"15","FirstName":"Lari","LastName":"Skyram","PreferredName":"Lari Skyram","Address":"3535 Anniversary Parkway","City":"Gadsden","State":"AL","Zip":"35905","PrimPhone":"256-965-6471","SecPhone":null,"Email":"lskyrame@answers.com","Allergies":"SODIUM CHLORIDE","InsName":"1Dental.com","InsNumber":"5610558"},{"PtNum":"16","FirstName":"Franchot","LastName":"Kupis","PreferredName":"Franchot Kupis","Address":"035 Lunder Center","City":"Kansas City","State":"MO","Zip":"64193","PrimPhone":"816-407-2149","SecPhone":null,"Email":"fkupisf@princeton.edu","Allergies":"Triclosan","InsName":"Ameritas","InsNumber":"9136580"},{"PtNum":"17","FirstName":"Lezlie","LastName":"Pyett","PreferredName":"Lezlie Pyett","Address":"8 Ridgeway Pass","City":"Atlanta","State":"GA","Zip":"30386","PrimPhone":"404-757-8607","SecPhone":null,"Email":"lpyettg@google.com","Allergies":null,"InsName":"Delta Dental","InsNumber":"2705415"},{"PtNum":"18","FirstName":"Bobine","LastName":"Mordon","PreferredName":"Bobine Mordon","Address":"4643 Pleasure Point","City":"Littleton","State":"CO","Zip":"80127","PrimPhone":"720-694-8380","SecPhone":null,"Email":"bmordonh@prlog.org","Allergies":null,"InsName":"Delta Dental","InsNumber":"2641510"},{"PtNum":"19","FirstName":"Reta","LastName":"Gresser","PreferredName":"Reta Gresser","Address":"2 Mayfield Point","City":"Atlanta","State":"GA","Zip":"30343","PrimPhone":"404-236-8859","SecPhone":"760-627-6405","Email":null,"Allergies":null,"InsName":"Delta Dental","InsNumber":"2450997"},{"PtNum":"20","FirstName":"Max","LastName":"Leggin","PreferredName":"Max Leggin","Address":"78 Oak Valley Avenue","City":"San Diego","State":"CA","Zip":"92115","PrimPhone":"619-348-3256","SecPhone":null,"Email":"mlegginj@posterous.com","Allergies":null,"InsName":"Delta Dental","InsNumber":"1488676"},{"PtNum":"21","FirstName":"Carmelle","LastName":"Blazynski","PreferredName":"Carmelle Blazynski","Address":"5173 Manley Crossing","City":"Huntsville","State":"AL","Zip":"35810","PrimPhone":"256-202-4532","SecPhone":null,"Email":"cblazynskik@eventbrite.com","Allergies":null,"InsName":"FirstQuoteHealth","InsNumber":"3637066"},{"PtNum":"22","FirstName":"Halsy","LastName":"Wallentin","PreferredName":"Halsy Wallentin","Address":"11700 Manufacturers Pass","City":"Chicago","State":"IL","Zip":"60674","PrimPhone":"312-304-6909","SecPhone":null,"Email":"hwallentinl@technorati.com","Allergies":null,"InsName":"CIGNA Dental","InsNumber":"4375623"},{"PtNum":"23","FirstName":"Harp","LastName":"Donnel","PreferredName":"Harp Donnel","Address":"83 4th Drive","City":"Detroit","State":"MI","Zip":"48211","PrimPhone":"734-349-1861","SecPhone":null,"Email":null,"Allergies":null,"InsName":"Ameritas","InsNumber":"4139728"},{"PtNum":"24","FirstName":"Lelia","LastName":"Bloodworthe","PreferredName":"Lelia Bloodworthe","Address":"235 Killdeer Hill","City":"Las Vegas","State":"NV","Zip":"89105","PrimPhone":"702-817-3069","SecPhone":"336-236-1356","Email":"lbloodworthen@parallels.com","Allergies":null,"InsName":"Guardian","InsNumber":"1799122"},{"PtNum":"25","FirstName":"Alisun","LastName":"Spanswick","PreferredName":null,"Address":"0 Westridge Junction","City":"Nashville","State":"TN","Zip":"37210","PrimPhone":"615-822-2314","SecPhone":null,"Email":"dspanswicko@icq.com","Allergies":null,"InsName":"FirstQuoteHealth","InsNumber":"9891594"},{"PtNum":"26","FirstName":"Cristiano","LastName":"Dowsing","PreferredName":"Cristiano Dowsing","Address":"14 Cottonwood Drive","City":"Greensboro","State":"NC","Zip":"27409","PrimPhone":"336-119-8706","SecPhone":null,"Email":"cdowsingp@shareasale.com","Allergies":null,"InsName":"FirstQuoteHealth","InsNumber":"8781037"},{"PtNum":"27","FirstName":"Corrina","LastName":"Court","PreferredName":"Corrina Court","Address":"863 Pawling Junction","City":"Tampa","State":"FL","Zip":"33686","PrimPhone":"813-710-8839","SecPhone":null,"Email":"ccourtq@shutterfly.com","Allergies":"Methylphenidate Hydrochloride","InsName":"Humana","InsNumber":"3942889"},{"PtNum":"28","FirstName":"Rich","LastName":"Blest","PreferredName":"Rich Blest","Address":"2 Northwestern Drive","City":"New York City","State":"NY","Zip":"10039","PrimPhone":"212-788-7583","SecPhone":null,"Email":"rblestr@samsung.com","Allergies":null,"InsName":"Delta Dental","InsNumber":"1069828"},{"PtNum":"29","FirstName":"Rakel","LastName":"Benkhe","PreferredName":"Rakel Benkhe","Address":"304 Merchant Court","City":"Philadelphia","State":"PA","Zip":"19136","PrimPhone":"215-203-1970","SecPhone":null,"Email":"rbenkhes@nifty.com","Allergies":null,"InsName":"FirstQuoteHealth","InsNumber":"1079034"},{"PtNum":"30","FirstName":"Odille","LastName":"Swayne","PreferredName":"Odille Swayne","Address":"20231 Marquette Street","City":"Camden","State":"NJ","Zip":"8104","PrimPhone":"856-802-3911","SecPhone":null,"Email":"oswaynet@google.it","Allergies":"Azithromycin","InsName":"Delta Dental","InsNumber":"1820292"},{"PtNum":"31","FirstName":"Caleb","LastName":"Neilson","PreferredName":"Caleb Neilson","Address":"2017 Union Parkway","City":"Boston","State":"MA","Zip":"2109","PrimPhone":"617-724-7132","SecPhone":"804-773-0374","Email":"cneilsonu@narod.ru","Allergies":null,"InsName":"FirstQuoteHealth","InsNumber":"2715700"},{"PtNum":"32","FirstName":"Moria","LastName":"Bingham","PreferredName":"Moria Bingham","Address":"24 Sheridan Junction","City":"Indianapolis","State":"IN","Zip":"46207","PrimPhone":"317-796-4651","SecPhone":null,"Email":"mbinghamv@stumbleupon.com","Allergies":null,"InsName":"Ameritas","InsNumber":"5771358"},{"PtNum":"33","FirstName":"Noni","LastName":"Warland","PreferredName":"Noni Warland","Address":"226 Northview Road","City":"Oceanside","State":"CA","Zip":"92056","PrimPhone":"760-851-8352","SecPhone":null,"Email":"nwarlandw@bluehost.com","Allergies":"Watermelon","InsName":"FirstQuoteHealth","InsNumber":"2900677"},{"PtNum":"34","FirstName":"Constance","LastName":"Spinnace","PreferredName":null,"Address":"50 Vera Place","City":"Richmond","State":"VA","Zip":"23213","PrimPhone":"804-325-1270","SecPhone":"775-255-5696","Email":"espinnacex@sciencedirect.com","Allergies":null,"InsName":"eHealth","InsNumber":"7188631"},{"PtNum":"35","FirstName":"Aridatha","LastName":"Minger","PreferredName":"Aridatha Minger","Address":"5650 Ilene Court","City":"Kissimmee","State":"FL","Zip":"34745","PrimPhone":"407-903-2895","SecPhone":null,"Email":"amingery@amazon.co.uk","Allergies":null,"InsName":"FirstQuoteHealth","InsNumber":"1985692"},{"PtNum":"36","FirstName":"Angelika","LastName":"Thripp","PreferredName":"Angelika Thripp","Address":"71016 Arizona Point","City":"Jamaica","State":"NY","Zip":"11480","PrimPhone":"718-711-9970","SecPhone":"717-575-2657","Email":"athrippz@paypal.com","Allergies":null,"InsName":"1Dental.com","InsNumber":"3453163"},{"PtNum":"37","FirstName":"Kennett","LastName":"Lyffe","PreferredName":"Kennett Lyffe","Address":"0372 Sachs Junction","City":"Denver","State":"CO","Zip":"80243","PrimPhone":"303-103-2329","SecPhone":null,"Email":"klyffe10@imgur.com","Allergies":null,"InsName":"FirstQuoteHealth","InsNumber":"4975180"},{"PtNum":"38","FirstName":"Dara","LastName":"Sivier","PreferredName":"Dara Sivier","Address":"99794 Anhalt Hill","City":"Amarillo","State":"TX","Zip":"79171","PrimPhone":"806-406-2542","SecPhone":null,"Email":"dsivier11@dedecms.com","Allergies":null,"InsName":"Ameritas","InsNumber":"6600311"},{"PtNum":"39","FirstName":"Gian","LastName":"Dutson","PreferredName":"Gian Dutson","Address":"7328 Roxbury Avenue","City":"Mobile","State":"AL","Zip":"36622","PrimPhone":"251-453-6352","SecPhone":null,"Email":"gdutson12@flavors.me","Allergies":null,"InsName":"Humana","InsNumber":"1030870"},{"PtNum":"40","FirstName":"Gris","LastName":"Rubke","PreferredName":"Gris Rubke","Address":"991 Surrey Place","City":"Des Moines","State":"IA","Zip":"50362","PrimPhone":"515-576-7010","SecPhone":null,"Email":"grubke13@webs.com","Allergies":null,"InsName":"FirstQuoteHealth","InsNumber":"3648115"}]
		   
			}
		else if (document.getElementById("decider").innerHTML == "Appointments")
		{
		// var myTable =[
        //     {
        //         "ApptID": "1",
        //         "ApptDate": "November 28, 2017",
        //         "ApptTime": "9:30AM",
        //         "TxName": "Jackie",
		// 		"PtNum": "2"
        //     },
        //     {
        //         "ApptID": "2",
        //         "ApptDate": "November 29, 2017",
        //         "ApptTime": "10:30AM",
        //         "TxName": "Joe",
		// 		"PtNum": "3"
        //     },
        //     {
        //          "ApptID": "3",
        //         "ApptDate": "November 30, 2017",
        //         "ApptTime": "8:30AM",
        //         "TxName": "Jessie",
		// 		"PtNum": "4"
        //     }
		// 	]
		}
		
		else if (document.getElementById("decider").innerHTML == "Employees")
		{
			var myTable = [{"EmpNum":"1","FirstName":"Fiorenze","LastName":"Fidelus","Role":"Dentist"}]

		}
	else if (document.getElementById("decider").innerHTML == "Payment Info")
		{
			var myTable =[
            {
                "AcctNum": "1",
                "PastDue": "2",
                "PtNum": "2",
                "PayID": "3",
            },
            {
                "AcctNum": "2",
                "PastDue": "30",
                "PtNum": "3",
                "PayID": "4",
            },
            {
                "AcctNum": "3",
                "PastDue": "35",
                "PtNum": "4",
                "PayID": "5",
            }
			]
		}
        // EXTRACT VALUE FOR HTML HEADER. 
        var col = [];
        for (var i = 0; i < myTable.length; i++) {
            for (var key in myTable[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
		table.id = "myTable";

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myTable.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myTable[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
	 window.onload = CreateTableFromJSON();
	 
  function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[mySelector.value];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}