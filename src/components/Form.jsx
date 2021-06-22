import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Result from './Result';

const validateSchema = Yup.object().shape({
  age: Yup.number()
    .required('Required'),
  height: Yup.number()
    .required('Required'),
  weight: Yup.number()
    .required('Required'),
});

const Form = () => {
  const [showResult, setShowResult] = useState(false);
  const formik = useFormik({
    initialValues: {
      gender: 'male',
      age: 0,
      height: 0,
      weight: 0,
      activity: 'min',
    },
    validationSchema: validateSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      setShowResult(true);
      // return showResult ? <Result show={showResult} values={values} /> : null;
    },
  });

  const resetFields = () => {
    setShowResult(false);
    formik.handleReset();
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="counter__form form" name="counter" action="#" method="post">
        <div className="form__item">
          <h2 className="heading">
            Пол
          </h2>
          <ul className="switcher">
            <li className="switcher__item">
              <input onChange={formik.handleChange} id="gender-male" name="gender" value="male" type="radio" checked={formik.values.gender === 'male'} />
              <label htmlFor="gender-male">
                Мужчина
              </label>
            </li>
            <li className="switcher__item">
              <input onChange={formik.handleChange} id="gender-female" name="gender" value="female" type="radio" />
              <label htmlFor="gender-female">
                Женщина
              </label>
            </li>
          </ul>
        </div>
        <fieldset className="form__item form__parameters" name="parameters">
          <legend className="visually-hidden">
            Физические параметры
          </legend>
          <div className="inputs-group">
            <div className="input">
              <div className="input__heading">
                <label className="heading" htmlFor="age">
                  Возраст
                </label>
                <span className="input__heading-unit">
                  лет
                </span>
              </div>
              <div className="input__wrapper">
                <input onChange={formik.handleChange} value={formik.values.age} type="text" id="age" name="age" placeholder={formik.values.age} inputMode="decimal" maxLength="3" />
                {formik.errors.age && <div className="input__error">Поле должно быть числом</div>}
              </div>
            </div>
            <div className="input">
              <div className="input__heading">
                <label className="heading" htmlFor="height">
                  Рост
                </label>
                <span className="input__heading-unit">
                  см
                </span>
              </div>
              <div className="input__wrapper">
                <input onChange={formik.handleChange} value={formik.values.height} type="text" id="height" name="height" placeholder="0" inputMode="decimal" maxLength="3" />
                {formik.errors.height && <div className="input__error">Поле должно быть числом</div>}
              </div>
            </div>
            <div className="input">
              <div className="input__heading">
                <label className="heading" htmlFor="weight">
                  Вес
                </label>
                <span className="input__heading-unit">
                  кг
                </span>
              </div>
              <div className="input__wrapper">
                <input onChange={formik.handleChange} value={formik.values.weight} type="text" id="weight" name="weight" placeholder="0" inputMode="decimal" maxLength="3" />
                {formik.errors.weight && <div className="input__error">Поле должно быть числом</div>}
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="form__item">
          <legend className="heading">
            Физическая активность
          </legend>
          <ul className="radios-group">
            <li className="radio">
              <div className="radio__wrapper">
                <input onChange={formik.handleChange} id="activity-minimal" name="activity" value="min" type="radio" checked={formik.values.activity === 'min'} />
                <label htmlFor="activity-minimal">
                  Минимальная
                </label>
              </div>
              <p className="radio__description">
                Сидячая работа и нет физических нагрузок
              </p>
            </li>
            <li className="radio">
              <div className="radio__wrapper">
                <input onChange={formik.handleChange} id="activity-low" name="activity" value="low" type="radio" />
                <label htmlFor="activity-low">
                  Низкая
                </label>
              </div>
              <p className="radio__description">
                Редкие, нерегулярные тренировки, активность в быту
              </p>
            </li>
            <li className="radio">
              <div className="radio__wrapper">
                <input onChange={formik.handleChange} id="activity-medium" name="activity" value="medium" type="radio" />
                <label htmlFor="activity-medium">
                  Средняя
                </label>
              </div>
              <p className="radio__description">
                Тренировки 3-5 раз в неделю
              </p>
            </li>
            <li className="radio">
              <div className="radio__wrapper">
                <input onChange={formik.handleChange} id="activity-high" name="activity" value="high" type="radio" />
                <label htmlFor="activity-high">
                  Высокая
                </label>
              </div>
              <p className="radio__description">
                Тренировки 6-7 раз в неделю
              </p>
            </li>
            <li className="radio">
              <div className="radio__wrapper">
                <input onChange={formik.handleChange} id="activity-maximal" name="activity" value="max" type="radio" />
                <label htmlFor="activity-maximal">
                  Очень высокая
                </label>
              </div>
              <p className="radio__description">
                Больше 6 тренировок в неделю и физическая работа
              </p>
            </li>
          </ul>
        </fieldset>
        <div className="form__submit">
          <button className="form__submit-button button" name="submit" type="submit" disabled={(!formik.isValid || !formik.dirty) || formik.isSubmitting}>
            Рассчитать
          </button>
          <button onClick={resetFields} className="form__reset-button" name="reset" type="reset" disabled={!formik.dirty}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FD3636" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z" />
            </svg>
            <span>
              Очистить поля и расчёт
            </span>
          </button>
        </div>
      </form>
      {showResult ? <Result show={showResult} values={formik.values} /> : null}
    </>
  );
};

export default Form;
