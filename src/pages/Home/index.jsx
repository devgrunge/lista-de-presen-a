import { useState } from 'react';
import { Card } from '../../components/Card';
import './styles.css';




export function Home() {
const [studentName, setStudentName] = useState('');

  return(
    < div className="container">
    <h1>Nome: {studentName}</h1>  
    <input type="text"  
    placeholder="Digite um nome..."
    onChange={e => setStudentName(e.target.value)}
    />
    <button type="button">Adicionar</button>
   
   <Card  name="Rodrigo Gonçalves" time="08:55:25" />
   <Card name="José Gusmão" time="11:22:25" />
   <Card  name="Ana Josefina" time="15:38:01"/>
    </div>

  ) 
}
