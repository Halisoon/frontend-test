import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./content.scss";

const datas = [
  {
    story: `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on. "The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now. "The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
    readKey: 1,
  },
  {
    story: `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`,
    readKey: 2,
  },
  {
    story: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
    readKey: 3,
  },
  {
    story: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
    readKey: 4,
  },
];

const Content = () => {
  const [stories, setStories] = useState([]);
  const [cookies, setCookie] = useCookies();

  // cookie name
  const { storyCheck } = cookies;

  useEffect(() => {
    // check cookie
    if (storyCheck) {
      // fillter data in cookie
      const newData = datas.filter(
        (data) => !storyCheck.includes(data.readKey)
      );

      setStories([newData[0]]);
    } else {
      setStories([datas[0]]);
    }
  }, [storyCheck]);

  const handleButton = () => {
    //check cookie
    if (storyCheck) {
      setCookie("storyCheck", [...storyCheck, stories[0].readKey], {
        path: "/",
      });
    } else {
      setCookie("storyCheck", [stories[0].readKey], {
        path: "/",
      });
    }
  };

  return (
    <div className="container">
      <div className="stories">
        {!stories[0] ? (
          <h4>That's all the jokes for today! Come back another day!</h4>
        ) : (
          stories.map((story) => <p key={story.readKey}>{story.story}</p>)
        )}
      </div>
      {stories[0] && (
        <div className="buttonJoke">
          <button className="funny" onClick={handleButton}>
            This is Funny!
          </button>
          <button onClick={handleButton}>This is not Funny.</button>
        </div>
      )}
    </div>
  );
};

export default Content;
