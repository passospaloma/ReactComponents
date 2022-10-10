import React from 'react'


export default function Form() {
    return (

        <section className="about">
            <div className="contentBx redbg">
                <div className="form" data-center-center="opacity:1;left:0;" data-0-bottom="opacity:0;left:-400px;">
                    <div className="inputBx">
                        <input type="text" name="" placeholder="Full Name" />

                    </div>
                    <div className="inputBx">
                        <input type="text" name="" placeholder="Email Address" />

                    </div>
                    <div className="inputBx">
                        <input type="text" name="" placeholder="Mobile No." />

                    </div>
                    <div className="inputBx">
                        <textarea placeholder="write your message here" />

                    </div>
                    <div className="inputBx">
                        <input type="submit" name="" value="send" />

                    </div>
                    <div className="inputBx2"></div>

                </div>
            </div>
        </section>

    );
}