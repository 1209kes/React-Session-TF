import React, { useEffect } from 'react';

const Main = () => {
    useEffect(() => {
        alert('Welcome to the Main page!');
    }, []); // 빈 배열로 한 번만 호출됨

    return (
        <div>
            <h1>Main Page</h1>
        </div>
    );
};

export default Main;
