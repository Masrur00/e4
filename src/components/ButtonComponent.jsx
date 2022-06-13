import styles from "./Button.module.css";

function ButtonComponent({ title, onClick, handlepage, disabled, id }) {
  return (
    <button
      id={id}
      data-testid="button-component"
      className={styles.button}
      onClick={() => handlepage(id)}
    >
      {title}
    </button>
  );
}

export default ButtonComponent;
