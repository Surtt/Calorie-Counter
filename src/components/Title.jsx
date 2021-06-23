import i18next from 'i18next';

const Title = () => (
  <h1 className="counter__heading heading-main">
    {i18next.t('heading')}
  </h1>
);

export default Title;
