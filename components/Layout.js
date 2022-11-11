import Navbar from './Navbar';

const LayoutMain = ({ children }) => {
    return (
        <>
            <Navbar />

            {children}
        </>
    );
};

export default LayoutMain;
