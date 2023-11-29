import PropTypes from 'prop-types';

const Button = ({onSubmit}) => {
  return (
    <div>
        <button onClick={onSubmit} className="bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Calcular
        </button>
    </div>
  )
}

export default Button

Button.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
