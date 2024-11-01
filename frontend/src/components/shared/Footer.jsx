// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Footer
// src/components/Footer.js

// src/components/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <ul className="flex justify-center space-x-4 mt-2">
                    <li>
                        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            X
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
