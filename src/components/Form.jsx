import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import i18next from 'i18next';

import Result from './Result';

const validateSchema = Yup.object().shape({
  age: Yup.number()
    .required(i18next.t('erros.required')),
  height: Yup.number()
    .required(i18next.t('erros.required')),
  weight: Yup.number()
    .required(i18next.t('erros.required')),
});

const Form = () => {
  const [showResult, setShowResult] = useState(false);
  const formik = useFormik({
    initialValues: {
      gender: 'male',
      age: '',
      height: '',
      weight: '',
      activity: 'min',
    },
    validationSchema: validateSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      setShowResult(true);
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
            {i18next.t('genderSetction.gender')}
          </h2>
          <ul className="switcher">
            <li className="switcher__item">
              <input onChange={formik.handleChange} id="gender-male" name="gender" value="male" type="radio" checked={formik.values.gender === 'male'} />
              <label htmlFor="gender-male">
                {i18next.t('genderSetction.man')}
              </label>
            </li>
            <li className="switcher__item">
              <input onChange={formik.handleChange} id="gender-female" name="gender" value="female" type="radio" checked={formik.values.gender === 'female'} />
              <label htmlFor="gender-female">
                {i18next.t('genderSetction.woman')}
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
                  {i18next.t('parameters.age')}
                </label>
                <span className="input__heading-unit">
                  {i18next.t('parameters.years')}
                </span>
              </div>
              <div className="input__wrapper">
                <input onChange={formik.handleChange} value={formik.values.age} type="text" id="age" name="age" placeholder="0" inputMode="decimal" maxLength="3" />
                {formik.errors.age && <div className="input__error">{i18next.t('errors.number')}</div>}
              </div>
            </div>
            <div className="input">
              <div className="input__heading">
                <label className="heading" htmlFor="height">
                  {i18next.t('parameters.height')}
                </label>
                <span className="input__heading-unit">
                  {i18next.t('parameters.centimeters')}
                </span>
              </div>
              <div className="input__wrapper">
                <input onChange={formik.handleChange} value={formik.values.height} type="text" id="height" name="height" placeholder="0" inputMode="decimal" maxLength="3" />
                {formik.errors.height && <div className="input__error">{i18next.t('errors.number')}</div>}
              </div>
            </div>
            <div className="input">
              <div className="input__heading">
                <label className="heading" htmlFor="weight">
                  {i18next.t('parameters.weight')}
                </label>
                <span className="input__heading-unit">
                  {i18next.t('parameters.kilograms')}
                </span>
              </div>
              <div className="input__wrapper">
                <input onChange={formik.handleChange} value={formik.values.weight} type="text" id="weight" name="weight" placeholder="0" inputMode="decimal" maxLength="3" />
                {formik.errors.weight && <div className="input__error">{i18next.t('errors.number')}</div>}
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="form__item">
          <legend className="heading">
            {i18next.t('activitySection.activity')}
          </legend>
          <ul className="radios-group">
            <li className="radio">
              <div className="radio__wrapper">
                <input onChange={formik.handleChange} id="activity-minimal" name="activity" value="min" type="radio" checked={formik.values.activity === 'min'} />
                <label htmlFor="activity-minimal">
                  {i18next.t('activitySection.minSection.min')}
                </label>
              </div>
              <p className="radio__description">
                {i18next.t('activitySection.minSection.minDescription')}
              </p>
            </li>
            <li className="radio">
              <div className="radio__wrapper">
                <input onChange={formik.handleChange} id="activity-low" name="activity" value="low" type="radio" checked={formik.values.activity === 'low'} />
                <label htmlFor="activity-low">
                  {i18next.t('activitySection.lowSection.low')}
                </label>
              </div>
              <p className="radio__description">
                {i18next.t('activitySection.lowSection.lowDescription')}
              </p>
            </li>
            <li className="radio">
              <div className="radio__wrapper">
                <input onChange={formik.handleChange} id="activity-medium" name="activity" value="medium" type="radio" checked={formik.values.activity === 'medium'} />
                <label htmlFor="activity-medium">
                  {i18next.t('activitySection.mediumSection.medium')}
                </label>
              </div>
              <p className="radio__description">
                {i18next.t('activitySection.mediumSection.mediumDescription')}
              </p>
            </li>
            <li className="radio">
              <div className="radio__wrapper">
                <input onChange={formik.handleChange} id="activity-high" name="activity" value="high" type="radio" checked={formik.values.activity === 'high'} />
                <label htmlFor="activity-high">
                  {i18next.t('activitySection.highSection.high')}
                </label>
              </div>
              <p className="radio__description">
                {i18next.t('activitySection.highSection.highDescription')}
              </p>
            </li>
            <li className="radio">
              <div className="radio__wrapper">
                <input onChange={formik.handleChange} id="activity-maximal" name="activity" value="max" type="radio" checked={formik.values.activity === 'max'} />
                <label htmlFor="activity-maximal">
                  {i18next.t('activitySection.maxSection.max')}
                </label>
              </div>
              <p className="radio__description">
                {i18next.t('activitySection.maxSection.maxDescription')}
              </p>
            </li>
          </ul>
        </fieldset>
        <div className="form__submit">
          <button className="form__submit-button button" name="submit" type="submit" disabled={(!formik.isValid || !formik.dirty) || formik.isSubmitting}>
            {i18next.t('calculate')}
          </button>
          <button onClick={resetFields} className="form__reset-button" name="reset" type="reset" disabled={!formik.dirty}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FD3636" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z" />
            </svg>
            <span>
              {i18next.t('reset')}
            </span>
          </button>
        </div>
      </form>
      {showResult ? <Result show={showResult} values={formik.values} /> : null}
    </>
  );
};

export default Form;
