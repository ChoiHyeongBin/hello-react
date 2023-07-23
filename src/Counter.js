import { Component } from "react";

class Counter extends Component {
  // constructor 메서드를 선언하지 않는 방식
  state = {
    number: 0,
    fixedNumber: 0,
  };

  // 컴포넌트에 state 설정
  /* constructor(props) {
        super(props);
        this.state = {
        number: 0,
        fixedNumber: 0,
        };
    } */

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            // state에 새로운 값을 넣음
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
