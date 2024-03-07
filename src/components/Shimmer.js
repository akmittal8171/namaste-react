import { shimmer_card_unit } from "../utils/constant";

const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {new Array(shimmer_card_unit).fill(0).map((element, index) => {
                return <div key={index} className="shimmer-card">
                    <div className="shimmer-img stroke animate"></div>
                    <div className="shimmer-title stroke animate"></div>
                    <div className="shimmer-tags stroke animate "></div>
                    <div className="shimmer-details stroke animate "></div>
                </div>;
            })}
        </div>
    );
};
export default Shimmer;