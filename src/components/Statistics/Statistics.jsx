import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statistics}>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive Feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;



//    <div className={css.statisticsContainer}>
//      <h3 className={css.statisticsTitle}>Statistics</h3>
//      <ul className={css.statisticsList}>
//        <li>Good: {good}</li>
//        <li>Neutral: {neutral} </li>
//        <li>Bad: {bad}</li>
//        <li>Total: {total}</li>
//        <li>Positive feedback: {positivePercentage}%</li>
//      </ul>
//    </div>;