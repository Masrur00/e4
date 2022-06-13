import styles from "./CityRow.module.css";

function CityRow({ city }) {
  const { name, population, country, id } = city;
  return (
    <tr data-testid="countries-container" className={styles.container}>
      <td> {id} </td>
      <td> {name} </td>
      <td> {country} </td>
      <td> {population} </td>
    </tr>
  );
}

export default CityRow;
