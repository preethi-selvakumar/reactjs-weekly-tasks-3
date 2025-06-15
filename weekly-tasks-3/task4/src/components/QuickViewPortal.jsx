import ReactDOM from 'react-dom';

const QuickViewPortal = ({ children }) => {
    const portalRoot = document.getElementById('portal-root');
    return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
};

export default QuickViewPortal;
