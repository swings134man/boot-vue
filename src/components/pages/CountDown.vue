
<template>
  <div>
    <h2>Count Down Test Page</h2>
    <h3>Using JS</h3>

    <div class="timer" id="timer">
      <div>
        <span id="day">0</span>

        <span id="hour">0</span>
        <span id="min">0</span>
        <span id="sec">0</span>
      </div>
    </div>

  </div>
</template>

<script setup>
function updateTime() {
  // Date Settings
  const targetDate = new Date('2023-10-21 00:00:00');
  // const targetDate = new Date('2023-10-10 00:09:00');
  const now = new Date();
  const diff = targetDate - now;

  // 시간 계산
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor(diff / (1000 * 60 * 60));
  var mins = Math.floor(diff / (1000 * 60));
  var secs = Math.floor(diff / 1000);

  // 노출할 day, hour, min, sec 세팅
  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  // 정해진 일시
  if (diff < 0) {
    // document.getElementById("timer").innerHTML =
    //     '<div>0 Days 00:00:00</div>'
    //     '<div>완료됨</div>';

    // setting
    document.getElementById("day").textContent = 0 + '일 ';
    document.getElementById("hour").textContent = 0 + '시간 ';
    document.getElementById("min").textContent = 0 + '분 ';
    document.getElementById("sec").textContent = 0 + '초 ';

    return;
  }

  // setting
  document.getElementById("day").textContent = d + '일 ';
  document.getElementById("hour").textContent = h + '시간 ';
  document.getElementById("min").textContent = m + '분 ';
  document.getElementById("sec").textContent = s + '초 ';

  // document.getElementById("timer")
  //     .innerHTML =
  //     '<div>' + d + '<span>Days</span></div>' +
  //     '<div>' + h + '<span>Hours</span></div>' +
  //     '<div>' + m + '<span>Minutes</span></div>' +
  //     '<div>' + s + '<span>Seconds</span></div>';
}

setInterval(updateTime, 1000); // 1초마다 갱신
</script>