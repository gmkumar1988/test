function myFunction(projects) {
	switch (projects)
	{
	case 1: 
		window.open("https://github.com/gmkumar1988/Pfizer-Sentimental-twitter-Analysis/blob/main/text_mining_tweets.R");
	break;
	case 2:
		window.open("https://github.com/gmkumar1988/covid19vaccinationprogress/blob/main/country_vaccine_kaggle.R");
	break;
	case 3:
		window.open("https://github.com/gmkumar1988/Restaurant-Sales-View2020/blob/main/restaurant_sales_2020.R");
	break;
	case 4:
		window.open("https://github.com/gmkumar1988/tweetwordcloud/blob/main/text_mining_tweets.R");
	break;
	}
  } 


  function sendMail(params)
  {
	  var tempParams = {
		  from_name: document.getElementById("name").value,
		  from_mail: document.getElementById("email").value,
		  message: document.getElementById("message").value

	  };
	  emailjs.send('service_jwjheok','template_m3mphgd',tempParams).then(function(res){
		  console.log("Success");
	  })
  }
