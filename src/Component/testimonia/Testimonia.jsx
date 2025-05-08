import React from "react";
import "./testimonia.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
const Testimonia = () => {
  return (
    <section id="testimonia">
      <h5>Review from clients</h5>
      <h2>Testimonia</h2>

      <div className="container testimonia__container">

        <article className="testimonia">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>

          <h5 className="client__name">John Marta</h5>
          <small className="client__review">
            All I can say is you really dont talk much but you leave
          that impression on me and I come back immpression
          </small>
        </article>

        <article className="testimonia">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar one" />
          </div>

          <h5 className="client__name">Theophilus Sunday</h5>
          <small className="client__review">
            I was fascilated on your bio and decided to give it a try and its an
            excellent decision
          </small>
        </article>

        <article className="testimonia">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar one" />
          </div>

          <h5 className="client__name">Mary Michele</h5>
          <small className="client__review">You actually Wow me</small>
        </article>

        <article className="testimonia">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar one" />
          </div>

          <h5 className="client__name">Bella Dan</h5>
          <small className="client__review">
            A return customer just want to say you are the best
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonia;
