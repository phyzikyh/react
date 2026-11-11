import { useState, useEffect } from "react";

// useEffect + cleanup: 1초마다 시간을 갱신하고, 화면에서 사라질 때 타이머를 정리합니다.
function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id); // cleanup
  }, []);

  return <span className="clock">{now.toLocaleTimeString("ko-KR")}</span>;
}

export default Clock;
