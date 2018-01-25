import React from 'react';
import ReactDOM from 'react-dom';

const Osa = (props) => {
    return (
        <div>
            <p> {props.osa} {props.tehtavia} </p>
        </div>
        )
}

const Otsikko = (props) => {
    return (
    <div>
        <h1> {props.kurssi} </h1>
    </div>
    )
}
const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osa1} tehtavia={props.teht1}/>
            <Osa osa={props.osa2} tehtavia={props.teht2}/>
            <Osa osa={props.osa3} tehtavia={props.teht3}/>
        </div>
        )
}
const Yhteensa = (props) => {
    return (
        <div>
            <p> Yhteensä {props.yht} tehtävää </p>
        </div>
        )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osa1={osa1} teht1={tehtavia1} osa2={osa2} teht2={tehtavia2} 
            osa3={osa3} teht3={tehtavia3}/>
            <Yhteensa yht={tehtavia1 + tehtavia2 + tehtavia3}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

