import { useState } from "react";

function App() {
  const db = [
    "You will have a pleasant surprise soon.",
    "Now is the time to try something new.",
    "A lifetime of happiness lies ahead of you.",
    "Your hard work will soon pay off.",
    "Adventure can be real happiness.",
    "You will make a valuable discovery.",
    "An unexpected event will soon make your life more exciting.",
    "A thrilling time is in your near future.",
    "Someone is looking up to you. Don’t let that person down.",
    "You will conquer obstacles to achieve success.",
    "A new opportunity will present itself this week.",
    "You are destined for greatness.",
    "Your kindness will lead you to success.",
    "Happiness begins with facing life with a smile.",
    "Patience is the key to joy.",
    "Now is the time to make new friends.",
    "You will soon be surrounded by good friends and laughter.",
    "Your positive attitude will lead to great results.",
    "Great fortune will come your way.",
    "You will soon travel to a faraway land.",
    "Your talents will soon be recognized and rewarded.",
    "You will receive unexpected money soon.",
    "Good news will arrive by mail.",
    "Your dreams are within reach.",
    "Your ability for accomplishment will follow with success.",
    "You will soon gain the admiration of your peers.",
    "You will enjoy good health and financial independence.",
    "Soon, life will become more interesting.",
    "You will soon embark on a business venture.",
    "Love is around the corner.",
    "Your past kindness will lead you to success.",
    "The near future holds an unexpected gift for you.",
    "Your energy will attract positive outcomes.",
    "An old friend will bring good news.",
    "Your happiness is intertwined with your outlook on life.",
    "Believe in yourself and others will too.",
    "Now is a good time to finish old projects.",
    "You will accomplish more if you start now.",
    "Fortune favors the brave.",
    "Change is happening in your life, so go with the flow!",
    "Your future is as bright as your faith.",
    "Success will come to your plans.",
    "A new business venture is on the horizon.",
    "Someone will surprise you with kindness.",
    "Your leadership will bring you rewards.",
    "Something you lost will turn up soon.",
    "Your imagination will lead you to new discoveries.",
    "Now is the time to take that chance.",
    "A faithful friend is a strong defense.",
    "The greatest risk is not taking one.",
    "Your life will be filled with sunshine and smiles.",
    "Big journeys begin with small steps.",
    "Your determination will lead you to success.",
    "You will soon witness a miracle.",
    "Your courage will guide your future.",
    "A loved one will bring you happiness.",
    "Your intuition will guide you well.",
    "Now is the time to explore new hobbies.",
    "Your generosity will soon be rewarded.",
    "Your talents will open new doors.",
    "The key to success is within your grasp.",
    "A pleasant surprise is in store for you.",
    "Your greatest fortune is the friends you have.",
    "New experiences will expand your horizons.",
    "Trust your instincts—they will not fail you.",
    "Your efforts are paying off.",
    "Someone close to you has good news.",
    "You will soon share good times with loved ones.",
    "Your creativity will lead to recognition.",
    "A golden opportunity is coming your way.",
    "Your smile lights up the room.",
    "The universe is conspiring in your favor.",
    "You will soon step into a new role.",
    "Your kindness is your strongest weapon.",
    "Your patience will be rewarded soon.",
    "A long-held wish will come true.",
    "A stranger will soon brighten your day.",
    "Your family will bring you happiness.",
    "Your positive energy attracts good luck.",
    "The coming week will be filled with joy.",
    "Opportunities will soon surround you.",
    "Your health will improve with good habits.",
    "You will make a new friend soon.",
    "A secret admirer will soon reveal themselves.",
    "The coming month holds many surprises.",
    "Your resilience will help you overcome challenges.",
    "You will soon enjoy a well-deserved rest.",
    "Love and happiness will follow you.",
    "Your future looks promising.",
    "A wise decision will bring you success.",
    "Your life will soon enter a new chapter.",
    "The best is yet to come.",
    "You will discover hidden talents.",
    "A new friendship will bring joy.",
    "You will soon have the answer you seek.",
    "A financial windfall is in your future.",
    "Trust that good fortune will come your way.",
    "You are about to embark on a great adventure.",
    "Your path is filled with good fortune.",
    "Joy will soon fill your heart.",
    "Something wonderful is about to happen.",
  ];

  const [fortune, setFortune] = useState("");

  const getFortune = () => {
    const randomFortune = db[Math.floor(Math.random() * db.length)];
    setFortune(randomFortune);
  };

  return (
    <div className="container">
      <h1 className="title">🥠 Fortune Cookie Oracle 🥠</h1>
      <button className="fortune-button" onClick={getFortune}>
        ✨ Reveal Your Fortune ✨
      </button>
      {fortune && (
        <div className="fortune-display">
          <p className="fortune-text">{fortune}</p>
        </div>
      )}
    </div>
  );
}

export default App;
