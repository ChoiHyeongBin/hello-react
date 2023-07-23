import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("props: ", props);
    console.log("constructor");
  }

  // 컴포넌트가 마운트될 때와 업데이트될 때 호출
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    console.log("nextProps.color: ", nextProps.propColor);
    console.log("prevState.color: ", prevState.color);
    if (nextProps.propColor !== prevState.color) {
      return { color: nextProps.propColor };
    }
    return null;
  }

  // 첫 렌더링을 마친 후 실행
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 리렌더링을 시작할지 여부를 지정 (false 반환시 업데이트 과정 중지)
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    console.log("nextState.number % 10 !== 4: ", nextState.number % 10 !== 4);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4; // 마지막 자리수가 4이면 리렌더링 취소
  }

  // 컴포넌트를 DOM에서 제거
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
    console.log("this.props.propColor: ", this.props.propColor);
    if (prevProps.propColor !== this.props.propColor) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 리렌더링을 완료 후 실행
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    console.log("snapshot: ", snapshot);
    if (snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
    console.log("this.myRef.style.color: ", this.myRef.style.color);
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.propColor,
    };

    return (
      <div>
        {/* {this.props.missing.value} *에러 강제발생 */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
