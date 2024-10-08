function updateDateTime() {
    var currentDate = new Date();
    
    var formattedDateTime = currentDate.toLocaleString();
    
    document.getElementById('dateTimeDisplay').textContent = formattedDateTime;
  }

  updateDateTime();

  setInterval(updateDateTime, 1000);