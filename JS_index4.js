function displayCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  document.getElementById("dateLabel").textContent = formattedDate;
}

function displayCurrentTime() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();

  document.getElementById("timeLabel").textContent = formattedTime;
}
