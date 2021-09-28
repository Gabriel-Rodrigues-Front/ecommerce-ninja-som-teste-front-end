import React from 'react';
import Nav from './NavInstruments/Nav';
import SectionInstruments from './SectionInstruments/SectionInstruments';
import SectionNews from './SectionNews/SectionNews';


export default function Main () {

    return (
        <main className="main">
            <Nav/>
            <SectionNews/>
            <SectionInstruments/>

        </main>
    )
}