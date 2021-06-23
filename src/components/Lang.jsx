const Lang = ({ changeLang, buttonLng }) => {
  return (
    <button onClick={changeLang} className="btn">{buttonLng}</button>
  );
};

export default Lang;
