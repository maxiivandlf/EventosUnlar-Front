import { Header, Button } from '../../components';
import styles from './Landing.module.css';
import encuentro from '../../assets/encuentro_informatico.jpg';

const handleClick = () => {
  console.log('Ver mas detalles del evento');
};

function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Header />

      <section className={styles.content}>
        <div className={styles.blur}>
          <img className={styles.image} src={encuentro} alt='' />
          <div className={styles.contentText}>
            <h3>Titulo del evento</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              fugiat provident explicabo illum quibusdam incidunt quo ut maxime
              adipisci voluptatem?
            </p>
            <Button
              width={'170px'}
              type={'button'}
              title={'Ver más'}
              action={handleClick}
            >
              Ver más
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.blur}>
          <img className={styles.image} src={encuentro} alt='' />
          <div className={styles.contentText}>
            <h3>Titulo del evento</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              fugiat provident explicabo illum quibusdam incidunt quo ut maxime
              adipisci voluptatem?
            </p>
            <Button
              onClick={() => {
                console.log('Ver mas detalles del evento');
              }}
            >
              Ver más
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
