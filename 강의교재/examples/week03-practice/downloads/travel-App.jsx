function App() {
  const trip = {
    title: "강릉 하루 여행",
    date: "2026년 10월 10일",
    travelers: 2,
    transportPerPerson: 30000,
    mealPerPerson: 15000,
    activityPerPerson: 10000,
    groupBudget: 150000,
    guideUrl: "https://www.gn.go.kr/tour/",
  };
  const morning = { time: "10:00", place: "안목해변", description: "바다를 보며 산책하기" };
  const afternoon = { time: "13:00", place: "중앙시장", description: "점심 식사와 시장 구경" };
  const evening = { time: "16:00", place: "경포호", description: "호수 주변 걷기" };

  // TODO: 1인 예상 경비, 전체 예상 경비, 남은 예산을 계산하세요.

  return (
    <main className="sheet">
      <h1>여행 일정표</h1>
      <p>제공된 데이터를 이용해 나만의 여행 일정표를 작성하세요.</p>
      {/* TODO: 여행 정보, 세 일정, 예상 경비, 안내 링크를 작성하세요. */}
    </main>
  );
}

export default App;

