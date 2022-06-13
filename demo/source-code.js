import React from 'react';

function TestComponent() {
  return <p> React 你好 😭😭😭</p>;
}

function Code() {
  return (
    <div>
      <span>模拟 babel 处理 jsx 流程 😂😂😂</span>
      <TestComponent />
    </div>
  );
}

export default Code;
