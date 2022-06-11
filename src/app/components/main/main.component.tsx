import React, {forwardRef, memo} from "react";
import {Navigate, Outlet, useRoutes} from "react-router-dom";

interface Props {
}

export interface Ref {
}

export const MainComponent = memo(
	forwardRef<Ref, Props>(() => {
		const banksOutlet = useRoutes([
			{
				path: "",
				element: <Outlet/>,
				children: [
					{
						path: "",
						element: <Navigate
							to={"cibc"}
							replace/>,
					},
				],
			},
		]);

		return <div>Hello World</div>;
	})
);
