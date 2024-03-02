import { LINKEDIN_URL } from "../utils/constant"

export default Footer = () => {
    return (
        <div className="footer">
            Created By{'  '}
            <a href={LINKEDIN_URL} target="_blank">
                Akriti Mittal
            </a>
            <i class="fa-solid fa-copyright"></i>
            {new Date().getFullYear()}
            <strong>
                Food<span>Fire</span>
            </strong>
        </div>
    );
};