import React from 'react';

const Result = ({ show, values }) => {
  console.log(values);
  let result = 0;
  if (values.gender === 'female') {
    result = (10 * +values.weight) + (6.25 * +values.height) - (5 * +values.age) - 161;
    console.log(result * 1.2);
    // return result * 1.2;
  }
  // const result = Object.entries(values).reduce((acc, [key, value]) => {
  //   if (values.gender === 'female') {
  //       console.log('ff');
  //     }
  // }, 0);
  const cs = show ? 'counter__result' : 'counter__result counter__result--hidden';
  return (
    <section className={cs}>
      <h2 className="heading">
        Ваша норма калорий
      </h2>
      <ul className="counter__result-list">
        <li className="counter__result-item">
          <h3>
            <span id="calories-norm">{result * 1.2}</span> ккал
          </h3>
          <p>
            поддержание веса
          </p>
        </li>
        <li className="counter__result-item">
          <h3>
            <span id="calories-minimal">3 300</span> ккал
          </h3>
          <p>
            снижение веса
          </p>
        </li>
        <li className="counter__result-item">
          <h3>
            <span id="calories-maximal">4 000</span> ккал
          </h3>
          <p>
            набор веса
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Result;
