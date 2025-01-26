import './styles/footer.css';

export function Footer() {
    return (
        <footer>
            <p>© 2024 Marion Bailey</p>
            <div className="footer-icons">
                <a href="https://github.com/Mar1154">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/marion-bailey-0803ba345/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.upwork.com/freelancers/~01393b34980572dd70">
                    <i className="custom-upwork-icon"></i>
                </a>
            </div>
        </footer>
    )
}

