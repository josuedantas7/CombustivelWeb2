import InputPrimario from './InputPrimario'
import PropTypes from 'prop-types';

const LabelInput = ({onChange,label, onSubmit}) => {
  return (
    <div className='text-center text-white font-bold'>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>{label}</label>
        <InputPrimario onChange={onChange} />
      </form>
    </div>
  )
}

export default LabelInput


LabelInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};