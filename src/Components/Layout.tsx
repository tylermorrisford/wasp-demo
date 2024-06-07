import './Layout.css';

export const Layout = ({ leftContent, rightContent }) => {
    return (
        <div className="responsive-layout">
            <div className="column left">
                {leftContent}
            </div>
            <div className="column right">
                {rightContent}
            </div>
        </div>
    );
};
