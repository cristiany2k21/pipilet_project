import React from 'react';
import universe from "../../images/universe.jpg";

import './style/index.sass';

export const presentation =
  <div id="wrapper-text-image">
    <div className="wrapper-text">
      <p>
        <span className="red">Hola,</span> a todos, <span className="blue">niños</span> y <span className="blue">niñas</span>:
      </p>
      <p>
        Mi nombre es <span className="red">Pipilet Mandala</span> y acabo de
        llegar a la Tierra. Soy un caracol <span className="purple">extraterrestre</span>, que viene desde el <span className="green">planeta Galappar</span>, que es el planeta de la <span className="orange">música</span>, del <span className="blue">color</span> y del <span className="red">amor</span>.
      </p>
      <p>
        Yo no sé hablar, ya que mi forma de
        comunicación es a través de la <span className="orange">música</span> y el <span className="blue">color</span> y, en lugar de escritura, me comunico <span className="blue">pintando</span> y <span className="orange">cantando</span>. ¡Soy un caracol
        mágico!
      </p>
      <p>
        Me gustaría conocerte. <span className="green">¿Quieres ser mi amigo?</span><br/>
        Me encanta tener amigos en todos los planetas. <span className="red">Soy alegre y divertido</span> como tú, y creo que nos vamos a entender bien.
      </p>
      <p>
        <span className="blue">Deseo ir a la escuela para aprender tu idioma y, también, tu cultura, tu historia. Y quiero
        poder entenderme con los niños y las niñas de los cinco continentes... y hacer muchos amigos.</span><br/>
        ¡Y me encanta cocinar!
      </p>
      <p>
        <span className="green">Todo el tiempo viajo con mi guitarra y mi caparazón de caracol, que es un mandala, y me
        sirve de mochila</span>. En ella llevo <span className="orange">música</span>, <span className="blue">color</span> y mucho <span className="red">amor</span>. Es bonito ¿verdad? Y ahora te voy a
        contar un secreto. Bueno, mejor... todavía ¡NO! ¡Ven conmigo y lo irás descubriendo!
      </p>
      <p>
        <span className="red">¿Quieres divertirte y participar en esta aventura apasionante? Será una experiencia
        maravillosa. Aprenderemos juntos y sabrás mucho de mi planeta y de mí. ¡Vamos, te espero,
        anímate!</span>
      </p>
    <div className="wrapper-image">
      <img src={universe} />
    </div>
      <p className="center">Este es mi planeta: <span className="green">el planeta Galappar</span> el planeta de la <span className="yellow">música</span>, el <span className="dodgerblue">color</span> y el <span className="red">amor</span>.</p>
      <p className="center">¿A qué es bonito?</p>
    </div>
  </div>;