function Footer() {
    return <footer className="page-footer">
        <div className="footer-copyright">
            <div className="container">
            <a className="right" href="#!">- - Repository - -</a>
                <p>created by:
                <br />Liza Selezneva ||
                Daria Dubrovina ||
                Kris Rudaya
                <br />© {new Date().getFullYear()}
                </p>
            </div>
        </div>
    </footer>
}

export { Footer };