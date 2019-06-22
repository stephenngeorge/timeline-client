import React from 'react'

// import child components
import Header from './Header'

// this component wraps any page that needs to include the header
const Layout: React.FC = (props) => {
    return (
        <div>
            <Header />
            {
                props.children
            }
        </div>
    )
}

export default Layout