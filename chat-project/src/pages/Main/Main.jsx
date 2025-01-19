import React from 'react';
import { showAlert } from '../../utils/Alert';
import './Main.module.css';

const Main = () => {
    // 버튼 클릭 시 호출될 함수
    const handleClick = () => {
        showAlert('안녕하세요! 저는 김은성입니다.');
    };

    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={handleClick}>인사 버튼</button>
        </div>
    );
};

export default Main;
