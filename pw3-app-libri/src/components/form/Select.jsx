import styles from './Select.module.css';

function Select({ text, name, options, handlerOnchange, value }) {
    return(

        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={name}>
                <option>Selecione uma opção</option>
                {
                    options.map((option)=>(
                        <option value={option.cod_categoria} key={option.cod_categoria}>{option.nome_categoria}</option>
                    ))
                }
            </select>

        </div>
    );
}

export default Select;