import React from 'react';

function TestComponent() {
  return <p> hello,React zjh</p>;
}

function Code() {
  return (
    <div>
      <span>模拟 babel 处理 jsx 流程 😂</span>
      <TestComponent />
    </div>
  );
}

export default Code;
