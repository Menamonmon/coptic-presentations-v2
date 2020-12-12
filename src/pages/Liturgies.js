import React from 'react';

export default function Liturgies(props) {
    return (
        <h1>Liturgies</h1>
    );
}

// Liturgy pages for St. Basil, St. Gregory, St. Cyril
function StBasilLiturgy(props) {
    return (
        <h1>St. Basil's Liturgy</h1>
    );
}

function StGregoryLiturgy(props) {
    return (
        <h1>St. Gregory's Liturgy</h1>
    );
}

function StCyrilLiturgy(props) {
    return (
        <h1>St. Cyril's Liturgy</h1>
    );
}

export {
    StBasilLiturgy,
    StGregoryLiturgy,
    StCyrilLiturgy,
};