import { Button } from '../../components';
function Page404() {
  return (
    <div
      style={{
        width: '100%',
        color: '#fefefe',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <h3>The page you are looking for does not exist.</h3>
      <h4>Please check the URL and try again.</h4>
      <Button width={'120px'} to={'/'} title={'Volver al inicio'} />
    </div>
  );
}

export default Page404;
