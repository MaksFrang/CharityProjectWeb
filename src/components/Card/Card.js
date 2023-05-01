function Card({ data }) {
  const posts = data.map((item) => {
    return (
      <div style={{ width: '360px' }}>
        <div>{item.id}</div>
        <div>{item.header}</div>
        <div>{item.description}</div>
        <div>{item.lattitude}</div>
        <div>{item.longitude}</div>
      </div>
    );
  });
  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        justifyContent: 'center',
        allignItems: 'center',
      }}>
      {posts}
    </div>
  );
}

export default Card;
