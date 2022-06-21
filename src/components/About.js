import React from 'react';
import '../App.css';

export default function About({setShow, setShow2}){
    return(
        <div className="about">
            <main>
                <h1>Who We Are?</h1>
                <p>
                    At Pamiran, we think of ourselves as more than a box or label manufacturer. We are an ideas and solutions company. We seek to be the leader in helping our customers — large and small — package, transport, and display products of all kinds. It just happens to be that corrugated products are our area of expertise.
                </p>
                <p> 
                    So a partnership with Pamiran is not just about buying boxes or labels. It is about building a relationship with a knowledgeable, trusted, committed source; adding value to your business; and actively contributing to your success in the marketplace.
                </p>
                    <p>Whether you are looking for conventional shipping containers, custom-printed corrugated boxes, custom packaging, custom printing, or eye-catching retail visual displays, Pamiran  is here to deliver the right packaging and printing solution on time and on budget.
                </p>    
                <h2> Why We Do What We Do?</h2>
                <img className="left" src="../images/Picture7.png" alt="pic 2"/>
                <p>
                    At Pamiran, our people are as sharp at posing questions as they are at providing answers. With good reason… We realize that the key to offering responsive customer service is never taking our customers for granted. That is why at the same time you are learning about our products and how we do business, we are learning about yours.
                </p>
                <h3>Sustainability</h3>
                <p>
                    “Sustainable” means “able to continue.” What does that mean for corrugated packaging, or any industry? It’s simple: Meet the needs of the present without compromising the ability of future generations to meet their own needs.
                </p>
                <p>
                    Saying that is simple, but doing it requires effort, intention and seeing ourselves as more than just a producer of corrugated products. For Pamiran, sustainability means commitment to managed forestry, continuous recycling and innovative energy management — while also being environmentally responsible about our product design, manufacturing and distribution.
                </p>
                <p>
                    Pamiran is committed to “big-picture thinking” on sustainability — continuously analyzing our environmental impact at the local, regional and national levels, and improving our performance in all aspects of corrugated production.
                    Our mission is to serve the needs of our customers, today and tomorrow, with products and services that exceed expectations for performance and environmental responsibility.
                </p>
            </main>
                <aside>
                    <figure>
                        <img src="../images/photo_2020-10-29_04-28-04.jpg" className="right" alt="pic 1"/>
                            <figcaption>Photo by Pooya Taheri</figcaption>
                    </figure>
                    <p>
                        <b>Do not</b> 
                        be surprised if Pamiran people collaborate more than you’re used to or engage you in conversations that go beyond flute profiles and stacking strength. For Pamiran people, it’s all about understanding customer service — doing our very best to give you the ideas and products that support your needs.
                    </p>
                    <img src="../images/sustain.jpg" className="right" alt= "pic2"/>
                    <img src="../images/sus2.png" className="right" alt= "pic3"/>
                </aside>
        </div>
    );
}