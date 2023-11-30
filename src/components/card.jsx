export function Card () {
    return ( 
        <>  
        <div className="container">
            <div className="row">
                <img className="img-card"src="public/cactus_img.jpg" alt="A fantastic cactus" />
            </div>
            <div className="col">
                <p className="topic"> Design</p>
                <h1 className="title">Embracing Minimalism</h1>
                <p className="description">
                From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.
                </p>
            </div>
            <footer className="footer">
            <p>Annie Spratt</p>
            </footer>
        </div>
        
        </>
    )
}