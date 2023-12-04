import PropTypes from 'prop-types';

const InputPrimario = ({onChange, onSubmit}) => {
  return (
    <div className='w-96 max-[450px]:w-full border-2 bg-inherit rounded-2xl'>
        <input onSubmit={(e) => onSubmit(e)} className='w-full bg-inherit px-3 py-2 rounded-2xl text-white placeholder-white' placeholder='0' type='number' onChange={(e) => onChange(e.target.value)}/>
    </div>
  )
}

export default InputPrimario

InputPrimario.propTypes = {
    onChange: PropTypes.func.isRequired,
};