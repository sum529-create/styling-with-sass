import React from "react";
import classNames from "classnames";
import "./Button.scss";

// size: large, medium, small
// color: blue, pink, gray;
function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) {
  // 버튼 이름 동적으로 지정 {`Button {size}`}으로도 사용 가능
  // outline과 fullWidth는 true/false에 따라 값이 들어가기 때문에 객체로 넣어준다.
  return (
    <button
      className={classNames(
        "Button",
        size,
        color,
        { outline, fullWidth },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
