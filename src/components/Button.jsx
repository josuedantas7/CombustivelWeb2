import PropTypes from 'prop-types';

const Button = ({onSubmit}) => {
  return (
      <button onClick={onSubmit} className="bg-blue-700 w-96 max-[450px]:w-[233px] mt-4 text-white font-bold py-2 px-4 rounded-2xl">
          Calcular
      </button>
  )
}

export default Button

Button.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
