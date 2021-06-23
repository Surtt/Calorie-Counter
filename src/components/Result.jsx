import React from 'react';
import i18next from 'i18next';

const Result = ({ show, values }) => {
  const res = (data) => {
    const male = (10 * +data.weight) + (6.25 * +data.height) - (5 * +data.age) + 5;
    const female = (10 * +data.weight) + (6.25 * +data.height) - (5 * +data.age) - 161;
    return data.gender === 'male' ? male : female;
  };

  const activity = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9,
  };

  const result = res(values);
  const sum = (result, data) => {
    switch (data.activity) {
      case 'min':
        return result * activity.min;
      case 'low':
        return result * activity.low;
      case 'medium':
        return result * activity.medium;
      case 'high':
        return result * activity.high;
      case 'max':
        return result * activity.max;
      default:
        return result;
    }
  };

  const standard = Math.round(sum(result, values));
  const weightLoss = Math.round(standard - standard * 0.15);
  const weightGain = Math.round(standard + standard * 0.15);

  const cs = show ? 'counter__result' : 'counter__result counter__result--hidden';
  return (
    <section className={cs}>
      <h2 className="heading">
        {i18next.t('result.norm')}
      </h2>
      <ul className="counter__result-list">
        <li className="counter__result-item">
          <h3>
            <span id="calories-norm">{standard}</span> {i18next.t('result.kcal')}
          </h3>
          <p>
            {i18next.t('result.standard')}
          </p>
        </li>
        <li className="counter__result-item">
          <h3>
            <span id="calories-minimal">{weightLoss}</span> {i18next.t('result.kcal')}
          </h3>
          <p>
            {i18next.t('result.weightLoss')}
          </p>
        </li>
        <li className="counter__result-item">
          <h3>
            <span id="calories-maximal">{weightGain}</span> {i18next.t('result.kcal')}
          </h3>
          <p>
            {i18next.t('result.weightGain')}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Result;
