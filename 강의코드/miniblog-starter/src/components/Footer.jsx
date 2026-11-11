// children: 태그 사이에 넣은 내용이 그대로 전달됩니다.
function Footer({ children }) {
  return <footer className="footer">{children}</footer>;
}

export default Footer;
