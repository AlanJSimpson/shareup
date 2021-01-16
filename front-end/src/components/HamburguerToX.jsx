import cx from 'classnames';
import React from 'react';
import styles from './style/HamburguerToX.module.css';

function HamburguerToX({
  showMenu,
  setShowMenu,
  hamburguerIsClicked,
  setHamburguerIsClicked,
  hamLineHeight,
  hamColor,
  hamContainerSize,
}) {
  return (
    <div
      style={{
        height: `${hamContainerSize}px`,
        width: `${hamContainerSize}px`,
      }}
      className={styles.hamburguerContainer}
      onClick={e => {
        setHamburguerIsClicked(!hamburguerIsClicked);
        setShowMenu(!showMenu);
      }}
    >
      <span
        style={
          hamburguerIsClicked
            ? {
                height: `${hamLineHeight}px`,
                transform: `translateY(${hamContainerSize / 2 - hamLineHeight / 2}px) rotate(135deg)`,
                backgroundColor: `${hamColor}`,
              }
            : { backgroundColor: `${hamColor}`, height: `${hamLineHeight}px` }
        }
        className={styles.topBar}
      ></span>

      <span
        style={{
          height: `${hamLineHeight}px`,
          backgroundColor: `${hamColor}`,
          top: `${hamContainerSize / 2 - hamLineHeight / 2}px`,
        }}
        className={cx(styles.middleBar, {
          [styles.middleBarClicked]: hamburguerIsClicked,
        })}
      ></span>

      <span
        style={
          hamburguerIsClicked
            ? {
                height: `${hamLineHeight}px`,
                transform: `translateY(${-hamContainerSize / 2 + hamLineHeight / 2}px) rotate(-135deg)`,
                backgroundColor: `${hamColor}`,
              }
            : { backgroundColor: `${hamColor}`, height: `${hamLineHeight}px` }
        }
        className={styles.bottonBar}
      ></span>
    </div>
  );
}

export default HamburguerToX;
