import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <div className='div1'>
          <div style={{flex : "1"}}><a>meta</a></div>
          <div style={{flex : "2"}}><a>소개</a></div>
          <div style={{flex : "3"}}><a>채용 정보</a></div>
          <div style={{flex : "4"}}><a>도움말</a></div>
          <div style={{flex : "5"}}><a>API</a></div>
          <div style={{flex : "6"}}><a>개인정보처리방침</a></div>
          <div style={{flex : "7"}}><a>약관</a></div>
          <div style={{flex : "8"}}><a>인기 계정</a></div>
          <div style={{flex : "9"}}><a>해시태그</a></div>
          <div style={{flex : "10"}}><a>위치</a></div>
          <div style={{flex : "11"}}><a>instagram Lite</a></div>
          <div style={{flex : "12"}}><a>연락처 업로드 & 비사용자</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
