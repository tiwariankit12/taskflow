function Container({ children }) {
  return (
    <main className="page-wrapper">
      <div className="container-wrapper">
        <div className="content-card">
          {children}
        </div>
      </div>
    </main>
  );
}

export default Container;