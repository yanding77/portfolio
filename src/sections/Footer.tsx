const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Yanding Mario Yin Sovenis
                    </p>

                </div>
            </div>
        </footer>
    )
}

export default Footer