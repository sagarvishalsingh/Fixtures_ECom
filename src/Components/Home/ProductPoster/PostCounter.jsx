import useTimerDown from "../../../Hooks/App/useTimerDown";
import s from "./PostCounter.module.scss";

const PostCounter = () => {
  const { timeData } = useTimerDown("5 23 59 35", {
    timerName: "product poster",
    formattedTime: true,
  });

  return (
    <div className={s.postCounter}>
      <div className={s.timeUnit}>
        <span>{timeData.days}</span>
        <span>Days</span>
      </div>

      <div className={s.timeUnit}>
        <span>{timeData.hours}</span>
        <span>Hours</span>
      </div>

      <div className={s.timeUnit}>
        <span>{timeData.minutes}</span>
        <span>Minutes</span>
      </div>

      <div className={s.timeUnit}>
        <span>{timeData.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default PostCounter;
