import PropTypes from 'prop-types';
import style from './button.module.css';

export default function Button({ titulo, backgroundColor, onClick }) {
    // Definição das cores em RGB
    const backgroundColors = {
        roxo: '#B367DE',
        rosa: '#FF68A1' 
    };

    return (
        <button 
            onClick={onClick}
            className={style.button} 
            style={{ backgroundColor: backgroundColors[backgroundColor] || backgroundColors.roxo }}
        >
            {titulo}
        </button>
    );
}

Button.propTypes = {
    titulo: PropTypes.string.isRequired,
    backgroundColor: PropTypes.oneOf(['roxo', 'rosa']),
};

Button.defaultProps = {
    backgroundColor: 'roxo', 
};
