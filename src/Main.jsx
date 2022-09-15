import React from 'react';
import Footer from './components/Footer';
import Announcement from './components/Announcement';
import ResetButton from './components/ResetButton';

export function Main({ footer, cement, button}) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="menu col-md-12 d-flex justify-content-center">
                        <h1>Tic Tac Toe</h1>
                        <Announcement footer={footer}/>
                        <ResetButton footer={footer}/>
                    </div>
                </div>
                <Footer footer={footer} />
            </div>
        </>
    )
}