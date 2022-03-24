import styles from './style.module.css'

export const Input = ({ changeInputValue }) => {
    return (
        <>
            <input
                className={styles.styledInput}
                onChange={(event) => {
                    const value = event.target.value;
                    changeInputValue(value);
                }}
            />
        </>
    );
};
