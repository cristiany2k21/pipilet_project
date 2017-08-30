import React from 'react';
import universe from "../../images/universe.jpg";

import './style/index.scss';

export const presentation =
  <div id="wrapper-text-image">
    <div className="wrapper-text">
      <p>
        <span className="red">Bonjour</span> a tous <span className="blue">les enfants </span>!!!
      </p>
      <p>
        Je m’appelle <span className="red">Pipilet Mandala</span> et je viens d’arriver
        sur Terre il y a peu. Je suis un escargot
        extraterrestre, je viens de la <span className="green">plantète Galappar..</span><br/>
        Qui est la planète de la <span className="orange">musique</span>, de la <span className="blue">couleur</span> et
        de <span className="red">l’amour</span>.
      </p>
      <p>
        Je ne sais pas parler, puisque mon moyen de
        communication passe par la musique et la <span className="blue">couleur</span>.<br/>
        Et à la place de l’écriture, je <span className="orange">chante</span> et je <span className="blue">peins</span>, <span className="brown">je suis un escargot magique!!!</span>
      </p>
      <p>
        J’aimerais beaucoup te connaitre et <span className="green">que tu sois mon</span> ami. <br/>
        J’aime avoir des amis sur toutes les planètes : <span
        className="red">je suis joyeux, sympathique et amusant</span> comme toi et je crois que l’on va bien s’entendre.
        Je n’en
        ai aucun doute
      </p>
      <p>
        <span className="blue">Je veux aller à l’école pour apprendre ta langue, ta culture, tes coutumes, ton histoire, ta
        gastronomie, ton folklore ; ton artisanat, etc... Mais aussi, pouvoir comprendre les enfants des
        cinq continents et me faire beaucoup d’amis.</span> Je suis également très gourmand et <span className="brown">j’aime beaucoup cuisiner !!!</span>
      </p>
      <p>
        <span className="green">Je voyage tout le temps avec ma guitare et ma carapace d’escargot, qui est un Mandala et qui
        me sert de sac</span> à dos où j’amène de la <span className="orange">musique</span>, de la <span
        className="blue">couleur</span> et beaucoup <span className="red">d’amour</span> . C’est super,
        non ? Et bien, je vais te dire un secret. Ou plutôt, NON ! Viens avec moi le découvrir !! </p>
      <p>
        <span className="red">Tu veux t’amuser et participer à cette aventure passionnante ? ce sera merveilleux ! On
        apprendra des choses ensemble et tu connaitras beaucoup plus de choses sur ma planète et sur
        moi !!!</span>
      </p>
      <p className="center">
        <span className="red">Allez, je t’attends, rejoins moi !!!!!</span>
      </p>
      <div className="wrapper-image">
        <img src={universe}/>
      </div>
      <p className="center">
        Ceci est ma planète le “<span className="green">Planète Galappar</span>” ,qui est la planète de la <span className="yellow">musique</span>, de la <span className="blue">couleur</span> et de <span className="red">l’amour</span>.
      </p>
      <p className="center">
        Elle est belle,non?
      </p>
    </div>
  </div>