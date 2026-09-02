import { readFileSync, writeFileSync } from "node:fs";

const files = process.argv.slice(2);

const exact = new Map(Object.entries({
  "있다": "있습니다", "없다": "없습니다", "않다": "않습니다", "않는다": "않습니다",
  "아니다": "아닙니다", "같다": "같습니다", "어렵다": "어렵습니다", "쉽다": "쉽습니다",
  "다르다": "다릅니다", "좋다": "좋습니다", "크다": "큽니다", "높다": "높습니다",
  "많다": "많습니다", "많았다": "많았습니다", "보자": "살펴봅시다",
  "만든다": "만듭니다", "둔다": "둡니다", "나타낸다": "나타냅니다",
  "다룬다": "다룹니다", "받는다": "받습니다", "보여준다": "보여줍니다",
  "나눈다": "나눕니다", "찾는다": "찾습니다", "기억한다": "기억합니다",
  "생긴다": "생깁니다", "읽는다": "읽습니다", "감싼다": "감쌉니다",
  "고친다": "고칩니다", "쉬워진다": "쉬워집니다", "들어간다": "들어갑니다",
  "가진다": "가집니다", "따른다": "따릅니다", "닫는다": "닫습니다",
  "흐른다": "흐릅니다", "붙인다": "붙입니다", "알린다": "알립니다",
  "돕는다": "돕습니다", "넣는다": "넣습니다", "바뀐다": "바뀝니다",
  "불러온다": "불러옵니다", "합쳐진다": "합쳐집니다", "이루어진다": "이루어집니다",
  "가리킨다": "가리킵니다", "막는다": "막습니다", "가린다": "가립니다",
  "얻는다": "얻습니다", "바꾼다": "바꿉니다", "잃는다": "잃습니다",
  "더해진다": "더해집니다", "어려워진다": "어려워집니다", "달라진다": "달라집니다"
  ,"단계다": "단계입니다", "언어다": "언어입니다", "결과다": "결과입니다",
  "경우다": "경우입니다", "함수다": "함수입니다", "코드다": "코드입니다",
  "표지다": "표지입니다", "숫자다": "숫자입니다", "구조다": "구조입니다",
  "의미다": "의미입니다", "홀수다": "홀수입니다", "단위다": "단위입니다",
  "예제다": "예제입니다", "콘텐츠다": "콘텐츠입니다", "링크다": "링크입니다",
  "데이터다": "데이터입니다", "객체다": "객체입니다", "검사다": "검사입니다",
  "컨테이너다": "컨테이너입니다", "문서다": "문서입니다", "연락처다": "연락처입니다",
  "요소다": "요소입니다", "대응시킨다": "대응시킵니다", "보인다": "보입니다",
  "발전시킨다": "발전시킵니다", "입력받는다": "입력받습니다", "맡긴다": "맡깁니다",
  "묶는다": "묶습니다"
}));

function formalize(word) {
  if (exact.has(word)) return exact.get(word);
  if (word.endsWith("했다")) return `${word.slice(0, -2)}했습니다`;
  if (word.endsWith("한다")) return `${word.slice(0, -2)}합니다`;
  if (word.endsWith("된다")) return `${word.slice(0, -2)}됩니다`;
  if (word.endsWith("진다")) return `${word.slice(0, -2)}집니다`;
  if (word.endsWith("하다")) return `${word.slice(0, -2)}합니다`;
  if (word.endsWith("이다")) return `${word.slice(0, -2)}입니다`;
  if (word.endsWith("된다")) return `${word.slice(0, -2)}됩니다`;
  return word;
}

for (const file of files) {
  const source = readFileSync(file, "utf8");
  let inFence = false;
  const output = source.split(/(?<=\n)/).map((line) => {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      return line;
    }
    if (inFence) return line;
    return line.replace(/([가-힣]+)\.(?=\s|$|["'`)\]])/g, (match, word) => {
      const replacement = formalize(word);
      return `${replacement}.`;
    });
  }).join("");
  writeFileSync(file, output, "utf8");
}
