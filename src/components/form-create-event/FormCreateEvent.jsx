import React from 'react';
import './FormCreateEvent.scss';
import PropTypes from 'prop-types';

function FormCreateEvent(props) {
  return (
    <form onSubmit={props.handleSubmit} className="popup event">
      <span onClick={props.onClosePopup} className="popup__btn-close">
        <i className="fas fa-times"></i>
      </span>
      <input name="name" required className="event__name" type="text" placeholder="Add title "
        value={props.name} onChange={props.onChange} />
      <div className="popup__color-picker">
        <i className="fas fa-palette"></i>
        <label className="popup__color-picker_label">
          <span className="popup__color-picker_label-text">Select a color</span>
          <input name="color" className="event__color-picker" type="color"
            value={props.color} onChange={props.onChange} />
        </label>
      </div>
      <div className="popup__picker">
        <span className="popup__picker-icon">
          <i className="far fa-clock"></i>
        </span>
        <input name="startDate" required className="event__date-start" type="date"
          value={props.startDate} onChange={props.onChange} />
        <input name="startTime" required className="event__time-start select" type="time" step="900"
          value={props.startTime} onChange={props.onChange} />
        <span className="decor-dash"></span>
        <input name="endTime" required className="event__time-end select" type="time" step="900"
          value={props.endTime} onChange={props.onChange} />
        <input name="endDate" required className="event__date-end" type="date"
          value={props.endDate} onChange={props.onChange} />
      </div>
      <div className="popup__description">
        <i className="fas fa-align-left"></i>
        <textarea name="description" className="event__description" placeholder="Add description"
          value={props.description} onChange={props.onChange} />
      </div>
      <div className="footer-popup">
        {props.isShowTrashIcon &&
          <span onClick={props.onDeleteEvent} className="event__btn-delete">
            <i className="fas fa-trash-alt"></i>
          </span>}
        <button className="event__btn-save">Save</button>
      </div>
    </form>
  );
}

FormCreateEvent.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onClosePopup: PropTypes.func.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  color: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  isShowTrashIcon: PropTypes.bool.isRequired,
}

FormCreateEvent.defaultProps = {
  name: '',
  description: '',
}

export default FormCreateEvent;