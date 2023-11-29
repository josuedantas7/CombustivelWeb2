import InputPrimario from './InputPrimario'
import PropTypes from 'prop-types';

const LabelInput = ({onChange,label}) => {
  return (
    <div className='text-center text-white font-bold'>
        <label>{label}</label>
        <InputPrimario onChange={onChange} />
    </div>
  )
}

export default LabelInput


LabelInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};