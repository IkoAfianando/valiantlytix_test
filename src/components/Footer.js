import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black text-[#949494] py-20">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col md:mr-20">
                            <h3 className="text-white font-bold mb-5">About Us</h3>
                            <p className="text-[#949494] mb-5">
                                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                            </p>
                            <p className="text-[#949494] mb-5">
                                {' '}
                                <span className="font-bold">Read more</span> About Us

                            </p>
                        </div>
                        <div className="flex flex-col md:mr-20">
                            <h3 className="text-white font-bold mb-5">Sitemap</h3>
                            <p className="text-[#949494] mb-5">
                                Terms of Use
                            </p>
                            <p className="text-[#949494] mb-5">
                                Privacy Policy
                            </p>
                            <p className="text-[#949494] mb-5">
                                Cookie Policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Footer;
