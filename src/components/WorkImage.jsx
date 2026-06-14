import { MdArrowOutward } from "react-icons/md";
const WorkImage = (props) => {
    const cleanVideoSrc = props.video ? props.video.replace(/^\/public/, "") : "";
    
    return (<div className="work-image">
      <a className="work-image-in" href={props.link} target="_blank" data-cursor={"disable"}>
        {props.link && (<div className="work-link">
            <MdArrowOutward />
          </div>)}
        {cleanVideoSrc ? (
            <video src={cleanVideoSrc} autoPlay muted playsInline loop></video>
        ) : (
            <img src={props.image} alt={props.alt}/>
        )}
      </a>
    </div>);
};
export default WorkImage;
