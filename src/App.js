import './App.css';
import { Fragment, useState } from 'react';
import { ComposantFonction } from './components/ComposantFonction';
import ComposantClasse from './components/ComposantClasse';

function App() {
  const [compteur, setCompteur] = useState(0)
  const [texte, setTexte] = useState('Clique ici')

  const increase = () => {
    let tmpCompteur = compteur;
    setCompteur(++tmpCompteur)
}

const handleClick = () => {
    increase();
}

  return (
    <Fragment>
      <ComposantFonction increase={increase} compteur={compteur} texte={texte}/>
      <ComposantClasse increase={increase} compteur={compteur} texte={texte}/>
    </Fragment>
  );
}

export default App;
