function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          body { 
            margin: 0;
          }
      `}</style>
      </div>
    )
  }
  
  export default Layout;