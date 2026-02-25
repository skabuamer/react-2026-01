import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Informations = ({ infos, videoCover, videoLink }) => {
	return (
		<div>
			<div className="bg-etBlue p-[40px] sm:p-[30px] space-y-[24px] text-[16px]">
				{infos.map((info, index) => (
					// {/* <!-- single contact info --> */}
					<div key={index} className="flex flex-wrap items-center gap-[20px] pb-[20px] text-white border-b border-white/30 last:border-0 last:pb-0">
						<span className="icon shrink-0 border border-dashed border-white rounded-full h-[62px] w-[62px] flex items-center justify-center">
							<img src="assets/img/venue-icon.svg" alt="icon" />
						</span>

						<div className="txt">
							<span className="font-light">{info.title}</span>
							<h4 className="font-medium text-[24px]">{info.descr}</h4>
						</div>
					</div>
				))}
			</div>

			{/* <!-- video cover --> */}
			<div className="relative">
				<img src={videoCover} alt="video cover" className="w-full object-cover aspect-[573/254]" />
				<a href={videoLink} data-fslightbox className="video-btn-shadow w-[58px] aspect-square rounded-full bg-white text-[18px] text-etBlue flex items-center justify-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
					<FontAwesomeIcon icon={faPlay} />
				</a>
			</div>
		</div>
	);
};

export default Informations;
