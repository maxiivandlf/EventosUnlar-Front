import NavHeader from './navHeader/NavHeader';

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #FF8C00',
        marginBottom: '20px',
      }}
    >
      <img
        style={{ height: '50px', width: '40%' }}
        className='logo'
        src='/logo.png'
        alt='Logo'
      />
      <h1 style={{ width: '100%', color: 'white' }}>
        <span style={{ color: '#FF8C00' }}>Eventos</span>
        <span style={{ color: '#00BFFF' }}>.</span>
      </h1>
      <NavHeader />
    </header>
  );
}

export default Header;
