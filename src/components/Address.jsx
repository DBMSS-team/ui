import React, { useState } from "react";

import "../styles/Address.css";

export default function Address({handleEdit, handleDelete}) {

    const tmpAddr = `110, Block B, SLS Silicon Valley, -, GOLDENWOODS APPT , 1ST MAIN 1ST CROSS TALAKAVERY LAOUT, BUS STOP, behind BASAVANAGAR, Talacauvery Housing Society Layout, Rasanna Colony, Vibhutipura, Bengaluru, Karnataka 560037, India`;

    const [type, setType] = useState("HOME");
    const [address, setAddress] = useState(tmpAddr);

    return (
		<div className="Address">
			<div className="Address__content">
				<div className="Address__type_icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
					</svg>
				</div>
				<div className="Address__info">
					<div className="Address__details">
						<div className="Address__type">
							<p>{type}</p>
						</div>
						<div className="Address__text">{address}</div>
					</div>
					<div className="Address__controls">
						<div className="Address__edit">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z" />
							</svg>
						</div>
						<div className="Address__delete">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M3 6v18h18v-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.731 2 1.631 2h5.712z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
