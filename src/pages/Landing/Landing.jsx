import { Header, Button } from '../../components';
import styles from './Landing.module.css';
import encuentro from '../../assets/encuentro_informatico.jpg';
import CardEvent from '../../components/CardEvent';
import getEvents from '../../services/getEvents';

const handleClick = () => {
  console.log('Ver mas detalles del evento');
  getEvents();
};

function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Header />

      <section className={styles.banner}>
        <div className={styles.blur}>
          <img className={styles.image} src={encuentro} alt='' />
          <div className={styles.contentText}>
            <h2>XIX Encuentro Informático Riojano</h2>
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
            />
          </div>
        </div>
      </section>
      <section className={styles.uncomingEvents}>
        <h2 style={{ paddingLeft: '100px', color: 'white' }}>
          Proximos eventos
        </h2>
        <div className={styles.containerCards}>
          <CardEvent
            imageURl={encuentro}
            title={'Encuentro Informático Riojano'}
            description={
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum minima porro ut a ex et asperiores amet, quisquam veniam ea?'
            }
          />

          <CardEvent imageURl={encuentro} />
          <CardEvent imageURl={encuentro} />
          <CardEvent imageURl={encuentro} />
          <CardEvent imageURl={encuentro} />
          <CardEvent imageURl={encuentro} />
          <CardEvent imageURl={encuentro} />
          <CardEvent imageURl={encuentro} />
          <CardEvent imageURl={encuentro} />
        </div>
      </section>
    </div>
  );
}

export default Landing;
