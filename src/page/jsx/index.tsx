import React from 'react';
import './index.scss';
import Code from '../../../demo/code';
// console.log('Code:', Code);

const toLearn = ['react', 'vue', 'webpack', 'nodejs'];
const TextComponent = () => <div> hello , i am function component 888 </div>;

function TestComponent() {
  return (
    <div>
      <h1>hello,world</h1>
      <span>let us learn React</span>
    </div>
  );
}
// console.log('TestComponent:', TestComponent);

/* TODO: ② */
class Index extends React.Component {
  status = false; /* 状态 */
  renderFoot = () => {
    return <div> i am renderFoot 666</div>;
  };
  /* 控制渲染 */
  controlRender = (renderType = 0) => {
    const reactElement = (
      <div className="container" style={{ margin: '20px 0' }}>
        {/* element 元素类型 */}
        <div>hello,world</div>
        {/* fragment 类型 */}
        <React.Fragment>
          <div> 👽👽 </div>
        </React.Fragment>
        {/* text 文本类型 */}
        my name is alien
        {/* 数组节点类型 */}
        {toLearn.map(item => {
          return <div key={item}>let us learn {item} </div>;
        })}
        {/* 组件类型 */}
        <TextComponent />
        {/* 三元运算 */}
        {this.status ? <TextComponent /> : <div>三元运算</div>}
        {/* 函数执行 */}
        {this.renderFoot()}
        <button onClick={() => console.log(this.render())}>打印render后的内容</button>
      </div>
    );
    console.log('reactElement 0:', reactElement);

    if (renderType) {
      const { children } = reactElement.props;
      console.log('children 1:', children);
      /* 第一步 ： 扁平化 children  */
      const flatChildren = React.Children.toArray(children);
      console.log('flatChildren 2:', flatChildren);
      /* 第二步 ： 除去文本节点 */
      const newChildren: any = [];
      // const newChildren = [];
      React.Children.forEach(flatChildren, item => {
        if (React.isValidElement(item)) newChildren.push(item);
      });
      console.log('newChildren 3:', newChildren);
      /* 第三步，插入新的节点 */
      const lastChildren1 = React.createElement(
        'div',
        { className: 'last' },
        'say goodbye 111',
        ' - ',
        'say goodbye 222'
      );
      const lastChildren2 = <div className="last">say goodbye 333 - say goodbye 444</div>;
      newChildren.push(lastChildren1);
      newChildren.push(lastChildren2);
      console.log('newChildren 4:', newChildren);

      /* 第四步：修改容器节点 */
      const newReactElement = React.cloneElement(reactElement, {}, ...newChildren);
      console.log('newReactElement 5:', newReactElement);
      console.log('--------------------------1------------------------');
      return newReactElement;
    } else {
      console.log('--------------------------0------------------------');
      return reactElement;
    }
  };
  render() {
    return (
      <div className="container-wrap">
        {this.controlRender(0)}
        <hr />
        {this.controlRender(1)}
        <hr />
        <TestComponent/>
        <hr />
        <Code/>
      </div>
    );
  }
}

/* TODO: ①  */
// class Index extends React.Component{
//     status = false /* 状态 */
//     componentDidMount(){ console.log('asdsadasdasdasd') }
//     renderFoot=()=> <div> i am foot</div>
//     render(){
//         /* 以下都是我们常用的jsx元素节 */
//         return <div style={{ marginTop:'100px' }} >
//             { /* element 元素类型 */ }
//             <div>hello,world</div>
//             { /* fragment 类型 */ }
//             <React.Fragment>
//                 <div> 👽👽 </div>
//             </React.Fragment>
//             { /* text 文本类型 */ }
//             my name is alien
//             { /* 数组节点类型 */ }
//             { toLearn.map(item=> <div key={item} >let us learn { item } </div> ) }
//             { /* 组件类型 */ }
//             <TextComponent/>
//             { /* 三元运算 */  }
//             { this.status ? <TextComponent /> :  <div>三元运算</div> }
//             { /* 函数执行 */ }
//             { this.renderFoot() }
//             <button onClick={ ()=> console.log( this.render() ) } >打印render后的内容</button>
//         </div>
//     }
// }

export default Index;
