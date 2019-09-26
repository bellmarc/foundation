import React from 'react';

function Home() {
    return (
        <section className="hero">
            <div className="hero-content">
            <h1 className="hero-title">
                You win or you die
            </h1>
            <h2 className="hero-subtitle">
                  Winter is Coming
            </h2>
            <button type="button" class="hero-button" onclick="location.href='tours.html'">
            See More &raquo;
        </button>
        {/* Add icon for sound */}
            </div>
        </section>
    )
}


export default Home