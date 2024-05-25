import React from 'react'
import './FAQs.css';

// import Navbar from "../Navbar/navbar.js"

export default function AnnualReport() {
    return (
        <div class="container mb-5">
            <p class="heading">How can we help you?</p>
            <div class="container mt-5 col-md-9">
                <div class="row justify-content-center">
                        <div class="search-bar">
                            <input type="text" placeholder="Type keyword to find answers" />
                                <i class="fa fa-search search-icon"></i>
                    </div>
                </div>
            </div>
            <p class="heading">Frequently Asked Questions</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            1. What is National Cadet Corps ?
                        </button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                The National Cadet Corps (NCC) is a youth development movement.
                                It has enormous potential for nation building. The NCC provides
                                opportunities to the youth of the country for their all-round
                                development with a sense of Duty, Commitment, Dedication,
                                Discipline and Moral Values so that they become able leaders and
                                useful citizens. The NCC provides exposure to the cadets in a
                                wide range of activities., with a distinct emphasis on Social
                                Services, Discipline and Adventure Training. The NCC is open to
                                all regular students of schools and colleges on a voluntary
                                basis. The students have no liability for active military
                                service.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            2. When did National Cadet Corps Come into existence?
                        </button>
                    </h2>
                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            The National Cadets Corps came into existence under the National Cadet Corps Act XXXI of 1948 (passed in
                            April, 1948; came into existence on 16th July, 1948).
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            3. What is the nature of the NCC Programme - compulsory or
                            voluntary?
                        </button>
                    </h2>
                    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Voluntary.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            4. Is the NCC Programme part of the Educational activity or is it
                            a part of military activity?
                        </button>
                    </h2>
                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Educational Activity.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            5. What is/are the Aim(s) of NCC?
                        </button>
                    </h2>
                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            To develop character, commandership, discipline , leadership, secular outlook , sprit of adventure and the
                            ideals of selfless service amongst the youth of the country.
                            To create a human resource of organized, trained and motivate youth to provide leadership in all walks of
                            life and always available for the service of the nation.
                            To provide a suitable environment to motivate the youth to take up a career in the Armed Forces.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            6. What is the Motto of NCC?
                        </button>
                    </h2>
                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            The motto of NCC is: “UNITY AND DISCIPLINE”.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            7. What is the NCC symbol/insignia?
                        </button>
                    </h2>
                    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            It is the NCC Crest in gold in the middle, with the letters “NCC”; encircled by a wreath of seventeen
                            lotuses with a background in Red, Blue and Light blue.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                            8. What does the colour Red depicts in the NCC Crest?
                        </button>
                    </h2>
                    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Red depicts the Army.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                            9. What do the colours Dark Blue and Light blue in the NCC Crest
                            depict?
                        </button>
                    </h2>
                    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Deep Blue depicts the Navy and Light Blue depicts the Air Force.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                            10. What do the Lotus flowers depicts in NCC Crest?
                        </button>
                    </h2>
                    <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            The seventeen lotuses represent the 17 State Directorates.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading11">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                            11.What are the different Certificate provided by NCC?
                        </button>
                    </h2>
                    <div id="collapse11" class="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            NCC provides 3 Certificates-
                            <ul>
                                <li>
                                    'A' Certificate
                                    <ul>
                                        <li>The Cadet must have a minimum of 75% attendance in 1st &amp; 2nd years of training in Junior Wing.
                                        </li>
                                        <li>The Cadet must have attended one Annual Training Camp.</li>
                                    </ul>
                                </li>
                                <li>
                                    'B' Certificate
                                    <ul>
                                        <li>The Cadet must have a minimum of 75% attendance in 1st &amp; 2nd years of training in the Senior Wing.
                                        </li>
                                        <li>The Cadet must have attended one Annual Training Camp.</li>
                                    </ul>
                                </li>
                                <li>
                                    'C' Certificate
                                    <ul>
                                        <li>The Cadet must be in possession of 'B' Certificate.</li>
                                        <li>The Cadet must have a minimum of 75% attendance in the 3rd Year of training in Senior Wing.</li>
                                        <li>The Cadet must have a minimum of 75% attendance in the 3rd Year of training in Senior Wing.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}