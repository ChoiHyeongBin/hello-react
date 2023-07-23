import { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

// 랜덤 색상을 생성
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16); // floor: 소수점 이하를 반올림
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample propColor={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

// IterationSample 컴포넌트
/* class App extends Component {
  render() {
    return <IterationSample />;
  }
} */

// 함수 컴포넌트에서 ref 사용시에는 Hooks 사용 필요
// ValidationSample 컴포넌트
/* class App extends Component {
  render() {
    return <ValidationSample />;
  }
} */

// EventPractice 컴포넌트
/* const App = () => {
  return <EventPractice />;
}; */

// Say 컴포넌트
/* const App = () => {
  return <Say />;
}; */

// Counter 컴포넌트
/* const App = () => {
  return <Counter />;
}; */

// MyComponent 컴포넌트
/* const App = () => {
  return (
    <MyComponent name="React" favoriteNumber={1}>
      리액트
    </MyComponent>
  );
}; */

export default App;
