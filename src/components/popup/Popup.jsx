import React from 'react';

function Popup() {
  return (
    <div className="popup-layer display-none">
      <form className="popup event" data-id-event="">
        <span className="popup__btn-close">X</span>
        <input className="event__name" name="name" type="text" required="" placeholder="Add title " />
        <div className="popup__color-picker">
          <label className="popup__color-picker_label">
            <span className="popup__color-picker_label-text">Select a color</span>
            <input className="event__color-picker" type="color" name="color" value="#4183f1" />
          </label>
        </div>
        <div className="popup__picker">
          <input className="event__date-start" name="dateStart" required="" type="date" />
          <input className="event__time-start select" name="timeStart" required="" type="time" step="900" />
          <span className="line"></span>
          <input className="event__time-end select" name="timeEnd" required="" type="time" step="900" />
          <input className="event__date-end" name="dateEnd" required="" type="date" />
        </div>
        <textarea className="event__description" name="description" cols="15" rows="5" placeholder="Add description" />
        <div className="footer-popup">
          <span className="event__btn-delete">bascket</span>
          <button className="event__btn-save">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Popup;
