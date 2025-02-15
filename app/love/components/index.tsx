"use client";
import React, { useState } from "react";
import "./index.css";

const LovePage = () => {
  const [clickCount, setClickCount] = useState(0); // 记录点击 No 的次数
  const [yesSize, setYesSize] = useState(1);
  const [noOffset, setNoOffset] = useState(0);
  const [moveUp, setMoveUp] = useState(0);
  const [noText, setNoText] = useState("不要");
  const [mainImageSrc, setMainImageSrc] = useState("images/heart.png");
  const [showSuccess, setShowSuccess] = useState(false);

  const noTexts = [
    "？你认真的吗…",
    "要不再想想？",
    "不许选这个！ ",
    "我会很伤心…",
    "不行:(",
  ];

  const handleNoClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    // 让 Yes 变大，每次放大 1.2 倍
    setYesSize(1 + newClickCount * 1.2);

    // 挤压 No 按钮，每次右移 50px
    setNoOffset(newClickCount * 50);

    // 让图片和文字往上移动
    setMoveUp(newClickCount * 25);

    // No 文案变化（前 5 次变化）
    if (newClickCount <= 5) {
      setNoText(noTexts[newClickCount - 1]);
    }

    // 图片变化（前 5 次变化）
    switch (newClickCount) {
      case 1:
        setMainImageSrc("images/shocked.png"); // 震惊
        break;
      case 2:
        setMainImageSrc("images/think.png"); // 思考
        break;
      case 3:
        setMainImageSrc("images/angry.png"); // 生气
        break;
      case 4:
      case 5:
        setMainImageSrc("images/crying.png"); // 哭
        break;
      default:
        setMainImageSrc("images/crying.png"); // 之后一直是哭
        break;
    }
  };

  const handleYesClick = () => {
    setShowSuccess(true);
    setNoOffset(0);
    setYesSize(1);
    setMoveUp(0);
    setNoText("不要");
    setMainImageSrc("images/heart.png");
    document.body.style.overflow = "hidden";
  };

  return (
    <div className='container'>
      {!showSuccess ? (
        <>
          <img
            className='mx-auto'
            id='mainImage'
            src={mainImageSrc}
            alt='爱心'
            style={{ transform: `translateY(-${moveUp}px)` }}
          />
          <h1 id='question' style={{ transform: `translateY(-${moveUp}px)` }}>
            可以成为我的恋人吗？
          </h1>
          <div className='buttons'>
            <button
              id='yes'
              onClick={handleYesClick}
              style={{ transform: `scale(${yesSize})` }}
            >
              可以
            </button>
            <button
              id='no'
              onClick={handleNoClick}
              style={{ transform: `translateX(${noOffset}px)` }}
            >
              {noText}
            </button>
          </div>
        </>
      ) : (
        <div className='yes-screen w-full h-full mx-auto my-auto flex flex-col items-center justify-center'>
          <h1 className='yes-text'>{"!!!喜欢你!! ( >᎑<)♡︎ᐝ"}</h1>
          <img src='images/hug.png' alt='拥抱' className='yes-image' />
        </div>
      )}
    </div>
  );
};

export default LovePage;
