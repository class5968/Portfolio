/*
    Chrome - New Tab 시계 표시 스크립트

    Created by: Minsu Kim <minsu.kim@lunaiz.com> on 2025-01-21
    Updated by: Minsu Kim <minsu.kim@lunaiz.com> on 2025-01-21

    Note: Temporal은 Chrome 60, Firefox 55, Safari 11.1, Safari iOS 11.3, Edge 79부터 지원됩니다.
*/

function updateClockAndDate() {
  // 현재 시간 가져오기
  const now = Temporal.Now.plainDateTimeISO();

  // 시간 (2자리)
  const hours = String(now.hour).padStart(2, "0");
  const minutes = String(now.minute).padStart(2, "0");

  // 날짜 정보
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const month = now.month;
  const date = now.day;
  const day = days[now.dayOfWeek - 1]; // Temporal의 dayOfWeek는 1(월)~7(일)

  // 시간과 날짜 업데이트
  document.querySelector("#clock").textContent = `${hours}:${minutes}`;
  document.querySelector("#date").textContent = `${month}월 ${date}일 ${day}`;

  // 로딩 중이던 시간 표시
  document.querySelector("#clock").classList.remove("hidden");
  document.querySelector("#date").classList.remove("hidden");
}

// 1초마다 시간 업데이트
setInterval(updateClockAndDate, 1000);

// 페이지 로드 시 즉시 실행
updateClockAndDate();
