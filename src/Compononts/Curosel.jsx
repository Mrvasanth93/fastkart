import "./Curosel.css"
import curosel1 from "../assets/curosel4.jpeg"
import curosel2 from "../assets/curosel5.jpeg"
import curosel3 from "../assets/curosel6.webp"
import curosel4 from "../assets/curosel7.jpeg"
const Curosel = (probs) => {
    return (
        <>
            <div className="curosel">
                <div className="curosel-1">
                    <div className="left">
                        <img src={probs.imgName[0] == "curosel1" ? curosel1 : curosel3} alt="" />
                    </div>
                    <div className="right">
                        <h3>Apple 16 pro Max</h3>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa eius amet nulla repellat modi!.......</h6>
                        <div className="booknow">
                            Book online
                        </div>
                    </div>
                </div>
                <div className="curosel-2">
                        <div className="left">
                            <img src={probs.imgName[1] == "curosel2" ? curosel2 : curosel4} alt="" />
                        </div>
                        <div className="right">
                            <h3>Galaxy A14 5G</h3>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa eius amet nulla repellat modi!.......</h6>
                            <div className="booknow">
                                Book online
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Curosel;